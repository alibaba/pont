/**
 * @desc 获取用户偏好设置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** key */
  key: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/preference/user/{key}',
    params,
    method: 'get'
  });
}
