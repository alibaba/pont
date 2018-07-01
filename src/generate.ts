/**
 * @description get code using standard dataSource format
 * @NOTE getd files structure is as below:
 * - library (contains class library code)
 * - interfaces (contains interfaces code)
 * - api.d.ts (contains interfaces and library definitions)
 * - api.lock (contains local code state)
 */

import * as _ from "lodash";
import { StandardDataSource, Interface, Mod } from "./standard";
import { Config } from "./utils";
import * as fs from "fs-extra";
import * as path from "path";
import { format } from "./utils";
import { info } from "./debugLog";

export class CodeGenerator {
  dataSource: StandardDataSource;

  constructor() {}

  setDataSource(dataSource: StandardDataSource) {
    this.dataSource = dataSource;
  }

  getBaseClassInDeclaration() {
    return ` namespace ${this.dataSource.name || "defs"} {
      ${this.dataSource.baseClasses
        .map(
          base => `
        export class ${base.name} {
          ${base.properties.map(prop => prop.toPropertyCode()).join("\n")}
        }
      `
        )
        .join("\n")}
    }
    `;
  }

  getInterfaceContentInDeclaration(inter: Interface) {
    return "";
  }

  getInterfaceInDeclaration(inter: Interface) {
    return `
      /**
        * ${inter.description}
        * ${inter.path}
        */
      export namespace ${inter.name} {
        ${this.getInterfaceContentInDeclaration(inter)}
      }
    `;
  }

  getModsDeclaration() {
    const mods = this.dataSource.mods;

    return ` namespace ${this.dataSource.name || "API"} {
        ${mods
          .map(
            mod => `
          /**
           * ${mod.description}
           */
          export namespace ${mod.name} {
            ${mod.interfaces
              .map(this.getInterfaceInDeclaration.bind(this))
              .join("\n")}
          }
        `
          )
          .join("\n\n")}
      }
    `;
  }

  getCommonDeclaration() {
    return "";
  }

  getDeclaration() {
    return `
      ${this.getCommonDeclaration()}

      ${this.getBaseClassInDeclaration()}

      ${this.getModsDeclaration()}
    `;
  }

  getIndexTs() {
    let conclusion = `
      import * as defs from './baseClass';
      import './mods/';

      declare var window;
      window.defs = defs;
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export * as defs from './baseClass';
        export { ${this.dataSource.name} } from './mods/';
      `;
    }

    return conclusion;
  }

  getBaseClassInTs() {
    return `
      ${this.dataSource.baseClasses
        .map(
          base => `
        export class ${base.name} {
          ${base.properties
            .map(prop => prop.toPropertyCodeWithInitValue())
            .filter(id => id)
            .join("\n")}
        }
      `
        )
        .join("\n")}
    `;
  }

  getInterfaceTs(inter: Interface) {
    return ``;
  }

  getModTs(mod: Mod) {
    return `
      /**
       * @description ${mod.description}
       */
      ${mod.interfaces
        .map(inter => {
          return `import * as ${inter.name} from './${inter.name}';`;
        })
        .join("\n")}

      export {
        ${mod.interfaces.map(inter => inter.name).join(", \n")}
      }
    `;
  }

  getModsTs() {
    let conclusion = `
      declare var window;

      window.API = {
        ${this.dataSource.mods.map(mod => mod.name).join(", \n")}
      };
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export const ${this.dataSource.name} = {
          ${this.dataSource.mods.map(mod => mod.name).join(", \n")}
        };
      `;
    }

    return `
      ${this.dataSource.mods
        .map(mod => {
          return `import * as ${mod.name} from './${mod.name}';`;
        })
        .join("\n")}

      ${conclusion}
    `;
  }
}

export class FilesManager {
  generators: CodeGenerator[];
  baseDir: string;
  report = info;

  constructor(generators: CodeGenerator[], baseDir: string) {
    this.generators = generators;
    this.baseDir = baseDir;
  }

