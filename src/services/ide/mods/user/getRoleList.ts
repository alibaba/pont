/**
 * @desc 获取某个用户的所属角色列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 用户id */
  userId?: string;
  /** 用户所属租户id */
  tenantId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/role/list',
    params,
    method: 'get'
  });
}
