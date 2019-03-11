/**
 * @desc /获取物理表字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** 物理表项目id */
  physicalTableProjectId: number;
  /** 物理表名称 */
  logicTableName: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/getTableAttribute',
    params,
    method: 'get'
  });
}
