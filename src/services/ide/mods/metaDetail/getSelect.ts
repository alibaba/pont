/**
 * @desc 表结构-获取表的Select语句
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表Id */
  modelId: string;
  /** 表类型 */
  modelType: number;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/select',
    params,
    method: 'get'
  });
}
