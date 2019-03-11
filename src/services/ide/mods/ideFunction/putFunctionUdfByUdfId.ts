/**
 * @desc 更新 UDF 信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** udfId */
  udfId: number;
  /** projectId */
  projectId: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/function/udf/{udfId}',
    params: bodyParams,
    method: 'put'
  });
}
