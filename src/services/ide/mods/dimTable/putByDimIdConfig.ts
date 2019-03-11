/**
 * @desc 维度表-配置信息
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

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/config',
    params: bodyParams,
    method: 'put'
  });
}
