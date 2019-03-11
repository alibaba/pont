/**
 * @desc 获取业务过程关联的所有表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务过程的id */
  bizProcessId: number;
}

export const init = new defs.LogicTableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/map/biz/getTablesByBizProcess',
    params,
    method: 'get'
  });
}
