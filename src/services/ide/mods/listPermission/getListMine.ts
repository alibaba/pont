/**
 * @desc 我的权限
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 资源类型 */
  resourceType?: number;
  /** 搜索关键词 */
  keyword?: string;
  /** 是否owner */
  isOwner?: boolean;
  /** 账号类型 */
  accountType?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/list/mine',
    params,
    method: 'get'
  });
}
