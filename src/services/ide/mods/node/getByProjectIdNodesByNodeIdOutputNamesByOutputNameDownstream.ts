/**
 * @desc 查询依赖某节点输出的直接下游节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id */
  nodeId: string;
  /** 输出名称 */
  outputName: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/outputNames/{outputName}/downstream',
    params,
    method: 'get'
  });
}
