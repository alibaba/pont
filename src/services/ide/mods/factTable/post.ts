/**
 * @desc 事实逻辑表-新增
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** 业务板块id */
  bizUnitId: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/factTable/',
    params: bodyParams,
    method: 'post'
  });
}
