/**
 * @desc 修改任务优先级
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id */
  taskId: string;
  /** 节点id */
  nodeId: string;
  /** 任务优先级 */
  taskPriority: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/updatePriority',
    params,
    method: 'post'
  });
}
