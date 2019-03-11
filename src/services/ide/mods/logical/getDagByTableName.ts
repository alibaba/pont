/**
 * @desc 逻辑表调度DAG节点图
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
    url: '/api/smc/project/{projectId}/logical/dag/{tableName}',
    params,
    method: 'get'
  });
}
