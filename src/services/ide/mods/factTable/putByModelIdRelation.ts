/**
 * @desc 事实逻辑表-编辑关联关系
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** 事实表名字 */
  name: string;
  /** modelId */
  modelId: number;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/relation',
    params: bodyParams,
    method: 'put'
  });
}
