/**
 * @desc 获取项目扩展信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = new defs.ProjectVO();

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/projectWithExtendInfo',
    params,
    method: 'get'
  });
}
