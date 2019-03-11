/**
 * @desc 获取租户的全局资产数据
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.TenantGlobalAssetBO();

export async function request(params) {
  return pontFetch({
    url: '/api/assetOverview/tenant/globalAsset',
    params,
    method: 'get'
  });
}
