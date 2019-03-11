/**
 * @desc 维度表-获取该引用维度已有的关联关系角色名称
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
  /** 关联维度id */
  refDimId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/refRelation',
    params,
    method: 'get'
  });
}
