import * as path from 'path';

import { diff } from '../../compatible/diff';
import type { Model } from '../../compatible/diff';
import { getRelatedBos } from '../../compatible/utils';

import type { IStandardBaseConfig, IStandardOirginConfig } from '../../types/pontConfig';
import type { IStandardDataSource } from '../../types/dataSource';
import type { CodeGenerator } from './CodeGenerator';
import type { OriginReader } from './OriginReader';

import { API_LOCK } from '../../constants';
import { PontFileManager } from '../../utils/PontFileManager';
import { LocalDsManager } from '../../utils/LocalDsManager';

import { StandardDataSource } from '../StandardDataSource';
import { BaseTemplate, CustomTemplateManage } from './CustomTemplateManage';
import { Logger } from '../Logger';

export class OriginManage {
  private name: string;

  private config: IStandardOirginConfig;

  /** 异步初始化，使用时注意判空 */
  private dataSource: StandardDataSource;

  private remoteDataSource: StandardDataSource;

  private codeGenerator: CodeGenerator;

  private originReader: OriginReader;

  private baseConfig: IStandardBaseConfig;

  private baseTemplate: BaseTemplate;

  private isInit: boolean;

  private diffs: {
    modDiffs: Model[];
    boDiffs: Model[];
  } = {
    modDiffs: [],
    boDiffs: []
  };

