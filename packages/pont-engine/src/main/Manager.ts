import { Manager as OldManager } from '../compatible/Manager';

import type { IStandardConfig } from '../types/pontConfig';

import { Config } from './Config';
import { OriginManage } from './originManage';

(process.env['NODE_TLS_REJECT_UNAUTHORIZED'] as any) = 0;

export class Manager extends OldManager {
  private standardConfigs: IStandardConfig[];

  private originManages: OriginManage[] = [];

  private currentOriginManage: OriginManage;

  init(rootPath: string, configFilePath: string) {
    this.standardConfigs = Config.getStandardConfigFromPath(rootPath, configFilePath);

    this.originManages = this.standardConfigs.map((config) => new OriginManage(config));
  }

  async changeOrigin(name: string) {
    this.currentOriginManage = this.originManages.find((item) => item.getName() === name);
    await this.currentOriginManage.init();
  }

  async updateRemoteDataSource() {
    await this.currentOriginManage.updateRemoteDataSource();
  }

  updateAllRemoteDataSource() {
    this.originManages.forEach((item) => item.updateRemoteDataSource());
  }

  generateCode(update = false) {
    this.currentOriginManage.generateCode(update);
  }

  generateAllCode() {
    return this.originManages.map((item) => item.generateCode());
  }

  getDataSource() {
    return this.currentOriginManage.getDataSource();
  }

  updateAndGenerateCode() {
    return this.currentOriginManage.generateCode();
  }

  getCodeSnippet() {
    return this.currentOriginManage.getCodeSnippet();
  }
}
