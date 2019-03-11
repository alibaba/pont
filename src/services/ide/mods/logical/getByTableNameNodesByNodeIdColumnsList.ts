/**
 * @desc 逻辑表物化节点查看字段列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** tableName */
  tableName: string;
  /** nodeId */
  nodeId: string;
  /** 参考OneDataTypeEnum，逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表 */
  logicalType: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/logical/{tableName}/nodes/{nodeId}/columns/list',
    params,
    method: 'get'
  });
}
