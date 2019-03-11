/**
 * @desc 检查集群的连通性
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/preference/tenant/computingEngine/cluster/active',
    params: bodyParams,
    method: 'post'
  });
}
