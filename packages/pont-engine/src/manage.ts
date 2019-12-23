import { StandardDataSource } from './standard';
import { Config, getTemplate, DataSourceConfig, hasChinese } from './utils';
import * as fs from 'fs-extra';
import * as path from 'path';
import { diff, Model } from './diff';
import { CodeGenerator, FilesManager } from './generators/generate';
import { info as debugInfo } from './debugLog';
import { FileStructures } from './generators/generate';
import { readRemoteDataSource } from './scripts';
import * as _ from 'lodash';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0 as any;

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
    if (this.allConfigs.length <= 1) {
      // Compatible with single origin without origin name
      this.allLocalDataSources[0] = this.remoteDataSource;
    } else {
      const remoteName = this.remoteDataSource.name;

      const remoteDsIndex = this.allLocalDataSources.findIndex(ds => ds.name === remoteName);
      if (remoteDsIndex === -1) {
        this.allLocalDataSources.push(this.remoteDataSource);
      } else {
        this.allLocalDataSources[remoteDsIndex] = this.remoteDataSource;
      }
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
        return StandardDataSource.constructorFromLock(ldo, ldo.name);
      });

      // Filter name changed origin
      this.allLocalDataSources = this.allLocalDataSources.filter(ldo => {
        return Boolean(this.allConfigs.find(config => config.name === ldo.name));
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

  async readRemoteDataSource(config = this.currConfig) {
    const remoteDataSource = await readRemoteDataSource(config, this.report);
    this.remoteDataSource = remoteDataSource;

    return remoteDataSource;
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
      const generator: CodeGenerator = new Generator();
      generator.setDataSource(dataSource);

      if (_.isFunction(generator.getDataSourceCallback)) {
        generator.getDataSourceCallback(dataSource);
      }
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
