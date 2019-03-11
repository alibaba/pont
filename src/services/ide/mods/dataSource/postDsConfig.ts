/**
 * @desc 新建数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.DataSourceSaveResultVO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dsConfig',
    params: bodyParams,
    method: 'post'
  });
}
