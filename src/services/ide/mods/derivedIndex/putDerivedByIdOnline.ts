/**
 * @desc 发布上线
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** projectId */
  projectId?: number;
  /** lock */
  lock?: number;
  /** 派生指标名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/{id}/online',
    params,
    method: 'put'
  });
}
