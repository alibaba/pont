/**
 * @desc 批量添加项目成员
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/project/{projectId}/member/',
    params: bodyParams,
    method: 'post'
  });
}
