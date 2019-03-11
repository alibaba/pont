/**
 * @desc 根据节点Id获取其fileId
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点Id */
  nodeId: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/fileId',
    params,
    method: 'get'
  });
}
