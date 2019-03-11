/**
 * @desc 删除一个数据域
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
  /** dataDomainId */
  dataDomainId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/{bizUnitId}/domain/{dataDomainId}',
    params,
    method: 'delete'
  });
}
