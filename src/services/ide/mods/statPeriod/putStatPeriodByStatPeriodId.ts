/**
 * @desc 更新统计周期
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** statPeriodId */
  statPeriodId: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/statPeriod/{statPeriodId}',
    params: bodyParams,
    method: 'put'
  });
}
