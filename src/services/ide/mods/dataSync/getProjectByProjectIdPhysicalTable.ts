/**
 * @desc 获取物理表的列表(含分区、文件类型等属性)
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目projectId */
  projectId?: number;
  /** 数据源Id */
  dsId: number;
  /** 表名前缀 */
  prefix?: string;
  /** 表名(多表) */
  tableName?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dataSync/project/{projectId}/physicalTable',
    params,
    method: 'get'
  });
}
