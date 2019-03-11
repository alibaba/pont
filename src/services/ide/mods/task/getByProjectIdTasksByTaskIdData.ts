/**
 * @desc 下载任务结果
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/data',
    params,
    method: 'get'
  });
}
