/**
 * @desc 节点重命名
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
  /** 节点新名称 */
  newName: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{fileId}/rename',
    params,
    method: 'post'
  });
}
