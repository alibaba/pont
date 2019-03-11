/**
 * @desc 模糊搜索有维度逻辑表的维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块ID */
  bizUnitId: number;
  /** 项目Id */
  projectId: number;
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dim/list/fuzzy',
    params,
    method: 'get'
  });
}
