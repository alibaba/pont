import { StandardDataSource } from './standard';
import { Config, getTemplate, DataSourceConfig, hasChinese } from './utils';
import * as fs from 'fs-extra';
import * as path from 'path';
import fetch from 'node-fetch';
import { SwaggerDataSource, transformSwaggerData2Standard } from './swagger';
import { CompatibleDataSource, CompatibleModuleSource, transformCompatibleSwaggerData2Standard } from './compatible';
import { diff, Model } from './diff';
import { FilesManager } from './generate';
import { info as debugInfo } from './debugLog';
import * as _ from 'lodash';
import Translate from './translate';
import { FileStructures } from './generate';

export class Manager {
  readonly lockFilename = 'api-lock.json';

  allLocalDataSources: StandardDataSource[] = [];
  allConfigs: DataSourceConfig[];
  remoteDataSource: StandardDataSource;
  currConfig: DataSourceConfig;
  currLocalDataSource: StandardDataSource;

  fileManager: FilesManager;

  diffs = {
    modDiffs: [] as Model[],
    boDiffs: [] as Model[]
  };

  report = debugInfo;

  setReport(report: typeof debugInfo) {
    this.report = report;

    if (this.fileManager) {
      this.fileManager.report = report;
    }
  }

  mapModel<T extends {}>(model: T): Model {
    return Object.assign({}, model, { details: [] }) as any;
  }

  async selectDataSource(name: string) {
    this.currConfig = this.allConfigs.find(conf => conf.name === name);

    await this.readLocalDataSource();
    await this.readRemoteDataSource();
  }

  makeAllSame() {
    const remoteName = this.remoteDataSource.name;

    const remoteDsIndex = this.allLocalDataSources.findIndex(ds => ds.name === remoteName);
    if (remoteDsIndex === -1) {
      this.allLocalDataSources.push(this.remoteDataSource);
    } else {
      this.allLocalDataSources[remoteDsIndex] = this.remoteDataSource;
    }
    this.currLocalDataSource = this.remoteDataSource;
    this.setFilesManager();
  }

  makeSameMod(modName: string) {
    const isRemoteModExists = this.remoteDataSource.mods.find(iMod => iMod.name === modName);
    const isLocalModExists = this.currLocalDataSource.mods.find(iMod => iMod.name === modName);

    if (!isRemoteModExists) {
      // 删除模块
      this.currLocalDataSource.mods = this.currLocalDataSource.mods.filter(mod => mod.name !== modName);
      return;
    }

    const remoteMod = this.remoteDataSource.mods.find(iMod => iMod.name === modName);

    if (isLocalModExists) {
      // 模块已存在。更新该模块
      const index = this.currLocalDataSource.mods.findIndex(iMod => iMod.name === modName);

      this.currLocalDataSource.mods[index] = remoteMod;
    } else {
      // 模块已存在。创建该模块

      this.currLocalDataSource.mods.push(remoteMod);
      this.currLocalDataSource.reOrder();
    }
  }

  makeSameBase(baseName: string) {
    const isRemoteExists = this.remoteDataSource.baseClasses.find(base => base.name === baseName);
    const isLocalExists = this.currLocalDataSource.baseClasses.find(base => base.name === baseName);

    if (!isRemoteExists) {
      // 删除基类
      this.currLocalDataSource.baseClasses = this.currLocalDataSource.baseClasses.filter(
        base => base.name !== baseName
      );
      return;
    }

    const remoteBase = this.remoteDataSource.baseClasses.find(base => base.name === baseName);

    if (isLocalExists) {
      // 基类已存在, 更新该基类
      const index = this.currLocalDataSource.baseClasses.findIndex(base => base.name === baseName);

      this.currLocalDataSource.baseClasses[index] = remoteBase;
    } else {
      // 基类不存在, 创建该基类
      this.currLocalDataSource.baseClasses.push(remoteBase);
      this.currLocalDataSource.reOrder();
    }
  }

  calDiffs() {
    const modDiffs = diff(
      this.currLocalDataSource.mods.map(this.mapModel),
      this.remoteDataSource.mods.map(this.mapModel)
    );
    const boDiffs = diff(
      this.currLocalDataSource.baseClasses.map(this.mapModel),
      this.remoteDataSource.baseClasses.map(this.mapModel),
      false
    );

    this.diffs = {
      modDiffs,
      boDiffs
    };
  }

