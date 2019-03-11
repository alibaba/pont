/**
 * @desc 获取对象所在的项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 对象ID */
  objectId?: string;
  /** 对象类型 */
  objectType?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/object/{objectId}',
    params,
    method: 'get'
  });
}
