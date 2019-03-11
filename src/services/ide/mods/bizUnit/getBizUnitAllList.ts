/**
 * @desc 获取租户下所有业务板块
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/allList',
    params,
    method: 'get'
  });
}
