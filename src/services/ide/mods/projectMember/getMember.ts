/**
 * @desc 获取项目成员列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 用户名 或 userId关键字筛选 */
  keyword?: string;
  /** 角色筛选: 0(owner), 1(admin), 2(developer), 3(guest) */
  roleId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/member',
    params,
    method: 'get'
  });
}
