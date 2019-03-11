/**
 * @desc 批量移除项目成员
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 需要移除的用户 ID, 逗号分隔 */
  userIds: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/member/',
    params,
    method: 'delete'
  });
}
