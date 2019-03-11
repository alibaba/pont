/**
 * @desc 数据管理/规范定义
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
    url: '/api/tree/dm/definition',
    params,
    method: 'get'
  });
}
