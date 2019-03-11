/**
 * @desc 搜索菜单树
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** typeCodes */
  typeCodes: string;
  /** keyword */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/tree/searchTree',
    params,
    method: 'get'
  });
}
