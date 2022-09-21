import * as path from 'path';

import { diff } from '../../compatible/diff';
import type { Model } from '../../compatible/diff';
import { getRelatedBos } from '../../compatible/utils';

import type { IStandardConfig } from '../../types/pontConfig';
import type { IStandardDataSource } from '../../types/dataSource';
import type { FilesManager } from './FilesManager';
import type { CodeGenerator } from './CodeGenerator';

import { API_LOCK } from '../../constants';
import { PontFileManager } from '../../utils/PontFileManager';
import { LocalDsManager } from '../../utils/LocalDsManager';

import { StandardDataSource } from '../StandardDataSource';
import { CustomTemplateManage } from './CustomTemplateManage';

export class OriginManage {
  private name: string;

  private config: IStandardConfig;

  private dataSource: StandardDataSource;

  private remoteDataSource: StandardDataSource;

  private customTemplate: CustomTemplateManage;

  private filesManager: FilesManager;

  private diffs: {
    modDiffs: Model[];
    boDiffs: Model[];
  } = {
    modDiffs: [],
    boDiffs: []
  };

  constructor(config: IStandardConfig) {
    console.log(`[OriginManage ${this.name}] 创建完成`);
    this.name = config.name;
    this.config = config;
  }

  /** 对比新数据源 */
  static calculateDiff(oldDataSource: StandardDataSource, dataSource: StandardDataSource) {
    const modDiffs = diff(
      oldDataSource?.mods.map((mod) => ({ ...mod, details: [] } as any)) || [],
      dataSource?.mods.map((mod) => ({ ...mod, details: [] } as any)) || []
    );
    const boDiffs = diff(
      oldDataSource?.baseClasses.map((mod) => ({ ...mod, details: [] } as any)) || [],
      dataSource?.baseClasses.map((mod) => ({ ...mod, details: [] } as any)) || [],
      false
    );

    return { modDiffs, boDiffs };
  }

  private getCustomTemplate() {
    if (!this.customTemplate) {
      this.customTemplate = new CustomTemplateManage(this.config);
    }

    return this.customTemplate;
  }

  private updateFilesManager() {
    console.log(`[OriginManage ${this.name}] updateFilesManager start`);

    const customTemplate = this.getCustomTemplate();
    const { surrounding, outDir, usingMultipleOrigins, templateType, spiltApiLock, prettierConfig } = this.config;
    const dataSource = this.dataSource;

    if (!dataSource) {
      console.log(`[OriginManage ${this.name}] updateFilesManager失败，不存在数据源`);
      return;
    }

    console.log(`[OriginManage ${this.name}] 初始化 codeGenerator`);
    const codeGenerator = new (customTemplate.getCodeGenerator())(surrounding, outDir, API_LOCK);
    codeGenerator.setDataSource(dataSource);
    codeGenerator.usingMultipleOrigins = usingMultipleOrigins;
    codeGenerator.getDataSourceCallback?.(dataSource);

    console.log(`[OriginManage ${this.name}] 初始化 fileStructures`);
    const fileStructures = new (customTemplate.getFileStructures())(
      [codeGenerator],
      usingMultipleOrigins,
      surrounding,
      outDir,
      templateType,
      spiltApiLock
    );

    console.log(`[OriginManage ${this.name}] 初始化 filesManager`);
    const filesManager = new (customTemplate.getFilesManager())(fileStructures, outDir);
    filesManager.prettierConfig = prettierConfig;
    filesManager.initPrevFiles(this.filesManager?.prevFiles);

    codeGenerator.codeSnippet.bind(codeGenerator);

    this.filesManager = filesManager;

    console.log(`[OriginManage ${this.name}] updateFilesManager end`);
  }

  private getApiLockPath(): string {
    const { outDir, name, spiltApiLock } = this.config;
    let apiLockPath: string = path.join(outDir, API_LOCK);

    if (spiltApiLock) {
      apiLockPath = path.join(outDir, name ?? '', API_LOCK);
    }

    return apiLockPath;
  }

