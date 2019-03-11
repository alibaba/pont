/**
 * @desc GET接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.ProjectGrantBO();

export async function request(params) {
  return pontFetch({
    url: '/api/project/grantMessage',
    params,
    method: 'get'
  });
}
