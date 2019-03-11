/**
 * @desc 审批通过
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
    url: '/api/dip/permission/{id}/accept',
    params: bodyParams,
    method: 'put'
  });
}
