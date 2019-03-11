/**
 * @desc 资源类型列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/resource/type/oss',
    params,
    method: 'get'
  });
}
