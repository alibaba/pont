/**
 * @desc [公共]获取节点类型的列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodeTypeList',
    params,
    method: 'get'
  });
}
