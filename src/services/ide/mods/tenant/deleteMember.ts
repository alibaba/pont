/**
 * @desc 删除成员
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** userId */
  userId: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/member',
    params,
    method: 'delete'
  });
}
