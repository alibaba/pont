/**
 * @desc 获取当前用户初始化信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.UserDetailInfoVO();

export async function request(params) {
  return pontFetch({
    url: '/api/userInfo/all',
    params,
    method: 'get'
  });
}
