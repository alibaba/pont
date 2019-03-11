/**
 * @desc 检查派生指标是否被创建，按传入顺序依次返回
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
    url: '/api/index/derived/isCreated',
    params,
    method: 'get'
  });
}
