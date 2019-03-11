/**
 * @desc [公共]获取节点状态的列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/task/statusCode/list',
    params,
    method: 'get'
  });
}
