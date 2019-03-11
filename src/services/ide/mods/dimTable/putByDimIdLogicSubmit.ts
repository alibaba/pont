/**
 * @desc 维度表-提交计算逻辑
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
  /** 字段id */
  attributeId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/logic/submit',
    params,
    method: 'put'
  });
}
