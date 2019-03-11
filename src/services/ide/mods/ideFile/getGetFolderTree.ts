/**
 * @desc 获取指定分类文件夹
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** category */
  category: string;
  /** keyword */
  keyword?: string;
}

export const init = new defs.TreeNodeBO();

export async function request(params) {
  return pontFetch({
    url: '/api/file/getFolderTree',
    params,
    method: 'get'
  });
}
