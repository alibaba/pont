/**
 * @desc 编辑维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
  /** projectId */
  projectId: number;
  /** lock */
  lock: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dim/{id}',
    params: bodyParams,
    method: 'put'
  });
}
