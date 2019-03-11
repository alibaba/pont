/**
 * @desc 解析逻辑表的调度配置参数, 就是basicInfo中的参数
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表模型id */
  modelId: number;
  /** 项目Id */
  projectId: number;
  /** 逻辑表调度配置的参数 */
  configParams: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/table/{modelId}/checkScheduleConfigParams',
    params,
    method: 'post'
  });
}
