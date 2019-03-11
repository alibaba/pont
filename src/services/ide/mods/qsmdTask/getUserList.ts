/**
 * @desc 用户查询
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/qsmd/api/user/list',
    params,
    method: 'get'
  });
}
