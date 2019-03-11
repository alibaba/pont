/**
 * @desc 资产地图筛选结果
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
    url: '/api/dip/filter/list',
    params,
    method: 'get'
  });
}
