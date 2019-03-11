/**
 * @desc 前缀搜索项目下的物理表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
  /** 项目Id */
  projectId?: number;
  /** 是否只查自己own的 */
  是否只查自己own的?: boolean;
  /** 表名前缀 */
  tableName: string;
}

export const init = new defs.TableNameWithProjectIdBO();

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/{bizUnitId}/tableList',
    params,
    method: 'get'
  });
}
