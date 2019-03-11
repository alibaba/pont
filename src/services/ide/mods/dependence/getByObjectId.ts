/**
 * @desc 获取依赖
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 被依赖的对象类型 */
  objectType?: number;
  /** 被依赖的对象ID */
  objectId?: number;
  /** 是否线上 */
  usingOnline?: boolean;
}

export const init = new defs.DependenceBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dependence/list/{objectType}/{objectId}',
    params,
    method: 'get'
  });
}
