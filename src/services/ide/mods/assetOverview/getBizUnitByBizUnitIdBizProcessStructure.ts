/**
 * @desc 业务板块下业务处理过程的数据结构信息（业务过程，维度之间的关系）
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = new defs.BizProcessStructureBO();

export async function request(params) {
  return pontFetch({
    url: '/api/assetOverview/bizUnit/{bizUnitId}/bizProcessStructure',
    params,
    method: 'get'
  });
}
