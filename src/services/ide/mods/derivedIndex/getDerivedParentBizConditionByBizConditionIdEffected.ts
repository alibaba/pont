/**
 * @desc 获取业务限定创建过的派生指标列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizConditionId */
  bizConditionId?: number;
  /** projectId */
  projectId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/parent/bizCondition/{bizConditionId}/effected',
    params,
    method: 'get'
  });
}
