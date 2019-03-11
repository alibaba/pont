/**
 * @desc 代码管理目录树
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** keyword */
  keyword?: string;
}

export const init = new defs.TreeNodeBO();

export async function request(params) {
  return pontFetch({
    url: '/api/tree/codeManage',
    params,
    method: 'get'
  });
}
