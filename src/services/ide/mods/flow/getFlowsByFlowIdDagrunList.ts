/**
 * @desc 根据flowId获取多个dagrun
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** flowId */
  flowId?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/{projectId}/flows/{flowId}/dagrunList',
    params,
    method: 'get'
  });
}
