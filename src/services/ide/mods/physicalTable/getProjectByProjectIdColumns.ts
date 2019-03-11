/**
 * @desc 获取物理表的列信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 表名称 */
  tableName: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/project/{projectId}/columns',
    params,
    method: 'get'
  });
}
