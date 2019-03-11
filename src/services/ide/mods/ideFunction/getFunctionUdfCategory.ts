/**
 * @desc UDF 类目菜单列表项
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/function/udf/category',
    params,
    method: 'get'
  });
}
