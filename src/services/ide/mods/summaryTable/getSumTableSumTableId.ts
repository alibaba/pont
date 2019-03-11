/**
 * @desc 获取汇总逻辑表ID
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块ID */
  bizUnitId: number;
  /** 维度ID列表 */
  dimId?: Array<integer>;
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/sumTable/sumTableId',
    params,
    method: 'get'
  });
}
