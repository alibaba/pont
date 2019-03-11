/**
 * @desc 维度表编辑-批量修改逻辑
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
  /** lock */
  lock: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/logic',
    params: bodyParams,
    method: 'put'
  });
}
