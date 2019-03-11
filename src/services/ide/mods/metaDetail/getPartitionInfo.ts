/**
 * @desc 表结构-获取物理表和逻辑字段的分区列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表guid */
  modelId: string;
  /** 逻辑表的id，物理表不用给 */
  logicalTableId?: number;
  /** 结束日期 */
  endDate?: string;
  /** 表字段 */
  modelColumnList?: Array<string>;
  /** 表类型 */
  modelType: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/partitionInfo',
    params,
    method: 'get'
  });
}
