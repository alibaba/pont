/**
 * @desc 转移owner
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
  /** newOwner */
  newOwner: string;
  /** projectId */
  projectId?: number;
  /** resourceType */
  resourceType: number;
  /** resourceId */
  resourceId: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/{id}/handover/{newOwner}',
    params,
    method: 'put'
  });
}
