/**
 * @desc 自动生成手工节点flow名称
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id */
  nodeId: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/flowName',
    params,
    method: 'get'
  });
}
