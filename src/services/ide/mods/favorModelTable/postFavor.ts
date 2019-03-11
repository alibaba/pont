/**
 * @desc 收藏逻辑表／物理表的接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = '';

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/favor',
    params: bodyParams,
    method: 'post'
  });
}
