/**
 * @desc 获取临时查询的日志
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
  /** 偏移量 */
  offset: number;
}

export const init = new defs.QueryLogVO();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/query/{queryId}/index/{index}/log',
    params,
    method: 'get'
  });
}
