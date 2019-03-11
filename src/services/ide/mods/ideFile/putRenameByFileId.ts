/**
 * @desc 目录、文件重命名
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** fileId */
  fileId: number;
  /** projectId */
  projectId: number;
  /** newName */
  newName: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/file/rename/{fileId}',
    params,
    method: 'put'
  });
}
