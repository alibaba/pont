/**
 * @desc 查询可申请的资源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 责任人 ID */
  ownerIdList?: Array<string>;
  /** 搜索关键词 */
  keyword?: string;
  /** 项目ID */
  projectId?: number;
  /** 资源类型 */
  entityType?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/list/resource',
    params,
    method: 'get'
  });
}
