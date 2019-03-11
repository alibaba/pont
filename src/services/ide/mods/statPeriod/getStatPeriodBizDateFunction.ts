/**
 * @desc 获取bizdate函数列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/statPeriod/bizDateFunction',
    params,
    method: 'get'
  });
}
