/**
 * @desc 获取关联搜索结果
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
  /** 业务板块Id */
  bizUnitId?: number;
}

export const init = new defs.RelatedSearchResultBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/search/related/list',
    params,
    method: 'get'
  });
}
