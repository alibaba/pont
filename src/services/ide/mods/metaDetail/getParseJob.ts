/**
 * @desc 调起解析任务
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/parseJob',
    params,
    method: 'get'
  });
}
