/**
 * @desc 中止临时查询
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** queryId */
  queryId: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/query/{queryId}/kill',
    params,
    method: 'post'
  });
}
