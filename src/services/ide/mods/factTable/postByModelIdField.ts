/**
 * @desc 事实逻辑表新增-度量或者事实属性
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/field/',
    params: bodyParams,
    method: 'post'
  });
}
