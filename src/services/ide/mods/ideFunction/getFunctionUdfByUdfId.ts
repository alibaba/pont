/**
 * @desc 获取 UDF 详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** udfId */
  udfId: number;
}

export const init = new defs.IdeUdfBO();

export async function request(params) {
  return pontFetch({
    url: '/api/function/udf/{udfId}',
    params,
    method: 'get'
  });
}
