/**
 * @desc 添加维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dim',
    params: bodyParams,
    method: 'post'
  });
}
