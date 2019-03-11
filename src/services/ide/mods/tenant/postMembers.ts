/**
 * @desc 批量添加成员
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/tenant/members',
    params,
    method: 'post'
  });
}
