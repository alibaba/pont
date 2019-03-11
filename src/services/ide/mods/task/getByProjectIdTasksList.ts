/**
 * @desc 周期实例列表及搜索
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 搜索文本 */
  searchText?: string;
  /** 业务日期 */
  bizDate?: string;
  /** 每页大小 */
  pageSize?: number;
  /** 页数 */
  pageNum?: number;
  /** 归属范围,逗号隔开userId */
  userIds?: string;
  /** 状态集合，code逗号隔开 */
  statusCodes?: string;
  /** 实例类型(1:正常，2：补数据，3：手动) */
  dagrunType?: number;
  /** 实例来源(黑盒:onedata3-server|IDE:onedata-ide) */
  nodeFroms?: Array<string>;
  /** dagrunId(搜索补数据实例需要) */
  dagrunId?: string;
  /** 运行日期 */
  runDate?: string;
  /** 任务类型【operator类型】 */
  operatorTypes?: string;
}

export const init = new defs.PaginatedResult();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/tasks/list',
    params,
    method: 'get'
  });
}
