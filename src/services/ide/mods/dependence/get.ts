/**
 * @desc 批量获取依赖
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 被依赖的对象类型 */
  objectType?: number;
  /** 被依赖对象的id列表 */
  ids?: Array<integer>;
  /** 是否线上 */
  usingOnline?: boolean;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dependence/list/{objectType}/',
    params,
    method: 'get'
  });
}
