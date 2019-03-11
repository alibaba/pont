/**
 * @desc 删除一个业务板块
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块名称 */
  bizUnitName: string;
  /** bizUnitId */
  bizUnitId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/{bizUnitId}',
    params,
    method: 'delete'
  });
}
