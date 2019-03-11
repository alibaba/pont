/**
 * @desc 事实逻辑表-获取表已发布字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** modelId */
  modelId?: number;
  /** 项目Id */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/online/attrs',
    params,
    method: 'get'
  });
}
