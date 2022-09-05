import * as fs from 'fs-extra';
import * as path from 'path';

import { OriginType, Surrounding } from '../types/pontConfig';
import { IDataSourceConfig, IOriginConfig } from '../types/pontConfig';
import { getTemplate } from '../utils/templateHelp';
import { defaultFetchMethodCode, defaultTransformCode } from '../constants/defaultCode';
import { Mocks } from './Mocks';

export class DataSourceConfig implements IDataSourceConfig {
  rootDir = '';
  originUrl? = '';
  originType = OriginType.SwaggerV2;
  name?: string;
  usingOperationId = true;
  usingMultipleOrigins = false;
  spiltApiLock = false;
  taggedByName = true;
  templatePath = 'serviceTemplate';
  templateType = '';
  surrounding = Surrounding.typeScript;
  outDir = 'src/service';
  scannedRange = [];
  transformPath = '';
  fetchMethodPath = '';
  prettierConfig = {};
  /** 单位为秒，默认 20 分钟 */
  pollingTime = 60 * 20;
  mocks = new Mocks();

  constructor(config: DataSourceConfig) {
    Object.keys(config).forEach((key) => {
      if (key === 'mocks') {
        this[key] = {
          ...this[key],
          ...config[key]
        };
      } else {
        this[key] = config[key];
      }
    });
  }
}

export class Config extends DataSourceConfig {
  origins: Array<{
    originType: IOriginConfig;
    originUrl: string;
    name: string;
    usingOperationId: boolean;
    transformPath?: string;
    fetchMethodPath?: string;
    outDir?: string;
  }>;

  constructor(config: Config) {
    super(config);
    this.origins = config.origins || [];
  }

  static getTransformFromConfig(config: Config | DataSourceConfig) {
    if (config.transformPath) {
      const moduleResult = getTemplate(config.rootDir, {
        name: config.name,
        templateType: 'transform',
        templatePath: config.transformPath,
        defaultCode: defaultTransformCode
      }) as any;

      if (moduleResult) {
        return moduleResult.default;
      }
    }

    return (id) => id;
  }

  static getFetchMethodFromConfig(config: Config | DataSourceConfig) {
    if (config.fetchMethodPath) {
      const fetchMethodPath = path.isAbsolute(config.fetchMethodPath)
        ? config.fetchMethodPath
        : path.join(process.cwd(), config.fetchMethodPath);
      const moduleResult = getTemplate(config.rootDir, {
        name: config.name,
        templateType: 'fetchMethod',
        templatePath: fetchMethodPath,
        defaultCode: defaultFetchMethodCode
      });

      if (moduleResult) {
        return moduleResult.default;
      }
    }

    return (id) => id;
  }

  validate() {
    if (this.origins && this.origins.length) {
      this.origins.forEach((origin, index) => {
        if (!origin.originUrl) {
          return `请在 origins[${index}] 中配置 originUrl `;
        }
        if (!origin.name) {
          return `请在 origins[${index}] 中配置 originUrl `;
        }
      });
    } else {
      if (!this.originUrl) {
        return '请配置 originUrl 来指定远程地址。';
      }
    }

    return '';
  }

  static createFromConfigPath(configPath: string) {
    const content = fs.readFileSync(configPath, 'utf8');

    try {
      const configObj = JSON.parse(content);

      return new Config(configObj);
    } catch (e) {
      throw new Error('pont-config.json is not a validate json');
    }
  }

  getDataSourcesConfig(configDir: string, projectRoot: string) {
    const { origins, ...rest } = this;
    const commonConfig = {
      ...rest,
      rootDir: projectRoot,
      outDir: path.join(configDir, this.outDir),
      scannedRange: Array.isArray(this.scannedRange) ? this.scannedRange.map((dir) => path.join(configDir, dir)) : [],
      templatePath: this.templatePath ? path.join(configDir, this.templatePath) : undefined,
      transformPath: this.transformPath ? path.join(configDir, this.transformPath) : undefined,
      fetchMethodPath: this.fetchMethodPath ? path.join(configDir, this.fetchMethodPath) : undefined
    };

    // FIXME: origins中配的路径没有转换成绝对路径，找不到该模块
    if (this.origins && this.origins.length) {
      return this.origins.map((origin) => {
        return new DataSourceConfig({
          ...commonConfig,
          ...origin,
          outDir: origin.outDir ? path.join(configDir, origin.outDir) : commonConfig.outDir
        });
      });
    }

    return [new DataSourceConfig(commonConfig)];
  }
}
