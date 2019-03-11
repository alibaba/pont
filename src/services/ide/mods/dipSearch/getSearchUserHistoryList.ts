/**
 * @desc 获取用户搜索历史列表TOP
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/search/user/history/list',
    params,
    method: 'get'
  });
}
