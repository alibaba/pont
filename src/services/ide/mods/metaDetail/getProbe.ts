/**
 * @desc 逻辑表字段数据探查
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表的guid */
  modelId: string;
  /** 字段名称 */
  columnName: string;
  /** 表的类型 */
  modelType: number;
}

export const init = new defs.LogicalColumnProbeResultBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/probe',
    params,
    method: 'get'
  });
}
