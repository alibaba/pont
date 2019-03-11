/**
 * @desc 设定用户偏好设置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** key */
  key: string;
  /** value */
  value: string;
  /** desc */
  desc?: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/preference/user/{key}',
    params,
    method: 'post'
  });
}
