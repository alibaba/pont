/**
 * @desc 事实逻辑表-获取模型提交状态
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/getSubmitStatus',
    params,
    method: 'get'
  });
}
