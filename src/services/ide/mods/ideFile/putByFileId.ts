/**
 * @desc 更新文件(目录)
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** lock */
  lock: number;
  /** fileId */
  fileId: number;
  /** 文件类型 */
  type?: string;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/file/{fileId}',
    params: bodyParams,
    method: 'put'
  });
}
