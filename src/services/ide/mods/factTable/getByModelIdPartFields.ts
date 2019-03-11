/**
 * @desc 事实逻辑表-推荐分区字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/part/fields',
    params,
    method: 'get'
  });
}
