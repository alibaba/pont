/**
 * @desc 查找节点的所有发布版本
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** nodeId */
  nodeId?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/historyRealse',
    params,
    method: 'get'
  });
}
