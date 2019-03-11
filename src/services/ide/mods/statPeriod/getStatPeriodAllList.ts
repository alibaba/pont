/**
 * @desc 获取统计周期列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/statPeriod/allList',
    params,
    method: 'get'
  });
}