  constructor(config: Config, configDir = process.cwd()) {
    this.allConfigs = config.getDataSourcesConfig(configDir);
    this.currConfig = this.allConfigs[0];
  }

  async ready() {
    if (this.existsLocal()) {
      await this.readLocalDataSource();
      await this.readRemoteDataSource();
    } else {
      const promises = this.allConfigs.map(config => {
        return this.readRemoteDataSource(config);
      });
      this.allLocalDataSources = await Promise.all(promises);
      this.currLocalDataSource = this.allLocalDataSources[0];
      this.remoteDataSource = this.currLocalDataSource;

      await this.regenerateFiles();
    }
  }

  existsLocal() {
    return (
      fs.existsSync(path.join(this.currConfig.outDir, this.lockFilename)) ||
      fs.existsSync(path.join(this.currConfig.outDir, 'api.lock'))
    );
  }

  async readLockFile(): Promise<string> {
    let lockFile = path.join(this.currConfig.outDir, 'api-lock.json');
    const isExists = fs.existsSync(lockFile);

    if (!isExists) {
      lockFile = path.join(this.currConfig.outDir, 'api.lock');
    }

    const localDataStr = await fs.readFile(lockFile, {
      encoding: 'utf8'
    });

    return localDataStr;
  }

  async readLocalDataSource() {
    try {
      this.report('读取本地数据中...');
      const localDataStr = await this.readLockFile();

      this.report('读取本地完成');
      const localDataObjects = JSON.parse(localDataStr) as StandardDataSource[];
      this.allLocalDataSources = localDataObjects.map(ldo => {
        return StandardDataSource.constructorFromLock(ldo);
      });
      if (this.allLocalDataSources.length < this.allConfigs.length) {
        this.allConfigs.forEach(config => {
          if (!this.allLocalDataSources.find(ds => ds.name === config.name)) {
            this.allLocalDataSources.push(
              new StandardDataSource({
                mods: [],
                name: config.name,
                baseClasses: []
              })
            );
          }
        });
      }

      this.currLocalDataSource = this.allLocalDataSources[0];

      if (this.currConfig.name && this.allLocalDataSources.length > 1) {
        this.currLocalDataSource =
          this.allLocalDataSources.find(ds => ds.name === this.currConfig.name) ||
          new StandardDataSource({
            mods: [],
            name: this.currConfig.name,
            baseClasses: []
          });
      }

      this.setFilesManager();
      this.report('本地对象创建成功');
    } catch (e) {
      throw new Error('读取 lock 文件错误！' + e.toString());
    }
  }

  checkDataSource(dataSource: StandardDataSource) {
    const { mods, baseClasses } = dataSource;

    const errorModNames = [] as string[];
    const errorBaseNames = [] as string[];

    mods.forEach(mod => {
      if (hasChinese(mod.name)) {
        errorModNames.push(mod.name);
      }
    });

    baseClasses.forEach(base => {
      if (hasChinese(base.name)) {
        errorBaseNames.push(base.name);
      }
    });

    if (errorBaseNames.length && errorModNames.length) {
      const errMsg = ['当前数据源有如下项不符合规范，需要后端修改'];
      errorModNames.forEach(modName => errMsg.push(`模块名${modName}应该改为英文名！`));
      errorBaseNames.forEach(baseName => errMsg.push(`基类名${baseName}应该改为英文名！`));

      throw new Error(errMsg.join('\n'));
    }
  }

  async translateChinese(jsonString: string) {
    let retString = jsonString;
    try {
      let chineseKeyCollect = jsonString
        // 匹配中英文混合及包含 空格，«，»，- 的情况
        .match(/"[a-z0-9\s-]*[\u4e00-\u9fa5]+[a-z0-9\s-«»\u4e00-\u9fa5]*":/gi)
        .map(item => item.replace(/["":]/g, ''));

      // 去重
      chineseKeyCollect = _.uniq(chineseKeyCollect.map(item => (item.includes('«') ? item.split('«')[0] : item)));

      // 按长度倒序排序，防止替换时中文名部分重名
      // 例如: 请求参数vo, 请求参数, 替换时先替换 请求参数vo, 后替换请求参数
      chineseKeyCollect.sort((pre, next) => next.length - pre.length);

      let result = await Promise.all(chineseKeyCollect.map(text => Translate.translateAsync(text)));

      result.forEach((enKey: string, index) => {
        const chineseKey = chineseKeyCollect[index];
        this.report(chineseKey + ' ==> ' + enKey);
        if (enKey) {
          retString = retString.replace(eval(`/${chineseKey}/g`), enKey);
        }
      });
      return retString;
    } catch (err) {
      return retString;
    }
  }

