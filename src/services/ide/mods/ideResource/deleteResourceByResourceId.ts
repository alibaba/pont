/**
 * @desc 删除资源文件
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** resourceId */
  resourceId: number;
  /** name */
  name?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/resource/{resourceId}',
    params,
    method: 'delete'
  });
}
