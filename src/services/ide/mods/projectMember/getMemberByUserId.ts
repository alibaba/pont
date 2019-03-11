/**
 * @desc 获取项目成员信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** userId */
  userId: string;
}

export const init = new defs.ProjectMemberBO();

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/member/{userId}',
    params,
    method: 'get'
  });
}
