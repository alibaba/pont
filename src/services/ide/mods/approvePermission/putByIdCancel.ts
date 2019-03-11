/**
 * @desc 撤销审批单
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/{id}/cancel',
    params,
    method: 'put'
  });
}
