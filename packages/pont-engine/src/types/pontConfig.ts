import type { ResolveConfigOptions } from 'prettier';
import type { IMocks } from './mocks';

export enum OriginType {
  SwaggerV3 = 'SwaggerV3',
  SwaggerV2 = 'SwaggerV2'
}

export enum Surrounding {
  typeScript = 'typeScript',
  javaScript = 'javaScript'
}

export enum SurroundingFileName {
  javaScript = 'js',
  typeScript = 'ts'
}

/** 百度翻译秘钥信息 */
export interface IBaiduTranslateConfig {
  appId: string;
  appSecret: string;
}

interface IOriginConfig {
  name: string;

  originUrl: string;

  customTemplatePath?: string;

  originType?: OriginType;
}

export interface IBaseConfig {
  outDir: string;
  originUrl?: string;
  originType: OriginType;
  surrounding: Surrounding;
  templateType: 'fetch' | 'hooks';

  usingMultipleOrigins: boolean;
  spiltApiLock: boolean;
  usingOperationId?: boolean;

  fetchMethodPath?: string;
  templatePath?: string;
  transformPath?: string;
  commonTemplatePath?: string;

  scannedRange: string[];

  prettierConfig: ResolveConfigOptions;

  /** 单位为秒，默认 20 分钟 */
  pollingTime: number;

  mocks: IMocks;

  /** 百度翻译秘钥信息 */
  baiduTranslateConfigs?: Array<IBaiduTranslateConfig>;

  /** 指定翻译文件的生成路径（相对路径） */
  translatePath?: string;
}

export interface IPontConfig extends IBaseConfig {
  origins: IOriginConfig[];
}

export interface IStandardBaseConfig extends IBaseConfig {
  rootDir: string;
  configDir: string;
  hasOrigins: boolean;

  templateOriginalPath: {
    fetchMethodPath?: string;
    templatePath?: string;
    transformPath?: string;
    commonTemplatePath?: string;
  };
}

export interface IStandardOirginConfig extends IOriginConfig {
  rootDir: string;

  originType: OriginType;

  usingOperationId?: boolean;

  templateOriginalPath: {
    customTemplatePath?: string;
  };

  /** 百度翻译秘钥信息 */
  baiduTranslateConfigs?: Array<IBaiduTranslateConfig>;

  /** 指定翻译文件的生成路径（相对路径） */
  translatePath?: string;
}
