/**
 * @desc 删除分类
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 分类id */
  catalogId?: number;
  /** 项目Id */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/sumTable/catalog',
    params,
    method: 'delete'
  });
}
