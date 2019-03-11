/**
 * @desc 恢复任务调度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/resume',
    params,
    method: 'post'
  });
}
