/**
 * @desc 取消表的接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表id */
  modelId: string;
  /** 表的类型 */
  modelType?: number;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/dip/favor',
    params,
    method: 'delete'
  });
}
