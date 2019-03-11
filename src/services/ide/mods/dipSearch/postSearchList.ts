/**
 * @desc 搜索结果
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
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
  /** 排序字段，不传则为综合排序，创建时间排序则传gmtCreate，热度则传hot */
  orderBy?: string;
}

export const init = new defs.PagedData();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/search/list',
    params: bodyParams,
    method: 'post'
  });
}
