/**
 * @desc 当前环境支持的报警方式
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/qsmd/api/customAlert/alertTypes',
    params,
    method: 'get'
  });
}
