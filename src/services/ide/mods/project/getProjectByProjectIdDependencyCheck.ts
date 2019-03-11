/**
 * @desc GET接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/project/{projectId}/dependencyCheck',
    params,
    method: 'get'
  });
}
