/**
 * @desc 手工同步当前租户底层的账号源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/accountSource/syncing',
    params,
    method: 'put'
  });
}
