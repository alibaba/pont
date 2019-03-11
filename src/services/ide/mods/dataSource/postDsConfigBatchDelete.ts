/**
 * @desc 批量删除数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据源Id列表 */
  dsIds: Array<integer>;
  /** 数据源名称列表 */
  dsNames: Array<integer>;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/batchDelete',
    params,
    method: 'post'
  });
}
