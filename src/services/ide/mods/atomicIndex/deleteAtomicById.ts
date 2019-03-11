/**
 * @desc 删除原子指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
  /** projectId */
  projectId: number;
  /** deleteOnline */
  deleteOnline?: boolean;
  /** 原子指标名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/index/atomic/{id}',
    params,
    method: 'delete'
  });
}
