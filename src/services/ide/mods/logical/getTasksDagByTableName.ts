/**
 * @desc 逻辑表调度任务DAG节点图
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** tableName */
  tableName: string;
  /** 业务日期 */
  bizDate?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/logical/tasks/dag/{tableName}',
    params,
    method: 'get'
  });
}
