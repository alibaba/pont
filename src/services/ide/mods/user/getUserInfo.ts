/**
 * @desc 获取当前用户信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.UserInfoVO();

export async function request(params) {
  return pontFetch({
    url: '/api/userInfo',
    params,
    method: 'get'
  });
}
