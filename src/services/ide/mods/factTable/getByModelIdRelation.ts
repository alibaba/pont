/**
 * @desc 事实逻辑表-获取关联关系
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** modelId */
  modelId: number;
  /** attributeId */
  attributeId: number;
}

export const init = new defs.DimRelationBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/relation',
    params,
    method: 'get'
  });
}
