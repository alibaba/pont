/**
 * @desc check节点的权限信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
}

export const init = new defs.AuthBaseBO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{fileId}/auth',
    params: bodyParams,
    method: 'post'
  });
}
