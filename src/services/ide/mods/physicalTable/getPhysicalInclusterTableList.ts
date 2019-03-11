/**
 * @desc 搜索同租户同集群的所有物理表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** prefix */
  prefix?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/physicaltable/physical/incluster/tableList',
    params,
    method: 'get'
  });
}
