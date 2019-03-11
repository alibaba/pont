/**
 * @desc 获取相关派生指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** status */
  status?: string;
  /** projectId */
  projectId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/{id}/similar',
    params,
    method: 'get'
  });
}
