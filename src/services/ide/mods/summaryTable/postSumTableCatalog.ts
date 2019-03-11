/**
 * @desc 添加汇总逻辑表的分类
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目Id */
  projectId: number;
}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/sumTable/catalog',
    params: bodyParams,
    method: 'post'
  });
}
