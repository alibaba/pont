/**
 * @desc 首页-全部筛选列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 筛选对象 */
  filter: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/index/filter/list',
    params,
    method: 'get'
  });
}
