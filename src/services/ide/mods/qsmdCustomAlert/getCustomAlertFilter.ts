/**
 * @desc 自定义报警查询配置
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
    url: '/qsmd/api/customAlert/filter',
    params,
    method: 'get'
  });
}