  /**
   * 判断是否是老版本swagger定义
   * @param data swagger数据
   */
  isOldSwaggerVersion(data) {
    const oldReg = /^1/;
    const swaggerVersion = data.swaggerVersion;
    return swaggerVersion && oldReg.test(swaggerVersion);
  }

  /**
   * 获取拼接老版本swagger数据
   * @param api 老版本第一层swagger数据
   * @param config 配置信息
   */
  async readOldSwaggerRemoteDataSource(api, config) {
    !api.groups && (api.groups = []);
    this.report('获取老版本各模块数据中...');
    try {
      // 按照第一层返回的数据，去遍历请求各个模块的数据
      for (let i = 0; i < api.apis.length; i++) {
        const module = await fetch(`${config.originUrl}${api.apis[i].path}`);
        let moduleStr = await module.text();
        moduleStr = await this.translateChinese(moduleStr);
        const moduleJson: CompatibleModuleSource = await JSON.parse(moduleStr);
        // 模块上需要加上描述，在转换数据的时候用到
        moduleJson.description = api.apis[i].description;
        moduleJson.path = api.apis[i].path;
        // 加入到拼接好的数据
        api.groups.push(moduleJson);
      }
      this.report('获取老版本模块数据成功!');
      return api;
    } catch (e) {
      throw new Error('读取老版本模块接口失败' + e.toString());
    }
  }

  async readRemoteDataSource(config = this.currConfig) {
    try {
      this.report('获取远程数据中...');
      const response = await fetch(config.originUrl);

      this.report('自动翻译中文基类中...');
      let swaggerJsonStr: string = await response.text();
      swaggerJsonStr = await this.translateChinese(swaggerJsonStr);
      this.report('自动翻译中文基类完成！');

      // 当前数据可能是两类情况，老版本swagger或是2.0版本swagger
      let data = await JSON.parse(swaggerJsonStr);
      data.name = config.name;
      const isOldVersion = this.isOldSwaggerVersion(data);

      // 如果是老版本情况
      if (isOldVersion) {
        data = await this.readOldSwaggerRemoteDataSource(data, config);
        this.remoteDataSource = transformCompatibleSwaggerData2Standard(data, config.usingOperationId, config.name);
      } else {
        this.remoteDataSource = transformSwaggerData2Standard(data, config.usingOperationId, config.name);
      }

      this.report('远程数据获取成功！');

      const transformProgram = Config.getTransformFromConfig(config);
      this.remoteDataSource = transformProgram(this.remoteDataSource);
      this.checkDataSource(this.remoteDataSource);

      this.report('远程对象创建完毕！');
      return this.remoteDataSource;
    } catch (e) {
      throw new Error('读取远程接口数据失败！' + e.toString());
    }
  }

  async lock() {
    await this.fileManager.saveLock();
  }

  async regenerateFiles() {
    this.setFilesManager();
    await this.fileManager.regenerate();
  }

  setFilesManager() {
    this.report('文件生成器创建中...');
    const { default: Generator, FileStructures: MyFileStructures } = getTemplate(this.currConfig.templatePath);

    const generators = this.allLocalDataSources.map(dataSource => {
      const generator = new Generator();
      generator.setDataSource(dataSource);

      return generator;
    });
    let FileStructuresClazz = FileStructures as any;

    if (MyFileStructures) {
      FileStructuresClazz = MyFileStructures;
    }

    this.fileManager = new FilesManager(
      new FileStructuresClazz(generators, this.currConfig.usingMultipleOrigins),
      this.currConfig.outDir
    );
    this.fileManager.prettierConfig = this.currConfig.prettierConfig;
    this.report('文件生成器创建成功！');
    this.fileManager.report = this.report;
  }
}
