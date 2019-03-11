/**
 * @desc 删除汇总逻辑表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 汇总逻辑表ID */
  summaryTableId?: number;
  /** 汇总逻辑表名 */
  name: string;
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/sumTable/{summaryTableId}',
    params,
    method: 'delete'
  });
}
