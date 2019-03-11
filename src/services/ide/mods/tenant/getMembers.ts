/**
 * @desc 获取已加入租户的用户列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** fuzzyName */
  fuzzyName?: string;
  /** page */
  page: number;
  /** pageSize */
  pageSize: number;
  /** 排序的列，不为空时只能为account_name->账号名，gmt_create->创建的时间 */
  orderColumn?: string;
  /** 排序的方向，不为空时只能为desc->降序，asc->升序 */
  orderDirection?: string;
}

export const init = new defs.PagedData();

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/members',
    params,
    method: 'get'
  });
}
