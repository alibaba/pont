/**
 * @desc 根据id获取原子指标
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

export const init = new defs.AtomicIndexBO();

export async function request(params) {
  return pontFetch({
    url: '/api/index/atomic/atomic/{id}',
    params,
    method: 'get'
  });
}
