/**
 * @desc 获取物理表下所有字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据源Id */
  dsId: number;
  /** 物理表表名 */
  tableName: string;
  /** 项目id */
  projectId: number;
  /** 已被使用字段集合 */
  columnUsedList?: Array<string>;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dataSync/tableColList',
    params,
    method: 'get'
  });
}
