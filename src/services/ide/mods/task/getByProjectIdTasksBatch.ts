/**
 * @desc 根据任务id列表查询任务详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id列表 */
  taskIds: Array<string>;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/batch',
    params,
    method: 'get'
  });
}
