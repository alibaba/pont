/**
 * @desc 获取表描述详情信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表id */
  id: string;
  /** 查询表类型 */
  tableType: number;
}

export const init = new defs.TableDetailBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/detail/getDetail',
    params,
    method: 'get'
  });
}
