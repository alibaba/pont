/**
 * @desc 查询当前用户的项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project/mine',
    params,
    method: 'get'
  });
}
