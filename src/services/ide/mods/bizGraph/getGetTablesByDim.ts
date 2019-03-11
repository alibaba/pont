/**
 * @desc 获取维度关联的所有表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 维度id */
  dimId: number;
}

export const init = new defs.LogicTableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/map/biz/getTablesByDim',
    params,
    method: 'get'
  });
}
