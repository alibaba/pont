/**
 * @desc 指定业务板块下已绑定空间的项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块Id */
  bizUnitId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project/bindProjects',
    params,
    method: 'get'
  });
}
