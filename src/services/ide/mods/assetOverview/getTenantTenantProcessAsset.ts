/**
 * @desc 获取租户业务过程相关的资产数据
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.TenantProcessAssetBO();

export async function request(params) {
  return pontFetch({
    url: '/api/assetOverview/tenant/tenantProcessAsset',
    params,
    method: 'get'
  });
}
