/**
 * @desc 删除自定义报警
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
  /** projectId */
  projectId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/qsmd/api/customAlert/{id}',
    params,
    method: 'delete'
  });
}
