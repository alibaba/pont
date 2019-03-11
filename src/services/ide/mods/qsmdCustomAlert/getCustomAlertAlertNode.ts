/**
 * @desc 查询配置了报警的节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** nodeId */
  nodeId: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/qsmd/api/customAlert/alert/node',
    params,
    method: 'get'
  });
}
