/**
 * @desc 事实逻辑表-获取来源主表字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** 业务板块id */
  bizUnitId?: number;
  /** 表类型 */
  tableType?: number;
  /** 表名 */
  tableName?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/sourceTables/attrs',
    params,
    method: 'get'
  });
}
