/**
 * @desc 获取汇总逻辑表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 汇总逻辑表ID */
  summaryTableId: number;
  /** projectId */
  projectId: number;
}

export const init = new defs.SummaryTableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/sumTable/{summaryTableId}',
    params,
    method: 'get'
  });
}
