/**
 * @desc 获取任务代码
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
}

export const init = new defs.TaskContentEntity();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/content',
    params,
    method: 'get'
  });
}
