/**
 * @desc 测试连通性
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.ConnectivityResult();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dsConfig/checkConnectivity',
    params: bodyParams,
    method: 'post'
  });
}
