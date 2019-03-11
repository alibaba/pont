/**
 * @desc 获取用户最近访问列表（数据地图-我的浏览）
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** page */
  page?: number;
  /** offset */
  offset?: number;
  /** pageSize */
  pageSize?: number;
  /** doNotCount */
  doNotCount?: boolean;
}

export const init = new defs.PagedData();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/visit/history/list',
    params,
    method: 'get'
  });
}
