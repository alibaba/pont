/**
 * @desc 获取初始化过程和日志
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目名称 */
  projectName: string;
}

export const init = new defs.DipInitLogBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/init/log',
    params,
    method: 'get'
  });
}
