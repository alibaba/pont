/**
 * @desc 维度表-获取模型提交执行状态
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/submit/status',
    params,
    method: 'get'
  });
}
