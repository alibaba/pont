/**
 * @desc 获取逻辑表相关的详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** 表ID */
  tableId: number;
  /** 表类型type */
  tableTypeId: number;
}

export const init = new defs.SingleModelBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/table/queryTableDetail',
    params,
    method: 'get'
  });
}
