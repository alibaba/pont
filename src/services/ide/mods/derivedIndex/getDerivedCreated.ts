/**
 * @desc 获取选中粒度、时间周期、业务限定创建过的相关派生指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 参数列表，json<pre><code>[
  {
    atomicIndexId: id,
    dimIds: [id1, id2],
    bizConditionIds: [id1, id2],
    statPeriodId: id1
    dimPaths:{id1:path1,id2:path2}
  }
]</code></pre> */
  options?: string;
  /** bizUnitId */
  bizUnitId: number;
  /** projectId */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/created',
    params,
    method: 'get'
  });
}
