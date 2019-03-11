/**
 * @desc 获取当前租户底层的账号源信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.AccountSourceId();

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/accountSource',
    params,
    method: 'get'
  });
}
