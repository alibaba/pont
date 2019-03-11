/**
 * @desc 获取租户下所有数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** useType */
  useType: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/allList',
    params,
    method: 'get'
  });
}
