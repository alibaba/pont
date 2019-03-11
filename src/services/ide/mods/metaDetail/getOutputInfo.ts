/**
 * @desc 表结构-获取表的产出信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表guid */
  modelId: string;
  /** 逻辑表的id,物理表不用给值 */
  logicalTableId?: number;
  /** 表类型 */
  modelType: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/outputInfo',
    params,
    method: 'get'
  });
}
