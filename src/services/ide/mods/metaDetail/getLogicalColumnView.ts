/**
 * @desc 逻辑字段的数据预览
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表id */
  modelId: string;
  /** 字段名称 */
  columnName: string;
  /** 表的类型 */
  modelType: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/logicalColumn/view',
    params,
    method: 'get'
  });
}
