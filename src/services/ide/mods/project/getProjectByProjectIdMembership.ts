/**
 * @desc 查询当前用户是否为指定项目的成员
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/membership',
    params,
    method: 'get'
  });
}
