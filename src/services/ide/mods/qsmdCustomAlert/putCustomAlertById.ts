/**
 * @desc 修改自定义报警
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/qsmd/api/customAlert/{id}',
    params: bodyParams,
    method: 'put'
  });
}
