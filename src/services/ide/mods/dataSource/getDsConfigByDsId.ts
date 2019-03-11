/**
 * @desc 获取一个数据源配置
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dsId */
  dsId: number;
}

export const init = new defs.DataSourceConfigVO();

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/{dsId}',
    params,
    method: 'get'
  });
}
