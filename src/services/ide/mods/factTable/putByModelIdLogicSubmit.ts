/**
 * @desc 事实表-提交计算逻辑
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
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/logic/submit',
    params,
    method: 'put'
  });
}
