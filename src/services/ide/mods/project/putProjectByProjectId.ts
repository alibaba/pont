/**
 * @desc 更新项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/project/{projectId}',
    params: bodyParams,
    method: 'put'
  });
}
