/**
 * @description get code using standard dataSource format
 * @NOTE getd files structure is as below:
 * - library (contains class library code)
 * - interfaces (contains interfaces code)
 * - api.d.ts (contains interfaces and library definitions)
 * - api.lock (contains local code state)
 */

import * as _ from 'lodash';
import { StandardDataSource, Interface, Mod, BaseClass } from './standard';
import { Config } from './utils';
import * as fs from 'fs-extra';
import * as path from 'path';
import { format } from './utils';
import { info } from './debugLog';

export class CodeGenerator {
  dataSource: StandardDataSource;

  constructor() {}

  setDataSource(dataSource: StandardDataSource) {
    this.dataSource = dataSource;
  }

  /** 获取某个基类的类型定义代码 */
  getBaseClassInDeclaration(base: BaseClass) {
    return `class ${base.name} {
      ${base.properties.map(prop => prop.toPropertyCode(true)).join('\n')}
    }
    `;
  }

  /** 一般不需要覆盖，获取所有基类的类型定义代码，一个 namespace */
  getBaseClassesInDeclaration() {
    const content = ` namespace ${this.dataSource.name || 'defs'} {
      ${this.dataSource.baseClasses
        .map(
          base => `
        export ${this.getBaseClassInDeclaration(base)}
      `
        )
        .join('\n')}
    }
    `;

    return content;
  }

  /** 获取接口内容的类型定义代码 */
  getInterfaceContentInDeclaration(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams = bodyParmas
      ? `params: Params, bodyParams: ${bodyParmas}`
      : `params: Params`;

    return `
      export ${inter.getParamsCode()}

      export type Response = ${inter.responseType};
      export const init: Response;
      export function request(${requestParams}): Promise<${inter.responseType}>;
    `;
  }

  private getInterfaceInDeclaration(inter: Interface) {
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

  /** 获取模块的类型定义代码，一个 namespace ，一般不需要覆盖 */
  getModsDeclaration() {
    const mods = this.dataSource.mods;

    const content = ` namespace ${this.dataSource.name || 'API'} {
        ${mods
          .map(
            mod => `
          /**
           * ${mod.description}
           */
          export namespace ${mod.name} {
            ${mod.interfaces
              .map(this.getInterfaceInDeclaration.bind(this))
              .join('\n')}
          }
        `
          )
          .join('\n\n')}
      }
    `;

    return content;
  }

  /** 获取公共的类型定义代码 */
  getCommonDeclaration() {
    return '';
  }

  /** 获取总的类型定义代码 */
  getDeclaration() {
    return `
      ${this.getCommonDeclaration()}

      ${this.getBaseClassesInDeclaration()}

      ${this.getModsDeclaration()}
    `;
  }

  /** 获取接口类和基类的总的 index 入口文件代码 */
  getIndex() {
    let conclusion = `
      import * as defs from './baseClass';
      import './mods/';

      declare var window;
      window.defs = defs;
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        import { ${this.dataSource.name} as defs } from './baseClass';
        export { ${this.dataSource.name} } from './mods/';
        export { defs };
      `;
    }

    return conclusion;
  }

  /** 获取所有基类文件代码 */
  getBaseClassesIndex() {
    const clsCodes = this.dataSource.baseClasses.map(
      base => `
        class ${base.name} {
          ${base.properties
            .map(prop => {
              return prop.toPropertyCodeWithInitValue(base.name);
            })
            .filter(id => id)
            .join('\n')}
        }
      `
    );

    if (this.dataSource.name) {
      return `
        ${clsCodes.join('\n')}
        export const ${this.dataSource.name} = {
          ${this.dataSource.baseClasses.map(bs => bs.justName).join(',\n')}
        }
      `;
    }

    return clsCodes.map(cls => `export ${cls}`).join('\n');
  }

