/**
 * @desc 物理表来源主表权限校验
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 物理表表名 */
  tableName?: string;
  /** 物理表项目id */
  physicalTableNameProjectId?: number;
  /** 项目Id */
  projectId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/physical/permission',
    params,
    method: 'get'
  });
}
