/**
 * @desc 获取支持的任务类型
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/supportedTaskType',
    params,
    method: 'get'
  });
}
