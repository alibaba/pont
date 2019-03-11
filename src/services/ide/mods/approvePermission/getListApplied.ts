/**
 * @desc 我申请的权限申请单列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
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
  /** page */
  page: number;
  /** pageSize */
  pageSize: number;
}

export const init = new defs.PagedData();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/list/applied',
    params,
    method: 'get'
  });
}
