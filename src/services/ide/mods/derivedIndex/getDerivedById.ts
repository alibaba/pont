/**
 * @desc 获取详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** status */
  status?: string;
  /** id */
  id?: number;
  /** projectId */
  projectId: number;
}

export const init = new defs.DerivedIndexBO();

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/{id}',
    params,
    method: 'get'
  });
}
