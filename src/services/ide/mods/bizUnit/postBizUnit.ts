/**
 * @desc 新建一个业务板块
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/bizUnit',
    params: bodyParams,
    method: 'post'
  });
}
