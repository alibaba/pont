/**
 * @desc 查找节点特定版本的代码
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** nodeId */
  nodeId?: string;
  /** 版本 */
  version?: number;
}

export const init = new defs.NodeContentEntity();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/codeContent',
    params,
    method: 'get'
  });
}
