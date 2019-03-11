/**
 * @desc 更新一个数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dsId */
  dsId: number;
}

export const init = new defs.DataSourceSaveResultVO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dsConfig/{dsId}',
    params: bodyParams,
    method: 'put'
  });
}
