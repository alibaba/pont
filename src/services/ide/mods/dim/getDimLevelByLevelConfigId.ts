/**
 * @desc 获取层级维度主维度详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** status */
  status?: string;
  /** projectId */
  projectId?: number;
  /** 层级维度配置ID */
  levelConfigId?: number;
}

export const init = new defs.DimBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dim/level/{levelConfigId}',
    params,
    method: 'get'
  });
}