  constructor(config: IStandardOirginConfig, baseConfig: IStandardBaseConfig, baseTemplate: BaseTemplate) {
    this.name = config.name ?? '';
    this.config = config;
    this.baseConfig = baseConfig;
    this.baseTemplate = baseTemplate;
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

  private getApiLockPath(): string {
    const { outDir, spiltApiLock } = this.baseConfig;
    let apiLockPath: string = path.join(outDir, API_LOCK);

    if (spiltApiLock) {
      apiLockPath = path.join(outDir, this.name ?? '', API_LOCK);
    }

    return apiLockPath;
  }

  /** 获取本地 api-lock 的数据源数据 */
  private async getApiLockDataSource(): Promise<StandardDataSource> {
    this.log(`获取本地数据源`);

    const apiLockPath = this.getApiLockPath();

    const dataSource = await PontFileManager.loadJsonPromise<IStandardDataSource | IStandardDataSource[]>(apiLockPath);

    let currentDataSource = Array.isArray(dataSource) ? dataSource.find((item) => item.name === this.name) : dataSource;

    if (!currentDataSource) {
      this.log(`不存在本地数据源,初始化空数据源`);
      currentDataSource = {
        name: this.name,
        mods: [],
        baseClasses: []
      };
    }

    return StandardDataSource.constructorFromLock(currentDataSource as any, this.name);
  }

  /** 通过 OriginUrl 获取  DataSource */
  private async getDataSourceByOriginUrl(): Promise<StandardDataSource> {
    const originReader = this.getOriginReader();
    const { originUrl } = this.config;

    if (!originUrl) {
      this.log(`请配置 originUrl 来指定远程地址`);
      return null;
    }

    try {
      this.log(`[fetchMethod] 获远程数据中...`);
      let resText = await originReader.fetchMethod(originUrl);

      this.log(`[translate] 翻译接口数据中的非法字符`);
      resText = await originReader.translate(resText);

      this.log(`解析接口文本数据`);
      const resJson = JSON.parse(resText);

      this.log(`[transform2StandardDataSource] 将远程数据转化成 pont 标准数据模型`);
      let dataSource = await originReader.transform2StandardDataSource(resJson, this.config);

      this.log(`[transformStandardDataSource] 二次加工标准数据模型`);
      dataSource = await originReader.transformStandardDataSource(dataSource);

      this.log(`对解析后的标准数据源进行校验 `);
      const errMsg = StandardDataSource.checkDataSource(dataSource);

      if (errMsg) {
        this.log(`远程数据源校验失败: \n ${errMsg}`);
        return null;
      }

      this.log(`获远程接口数据完成`);
      return StandardDataSource.constructorFromLock(dataSource, this.name);
    } catch (error) {
      this.log(`获远程接口数据失败`, error);
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
   *
   */
  async initDataSource() {
    if (this.isInit) return;
    this.log(`初始化数据源`);

    const dataSource = await this.getApiLockDataSource();

    if (dataSource) {
      this.log(`初始化数据源完成`);
    } else {
      this.log(`本地数据源为空`);
    }

    this.dataSource = dataSource;
    this.setCodeGeneratorDataSource();

    this.isInit = true;
  }

  /** 更新本地 api-lock 文件的 dataSource 数据 */
  // updateApiLockDataSource(dataSource: StandardDataSource = this.dataSource) {
  //   if (!dataSource) return;

  //   this.log(`更新本地 api-lock 文件`);

  //   const { hasOrigins, spiltApiLock } = this.config;

  //   // TODO 临时兼容 getLockContent 使用
  //   const generator = this.filesManager.fileStructures.generators[0];
  //   const fileStructures = this.filesManager.fileStructures;
  //   const dataSourceJSON = JSON.parse(fileStructures.getLockContent(generator));

  //   const apiLockPath = this.getApiLockPath();

  //   // 多数据源场景
  //   if (hasOrigins) {
  //     if (spiltApiLock) {
  //       PontFileManager.writeJson(apiLockPath, dataSourceJSON);
  //     } else {
  //       let apiLockdataSource =
  //         PontFileManager.loadJson<IStandardDataSource | IStandardDataSource[]>(apiLockPath) || [];

  //       if (!Array.isArray(apiLockdataSource)) {
  //         apiLockdataSource = [apiLockdataSource];
  //       }
  //       const index = apiLockdataSource.findIndex((item) => item?.name === this.name);
  //       if (index > -1) {
  //         apiLockdataSource[index] = dataSourceJSON;
  //       } else {
  //         apiLockdataSource.push(dataSourceJSON);
  //       }
  //       PontFileManager.writeJson(apiLockPath, apiLockdataSource);
  //     }
  //   } else {
  //     // 单数据源场景
  //     PontFileManager.writeJson(apiLockPath, spiltApiLock ? dataSourceJSON : [dataSourceJSON]);
  //   }
  // }

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
  async updateDataSourceMod(modName: string) {
    const dataSource = await this.getDataSource();
    if (!dataSource) return;

    const modInfo = this.diffs.modDiffs.find((item) => item.name === modName);

    switch (modInfo?.type) {
      case 'add':
        const mod = this.remoteDataSource.mods.find((mod) => mod.name === modName);
        if (mod) {
          dataSource.mods.push(mod);
        }
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
    const isLocalModExists = dataSource.mods.find((iMod) => iMod.name === modName);

    if (!isRemoteModExists) {
      // 删除模块
      dataSource.mods = dataSource.mods.filter((mod) => mod.name !== modName);
      return;
    }

    const remoteMod = this.remoteDataSource.mods.find((iMod) => iMod.name === modName);

    if (isLocalModExists) {
      // 模块已存在。更新该模块
      const index = dataSource.mods.findIndex((iMod) => iMod.name === modName);

      dataSource.mods[index] = remoteMod;
    } else {
      // 模块不存在。创建该模块

      dataSource.mods.push(remoteMod);
      dataSource.reOrder();
    }

    // 更新关联BaseClass
    const relatedBos = getRelatedBos(remoteMod);
    await Promise.all([...relatedBos].map((typeName) => this.updateDataSourceClass(typeName)));

    this.dataSource = dataSource;
    this.setCodeGeneratorDataSource();
  }

  /** 增量更新 this.dataSource baseClasses */
  async updateDataSourceClass(baseClassName: string) {
    const dataSource = await this.getDataSource();
    if (!dataSource) return;

    const isRemoteExists = this.remoteDataSource.baseClasses.find((baseClass) => baseClass.name === baseClassName);
    const isLocalExists = dataSource.baseClasses.find((baseClass) => baseClass.name === baseClassName);

    if (!isRemoteExists) {
      // 删除基类
      dataSource.baseClasses = dataSource.baseClasses.filter((baseClass) => baseClass.name !== baseClassName);
      return;
    }

    const remoteBase = this.remoteDataSource.baseClasses.find((baseClass) => baseClass.name === baseClassName);

    if (isLocalExists) {
      // 基类已存在, 更新该基类
      const index = dataSource.baseClasses.findIndex((baseClass) => baseClass.name === baseClassName);

      dataSource.baseClasses[index] = remoteBase;
    } else {
      // 基类不存在, 创建该基类
      dataSource.baseClasses.push(remoteBase);
      dataSource.reOrder();
    }

    this.dataSource = dataSource;
    this.setCodeGeneratorDataSource();
  }

  initOriginTemplate() {
    this.log(`初始化模板文件`);

    const originTemplate = CustomTemplateManage.getOriginTemplate(this.config, this.baseTemplate);

    const { surrounding, outDir, usingMultipleOrigins } = this.baseConfig;

    const codeGenerator = new originTemplate.CodeGenerator(surrounding, outDir, API_LOCK);
    codeGenerator.usingMultipleOrigins = usingMultipleOrigins;

    this.codeGenerator = codeGenerator;
    this.originReader = originTemplate.originReader;
  }

  async setCodeGeneratorDataSource() {
    this.log(`更新 CodeGenerator dataSource`);
    const dataSource = await this.getDataSource();
    if (!dataSource) return;
    this.getCodeGenerator().setDataSource(dataSource);
  }

  /** 获取远程数据源信息并更新 remoteDataSource */
  async updateRemoteDataSource() {
    this.remoteDataSource = await this.getRemoteDataSource();
  }

  updateDataSourceByRemoteDataSource() {
    this.log('使用最新的远程数据');
    if (this.remoteDataSource) {
      this.dataSource = this.remoteDataSource;
    }
  }

  getDiffs() {
    return this.diffs;
  }

  async getDataSource() {
    if (!this.dataSource) {
      await this.initDataSource();
    }
    return this.dataSource;
  }

  getConfig() {
    return this.config;
  }

  getName() {
    return this.name;
  }

  getOriginReader() {
    if (!this.originReader) {
      this.initOriginTemplate();
    }
    return this.originReader;
  }

  getCodeGenerator() {
    if (!this.codeGenerator) {
      this.initOriginTemplate();
    }
    return this.codeGenerator;
  }
}
