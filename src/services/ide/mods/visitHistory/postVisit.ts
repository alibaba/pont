/**
 * @desc 用户访问行为记录
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/visit',
    params: bodyParams,
    method: 'post'
  });
}
