/**
 * @desc 获取任务执行日志
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
  /** taskrunId */
  taskrunId: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/taskrun/{taskrunId}/taskrunLog',
    params,
    method: 'get'
  });
}
