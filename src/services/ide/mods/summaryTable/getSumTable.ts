/**
 * @desc 获取汇总逻辑表List
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块ID */
  bizUnitId: number;
  /** projectId */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/sumTable',
    params,
    method: 'get'
  });
}
