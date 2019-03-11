/**
 * @desc 事实逻辑表-获取维度关联的字段信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** modelId */
  modelId: number;
  /** 关联维度id */
  refDimId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/relation/refAttribute',
    params,
    method: 'get'
  });
}
