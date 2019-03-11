/**
 * @desc 表结构-获取物理表分区列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表guid */
  tableGuid: string;
  /** 页数 */
  pageIndex: number;
  /** 页大小 */
  pageSize: number;
}

export const init = new defs.PagedData();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/physicalTablePartition',
    params,
    method: 'get'
  });
}
