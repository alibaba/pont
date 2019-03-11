/**
 * @desc 展开逻辑表调度实例，列出逻辑表物化节点实例列表
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
    url: '/api/smc/project/{projectId}/logical/{tableName}/physical/tasks/list',
    params,
    method: 'get'
  });
}
