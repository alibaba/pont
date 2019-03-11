/**
 * @desc 根据节点id查询节点详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id */
  nodeId: string;
}

export const init = new defs.IdeNodeEntity();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}',
    params,
    method: 'get'
  });
}
