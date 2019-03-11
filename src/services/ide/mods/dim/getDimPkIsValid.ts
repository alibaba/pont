/**
 * @desc 主键逻辑语法是否正确
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** pkLogic */
  pkLogic?: string;
  /** projectId */
  projectId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dim/pk/isValid',
    params,
    method: 'get'
  });
}
