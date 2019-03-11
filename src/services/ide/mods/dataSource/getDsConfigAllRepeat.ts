/**
 * @desc 检查所有数据源重复
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/allRepeat',
    params,
    method: 'get'
  });
}
