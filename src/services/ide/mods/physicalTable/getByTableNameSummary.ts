/**
 * @desc 获取物理表概要信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** tableName */
  tableName: string;
  /** projectId */
  projectId: number;
}

export const init = new defs.PhysicalTableSummaryBO();

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/{tableName}/summary',
    params,
    method: 'get'
  });
}
