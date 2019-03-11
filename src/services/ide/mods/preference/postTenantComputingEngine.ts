/**
 * @desc 设置租户计算引擎
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** type */
  type: string;
  /** version */
  version: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/preference/tenant/computingEngine',
    params,
    method: 'post'
  });
}
