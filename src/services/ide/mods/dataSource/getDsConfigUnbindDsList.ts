/**
 * @desc 获取没有绑定的数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/unbindDsList',
    params,
    method: 'get'
  });
}
