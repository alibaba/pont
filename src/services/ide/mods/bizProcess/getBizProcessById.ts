/**
 * @desc 根据 id 获取业务过程信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** 业务过程ID */
  id?: number;
}

export const init = new defs.BizProcessBO();

export async function request(params) {
  return pontFetch({
    url: '/api/bizProcess/{id}',
    params,
    method: 'get'
  });
}
