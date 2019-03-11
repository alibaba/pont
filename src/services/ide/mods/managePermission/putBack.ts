/**
 * @desc 交还权限
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
    url: '/api/dip/permission/{id}/back',
    params,
    method: 'put'
  });
}
