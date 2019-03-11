/**
 * @desc 发布上线
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** projectId */
  projectId: number;
  /** lock */
  lock: number;
  /** 维度名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dim/{id}/online',
    params,
    method: 'put'
  });
}
