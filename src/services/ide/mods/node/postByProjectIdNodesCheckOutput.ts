/**
 * @desc 校验节点输出
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目Id */
  projectId: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/checkOutput',
    params: bodyParams,
    method: 'post'
  });
}
