/**
 * @desc 根据文件Id获取节点配置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
}

export const init = new defs.NodeDTO();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/files/{fileId}/nodes/',
    params,
    method: 'get'
  });
}
