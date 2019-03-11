/**
 * @desc 删除 UDF
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** udfId */
  udfId: number;
  /** projectId */
  projectId: number;
  /** 函数名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/function/udf/{udfId}',
    params,
    method: 'delete'
  });
}
