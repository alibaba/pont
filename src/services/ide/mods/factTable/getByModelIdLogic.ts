/**
 * @desc 事实逻辑表编辑-获取批量修改逻辑
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** 来源表名称 */
  logic: string;
}

export const init = new defs.LogicBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/logic',
    params,
    method: 'get'
  });
}
