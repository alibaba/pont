/**
 * @desc 提交一个临时任务
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = new defs.QueryVO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/submit',
    params: bodyParams,
    method: 'post'
  });
}
