/**
 * @desc 数据源owner转交
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dsId */
  dsId: number;
  /** 转交owner */
  ownerId?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/{dsId}/owner',
    params,
    method: 'put'
  });
}
