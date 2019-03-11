/**
 * @desc 展开逻辑表调度节点，列出物理调度节点列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** tableName */
  tableName: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/logical/{tableName}/physical/nodes/list',
    params,
    method: 'get'
  });
}
