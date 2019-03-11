/**
 * @desc 根据逻辑表名称 搜索对应的逻辑表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据域id */
  dataDomain: number;
  /** 关键词 */
  keyword: string;
  /** 项目Id */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/table',
    params,
    method: 'get'
  });
}
