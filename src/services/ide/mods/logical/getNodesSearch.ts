/**
 * @desc 搜索项目下的逻辑表节点和物理表节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 搜素文本 */
  searchText?: string;
  /** 逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表，4：物理表节点，逗号分隔 */
  types?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/logical/nodes/search',
    params,
    method: 'get'
  });
}
