/**
 * @description get code using standard dataSource format
 * @NOTE getd files structure is as below:
 * - library (contains class library code)
 * - interfaces (contains interfaces code)
 * - api.d.ts (contains interfaces and library definitions)
 * - api.lock (contains local code state)
 */

import * as _ from 'lodash';
import { StandardDataSource, Interface, Mod, BaseClass } from '../standard';
import { Config } from '../utils';
import * as fs from 'fs-extra';
import * as path from 'path';
import { format } from '../utils';
import { info } from '../debugLog';
import { existsSync } from 'fs-extra';

export class FileStructures {
  constructor(private generators: CodeGenerator[], private usingMultipleOrigins: boolean) {}

  getMultipleOriginsFileStructures() {
    const files = {};
    this.generators.forEach(generator => {
      const dsName = generator.dataSource.name;
      const dsFiles = this.getOriginFileStructures(generator, true);

      files[dsName] = dsFiles;
    });

    return {
      ...files,
      'index.ts': this.getDataSourcesTs.bind(this),
      'api.d.ts': this.getDataSourcesDeclarationTs.bind(this),
      'api-lock.json': this.getLockContent.bind(this)
    };
  }

  getBaseClassesInDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    if (usingMultipleOrigins) {
      return `
      declare namespace defs {
        export ${originCode}
      };
      `;
    }

    return `
      declare ${originCode}
    `;
  }

  getModsDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    if (usingMultipleOrigins) {
      return `
      declare namespace API {
        export ${originCode}
      };
      `;
    }

    return `
      declare ${originCode}
    `;
  }

  getOriginFileStructures(generator: CodeGenerator, usingMultipleOrigins = false) {
    let mods = {};
    const dataSource = generator.dataSource;

    dataSource.mods.forEach(mod => {
      const currMod = {};

      mod.interfaces.forEach(inter => {
        currMod[inter.name + '.ts'] = generator.getInterfaceContent.bind(generator, inter);
        currMod['index.ts'] = generator.getModIndex.bind(generator, mod);
      });
      mods[mod.name] = currMod;

      mods['index.ts'] = generator.getModsIndex.bind(generator);
    });

    generator.getBaseClassesInDeclaration = this.getBaseClassesInDeclaration.bind(
      this,
      generator.getBaseClassesInDeclaration(),
      usingMultipleOrigins
    );
    generator.getModsDeclaration = this.getModsDeclaration.bind(
      this,
      generator.getModsDeclaration(),
      usingMultipleOrigins
    );

    const result = {
      'baseClass.ts': generator.getBaseClassesIndex.bind(generator),
      mods: mods,
      'index.ts': generator.getIndex.bind(generator),
      'api.d.ts': generator.getDeclaration.bind(generator)
    };

    if (!usingMultipleOrigins) {
      result['api-lock.json'] = this.getLockContent.bind(this);
    }

    return result;
  }

  getFileStructures() {
    if (this.usingMultipleOrigins || this.generators.length > 1) {
      return this.getMultipleOriginsFileStructures();
    } else {
      return this.getOriginFileStructures(this.generators[0]);
    }
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

  getLockContent() {
    return JSON.stringify(this.generators.map(ge => ge.dataSource), null, 2);
  }
}

export class CodeGenerator {
  dataSource: StandardDataSource;

  constructor() {}

  setDataSource(dataSource: StandardDataSource) {
    this.dataSource = dataSource;
  }

  /** 获取某个基类的类型定义代码 */
  getBaseClassInDeclaration(base: BaseClass) {
    if (base.templateArgs && base.templateArgs.length) {
      return `class ${base.name}<${base.templateArgs.map((ignored, index) => `T${index} = any`).join(', ')}> {
        ${base.properties.map(prop => prop.toPropertyCode(true)).join('\n')}
      }
      `;
    }
    return `class ${base.name} {
      ${base.properties.map(prop => prop.toPropertyCode(true)).join('\n')}
    }
    `;
  }

  /** 获取所有基类的类型定义代码，一个 namespace */
  getBaseClassesInDeclaration() {
    const content = `namespace ${this.dataSource.name || 'defs'} {
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

  getBaseClassesInDeclarationWithMultipleOrigins() {
    return `
      declare namespace defs {
        export ${this.getBaseClassesInDeclaration()}
      }
    `;
  }

  getBaseClassesInDeclarationWithSingleOrigin() {
    return `
      declare ${this.getBaseClassesInDeclaration()}
    `;
  }

  /** 获取接口内容的类型定义代码 */
  getInterfaceContentInDeclaration(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode();
    const requestParams = bodyParmas ? `params: Params, bodyParams: ${bodyParmas}` : `params: Params`;

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

    const content = `namespace ${this.dataSource.name || 'API'} {
        ${mods
          .map(
            mod => `
          /**
           * ${mod.description}
           */
          export namespace ${mod.name} {
            ${mod.interfaces.map(this.getInterfaceInDeclaration.bind(this)).join('\n')}
          }
        `
          )
          .join('\n\n')}
      }
    `;

    return content;
  }

  getModsDeclarationWithMultipleOrigins() {}

  getModsDeclarationWithSingleOrigin() {}

  /** 获取公共的类型定义代码 */
  getCommonDeclaration() {
    return '';
  }

  /** 获取总的类型定义代码 */
  getDeclaration() {
    return `
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

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
          ${this.dataSource.baseClasses.map(bs => bs.name).join(',\n')}
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
    export const init = ${inter.response.getInitialValue()};

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
  // todo: report 可以更改为单例，防止每个地方都注入。
  report = info;
  prettierConfig: {};

  constructor(private fileStructures: FileStructures, private baseDir: string) {}

  private setFormat(files: {}) {
    _.forEach(files, (value: Function | {}, name: string) => {
      if (name.endsWith('.json') || name.endsWith('.lock')) {
        return;
      }

      if (typeof value === 'function') {
        files[name] = (content: string) => format(value(content), this.prettierConfig);
      }

      this.setFormat(value);
    });
  }

  /** 初始化清空路径 */
  private initPath(path: string) {
    if (fs.existsSync(path)) {
      fs.removeSync(path);
    }

    fs.mkdirpSync(path);
  }

  async regenerate(report?: typeof info) {
    if (report) {
      this.report = report;
    }

    const files = this.fileStructures.getFileStructures();
    this.setFormat(files);

    this.initPath(this.baseDir);
    this.created = true;
    await this.generateFiles(files);
  }

  /** 区分lock文件是创建的还是人为更改的 */
  created = false;

  async saveLock() {
    const lockFilePath = path.join(this.baseDir, 'api-lock.json');
    const oldLockFilePath = path.join(this.baseDir, 'api.lock');
    const isExists = fs.existsSync(lockFilePath);
    const readFilePath = isExists ? lockFilePath : oldLockFilePath;

    const lockContent = await fs.readFile(readFilePath, 'utf8');

    const newLockContent = this.fileStructures.getLockContent();

    if (lockContent !== newLockContent) {
      this.created = true;
      await fs.writeFile(lockFilePath, newLockContent);
    }
  }

  /** 根据 Codegenerator 配置生成目录和文件 */
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
