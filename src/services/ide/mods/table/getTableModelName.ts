/**
 * @desc 根据逻辑表type和id获取逻辑表表名
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表类型 */
  tableType: number;
  /** 表id */
  tableId: number;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/model/table/model/name',
    params,
    method: 'get'
  });
}
