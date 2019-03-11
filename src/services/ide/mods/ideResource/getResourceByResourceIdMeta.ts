/**
 * @desc 获取资源元数据
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** resourceId */
  resourceId: number;
  /** projectId */
  projectId: number;
}

export const init = new defs.ResourceMetaBO();

export async function request(params) {
  return pontFetch({
    url: '/api/resource/{resourceId}/meta',
    params,
    method: 'get'
  });
}
