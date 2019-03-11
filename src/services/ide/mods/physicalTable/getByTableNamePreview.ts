/**
 * @desc 获取物理表预览数据
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** tableName */
  tableName: string;
  /** projectId */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/{tableName}/preview',
    params,
    method: 'get'
  });
}
