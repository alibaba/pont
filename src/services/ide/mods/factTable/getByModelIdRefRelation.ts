/**
 * @desc 事实逻辑表-获取该引用维度已有的关联关系角色名称
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** 关联维度id */
  refDimId: number;
  /** 事实表名字 */
  name: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/refRelation',
    params,
    method: 'get'
  });
}
