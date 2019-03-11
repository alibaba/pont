/**
 * @desc 新增项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.ProjectVO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/project',
    params: bodyParams,
    method: 'post'
  });
}
