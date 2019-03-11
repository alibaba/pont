/**
 * @desc 更新业务过程
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务过程ID */
  id?: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/bizProcess/{id}',
    params: bodyParams,
    method: 'put'
  });
}
