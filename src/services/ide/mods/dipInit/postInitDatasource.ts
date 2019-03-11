/**
 * @desc 检查数据源是否已初始化
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/init/datasource',
    params: bodyParams,
    method: 'post'
  });
}
