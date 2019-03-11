/**
 * @desc 删除统计周期
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** statPeriodId */
  statPeriodId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/statPeriod/{statPeriodId}',
    params,
    method: 'delete'
  });
}
