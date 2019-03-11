/**
 * @desc 配置节点的时候搜索可选节点[可跨项目]
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 搜素文本 */
  searchText?: string;
  /** 页数 */
  pageNum?: number;
  /** 节点类型1：周期，3是手动 */
  nodeType?: number;
  /** 实例来源(黑盒:onedata3-server|IDE:onedata-ide) */
  nodeFroms?: Array<string>;
  /** 每页大小 */
  pageSize?: number;
  /** 项目Id */
  projectId: number;
}

export const init = new defs.PaginatedResult();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/nodeList',
    params,
    method: 'get'
  });
}
