import { Manager as OldManager } from '../compatible/Manager';

import type { IStandardBaseConfig, IStandardOirginConfig } from '../types/pontConfig';

import { Config } from './Config';
import { Logger } from './Logger';
import { OriginManage } from './originManage';
import { BaseTemplate, CustomTemplateManage } from './originManage/CustomTemplateManage';
import { FilesManager } from './originManage/FilesManager';

(process.env['NODE_TLS_REJECT_UNAUTHORIZED'] as any) = 0;

export class Manager extends OldManager {
  private standardBaseConfig: IStandardBaseConfig;

  private standardOirginConfigs: IStandardOirginConfig[];

  private originManages: OriginManage[] = [];

  private currentOriginManage: OriginManage;

  private filesManager: FilesManager;

  private baseTemplate: BaseTemplate;

  private log(message: string, ...optionalParams: any[]) {
    Logger.log(`[Manager] ${message}`, ...optionalParams);
  }

  private error(message: string, ...optionalParams: any[]) {
    Logger.error(`[Manager] ${message}`, ...optionalParams);
  }

  /** 初始 filesManager */
  private initFilesManager() {
    this.log(`initFilesManager start`);

    const baseTemplate = this.baseTemplate;

    const { surrounding, outDir, usingMultipleOrigins, templateType, spiltApiLock, prettierConfig } =
      this.standardBaseConfig;

    this.log(`初始化 fileStructures`);
    const fileStructures = new baseTemplate.FileStructures(
      [],
      usingMultipleOrigins,
      surrounding,
      outDir,
      templateType,
      spiltApiLock
    );

    this.log(`初始化 filesManager`);
    const filesManager = new baseTemplate.FilesManager(fileStructures, outDir);
    filesManager.prettierConfig = prettierConfig;

    this.filesManager = filesManager;

    this.log(`initFilesManager end`);
  }

  private initBaseTemplate() {
    this.baseTemplate = CustomTemplateManage.getBaseTemplate(this.standardBaseConfig);
  }

  init(rootPath: string, configDir: string) {
    const { standardBaseConfig, standardOirginConfigs } = Config.getStandardConfigFromPath(rootPath, configDir);
    this.standardBaseConfig = standardBaseConfig;
    this.standardOirginConfigs = standardOirginConfigs;

    this.initBaseTemplate();
    this.initFilesManager();

    this.originManages = standardOirginConfigs.map(
      (config) => new OriginManage(config, standardBaseConfig, this.baseTemplate)
    );

    if (this.originManages.length === 0) {
      this.log('数据源为空');
    }
  }

  /** 切换数据源 */
  async changeOrigin(name?: string) {
    const currentOriginManage = name
      ? this.originManages.find((item) => item.getName() === name)
      : this.originManages[0];

    if (currentOriginManage) {
      await Promise.all([currentOriginManage.initDataSource(), currentOriginManage.updateRemoteDataSource()]);
      await currentOriginManage.updateDiffs();
      this.currentOriginManage = currentOriginManage;
      this.log(`切换数据源:${this.currentOriginManage.getName() ?? 'default'}`);
    } else {
      this.log(`不存在数据源 ${name}`);
    }
  }

  getStandardBaseConfig() {
    return this.standardBaseConfig;
  }

  getStandardOirginConfigs() {
    return this.standardOirginConfigs;
  }

  getCurrentOriginManage() {
    return this.currentOriginManage;
  }

  getFilesManager() {
    return this.filesManager;
  }

  getOriginManages() {
    return this.originManages;
  }

  async updateRemoteDataSource() {
    if (!this.currentOriginManage) {
      await this.changeOrigin();
    }
    
    await this.currentOriginManage.updateRemoteDataSource();
  }

  async generateCode(oldFiles?: any) {
    if (!this.currentOriginManage) {
      await this.changeOrigin();
    }

    await this.currentOriginManage.setCodeGeneratorDataSource();
    const codeGenerator = this.currentOriginManage.getCodeGenerator();

    if (!codeGenerator.dataSource) {
      return;
    }

    let generators = this.filesManager.fileStructures.generators;
    if (generators.length !== this.originManages.length) {
      generators = await Promise.all(
        this.originManages.map(async (item) => {
          await item.setCodeGeneratorDataSource();
          return item.getCodeGenerator();
        })
      );
    }

    const index = generators.findIndex((item) => item.dataSource?.name === codeGenerator.dataSource.name);

    if (index === -1) {
      this.log('没有找到对应的 generators');
      return;
    }

    generators[index] = codeGenerator;

    generators = generators.filter((item) => {
      return item.dataSource.mods.length > 0 || item.dataSource.baseClasses.length > 0;
    });

    if (generators.length === 0) {
      this.error('dataSource 为空数据，停止生成代码');
      return;
    }

    this.filesManager.fileStructures.generators = generators;

    this.log('开始生成代码');
    await this.filesManager.generateCode(oldFiles);
    this.log('开始生成代码完成');
  }

  async updateRemoteDataSourceAndGenerateCode() {
    await this.updateRemoteDataSource();
    this.currentOriginManage.updateDataSourceByRemoteDataSource();
    await this.generateCode();
  }

  async getGeneratedFiles() {
    let generators = this.filesManager.fileStructures.generators;
    if (generators.length !== this.originManages.length) {
      generators = await Promise.all(
        this.originManages.map(async (item) => {
          await item.setCodeGeneratorDataSource();
          return item.getCodeGenerator();
        })
      );
    }
    this.filesManager.fileStructures.generators = generators.filter((item) => {
      return item.dataSource.mods.length > 0 || item.dataSource.baseClasses.length > 0;
    });

    return this.filesManager.getGeneratedFiles();
  }

  /** 生成所有代码 */
  async generateAllCode() {
    const generators = await Promise.all(
      this.originManages.map(async (item) => {
        await item.setCodeGeneratorDataSource();
        return item.getCodeGenerator();
      })
    );

    this.filesManager.fileStructures.generators = generators.filter((item) => {
      return item.dataSource.mods.length > 0 || item.dataSource.baseClasses.length > 0;
    });
    await this.filesManager.generateCode();
  }

  /** 更新所有远程数据源 */
  updateAllRemoteDataSource() {
    return Promise.all(this.originManages.map((item) => item.updateRemoteDataSource()));
  }

  /** 拉取远程数据源，并生成所有代码 */
  async updateRemoteDataSourceAndGenerateAllCode() {
    await this.updateAllRemoteDataSource();
    this.originManages.forEach((item) => {
      item.updateDataSourceByRemoteDataSource();
    });
    await this.generateAllCode();
  }
}
