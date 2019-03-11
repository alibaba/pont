/**
 * @desc 任务搜索
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** taskName */
  taskName?: string;
  /** projectId */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/qsmd/api/task/search',
    params,
    method: 'get'
  });
}
