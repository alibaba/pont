/**
 * @desc 事实逻辑表-获取单个模型
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
}

export const init = new defs.SingleModelBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/model/single',
    params,
    method: 'get'
  });
}
