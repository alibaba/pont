import * as path from 'path';

import type { IPontConfig, IStandardConfig } from '../types/pontConfig';

import { DataSourceConfig as OldDataSourceConfig, Config as OldConfig } from '../compatible/Config';
import { PontFileManager } from '../utils/PontFileManager';

export class DataSourceConfig extends OldDataSourceConfig {}

export class Config extends OldConfig {
  /**
   * 通过 pont 配置文件获取配置斜线
   */
  static getPontConfigFromPath(configFilePath: string): IPontConfig {
    return PontFileManager.loadJson<IPontConfig>(configFilePath);
  }

  static getAbsolutePath(fileDir: string, filePath: string): string {
    if (!fileDir || !filePath) return null;

    if (path.isAbsolute(filePath)) return filePath;

    return path.join(fileDir, filePath);
  }

  static getStandardConfig(rootDir: string, configDir: string, pontConfig: IPontConfig): IStandardConfig[] {
    if (!pontConfig) return [];
    const { origins, ...rest } = pontConfig;

    const commonConfig: IStandardConfig = {
      ...rest,
      rootDir,
      configDir,
      outDir: Config.getAbsolutePath(configDir, pontConfig.outDir),
      templatePath: Config.getAbsolutePath(configDir, pontConfig.templatePath),
      transformPath: Config.getAbsolutePath(configDir, pontConfig.transformPath),
      fetchMethodPath: Config.getAbsolutePath(configDir, pontConfig.fetchMethodPath),
      scannedRange: Array.isArray(pontConfig.scannedRange)
        ? pontConfig.scannedRange.map((dir) => Config.getAbsolutePath(configDir, dir))
        : []
    };

    if (Array.isArray(origins) && origins.length > 0) {
      return origins.map((origin) => {
        const transformPath = Config.getAbsolutePath(configDir, origin.transformPath) ?? commonConfig.transformPath;
        const fetchMethodPath = Config.getAbsolutePath(configDir, origin.fetchMethodPath) ?? commonConfig.transformPath;

        return {
          ...commonConfig,
          ...origin,
          transformPath,
          fetchMethodPath
        };
      });
    }

    return [commonConfig];
  }

  static getStandardConfigFromPath(rootPath: string, configFilePath: string): IStandardConfig[] {
    const pontConfig = Config.getPontConfigFromPath(configFilePath);

    return Config.getStandardConfig(rootPath, path.dirname(configFilePath), pontConfig);
  }
}
