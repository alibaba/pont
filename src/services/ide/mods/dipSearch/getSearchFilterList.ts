/**
 * @desc 搜索结果页-全部筛选列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
  /** 筛选对象 */
  filter: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/search/filter/list',
    params,
    method: 'get'
  });
}
