/**
 * @desc 事实逻辑表-详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
}

export const init = new defs.FactTableBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}',
    params,
    method: 'get'
  });
}
