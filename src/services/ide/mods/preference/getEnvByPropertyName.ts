/**
 * @desc 获取应用环境变量
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** propertyName */
  propertyName: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/preference/env/{propertyName}',
    params,
    method: 'get'
  });
}
