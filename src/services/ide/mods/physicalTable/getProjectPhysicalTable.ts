/**
 * @desc getColumnsByTableName
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** tenantId */
  tenantId: number;
  /** dsId */
  dsId: number;
  /** 表名称 */
  tableName: string;
}

export const init = new defs.PhysicalTableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/project/physicalTable',
    params,
    method: 'get'
  });
}
