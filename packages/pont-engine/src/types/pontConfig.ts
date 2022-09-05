import { ResolveConfigOptions } from 'prettier';

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

export interface IMocks {
  enable: boolean;
  port: number;
  basePath: string;
  wrapper: string;
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

export interface IDataSourceConfig {
  name?: string;
  rootDir: string;
  outDir: string;
  originUrl?: string;
  originType: OriginType;
  surrounding: Surrounding;

  fetchMethodPath: string;
  templateType: string;
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

export interface IOriginConfig {
  name: string;
  outDir?: string;
  originUrl: string;
  originType: OriginType;

  fetchMethodPath?: string;
  transformPath?: string;

  usingOperationId: boolean;
}

export interface IPontConfig extends IDataSourceConfig {
  origins: IOriginConfig[];
}
