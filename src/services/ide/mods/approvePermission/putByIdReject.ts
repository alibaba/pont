/**
 * @desc 拒绝申请
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/permission/{id}/reject',
    params: bodyParams,
    method: 'put'
  });
}
