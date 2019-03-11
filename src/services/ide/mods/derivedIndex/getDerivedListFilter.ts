/**
 * @desc 获取业务板块下的派生指标筛选器
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId?: number;
  /** projectId */
  projectId?: number;
  /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
  filter?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/list/filter',
    params,
    method: 'get'
  });
}
