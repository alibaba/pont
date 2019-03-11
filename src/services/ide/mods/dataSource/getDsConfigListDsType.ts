/**
 * @desc 获取数据源类型
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/listDsType',
    params,
    method: 'get'
  });
}
