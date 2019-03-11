/**
 * @desc 维度逻辑表-获取已选分区字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/part/selected/fields',
    params,
    method: 'get'
  });
}
