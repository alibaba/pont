/**
 * @desc 配置租户计算引擎[数据订正]
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** type */
  type: string;
  /** version */
  version: string;
  /** clusterUrls */
  clusterUrls: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/preference/tenant/computingEngine/config/fixdata',
    params,
    method: 'post'
  });
}
