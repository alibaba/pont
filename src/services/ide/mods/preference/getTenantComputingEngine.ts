/**
 * @desc 读取租户计算引擎类型设置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.ComputingEngineBO();

export async function request(params) {
  return pontFetch({
    url: '/api/preference/tenant/computingEngine',
    params,
    method: 'get'
  });
}