  private async getApiLockDataSource(): Promise<StandardDataSource> {
    console.log(`[OriginManage ${this.name}] 获取本地数据源`);

    const apiLockPath = this.getApiLockPath();

    const dataSource = await PontFileManager.loadJsonPromise<IStandardDataSource | IStandardDataSource[]>(apiLockPath);

    const currentDataSource = Array.isArray(dataSource)
      ? dataSource.find((item) => item.name === this.name)
      : dataSource;

    if (!currentDataSource) {
      console.log(`[OriginManage ${this.name}] 不存在本地数据源`);
      return null;
    }

    return StandardDataSource.constructorFromLock(currentDataSource as any, this.name);
  }

  private async getDataSourceByOriginUrl(): Promise<StandardDataSource> {
    console.log(`[OriginManage ${this.name}] 获远程数据源中...`);

    const customTemplate = this.getCustomTemplate();
    const originReader = customTemplate.getOriginReader();
    const { originUrl } = this.config;

    if (!originUrl) {
      console.log(`[OriginManage ${this.name}] 请配置 originUrl 来指定远程地址`);
      return null;
    }

    try {
      let resText = await originReader.fetchMethod(originUrl);
      resText = await originReader.translate(resText);

      const resJson = JSON.parse(resText);
      let dataSource = await originReader.transform2StandardDataSource(resJson, this.config);
      dataSource = await originReader.transformStandardDataSource(dataSource);

      const errMsg = StandardDataSource.checkDataSource(dataSource);

      if (errMsg) {
        console.error(`[OriginManage ${this.name}] 远程数据源校验失败: \n ${errMsg}`);
        return null;
      }

      console.log(`[OriginManage ${this.name}] 获远程数据源完成`);
      return dataSource;
    } catch (error) {
      console.error(`[OriginManage ${this.name}] 获远程数据源失败`, error);
      return null;
    }
  }

  /** 获取最新的数据源 */
  private async getRemoteDataSource(): Promise<StandardDataSource> {
    console.log(`[OriginManage ${this.name}] 本地数据源更新中...`);

    const { rootDir, originUrl, name } = this.config;

    const latestDataSource = LocalDsManager.getLatestDsInProject(rootDir, { originUrl, projectName: rootDir });
    const localDataSource = latestDataSource
      ? StandardDataSource.constructorFromLock(latestDataSource as any, name)
      : null;

    const remoteDataSource = await this.getDataSourceByOriginUrl();

    if (localDataSource && remoteDataSource) {
      const { modDiffs, boDiffs } = OriginManage.calculateDiff(localDataSource, remoteDataSource);

      if (modDiffs.length || boDiffs.length) {
        LocalDsManager.saveDataSource(rootDir, { originUrl, projectName: rootDir }, remoteDataSource);
      }
    }

    if (!localDataSource && remoteDataSource) {
      LocalDsManager.saveDataSource(rootDir, { originUrl, projectName: rootDir }, remoteDataSource);
    }

    console.log(`[OriginManage ${this.name}] 本地数据源更新完成`);

    return remoteDataSource || localDataSource;
  }

  private async initDataSource() {
    let dataSource: StandardDataSource;

    dataSource = await this.getApiLockDataSource();

    if (!dataSource) {
      const remoteDataSource = await this.getRemoteDataSource();
      this.remoteDataSource = remoteDataSource;
      dataSource = remoteDataSource;
    }

    if (!dataSource) {
      console.error(`[OriginManage ${this.name}] 初始化数据源失败`);
      return;
    }

    this.dataSource = dataSource;
  }

  updateApiLockDataSource(dataSource: StandardDataSource = this.dataSource) {
    if (!dataSource) return;

    const dataSourceJSON = JSON.parse(JSON.stringify(dataSource));

    const apiLockPath = this.getApiLockPath();
    const apiLockdataSource = PontFileManager.loadJson<IStandardDataSource | IStandardDataSource[]>(apiLockPath);

    if (Array.isArray(apiLockdataSource)) {
      const index = apiLockdataSource.findIndex((item) => item.name === this.name);
      if (index > -1) {
        apiLockdataSource[index] = dataSourceJSON;
      } else {
        apiLockdataSource.push(dataSourceJSON);
      }
      PontFileManager.writeJson(apiLockPath, apiLockdataSource);
    } else {
      PontFileManager.writeJson(apiLockPath, dataSourceJSON);
    }
  }

