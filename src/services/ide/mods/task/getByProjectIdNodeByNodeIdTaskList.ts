/**
 * @desc 根据手工节点id获取其所有task列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** 手工节点id */
  nodeId: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/node/{nodeId}/taskList',
    params,
    method: 'get'
  });
}