  /** 获取接口实现内容的代码 */
  getInterfaceContent(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams = bodyParmas ? `params, bodyParams` : `params`;

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import pontFetch from 'src/utils/pontFetch';

    export ${inter.getParamsCode()}
    export const init = ${inter.response.initialValue};

    export async function request(${requestParams}) {
      return pontFetch({
        url: '${inter.path}',
        ${bodyParmas ? 'params: bodyParams' : 'params'},
        method: '${inter.method}',
      });
    }
   `;
  }

  /** 获取单个模块的 index 入口文件 */
  getModIndex(mod: Mod) {
    return `
      /**
       * @description ${mod.description}
       */
      ${mod.interfaces
        .map(inter => {
          return `import * as ${inter.name} from './${inter.name}';`;
        })
        .join('\n')}

      export {
        ${mod.interfaces.map(inter => inter.name).join(', \n')}
      }
    `;
  }

  /** 获取所有模块的 index 入口文件 */
  getModsIndex() {
    let conclusion = `
      declare var window;

      window.API = {
        ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
      };
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export const ${this.dataSource.name} = {
          ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
        };
      `;
    }

    return `
      ${this.dataSource.mods
        .map(mod => {
          return `import * as ${mod.name} from './${mod.name}';`;
        })
        .join('\n')}

      ${conclusion}
    `;
  }
}

export class FilesManager {
  generators: CodeGenerator[];
  baseDir: string;
  report = info;
  prettierConfig: {};
  usingMultipleOrigins = false;

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
        currMod[inter.name + '.ts'] = generator.getInterfaceContent.bind(
          generator,
          inter
        );
        currMod['index.ts'] = generator.getModIndex.bind(generator, mod);
      });
      mods[mod.name] = currMod;

      mods['index.ts'] = generator.getModsIndex.bind(generator);
    });

    return {
      'baseClass.ts': generator.getBaseClassesIndex.bind(generator),
      mods: mods,
      'index.ts': generator.getIndex.bind(generator),
      'api.d.ts': generator.getDeclaration.bind(generator)
    };
  }

  getDataSourcesTs() {
    const dsNames = this.generators.map(ge => ge.dataSource.name);

    return `
      ${dsNames
        .map(name => {
          return `import { defs as ${name}Defs, ${name} } from './${name}';
          `;
        })
        .join('\n')}

      (window as any).defs = {
        ${dsNames.map(name => `${name}: ${name}Defs,`).join('\n')}
      };
      (window as any).API = {
        ${dsNames.join(',\n')}
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
      .join('\n')}
    `;
  }

  getSourcesFileStructures() {
    const dataSources = {};

    this.generators.forEach(generator => {
      const ds = generator.dataSource;
      let { getBaseClassesInDeclaration, getModsDeclaration } = generator;
      getBaseClassesInDeclaration = getBaseClassesInDeclaration.bind(generator);
      getModsDeclaration = getModsDeclaration.bind(generator);

      generator.getBaseClassesInDeclaration = () => `
        declare namespace defs {
          export ${getBaseClassesInDeclaration()}
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

    dataSources['index.ts'] = this.getDataSourcesTs.bind(this);
    dataSources['api.d.ts'] = this.getDataSourcesDeclarationTs.bind(this);

    return dataSources;
  }

  private setFormat(files: {}) {
    _.forEach(files, (value: Function | {}, name: string) => {
      if (typeof value === 'function') {
        files[name] = (content: string) =>
          format(value(content), this.prettierConfig);
      }

      return this.setFormat(value);
    });
  }

  private clearPath(path: string) {
    if (fs.existsSync(path)) {
      fs.removeSync(path);
    }

    fs.mkdirpSync(path);
  }

  async regenerate(report?: typeof info) {
    if (report) {
      this.report = report;
    }

    const dataSources = this.generators.map(ge => ge.dataSource);
    let files = {};

    if (this.generators.length > 1 || this.usingMultipleOrigins) {
      files = this.getSourcesFileStructures() as {};
    } else {
      const generator = this.generators[0];
      let { getBaseClassesInDeclaration, getModsDeclaration } = generator;

      getBaseClassesInDeclaration = getBaseClassesInDeclaration.bind(generator);
      getModsDeclaration = getModsDeclaration.bind(generator);

      generator.getBaseClassesInDeclaration = () => `
        declare ${getBaseClassesInDeclaration()}
      `;
      generator.getModsDeclaration = () => `
        declare ${getModsDeclaration()}
      `;

      files = this.getSingleFileStructures(generator);
    }

    this.setFormat(files);

    files['api.lock'] = this.getLockContent.bind(this);

    this.clearPath(this.baseDir);
    this.created = true;
    await this.generateFiles(files);
  }

  getLockContent() {
    const dataSources = this.generators.map(ge => ge.dataSource);

    return JSON.stringify(dataSources, null, 2);
  }

  /** 区分lock文件是创建的还是认为更改的 */
  created = false;

  async saveLock() {
    const lockFile = path.join(this.baseDir, 'api.lock');
    const newLockContent = this.getLockContent();

    const lockContent = await fs.readFile(lockFile, 'utf8');

    if (lockContent !== newLockContent) {
      this.created = true;
      await fs.writeFile(lockFile, newLockContent);
    }
  }

  async generateFiles(files: {}, dir = this.baseDir) {
    const promises = _.map(files, async (value: Function | {}, name) => {
      if (typeof value === 'function') {
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
