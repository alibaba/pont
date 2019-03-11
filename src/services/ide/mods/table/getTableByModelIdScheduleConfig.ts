/**
 * @desc 获取逻辑表的调度配置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表模型id */
  modelId: number;
  /** 项目Id */
  projectId: number;
  /** 逻辑表类型:TableTypeEnum */
  tableType: number;
}

export const init = new defs.LogicalTableScheduleConfigDTO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/table/{modelId}/scheduleConfig',
    params,
    method: 'get'
  });
}
