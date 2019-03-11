/**
 * @desc GET接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bindDsId */
  bindDsId: number;
  /** projectName */
  projectName: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project/projectNameWarning',
    params,
    method: 'get'
  });
}
