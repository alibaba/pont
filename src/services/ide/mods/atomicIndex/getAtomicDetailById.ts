/**
 * @desc 根据id获取原子指标详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** projectId */
  projectId?: number;
  /** status */
  status?: string;
}

export const init = new defs.AtomicIndexDetailBO();

export async function request(params) {
  return pontFetch({
    url: '/api/index/atomic/detail/{id}',
    params,
    method: 'get'
  });
}
