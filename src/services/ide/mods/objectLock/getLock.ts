/**
 * @desc 查询对象的加锁信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 对象ID */
  objectId?: number;
  /** 对象类型 */
  objectType?: string;
}

export const init = new defs.ObjectLockBO();

export async function request(params) {
  return pontFetch({
    url: '/api/lock',
    params,
    method: 'get'
  });
}
