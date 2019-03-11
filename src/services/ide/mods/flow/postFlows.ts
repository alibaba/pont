/**
 * @desc 创建新的Flow（创建补数据）
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = '';

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/smc/{projectId}/flows',
    params: bodyParams,
    method: 'post'
  });
}
