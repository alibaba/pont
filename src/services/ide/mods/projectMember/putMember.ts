/**
 * @desc 批量更新用户角色
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
    method: 'put'
  });
}
