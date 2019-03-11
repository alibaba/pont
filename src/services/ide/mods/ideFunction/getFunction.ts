/**
 * @desc 获取函数列表,包含系统函数和UDF函数
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** keyword */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/function',
    params,
    method: 'get'
  });
}
