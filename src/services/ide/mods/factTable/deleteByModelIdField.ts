/**
 * @desc 事实逻辑表-删除字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** 事实表名字 */
  name: string;
  /** 字段id */
  attributeId: number;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/field',
    params,
    method: 'delete'
  });
}
