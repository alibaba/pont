/**
 * @desc 删除某个项目的所有资源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目名称 */
  projectName: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/init/projectName',
    params,
    method: 'delete'
  });
}
