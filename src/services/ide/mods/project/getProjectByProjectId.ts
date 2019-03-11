/**
 * @desc 根据项目ID获取该项目所属业务板块下已绑定的所有的项目ID
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
    url: '/api/project/{projectId}',
    params,
    method: 'get'
  });
}
