/**
 * @desc 批量删除成员
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** userIds */
  userIds: Array<string>;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/members',
    params,
    method: 'delete'
  });
}
