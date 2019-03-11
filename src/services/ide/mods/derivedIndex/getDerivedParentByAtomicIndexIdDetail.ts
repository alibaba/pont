/**
 * @desc 输入原子指标，获取衍生出该原子指标的所有原生原子指标的统计路径和业务限定
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** atomicIndexId */
  atomicIndexId: number;
  /** projectId */
  projectId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/parent/{atomicIndexId}/detail',
    params,
    method: 'get'
  });
}
