/**
 * @desc 删除一个数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dsId */
  dsId: number;
  /** datasourceName */
  datasourceName: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/{dsId}',
    params,
    method: 'delete'
  });
}
