/**
 * @desc 移动文件或目录
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** sourceFileId */
  sourceFileId: number;
  /** destFileId */
  destFileId: number;
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/file/move/{sourceFileId}/to/{destFileId}',
    params,
    method: 'put'
  });
}
