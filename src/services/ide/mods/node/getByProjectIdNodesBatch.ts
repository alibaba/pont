/**
 * @desc 根据节点id查询节点详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id列表 */
  nodeIds: Array<string>;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/batch',
    params,
    method: 'get'
  });
}
