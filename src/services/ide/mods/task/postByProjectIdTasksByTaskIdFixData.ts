/**
 * @desc 重跑下游任务
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
  /** 是否包含根节点 */
  withRootTask: boolean;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/fixData',
    params: bodyParams,
    method: 'post'
  });
}
