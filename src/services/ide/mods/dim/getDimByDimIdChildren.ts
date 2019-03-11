/**
 * @desc 获取维度的子维度信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dimId */
  dimId: number;
  /** 项目Id */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dim/{dimId}/children',
    params,
    method: 'get'
  });
}
