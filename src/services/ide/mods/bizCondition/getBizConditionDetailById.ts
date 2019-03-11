/**
 * @desc 根据id获取业务限定详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** status */
  status?: string;
  /** id */
  id?: number;
  /** projectId */
  projectId?: number;
}

export const init = new defs.BaseBO();

export async function request(params) {
  return pontFetch({
    url: '/api/bizCondition/detail/{id}',
    params,
    method: 'get'
  });
}
