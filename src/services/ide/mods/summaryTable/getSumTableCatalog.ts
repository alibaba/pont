/**
 * @desc 获取业务板块下汇总逻辑表的分类
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块ID */
  bizUnitId: number;
  /** 项目Id */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/sumTable/catalog',
    params,
    method: 'get'
  });
}
