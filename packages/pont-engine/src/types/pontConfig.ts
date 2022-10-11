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

export interface IBaseConfig {
  name: string;
  outDir?: string;
  originUrl: string;
  originType: OriginType;

  fetchMethodPath?: string;
  transformPath?: string;

  usingOperationId: boolean;
}

export interface IOriginConfig {
  name: string;
  outDir?: string;
  originUrl: string;
  originType: OriginType;

  fetchMethodPath?: string;
  transformPath?: string;

  usingOperationId: boolean;
}

export interface IDataSourceConfig {
  name?: string;
  outDir: string;
  originUrl?: string;
  originType: OriginType;
  surrounding: Surrounding;
  templateType: string;

  customTemplatePath: string;
  fetchMethodPath: string;
  templatePath: string;
  transformPath: string;

  usingOperationId: boolean;
  usingMultipleOrigins: boolean;
  spiltApiLock: boolean;
  taggedByName: boolean;

  scannedRange: string[];
  prettierConfig: ResolveConfigOptions;
  /** 单位为秒，默认 20 分钟 */
  pollingTime: number;

  mocks: IMocks;
}

export interface IPontConfig extends IDataSourceConfig {
  origins: IOriginConfig[];
}

export interface IStandardConfig extends IDataSourceConfig {
  rootDir: string;
  configDir: string;
  hasOrigins: boolean;
}
