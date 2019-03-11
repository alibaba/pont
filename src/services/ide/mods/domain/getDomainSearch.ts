/**
 * @desc 搜索一个业务板块下的数据域
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块Id */
  bizUnitId: number;
  /** 关键词 */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/{bizUnitId}/domain/search',
    params,
    method: 'get'
  });
}
