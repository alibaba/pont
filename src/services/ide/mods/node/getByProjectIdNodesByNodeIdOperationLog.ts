/**
 * @desc 查询节点的操作记录
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id */
  nodeId: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/operationLog',
    params,
    method: 'get'
  });
}
