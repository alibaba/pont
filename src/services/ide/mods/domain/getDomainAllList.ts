/**
 * @desc 获取一个业务板块下的所有数据域
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/{bizUnitId}/domain/allList',
    params,
    method: 'get'
  });
}
