/**
 * @desc 检查英文名是否可以修改
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnit/checkNameChange',
    params,
    method: 'get'
  });
}
