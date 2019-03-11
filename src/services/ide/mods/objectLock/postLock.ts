/**
 * @desc 对象加锁(如果当前操作人已有锁, 无副作用)
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
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
    method: 'post'
  });
}
