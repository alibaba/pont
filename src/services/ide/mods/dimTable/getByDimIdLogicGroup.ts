/**
 * @desc 维度表编辑-获取批量修改逻辑
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/logic/group',
    params,
    method: 'get'
  });
}
