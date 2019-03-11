/**
 * @desc 获取研发搜索结果
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
  /** 项目Id */
  projectId?: number;
}

export const init = new defs.IdeSearchResultBO();

export async function request(params) {
  return pontFetch({
    url: '/api/ide/search/list',
    params,
    method: 'get'
  });
}
