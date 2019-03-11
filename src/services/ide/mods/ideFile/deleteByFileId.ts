/**
 * @desc 删除文件(目录)
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** fileId */
  fileId: number;
  /** 文件名 */
  name: string;
  /** 文件类型 */
  type?: string;
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/file/{fileId}',
    params,
    method: 'delete'
  });
}
