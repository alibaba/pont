/**
 * @desc 获取原子指标及其衍生指标创建过的派生指标列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** atomicIndexId */
  atomicIndexId?: number;
  /** projectId */
  projectId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/parent/atomicIndex/{atomicIndexId}/effected',
    params,
    method: 'get'
  });
}
