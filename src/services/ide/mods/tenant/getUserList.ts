/**
 * @desc 获取租户的用户列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 租户id,已废弃 */
  tenantId?: number;
  /** 排除项目成员 */
  excludeProject?: number;
  /** 关键字 */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/user/list',
    params,
    method: 'get'
  });
}
