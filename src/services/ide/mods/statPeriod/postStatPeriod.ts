/**
 * @desc 新建统计周期
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/statPeriod',
    params: bodyParams,
    method: 'post'
  });
}
