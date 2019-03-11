/**
 * @desc 获取业务板块的全局资产数据
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = new defs.BizUnitGlobalAssetBO();

export async function request(params) {
  return pontFetch({
    url: '/api/assetOverview/bizUnit/{bizUnitId}/globalAsset',
    params,
    method: 'get'
  });
}
