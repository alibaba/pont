/**
 * @desc 获取维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** status */
  status?: string;
  /** projectId */
  projectId?: number;
  /** id */
  id?: number;
}

export const init = new defs.DimBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dim/{id}',
    params,
    method: 'get'
  });
}
