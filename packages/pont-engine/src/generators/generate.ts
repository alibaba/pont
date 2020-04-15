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
import * as fs from 'fs-extra';
import * as path from 'path';
import {
  format,
  reviseModName,
  Surrounding,
  getFileName,
  getTemplatesDirFile,
  judgeTemplatesDirFileExists
} from '../utils';
import { info } from '../debugLog';
import { templateRegistion } from '../templates';

export class FileStructures {
  constructor(
    private generators: CodeGenerator[],
    private usingMultipleOrigins: boolean,
    private surrounding = Surrounding.typeScript,
    private baseDir = 'src/service',
    private templateType = ''
  ) { }

  getMultipleOriginsFileStructures() {

    const files = {};

    this.generators.filter(generator => generator.outDir === this.baseDir).forEach(generator => {
      const dsName = generator.dataSource.name;
      const dsFiles = this.getOriginFileStructures(generator, true);

      files[dsName] = dsFiles;
    });

    return {
      ...files,
      [getFileName('index', this.surrounding)]: this.getDataSourcesTs.bind(this),
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

    const indexFileName = getFileName('index', this.surrounding);

    dataSource.mods.forEach(mod => {
      const currMod = {};

      mod.interfaces.forEach(inter => {
        currMod[getFileName(inter.name, this.surrounding)] = generator.getInterfaceContent.bind(generator, inter);
        currMod[indexFileName] = generator.getModIndex.bind(generator, mod);
      });
      const modName = reviseModName(mod.name);
      mods[modName] = currMod;

      mods[indexFileName] = generator.getModsIndex.bind(generator);
    });

    if (!generator.hasContextBund) {
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
      generator.hasContextBund = true;
    }

    const result = {
      [getFileName('baseClass', this.surrounding)]: generator.getBaseClassesIndex.bind(generator),
      mods: mods,
      [indexFileName]: generator.getIndex.bind(generator),
      'api.d.ts': generator.getDeclaration.bind(generator)
    };

    if (!usingMultipleOrigins) {
      result['api-lock.json'] = this.getLockContent.bind(this);
    }

    return result;
  }

  getFileStructures() {
    const result =
      this.usingMultipleOrigins || this.generators.length > 1
        ? this.getMultipleOriginsFileStructures()
        : this.getOriginFileStructures(this.generators[0]);

    // js环境时，默认为新用户，生成pontCore文件
    if (this.surrounding === Surrounding.javaScript) {
      if (!fs.existsSync(this.baseDir + '/pontCore.js')) {
        result['pontCore.js'] = getTemplatesDirFile('pontCore.js', 'pontCore/');
        result['pontCore.d.ts'] = getTemplatesDirFile('pontCore.d.ts', 'pontCore/');
      }

      if (this.templateType && this.checkHasTemplateFetch()) {
        result[`${this.templateType}.js`] = getTemplatesDirFile(`${this.templateType}.js`, 'pontCore/');
        result[`${this.templateType}.d.ts`] = getTemplatesDirFile(`${this.templateType}.d.ts`, 'pontCore/');
      }
    }

    return result;
  }

  private checkHasTemplateFetch() {
    const templateTypesWithOutFetch = templateRegistion.map(item => item.templateType).filter(item => item !== 'fetch');

    if (
      templateTypesWithOutFetch.includes(this.templateType) &&
      judgeTemplatesDirFileExists(`${this.templateType}.js`, 'pontCore/')
    ) {
      return true;
    }

    return false;
  }

  getMultipleOriginsDataSourceName() {

    const dsNames = this.generators.map(ge => ge.dataSource.name);

    if (this.judgeHasMultipleFilesName()) {
      const generate = this.generators.find(ge => ge.outDir === this.baseDir);

      if (generate) {
        return [generate.dataSource.name]
      }

    }

    return dsNames;
  }

  judgeHasMultipleFilesName(): boolean {
    return this.generators.some(generate => {
      return generate.outDir !== this.baseDir;
    })
  }

  getDataSourcesTs() {
    const dsNames = this.getMultipleOriginsDataSourceName();

    const generatedCode = this.surrounding === Surrounding.typeScript ? '(window as any)' : 'window';

    return `
      ${dsNames
        .map(name => {
          return `import { defs as ${name}Defs, ${name} } from './${name}';
          `;
        })
        .join('\n')}

      ${generatedCode}.defs = {
        ${dsNames.map(name => `${name}: ${name}Defs,`).join('\n')}
      };
      ${generatedCode}.API = {
        ${dsNames.join(',\n')}
      };
    `;
  }

  getDataSourcesDeclarationTs() {
    const dsNames = this.getMultipleOriginsDataSourceName();

    return `
    ${dsNames
        .map(name => {
          return `/// <reference path="./${name}/api.d.ts" />`;
        })
        .join('\n')}
    `;
  }

  getLockContent() {
    if (this.generators) {
      // generators 长度大于1且outDir不相同时，需要拆分生成代码
      const hasMultipleOutDir = this.generators.some(generate => {
        return generate.outDir !== this.baseDir;
      })

      let dataSources;

      // 只生成当前路径的api.lock
      if (this.generators.length > 1 && hasMultipleOutDir) {
        dataSources = this.generators.filter(item => item.outDir === this.baseDir).map(ge => ge.dataSource);
      } else {
        dataSources = this.generators.map(ge => ge.dataSource);
      }

      return JSON.stringify(
        dataSources,
        null,
        2
      );
    }
  }
}

export class CodeGenerator {
  usingMultipleOrigins = false;

  dataSource: StandardDataSource;

  hasContextBund = false;

  constructor(public surrounding = Surrounding.typeScript, public outDir = '') { }

  setDataSource(dataSource: StandardDataSource) {
    this.dataSource = dataSource;
    // 将basic-resource这种命名转化成合法命名
    this.dataSource.name = _.camelCase(this.dataSource.name);
  }

  /** 获取某个基类的类型定义代码 */
  getBaseClassInDeclaration(base: BaseClass) {
    if (base.templateArgs && base.templateArgs.length) {
      return `class ${base.name}<${base.templateArgs.map((_, index) => `T${index} = any`).join(', ')}> {
        ${base.properties.map(prop => prop.toPropertyCode(Surrounding.typeScript, true)).join('\n')}
      }
      `;
    }
    return `class ${base.name} {
      ${base.properties.map(prop => prop.toPropertyCode(Surrounding.typeScript, true)).join('\n')}
    }
    `;
  }

  /** 获取所有基类的类型定义代码，一个 namespace
   * surrounding, 优先级高于this.surrounding,用于生成api.d.ts时强制保留类型
   */
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
    const bodyParams = inter.getBodyParamsCode();
    const requestParams = bodyParams ? `params: Params, bodyParams: ${bodyParams}` : `params: Params`;

    return `
      export ${inter.getParamsCode('Params', this.surrounding)}

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
          export namespace ${reviseModName(mod.name)} {
            ${mod.interfaces.map(this.getInterfaceInDeclaration.bind(this)).join('\n')}
          }
        `
        )
        .join('\n\n')}
      }
    `;

    return content;
  }

  getModsDeclarationWithMultipleOrigins() { }

  getModsDeclarationWithSingleOrigin() { }

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

      ${this.surrounding === Surrounding.typeScript ? '(window as any)' : 'window'}.defs = defs;
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
    const method = inter.method.toUpperCase();

    const bodyParams = inter.getBodyParamsCode();

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import { pontCore } from '../../pontCore';

    export ${inter.getParamsCode('Params', this.surrounding)}

    export const init = ${inter.response.getInitialValue()};

    export function request(${bodyParams ? `params = {}, bodyParams = null` : 'params = {}'}) {

      return pontCore.fetch(pontCore.getUrl("${inter.path}", params, "${method}"), {
        method: "${method}",
        body: ${bodyParams ? 'bodyParams' : 'null'},
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
      ${this.surrounding === Surrounding.typeScript ? '(window as any)' : 'window'}.API = {
        ${this.dataSource.mods.map(mod => reviseModName(mod.name)).join(', \n')}
      };
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export const ${this.dataSource.name} = {
          ${this.dataSource.mods.map(mod => reviseModName(mod.name)).join(', \n')}
        };
      `;
    }

    return `
      ${this.dataSource.mods
        .map(mod => {
          const modName = reviseModName(mod.name);
          return `import * as ${modName} from './${modName}';`;
        })
        .join('\n')}

      ${conclusion}
    `;
  }

  /**
   * 获取中间态数据结构
   * @param dataSource
   */
  getDataSourceCallback(dataSource?: StandardDataSource): void {
    // 空实现, 用于对外暴露文件数据结构
    if (dataSource) {
      return;
    }
  }
}

export class FilesManager {
  // todo: report 可以更改为单例，防止每个地方都注入。
  report = info;
  prettierConfig: {};

  constructor(public fileStructures: FileStructures, private baseDir: string) { }

  /** 初始化清空路径 */
  private initPath(path: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirpSync(path);
    }
  }

  async regenerate(files: {}, oldFiles?: {}) {
    // if (report) {
    //   this.report = report;
    // }

    this.initPath(this.baseDir);
    this.created = true;

    if (oldFiles && Object.keys(oldFiles || {}).length) {
      const updateTask = this.diffFiles(files, oldFiles);
      if (updateTask.deletes && updateTask.deletes.length) {
        this.report(`删除${updateTask.deletes.length}个文件及文件夹`);
        await Promise.all(
          updateTask.deletes.map(filePath => {
            fs.unlink(filePath);
          })
        );
      }

      if (updateTask.updateCnt) {
        this.report(`更新${updateTask.updateCnt}个文件`);
        console.time(`更新${updateTask.updateCnt}个文件`);
        await this.updateFiles(updateTask.files);
        console.timeEnd(`更新${updateTask.updateCnt}个文件`);
      }
    } else {
      await this.generateFiles(files);
    }
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

  diffFiles(newFiles: {}, lastFiles: {}, dir = this.baseDir) {
    const task = {
      deletes: [] as string[],
      files: {},
      updateCnt: 0
    };

    // 待删除、待更新
    _.map(lastFiles, (lastValue: string | {}, name) => {
      const currPath = `${dir}/${name}`;
      const newValue = newFiles[name];

      // 待删除
      if (!newValue) {
        task.deletes.push(currPath);
        return;
      }

      // 文件转文件夹
      if (typeof newValue === 'object' && typeof lastValue === 'string') {
        task.deletes.push(currPath);
        const fileTask = this.diffFiles(newValue, {}, currPath);

        if (fileTask.updateCnt) {
          task.files = { ...task.files, [currPath]: undefined, ...fileTask.files };
          task.updateCnt += fileTask.updateCnt + 1;
        }
        return;
      }

      // 文件夹转文件
      if (typeof newValue === 'string' && typeof lastValue === 'object') {
        task.deletes.push(currPath);
        return;
      }

      // 待更新
      if (typeof lastValue === 'string') {
        // 文件更新
        if (newValue !== lastValue) {
          task.files[currPath] = newValue;
          task.updateCnt++;
        }
      } else {
        // 文件夹更新
        const fileTask = this.diffFiles(newValue, lastValue, currPath);
        task.deletes.push(...fileTask.deletes);
        if (fileTask.updateCnt) {
          task.updateCnt += fileTask.updateCnt;
          task.files = { ...task.files, ...fileTask.files };
        }
      }
    });

    // 待增加
    _.map(newFiles, (newValue: string | {}, name) => {
      const currPath = `${dir}/${name}`;
      const lastValue = lastFiles[name];

      if (!lastValue) {
        if (typeof newValue === 'string') {
          task.files[currPath] = newValue;
          task.updateCnt += 1;
        } else {
          const fileTask = this.diffFiles(newValue, {}, currPath);

          if (fileTask.updateCnt) {
            task.updateCnt += fileTask.updateCnt + 1;
            task.files = { ...task.files, [currPath]: undefined, ...fileTask.files };
          }
        }
      }
    });

    return task;
  }

  public formatFile(code: string, name = '') {
    if (name && name.endsWith('.json')) {
      return code;
    }

    return format(code, this.prettierConfig);
  }

  async updateFiles(files: {}) {
    await Promise.all(
      _.map(files, async (value: string, filePath) => {
        if (value === undefined) {
          return fs.mkdir(filePath);
        }
        if (filePath.endsWith('.json')) {
          return fs.writeFile(filePath, value);
        }
        return fs.writeFile(filePath, this.formatFile(value));
      })
    );
  }

  /** 根据 Codegenerator 配置生成目录和文件 */
  async generateFiles(files: {}, dir = this.baseDir) {
    const currFiles = await fs.readdir(dir);

    const promises = _.map(files, async (value: string | {}, name) => {
      const currPath = `${dir}/${name}`;

      if (typeof value === 'string') {
        if (currFiles.includes(name)) {
          const state = await fs.lstat(currPath);

          if (state.isDirectory()) {
            await fs.unlink(currPath);
            return fs.writeFile(currPath, this.formatFile(value, name));
          } else {
            const newValue = this.formatFile(value);
            const currValue = await fs.readFile(currPath, 'utf8');

            if (newValue !== currValue) {
              return fs.writeFile(currPath, this.formatFile(value, name));
            }

            return;
          }
        } else {
          return fs.writeFile(currPath, this.formatFile(value, name));
        }
      }

      // 新路径为文件夹
      if (currFiles.includes(name)) {
        const state = await fs.lstat(currPath);

        if (state.isDirectory()) {
          return this.generateFiles(files[name], currPath);
        } else {
          await fs.unlink(currPath);
          await fs.mkdir(currPath);

          return this.generateFiles(files[name], currPath);
        }
      } else {
        await fs.mkdir(currPath);

        return this.generateFiles(files[name], currPath);
      }
    });

    await Promise.all(promises);
  }
}
