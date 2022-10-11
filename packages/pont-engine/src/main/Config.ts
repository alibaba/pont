import * as path from 'path';

import type { IPontConfig, IStandardConfig } from '../types/pontConfig';

import { DataSourceConfig as OldDataSourceConfig, Config as OldConfig } from '../compatible/Config';
import { PontFileManager } from '../utils/PontFileManager';
import { CONFIG_FILE } from '../constants';

export class DataSourceConfig extends OldDataSourceConfig {}

export class Config extends OldConfig {
  /**
   * 通过 pont 配置文件获取配置斜线
   */
  static getPontConfigFromPath(configDir: string): IPontConfig {
    return PontFileManager.loadJson<IPontConfig>(path.join(configDir, CONFIG_FILE));
  }

  static getAbsolutePath(fileDir: string, filePath: string): string {
    if (!fileDir || !filePath) return null;

    if (path.isAbsolute(filePath)) return filePath;

    return path.join(fileDir, filePath);
  }

  static getStandardConfig(rootDir: string, configDir: string, pontConfig: IPontConfig): IStandardConfig[] {
    if (!pontConfig) return [];
    const { origins, usingMultipleOrigins, ...rest } = pontConfig;

    const commonConfig: IStandardConfig = {
      ...rest,
      rootDir,
      configDir,
      hasOrigins: origins?.length > 0,
      usingMultipleOrigins: origins?.length > 0 ? usingMultipleOrigins : false,
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
        const fetchMethodPath =
          Config.getAbsolutePath(configDir, origin.fetchMethodPath) ?? commonConfig.fetchMethodPath;

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

  static getStandardConfigFromPath(rootPath: string, configDir: string): IStandardConfig[] {
    const pontConfig = Config.getPontConfigFromPath(configDir);

    return Config.getStandardConfig(rootPath, configDir, pontConfig);
  }
}
