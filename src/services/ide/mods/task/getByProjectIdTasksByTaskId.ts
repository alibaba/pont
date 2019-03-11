/**
 * @desc 根据任务id查询任务详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
}

export const init = new defs.TaskEntity();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}',
    params,
    method: 'get'
  });
}
