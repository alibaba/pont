/**
 * @desc 解析逻辑表的调度配置, 并给出调度配置有问题的提示
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表模型id */
  modelId: number;
  /** 项目Id */
  projectId: number;
}

export const init = new defs.LogicalTableParseIssueDTO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/table/{modelId}/checkParseIssue',
    params: bodyParams,
    method: 'post'
  });
}
