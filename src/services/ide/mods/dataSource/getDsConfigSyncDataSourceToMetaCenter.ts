/**
 * @desc 同步数据源到元数据中心
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据源id */
  dataSourceid: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/syncDataSourceToMetaCenter',
    params,
    method: 'get'
  });
}
