/**
 * @desc 获取某个业务板块下的维度图谱
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块的id */
  bizUnitId: number;
}

export const init = new defs.DimGraphBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/graph/dimGraph/{bizUnitId}',
    params,
    method: 'get'
  });
}
