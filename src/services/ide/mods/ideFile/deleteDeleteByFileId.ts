/**
 * @desc 目录、文件删除
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** fileId */
  fileId: number;
  /** projectId */
  projectId: number;
  /** 文件名 */
  name: string;
  /** 文件类型 */
  type?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/file/delete/{fileId}',
    params,
    method: 'delete'
  });
}
