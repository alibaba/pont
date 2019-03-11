/**
 * @desc 获取一个业务板块
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = new defs.BizUnitBO();

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/{bizUnitId}',
    params,
    method: 'get'
  });
}
