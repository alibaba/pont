/**
 * @desc 当前业务板块下的所有业务过程列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
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
    url: '/api/bizProcess/list',
    params,
    method: 'get'
  });
}
