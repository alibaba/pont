/**
 * @desc 验证权限
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** tenantId */
  tenantId: number;
  /** userId */
  userId: string;
  /** projectId */
  projectId: number;
  /** resourceKey */
  resourceKey: string;
  /** operateType */
  operateType: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/auth/hasPermission',
    params,
    method: 'get'
  });
}
