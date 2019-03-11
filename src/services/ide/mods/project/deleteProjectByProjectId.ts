/**
 * @desc 删除项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** projectName */
  projectName?: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}',
    params,
    method: 'delete'
  });
}
