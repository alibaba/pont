/**
 * @desc 移动节点位置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
  /** 新的父节点id */
  newParentId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{fileId}/move',
    params,
    method: 'post'
  });
}
