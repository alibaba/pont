/**
 * @desc 根据节点输出名字批量查询节点详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 输出名字列表 */
  outputNames: Array<string>;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/batchGetByOutputNames',
    params,
    method: 'get'
  });
}
