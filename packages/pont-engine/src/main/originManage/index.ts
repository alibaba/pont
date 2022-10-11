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
import { Logger } from '../Logger';

export class OriginManage {
  private name: string;

  private config: IStandardConfig;

  /** 异步初始化，使用时注意判空 */
  private dataSource: StandardDataSource;

  private remoteDataSource: StandardDataSource;

  /** 自定义模板 */
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
    this.name = config.name ?? '';
    this.config = config;
    this.initDataSource();
    this.log(`创建完成`);
  }

  private log(message: string, ...optionalParams: any[]) {
    Logger.log(`[OriginManage ${this.name ?? 'default'}] ${message}`, ...optionalParams);
  }

  /** 新旧数据源信息 diff */
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

  private getApiLockPath(): string {
    const { outDir, name, spiltApiLock } = this.config;
    let apiLockPath: string = path.join(outDir, API_LOCK);

    if (spiltApiLock) {
      apiLockPath = path.join(outDir, name ?? '', API_LOCK);
    }

    return apiLockPath;
  }

  /** 获取本地 api-lock 的数据源数据 */
  private async getApiLockDataSource(): Promise<StandardDataSource> {
    this.log(`获取本地数据源`);

    const apiLockPath = this.getApiLockPath();

    const dataSource = await PontFileManager.loadJsonPromise<IStandardDataSource | IStandardDataSource[]>(apiLockPath);

    const currentDataSource = Array.isArray(dataSource)
      ? dataSource.find((item) => item.name === this.name)
      : dataSource;

    if (!currentDataSource) {
      this.log(`不存在本地数据源`);
      return null;
    }

    return StandardDataSource.constructorFromLock(currentDataSource as any, this.name);
  }

  /** 通过 OriginUrl 获取  DataSource */
  private async getDataSourceByOriginUrl(): Promise<StandardDataSource> {
    const customTemplate = this.getCustomTemplate();
    const originReader = customTemplate.getOriginReader();
    const { originUrl } = this.config;

    if (!originUrl) {
      this.log(`请配置 originUrl 来指定远程地址`);
      return null;
    }

    try {
      this.log(`获远程数据源中...`);
      let resText = await originReader.fetchMethod(originUrl);

      this.log(`translate`);
      resText = await originReader.translate(resText);

      this.log(`parse`);
      const resJson = JSON.parse(resText);

      this.log(`transform2StandardDataSource`);
      let dataSource = await originReader.transform2StandardDataSource(resJson, this.config);

      this.log(`transformStandardDataSource`);
      dataSource = await originReader.transformStandardDataSource(dataSource);

      this.log(`checkDataSource`);
      const errMsg = StandardDataSource.checkDataSource(dataSource);

      if (errMsg) {
        this.log(`远程数据源校验失败: \n ${errMsg}`);
        return null;
      }

      this.log(`获远程数据源完成`);
      return dataSource;
    } catch (error) {
      this.log(`获远程数据源失败`, error);
      return null;
    }
  }

  /** 获取最新的数据源 */
  private async getRemoteDataSource(): Promise<StandardDataSource> {
    this.log(`本地数据源更新中...`);

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

    this.log(`本地数据源更新完成`);

    return remoteDataSource || localDataSource;
  }

  /**
   * 初始化数据源
   * 1. 先获取本地 api-lock 中的 dataSource 数据
   * 2. 如果本地文件不存在，则获取远程数据源数据
   */
  private async initDataSource() {
    this.log(`初始化数据源`);

    let dataSource: StandardDataSource;

    dataSource = await this.getApiLockDataSource();

    if (!dataSource) {
      const remoteDataSource = await this.getRemoteDataSource();
      this.remoteDataSource = remoteDataSource;
      dataSource = remoteDataSource;
    }

    if (!dataSource) {
      this.log(`初始化数据源失败`);
      return;
    }

    this.log(`初始化数据源完成`);
    this.dataSource = dataSource;
  }

  /** 更新本地 api-lock 文件的 dataSource 数据 */
  updateApiLockDataSource(dataSource: StandardDataSource = this.dataSource) {
    if (!dataSource) return;

    this.log(`更新本地 api-lock 文件`);

    const { hasOrigins, spiltApiLock } = this.config;
    const dataSourceJSON = JSON.parse(JSON.stringify(dataSource));

    const apiLockPath = this.getApiLockPath();

    // 多数据源场景
    if (hasOrigins) {
      if (spiltApiLock) {
        PontFileManager.writeJson(apiLockPath, dataSourceJSON);
      } else {
        let apiLockdataSource =
          PontFileManager.loadJson<IStandardDataSource | IStandardDataSource[]>(apiLockPath) || [];

        if (!Array.isArray(apiLockdataSource)) {
          apiLockdataSource = [apiLockdataSource];
        }
        const index = apiLockdataSource.findIndex((item) => item?.name === this.name);
        if (index > -1) {
          apiLockdataSource[index] = dataSourceJSON;
        } else {
          apiLockdataSource.push(dataSourceJSON);
        }
        PontFileManager.writeJson(apiLockPath, apiLockdataSource);
      }
    } else {
      // 单数据源场景
      PontFileManager.writeJson(apiLockPath, spiltApiLock ? dataSourceJSON : [dataSourceJSON]);
    }
  }

  /** 获取远程数据源信息并更新 remoteDataSource */
  async updateRemoteDataSource() {
    this.remoteDataSource = await this.getRemoteDataSource();
  }

  /** 计算当前 dataSource 和 remoteDataSource 差异 */
  updateDiffs() {
    if (this.dataSource === this.remoteDataSource) {
      this.diffs = { modDiffs: [], boDiffs: [] };
      return;
    }

    const { modDiffs, boDiffs } = OriginManage.calculateDiff(this.dataSource, this.remoteDataSource);
    this.diffs = { modDiffs, boDiffs };
  }

  /** 增量更新 this.dataSource mods */
  updateDataSourceMod(modName: string) {
    const dataSource = this.getDataSource();

    if (!dataSource) {
      return;
    }

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

  /** 增量更新 this.dataSource baseClasses */
  updateDataSourceClass(baseClassName: string) {
    const dataSource = this.getDataSource();

    if (!dataSource) {
      return;
    }

    const isRemoteExists = this.remoteDataSource.baseClasses.find((baseClass) => baseClass.name === baseClassName);
    const isLocalExists = this.dataSource.baseClasses.find((baseClass) => baseClass.name === baseClassName);

    if (!isRemoteExists) {
      // 删除基类
      this.dataSource.baseClasses = this.dataSource.baseClasses.filter((baseClass) => baseClass.name !== baseClassName);
      return;
    }

    const remoteBase = this.remoteDataSource.baseClasses.find((baseClass) => baseClass.name === baseClassName);

    if (isLocalExists) {
      // 基类已存在, 更新该基类
      const index = this.dataSource.baseClasses.findIndex((baseClass) => baseClass.name === baseClassName);

      this.dataSource.baseClasses[index] = remoteBase;
    } else {
      // 基类不存在, 创建该基类
      this.dataSource.baseClasses.push(remoteBase);
      this.dataSource.reOrder();
    }
  }

  /** 更新 filesManager */
  private updateFilesManager() {
    this.log(`updateFilesManager start`);

    const customTemplate = this.getCustomTemplate();
    const { surrounding, outDir, usingMultipleOrigins, templateType, spiltApiLock, prettierConfig } = this.config;
    const dataSource = this.getDataSource();

    if (!dataSource) {
      return;
    }

    this.log(`初始化 codeGenerator`);
    const codeGenerator = new (customTemplate.getCodeGenerator())(surrounding, outDir, API_LOCK);
    codeGenerator.setDataSource(dataSource);
    codeGenerator.usingMultipleOrigins = usingMultipleOrigins;
    codeGenerator.getDataSourceCallback?.(dataSource);

    this.log(`初始化 fileStructures`);
    const fileStructures = new (customTemplate.getFileStructures())(
      [codeGenerator],
      usingMultipleOrigins,
      surrounding,
      outDir,
      templateType,
      spiltApiLock
    );

    this.log(`初始化 filesManager`);
    const filesManager = new (customTemplate.getFilesManager())(fileStructures, outDir);
    filesManager.prettierConfig = prettierConfig;
    filesManager.initPrevFiles(this.filesManager?.prevFiles);

    codeGenerator.codeSnippet.bind(codeGenerator);

    this.filesManager = filesManager;

    this.log(`updateFilesManager end`);
  }

  /** 使用 this.dataSource 生成代码 */
  async generateCode(update = false) {
    this.updateFilesManager();
    await this.filesManager?.generateCode(update);
    this.updateApiLockDataSource();
  }

  /** 使用最新的远程数据源生成代码，不拉取远程数据源 */
  async generateCodeByRemoteDataSource() {
    this.dataSource = this.remoteDataSource;
    await this.generateCode();
  }

  /** 拉取远程数据源，并生成代码 */
  async updateRemoteDataSourceAndGenerateCode() {
    await this.updateRemoteDataSource();
    await this.generateCodeByRemoteDataSource();
  }

  getDiffs() {
    return this.diffs;
  }

  getDataSource() {
    if (!this.dataSource) {
      this.log(`dataSource数据不存在`);
    }
    return this.dataSource;
  }

  getConfig() {
    return this.config;
  }

  getName() {
    return this.name;
  }

  getCodeSnippet(): CodeGenerator['codeSnippet'] {
    const generators = this.filesManager.fileStructures.generators[0];
    return generators.codeSnippet.bind(generators);
  }
}
