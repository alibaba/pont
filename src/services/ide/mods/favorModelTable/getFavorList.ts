/**
 * @desc [程素] 获取用户收藏列表
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
    url: '/api/dip/favor/list',
    params,
    method: 'get'
  });
}
