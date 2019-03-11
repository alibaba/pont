/**
 * @desc 查询节点的上游节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id */
  nodeId: string;
  /** 深度, 最大30 */
  depth: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/upstream',
    params,
    method: 'get'
  });
}
