import * as path from 'path';

import type { IPontConfig, IStandardBaseConfig, IStandardOirginConfig } from '../types/pontConfig';

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

  static getStandardConfig(
    rootDir: string,
    configDir: string,
    pontConfig: IPontConfig
  ): {
    standardBaseConfig: IStandardBaseConfig;
    standardOirginConfigs: IStandardOirginConfig[];
  } {
    if (!pontConfig) return { standardBaseConfig: null, standardOirginConfigs: [] };

    const { origins, ...baseConfig } = pontConfig;

    const standardBaseConfig: IStandardBaseConfig = {
      ...baseConfig,
      rootDir,
      configDir,
      hasOrigins: origins?.length > 0,
      usingMultipleOrigins: origins?.length > 0 ? baseConfig.usingMultipleOrigins : false,
      usingOperationId: typeof baseConfig.usingOperationId === 'boolean' ? baseConfig.usingOperationId : true,
      outDir: Config.getAbsolutePath(configDir, pontConfig.outDir),
      commonTemplatePath: Config.getAbsolutePath(configDir, baseConfig.commonTemplatePath),
      templatePath: Config.getAbsolutePath(configDir, pontConfig.templatePath),
      transformPath: Config.getAbsolutePath(configDir, pontConfig.transformPath),
      fetchMethodPath: Config.getAbsolutePath(configDir, pontConfig.fetchMethodPath),
      templateOriginalPath: {
        commonTemplatePath: pontConfig.commonTemplatePath,
        templatePath: pontConfig.templatePath,
        transformPath: pontConfig.transformPath,
        fetchMethodPath: pontConfig.fetchMethodPath
      },
      scannedRange: Array.isArray(pontConfig.scannedRange)
        ? pontConfig.scannedRange.map((dir) => Config.getAbsolutePath(configDir, dir))
        : []
    };

    let standardOirginConfigs: IStandardOirginConfig[] = [];

    if (Array.isArray(origins) && origins.length > 0) {
      standardOirginConfigs = origins.map((origin) => {
        const customTemplatePath = Config.getAbsolutePath(configDir, origin.customTemplatePath);

        return {
          ...origin,
          rootDir: standardBaseConfig.rootDir,
          originType: standardBaseConfig.originType,
          usingOperationId: standardBaseConfig.usingOperationId,
          customTemplatePath,
          templateOriginalPath: {
            customTemplatePath: origin.customTemplatePath
          }
        };
      });
    } else {
      standardOirginConfigs = [
        {
          name: '',
          rootDir: standardBaseConfig.rootDir,
          originType: standardBaseConfig.originType,
          originUrl: standardBaseConfig.originUrl,
          customTemplatePath: null,
          templateOriginalPath: {
            customTemplatePath: null
          }
        }
      ];
    }

    return { standardBaseConfig, standardOirginConfigs };
  }

  static getStandardConfigFromPath(
    rootPath: string,
    configDir: string
  ): {
    standardBaseConfig: IStandardBaseConfig;
    standardOirginConfigs: IStandardOirginConfig[];
  } {
    const pontConfig = Config.getPontConfigFromPath(configDir);

    return Config.getStandardConfig(rootPath, configDir, pontConfig);
  }
}
