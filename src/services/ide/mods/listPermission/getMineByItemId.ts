/**
 * @desc 获取我的权限详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** itemId */
  itemId: number;
  /** resourceType */
  resourceType: number;
  /** resourceId */
  resourceId: string;
  /** projectId */
  projectId?: number;
  /** isOwner */
  isOwner: boolean;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/mine/{itemId}',
    params,
    method: 'get'
  });
}
