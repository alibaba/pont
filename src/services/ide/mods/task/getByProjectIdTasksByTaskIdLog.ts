/**
 * @desc 获取任务运行日志
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
  /** 偏移量 */
  offset: number;
}

export const init = new defs.TaskrunLog();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/log',
    params,
    method: 'get'
  });
}
