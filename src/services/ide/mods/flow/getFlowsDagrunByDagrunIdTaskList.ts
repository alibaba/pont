/**
 * @desc 根据dagrunId获取task列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** dagrunId */
  dagrunId?: string;
  /** 状态集合，code逗号隔开 */
  statusCodes?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/{projectId}/flows/dagrun/{dagrunId}/taskList',
    params,
    method: 'get'
  });
}
