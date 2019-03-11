/**
 * @desc 获取当前用户项目角色信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.UserRoleInfoVO();

export async function request(params) {
  return pontFetch({
    url: '/api/userRoleInfo',
    params,
    method: 'get'
  });
}
