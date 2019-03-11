/**
 * @desc 获取可加入租户的用户列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/users',
    params,
    method: 'get'
  });
}
