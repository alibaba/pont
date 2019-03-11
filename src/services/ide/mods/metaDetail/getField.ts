/**
 * @desc 表结构
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表id */
  modelId: string;
  /** 表的类型 */
  modelType?: number;
}

export const init = new defs.TableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/field',
    params,
    method: 'get'
  });
}