  async updateRemoteDataSource() {
    this.remoteDataSource = await this.getRemoteDataSource();
  }

  updateDiffs() {
    if (this.dataSource === this.remoteDataSource) {
      this.diffs = { modDiffs: [], boDiffs: [] };
      return;
    }

    const { modDiffs, boDiffs } = OriginManage.calculateDiff(this.dataSource, this.remoteDataSource);
    this.diffs = { modDiffs, boDiffs };
  }

  updateDataSourceMod(modName: string) {
    const dataSource = this.dataSource;

    const modInfo = this.diffs.modDiffs.find((item) => item.name === modName);

    switch (modInfo?.type) {
      case 'add':
        dataSource.mods = dataSource.mods.filter((mod) => mod.name === modName);
        break;
      case 'delete':
        dataSource.mods = dataSource.mods.filter((mod) => mod.name === modName);
        break;
      case 'update':
        break;

      default:
        break;
    }
    const isRemoteModExists = this.remoteDataSource.mods.find((iMod) => iMod.name === modName);
    const isLocalModExists = this.dataSource.mods.find((iMod) => iMod.name === modName);

    if (!isRemoteModExists) {
      // 删除模块
      this.dataSource.mods = this.dataSource.mods.filter((mod) => mod.name !== modName);
      return;
    }

    const remoteMod = this.remoteDataSource.mods.find((iMod) => iMod.name === modName);

    if (isLocalModExists) {
      // 模块已存在。更新该模块
      const index = this.dataSource.mods.findIndex((iMod) => iMod.name === modName);

      this.dataSource.mods[index] = remoteMod;
    } else {
      // 模块不存在。创建该模块

      this.dataSource.mods.push(remoteMod);
      this.dataSource.reOrder();
    }

    // 更新关联BaseClass
    const relatedBos = getRelatedBos(remoteMod);
    relatedBos.forEach((typeName) => this.updateDataSourceClass(typeName));
  }

  updateDataSourceClass(baseName: string) {
    const isRemoteExists = this.remoteDataSource.baseClasses.find((base) => base.name === baseName);
    const isLocalExists = this.dataSource.baseClasses.find((base) => base.name === baseName);

    if (!isRemoteExists) {
      // 删除基类
      this.dataSource.baseClasses = this.dataSource.baseClasses.filter((base) => base.name !== baseName);
      return;
    }

    const remoteBase = this.remoteDataSource.baseClasses.find((base) => base.name === baseName);

    if (isLocalExists) {
      // 基类已存在, 更新该基类
      const index = this.dataSource.baseClasses.findIndex((base) => base.name === baseName);

      this.dataSource.baseClasses[index] = remoteBase;
    } else {
      // 基类不存在, 创建该基类
      this.dataSource.baseClasses.push(remoteBase);
      this.dataSource.reOrder();
    }
  }

  async generateCode(update = false) {
    this.updateFilesManager();
    this.filesManager?.generateCode(update);
  }

  /** 使用最新的远程数据源生成代码，不拉取远程数据源 */
  async generateCodeByRemoteDataSource() {
    this.dataSource = this.remoteDataSource;
    await this.generateCode();
  }

  /** 拉取远程数据源，并生成代码 */
  async getRemoteDataSourceAndGenerateCode() {
    await this.updateRemoteDataSource();
    await this.generateCodeByRemoteDataSource();
  }

  getDiffs() {
    return this.diffs;
  }

  getDataSource() {
    return this.dataSource;
  }

  getName() {
    return this.name;
  }

  getCodeSnippet(): CodeGenerator['codeSnippet'] {
    const generators = this.filesManager.fileStructures.generators[0];
    return generators.codeSnippet.bind(generators);
  }

  async init() {
    await this.initDataSource();
    this.updateFilesManager();
  }
}
