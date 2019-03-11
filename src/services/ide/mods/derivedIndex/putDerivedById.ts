/**
 * @desc 更新派生指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** projectId */
  projectId?: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/index/derived/{id}',
    params: bodyParams,
    method: 'put'
  });
}
