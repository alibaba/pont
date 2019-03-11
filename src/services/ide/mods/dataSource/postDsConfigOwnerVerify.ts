/**
 * @desc ODPS数据源的owner权限校验
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dsConfig/owner/verify',
    params: bodyParams,
    method: 'post'
  });
}
