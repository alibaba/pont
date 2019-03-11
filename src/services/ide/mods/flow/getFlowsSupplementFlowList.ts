/**
 * @desc 补数据实例列表及筛选
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 搜索文本 */
  searchText?: string;
  /** 运行日期 */
  runDate?: string;
  /** 每页大小 */
  pageSize?: number;
  /** 页数 */
  pageNum?: number;
  /** 归属范围，逗号隔开userId */
  userIds?: string;
  /** 业务日期 */
  bizDates?: string;
  /** 状态集合，code逗号隔开 */
  statusCodes?: string;
  /** 任务owner */
  taskOwnerId?: string;
}

export const init = new defs.TreeNodeBO();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/{projectId}/flows/supplementFlow/list',
    params,
    method: 'get'
  });
}
