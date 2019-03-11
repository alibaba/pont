/**
 * @desc 表结构-关联维度详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表id */
  modelId: string;
}

export const init = new defs.TableMetaBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/field/ref',
    params,
    method: 'get'
  });
}
