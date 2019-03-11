/**
 * @desc 提交权限申请
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/permission',
    params: bodyParams,
    method: 'post'
  });
}
