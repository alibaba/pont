/**
 * @desc 获取数据域关联的所有表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据域id */
  domainId: number;
}

export const init = new defs.LogicTableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/map/biz/getTablesByDomain',
    params,
    method: 'get'
  });
}
