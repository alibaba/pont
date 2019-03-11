/**
 * @desc 根据id获取业务限定
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** status */
  status?: string;
  /** projectId */
  projectId?: number;
  /** id */
  id?: number;
}

export const init = new defs.BizConditionBO();

export async function request(params) {
  return pontFetch({
    url: '/api/bizCondition/biz/detail/{id}',
    params,
    method: 'get'
  });
}
