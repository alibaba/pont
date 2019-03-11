/**
 * @desc 解析逻辑表的输入输出
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表模型id */
  modelId: number;
  /** 项目Id */
  projectId: number;
}

export const init = new defs.LogicalTableInputOutputDTO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/table/{modelId}/parseInputOutput',
    params,
    method: 'post'
  });
}
