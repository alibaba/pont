/**
 * @desc 事实逻辑表-来源主表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** 业务板块id */
  bizUnitId?: number;
  /** keyword */
  检索字段?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/sourceTables',
    params,
    method: 'get'
  });
}
