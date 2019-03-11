/**
 * @desc GET接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** dsId */
  dsId: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project/bindDataSourceWarning',
    params,
    method: 'get'
  });
}
