import type { StandardDataSource } from '../main/StandardDataSource';
import type { IStandardConfig } from './pontConfig';

export interface IOriginReader {
  /** 获取远程数据 */
  fetchMethod(originUrl: string): Promise<string>;

  /** 翻译数据中的非法字符，如：中文命名转英文 */
  translate(jsonString: string): Promise<string>;

  /** 将远程数据转化成 pont 标准数据模型 */
  transform2StandardDataSource<T>(json: T, config: IStandardConfig): Promise<StandardDataSource>;

  /** 二次加工标准数据模型 */
  transformStandardDataSource(dataSource: StandardDataSource): Promise<StandardDataSource>;
}

export interface ICodeGenerator {}

export interface IFileStructures {}
