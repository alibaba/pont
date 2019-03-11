/**
 * @desc 事实逻辑表-设为事实属性
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** 字段id */
  attributeId: number;
  /** 事实表名字 */
  name: string;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/toFactAttrs',
    params,
    method: 'put'
  });
}
