/**
 * @desc 周期节点列表及筛选
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 搜素文本 */
  searchText?: string;
  /** 页数 */
  pageNum?: number;
  /** 每页大小 */
  pageSize?: number;
  /** 归属范围,用户id逗号隔开 */
  userIds?: string;
  /** 实例来源(黑盒:onedata3-server|IDE:onedata-ide) */
  nodeFroms?: Array<string>;
  /** 发布日期 */
  publishDate?: string;
  /** 任务类型【operator类型】 */
  operatorTypes?: string;
}

export const init = new defs.PaginatedResult();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/list',
    params,
    method: 'get'
  });
}
