import { StandardDataSource } from "./standard";
import { Config, getTemplate, DataSourceConfig, hasChinese } from "./utils";
import * as fs from "fs-extra";
import * as path from "path";
import fetch from "node-fetch";
import { SwaggerDataSource, transformSwaggerData2Standard } from "./swagger";
import { diff, Model } from "./diff";
import { FilesManager } from "./generate";
import { info as debugInfo } from "./debugLog";

export class Manager {
  readonly lockFilename = "api.lock";

  allLocalDataSources: StandardDataSource[];
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

    const remoteDsIndex = this.allLocalDataSources.findIndex(
      ds => ds.name === remoteName
    );
    this.allLocalDataSources[remoteDsIndex] = this.remoteDataSource;
    this.currLocalDataSource = this.remoteDataSource;
    this.setFilesManager();
  }

  makeSameMod(modName: string) {
    const isRemoteModExists = this.remoteDataSource.mods.find(
      iMod => iMod.name === modName
    );
    const isLocalModExists = this.currLocalDataSource.mods.find(
      iMod => iMod.name === modName
    );

    if (!isRemoteModExists) {
      // 删除模块
      this.currLocalDataSource.mods = this.currLocalDataSource.mods.filter(
        mod => mod.name !== modName
      );
      return;
    }

    const remoteMod = this.remoteDataSource.mods.find(
      iMod => iMod.name === modName
    );

    if (isLocalModExists) {
      // 模块已存在。更新该模块
      const index = this.currLocalDataSource.mods.findIndex(
        iMod => iMod.name === modName
      );

      this.currLocalDataSource.mods[index] = remoteMod;
    } else {
      // 模块已存在。创建该模块

      this.currLocalDataSource.mods.push(remoteMod);
      this.currLocalDataSource.reOrder();
    }
  }

  makeSameBase(baseName: string) {
    const isRemoteExists = this.remoteDataSource.baseClasses.find(
      base => base.name === baseName
    );
    const isLocalExists = this.currLocalDataSource.baseClasses.find(
      base => base.name === baseName
    );

    if (!isRemoteExists) {
      // 删除基类
      this.currLocalDataSource.baseClasses = this.currLocalDataSource.baseClasses.filter(
        base => base.name !== baseName
      );
      return;
    }

    const remoteBase = this.remoteDataSource.baseClasses.find(
      base => base.name === baseName
    );

    if (isLocalExists) {
      // 基类已存在, 更新该基类
      const index = this.currLocalDataSource.baseClasses.findIndex(
        base => base.name === baseName
      );

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
      this.setFilesManager();

      this.regenerateFiles();
    }
  }

  existsLocal() {
    return fs.existsSync(path.join(this.currConfig.outDir, this.lockFilename));
  }

  async readLocalDataSource() {
    try {
      this.report("读取本地数据中...");
      const localDataStr = await fs.readFile(
        path.join(this.currConfig.outDir, this.lockFilename),
        { encoding: "utf8" }
      );

      this.report("读取本地完成");
      const localDataObjects = JSON.parse(localDataStr) as StandardDataSource[];
      this.allLocalDataSources = localDataObjects.map(ldo => {
        return StandardDataSource.constructorFromLock(ldo);
      });

      this.currLocalDataSource = this.allLocalDataSources[0];
      this.setFilesManager();
      this.report("本地对象创建成功");
    } catch (e) {
      throw new Error("读取 lock 文件错误！" + e.toString());
    }
  }

  checkDataSource(dataSource: StandardDataSource) {
    const { mods, baseClasses } = dataSource;

    let errorModNames = [] as string[];
    let errorBaseNames = [] as string[];

    mods.forEach(mod => {
      if ( hasChinese(mod.name) ) {
        errorModNames.push(mod.name);
      }
    });

    baseClasses.forEach(base => {
      if ( hasChinese(base.name)) {
        errorBaseNames.push(base.name);
      }
    });

    if (errorBaseNames.length && errorModNames.length) {
      let errMsg = ["当前数据源有如下项不符合规范，需要后端修改"];
      errorModNames.forEach(modName =>
        errMsg.push(`模块名${modName}应该改为英文名！`)
      );
      errorBaseNames.forEach(baseName =>
        errMsg.push(`基类名${baseName}应该改为英文名！`)
      );

      throw new Error(errMsg.join("\n"));
    }
  }

  async readRemoteDataSource(config = this.currConfig) {
    try {
      this.report("获取远程数据中...");
      const response = await fetch(config.originUrl);
      this.report("远程数据获取成功！");
      const data: SwaggerDataSource = await response.json();
      data.name = config.name;

      this.remoteDataSource = transformSwaggerData2Standard(
        data,
        config.usingOperationId,
        config.taggedByName
      );
      this.checkDataSource(this.remoteDataSource);

      this.report("远程对象创建完毕！");
      return this.remoteDataSource;
    } catch (e) {
      throw new Error("读取远程接口数据失败！" + e.toString());
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
    this.report("文件生成器创建中...");
    const Generator = getTemplate(this.currConfig.templatePath);

    const generators = this.allLocalDataSources.map(dataSource => {
      const generator = new Generator();
      generator.setDataSource(dataSource);

      return generator;
    });

    this.fileManager = new FilesManager(generators, this.currConfig.outDir);
    this.report("文件生成器创建成功！");
    this.fileManager.report = this.report;
  }
}
