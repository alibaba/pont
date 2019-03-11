/**
 * @desc 读取文件
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** fileId */
  fileId: number;
}

export const init = new defs.IdeFileBO();

export async function request(params) {
  return pontFetch({
    url: '/api/file/{fileId}',
    params,
    method: 'get'
  });
}
