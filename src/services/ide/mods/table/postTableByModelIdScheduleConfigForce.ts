/**
 * @desc 强制保存逻辑表的调度配置, 不检测调度配置直接保存
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

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/table/{modelId}/scheduleConfig/force',
    params: bodyParams,
    method: 'post'
  });
}
