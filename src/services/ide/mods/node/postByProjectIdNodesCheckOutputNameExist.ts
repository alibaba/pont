/**
 * @desc 检查输出名字是否重复
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 节点Id */
  nodeId?: string;
  /** 项目Id */
  projectId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/checkOutputNameExist',
    params,
    method: 'post'
  });
}