  getSingleFileStructures(generator: CodeGenerator) {
    let mods = {};
    const dataSource = generator.dataSource;

    dataSource.mods.forEach(mod => {
      const currMod = {};

      mod.interfaces.forEach(inter => {
        currMod[inter.name + ".ts"] = generator.getInterfaceTs.bind(
          generator,
          inter
        );
        currMod["index.ts"] = generator.getModTs.bind(generator, mod);
      });
      mods[mod.name] = currMod;

      mods["index.ts"] = generator.getModsTs.bind(generator);
    });

    return {
      "baseClass.ts": generator.getBaseClassInTs.bind(generator),
      mods: mods,
      "index.ts": generator.getIndexTs.bind(generator),
      "api.d.ts": generator.getDeclaration.bind(generator)
    };
  }

  getDataSourcesTs() {
    const dsNames = this.generators.map(ge => ge.dataSource.name);

    return `
      ${dsNames
        .map(name => {
          return `import * as ${name} from './${name}/baseClass';`;
        })
        .join("\n")}

      (window as any).defs = {
        ${dsNames.join(",\n")}
      };
    `;
  }

  getDataSourcesDeclarationTs() {
    const dsNames = this.generators.map(ge => ge.dataSource.name);

    return `
    ${dsNames
      .map(name => {
        return `/// <reference path="./${name}/api.d.ts" />`;
      })
      .join("\n")}
    `;
  }

  getSourcesFileStructures() {
    const dataSources = {};

    this.generators.forEach(generator => {
      const ds = generator.dataSource;
      let { getBaseClassInDeclaration, getModsDeclaration } = generator;
      getBaseClassInDeclaration = getBaseClassInDeclaration.bind(generator);
      getModsDeclaration = getModsDeclaration.bind(generator);

      generator.getBaseClassInDeclaration = () => `
        declare namespace defs {
          export ${getBaseClassInDeclaration()}
        }
      `;
      generator.getModsDeclaration = () => `
        declare namespace API {
          export ${getModsDeclaration()}
        }
      `;
      const dsFiles = this.getSingleFileStructures(generator);

      dataSources[ds.name] = dsFiles;
    });

    dataSources["index.ts"] = this.getDataSourcesTs.bind(this);
    dataSources["api.d.ts"] = this.getDataSourcesDeclarationTs.bind(this);

    return dataSources;
  }

  private setFormat(files: {}) {
    _.forEach(files, (value: Function | {}, name: string) => {
      if (typeof value === "function") {
        files[name] = (content: string) => format(value(content));
      }

      return this.setFormat(value);
    });
  }

  private clearPath(path: string) {
    if (fs.existsSync(path)) {
      fs.removeSync(path);
    }

    fs.mkdir(path);
  }

  async regenerate(report?: typeof info) {
    if (report) {
      this.report = report;
    }

    const dataSources = this.generators.map(ge => ge.dataSource);
    let files = {};

    if (this.generators.length > 1) {
      files = this.getSourcesFileStructures() as {};
    } else {
      const generator = this.generators[0];
      let { getBaseClassInDeclaration, getModsDeclaration } = generator;

      getBaseClassInDeclaration = getBaseClassInDeclaration.bind(generator);
      getModsDeclaration = getModsDeclaration.bind(generator);

      generator.getBaseClassInDeclaration = () => `
        declare ${getBaseClassInDeclaration()}
      `;
      generator.getModsDeclaration = () => `
        declare ${getModsDeclaration()}
      `;

      files = this.getSingleFileStructures(generator);
    }

    this.setFormat(files);

    files["api.lock"] = this.getLockContent.bind(this);

    this.clearPath(this.baseDir);
    await this.generateFiles(files);
  }

  getLockContent() {
    const dataSources = this.generators.map(ge => ge.dataSource);

    return JSON.stringify(dataSources, null, 2);
  }

  async saveLock() {
    const files = {};
    const lockFile = path.join(this.baseDir, "api.lock");

    await fs.writeFile(lockFile, this.getLockContent());
  }

  async generateFiles(files: {}, dir = this.baseDir) {
    const promises = _.map(files, async (value: Function | {}, name) => {
      if (typeof value === "function") {
        await fs.writeFile(`${dir}/${name}`, value());
        return;
      }

      await fs.mkdir(`${dir}/${name}`);
      // this.report(`文件夹${name}创建成功!`);
      await this.generateFiles(value, `${dir}/${name}`);
    });

    await Promise.all(promises);
  }
}
