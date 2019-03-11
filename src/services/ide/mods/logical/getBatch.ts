/**
 * @desc 逻辑表调度DAG图节点实例状态接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 任务id列表 */
  taskIds: Array<string>;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/logical/batch',
    params,
    method: 'get'
  });
}
