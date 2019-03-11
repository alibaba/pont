/**
 * @desc 提交调度节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
  /** lock */
  lock: number;
}

export const init = '';

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/release',
    params: bodyParams,
    method: 'post'
  });
}
