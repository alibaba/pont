/**
 * @desc 模糊搜索数据域下的原子指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** domainId */
  domainId?: number;
  /** projectId */
  projectId?: number;
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/atomic/list/fuzzyOnDomain',
    params,
    method: 'get'
  });
}
