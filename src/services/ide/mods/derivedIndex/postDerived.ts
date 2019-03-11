/**
 * @desc 批量添加派生指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
}

export const init = new defs.Result();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/index/derived',
    params: bodyParams,
    method: 'post'
  });
}
