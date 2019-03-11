/**
 * @desc 搜索当前租户的项目信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块筛选 */
  bizUnitId?: number;
  /** 是否只搜素未绑定的项目 */
  unbindOnly?: boolean;
  /** 关键词筛选 */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project',
    params,
    method: 'get'
  });
}
