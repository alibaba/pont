/**
 * @desc 下线节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
  /** 类型 */
  operatorType?: number;
  /** 文件名 */
  fileName?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/files/{fileId}/offline',
    params,
    method: 'post'
  });
}
