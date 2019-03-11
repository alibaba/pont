/**
 * @desc 获取计算引擎列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/preference/computingEngineList',
    params,
    method: 'get'
  });
}
