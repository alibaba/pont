/**
 * @desc 维度逻辑表-获取有权限的物理表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** 搜索词 */
  keyword: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/getTable',
    params,
    method: 'get'
  });
}
