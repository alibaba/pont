/**
 * @desc 获取业务过程相关的维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务过程的id */
  bizProcessId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/map/biz/dim',
    params,
    method: 'get'
  });
}
