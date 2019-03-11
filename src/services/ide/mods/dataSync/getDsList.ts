/**
 * @desc 获取租户下数据源列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据源用途 */
  useType?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dataSync/dsList',
    params,
    method: 'get'
  });
}
