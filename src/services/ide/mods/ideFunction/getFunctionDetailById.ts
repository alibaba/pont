/**
 * @desc 获取函数详细信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
  /** projectId */
  projectId: number;
}

export const init = new defs.SysFunctionBO();

export async function request(params) {
  return pontFetch({
    url: '/api/function/detail/{id}',
    params,
    method: 'get'
  });
}
