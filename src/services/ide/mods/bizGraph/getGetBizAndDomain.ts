/**
 * @desc 获取租户对应的业务板块及数据域
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/map/biz/getBizAndDomain',
    params,
    method: 'get'
  });
}
