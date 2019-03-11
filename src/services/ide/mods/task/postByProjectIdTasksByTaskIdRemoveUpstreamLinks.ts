/**
 * @desc 去除上游依赖
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
  /** 节点名 */
  nodeName: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/{taskId}/removeUpstreamLinks',
    params,
    method: 'post'
  });
}
