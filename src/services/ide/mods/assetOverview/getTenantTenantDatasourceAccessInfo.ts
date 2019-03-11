/**
 * @desc 获取租户的数据源接入信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.TenantDatasourceAccessInfoBO();

export async function request(params) {
  return pontFetch({
    url: '/api/assetOverview/tenant/tenantDatasourceAccessInfo',
    params,
    method: 'get'
  });
}
