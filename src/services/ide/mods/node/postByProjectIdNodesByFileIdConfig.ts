/**
 * @desc 新增和修改节点配置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 目录树的id */
  fileId: number;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{fileId}/config',
    params: bodyParams,
    method: 'post'
  });
}
