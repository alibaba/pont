import { Manager as OldManager } from '../compatible/Manager';

import type { IStandardConfig } from '../types/pontConfig';

import { Config } from './Config';
import { Logger } from './Logger';
import { OriginManage } from './originManage';

(process.env['NODE_TLS_REJECT_UNAUTHORIZED'] as any) = 0;

export class Manager extends OldManager {
  private standardConfigs: IStandardConfig[];

  private originManages: OriginManage[] = [];

  private currentOriginManage: OriginManage;

  private log(message: string, ...optionalParams: any[]) {
    Logger.log(`[Manager] ${message}`, ...optionalParams);
  }

  init(rootPath: string, configDir: string) {
    this.standardConfigs = Config.getStandardConfigFromPath(rootPath, configDir);

    this.originManages = this.standardConfigs.map((config) => new OriginManage(config));

    if (this.originManages.length === 0) {
      this.log('数据源为空');
    }
  }

  getStandardConfigs() {
    return this.standardConfigs;
  }

  getOriginManages() {
    return this.originManages;
  }

  getCurrentOriginManage() {
    return this.currentOriginManage;
  }

  /** 切换数据源 */
  changeOrigin(name?: string) {
    this.currentOriginManage = name
      ? this.originManages.find((item) => item.getName() === name)
      : this.originManages[0];

    if (this.currentOriginManage) {
      this.log(`切换数据源:${this.currentOriginManage.getName() ?? 'default'}`);
    }
  }

  /** 更新所有远程数据源 */
  updateAllRemoteDataSource() {
    return this.originManages.forEach((item) => item.updateRemoteDataSource());
  }

  /** 拉取远程数据源，并生成所有代码 */
  updateRemoteDataSourceAndGenerateAllCode() {
    return this.originManages.map((item) => item.updateRemoteDataSourceAndGenerateCode());
  }

  /** 生成所有代码 */
  generateAllCode() {
    return this.originManages.map((item) => item.generateCode());
  }
}
