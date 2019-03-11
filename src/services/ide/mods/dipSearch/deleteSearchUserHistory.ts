/**
 * @desc 删除用户搜索历史
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/search/user/history',
    params,
    method: 'delete'
  });
}
