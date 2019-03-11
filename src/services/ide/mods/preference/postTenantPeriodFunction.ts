/**
 * @desc 初始化周期函数
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/preference/tenant/periodFunction',
    params,
    method: 'post'
  });
}
