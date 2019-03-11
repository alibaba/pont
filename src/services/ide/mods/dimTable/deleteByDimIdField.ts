/**
 * @desc 维度表-删除-【已废弃】
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
  /** lock */
  lock?: number;
  /** 字段英文名 */
  attributeId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/field',
    params,
    method: 'delete'
  });
}
