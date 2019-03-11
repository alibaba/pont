/**
 * @desc 解析代码输入输出
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目Id */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/parseCode',
    params,
    method: 'post'
  });
}
