/**
 * @desc 中止某个dagrun
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** 要中止的dagrunId */
  dagrunId?: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/{projectId}/flows/{dagrunId}/kill',
    params,
    method: 'post'
  });
}
