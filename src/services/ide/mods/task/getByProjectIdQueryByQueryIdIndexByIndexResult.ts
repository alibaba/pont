/**
 * @desc 获取临时查询的结果
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** queryId */
  queryId: string;
  /** index */
  index: number;
}

export const init = new defs.QueryResultVO();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/query/{queryId}/index/{index}/result',
    params,
    method: 'get'
  });
}
