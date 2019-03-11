/**
 * @desc 检查当前数据源和哪些数据源重复
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dsConfig/checkRepeat',
    params: bodyParams,
    method: 'post'
  });
}
