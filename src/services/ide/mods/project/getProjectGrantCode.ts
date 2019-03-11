/**
 * @desc GET接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/project/grantCode',
    params,
    method: 'get'
  });
}
