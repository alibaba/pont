/**
 * @desc 模糊搜索可继承的维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务板块id */
  bizUnitId?: number;
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dim/list/inheritable/fuzzy',
    params,
    method: 'get'
  });
}
