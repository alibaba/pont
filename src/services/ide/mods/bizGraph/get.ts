/**
 * @desc 获取某个数据域下面的业务图谱
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据域的id */
  domainId: number;
}

export const init = new defs.BizGraphBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/map/biz/',
    params,
    method: 'get'
  });
}
