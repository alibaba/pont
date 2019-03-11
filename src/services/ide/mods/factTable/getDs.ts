/**
 * @desc 事实逻辑表-校验数据源ak权限
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** 表id，表可能是物理表（string）或者是逻辑表（long）所以统一处理为string */
  tableId?: string;
  /** 表类型  */
  tableType?: number;
  /** 表名称 */
  tableName?: string;
  /** 最近更新时间 */
  lastModifierTime?: number;
  /** 描述 */
  desc?: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/ds',
    params,
    method: 'get'
  });
}
