/**
 * @desc 查询报警记录配置项
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
    url: '/qsmd/api/alertRecord/filter/list',
    params,
    method: 'get'
  });
}
