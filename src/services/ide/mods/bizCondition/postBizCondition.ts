/**
 * @desc 添加业务限定
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/bizCondition',
    params: bodyParams,
    method: 'post'
  });
}
