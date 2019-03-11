/**
 * @desc 表结构-获取表或者逻辑字段的血缘关系
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表的guid */
  modelId: string;
  /** 表类型 */
  modelType: number;
  /** 字段Id */
  columnName?: string;
}

export const init = new defs.TableBloodRelationBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/bloodRelation',
    params,
    method: 'get'
  });
}
