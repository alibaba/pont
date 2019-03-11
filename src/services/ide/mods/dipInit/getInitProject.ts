/**
 * @desc 检查项目是否已初始化
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目名称 */
  projectName: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/init/project',
    params,
    method: 'get'
  });
}
