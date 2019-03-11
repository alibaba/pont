/**
 * @desc 维度列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
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
    url: '/api/dim/list',
    params,
    method: 'get'
  });
}
