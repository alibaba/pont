/**
 * @desc 事实逻辑表-查看是否有线上版本
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/hasOnline',
    params,
    method: 'get'
  });
}
