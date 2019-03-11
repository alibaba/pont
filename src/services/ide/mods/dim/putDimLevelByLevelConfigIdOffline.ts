/**
 * @desc 下线层级维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** levelConfigId */
  levelConfigId?: number;
  /** projectId */
  projectId?: number;
  /** 主表维度ID */
  mainTableId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dim/level/{levelConfigId}/offline',
    params,
    method: 'put'
  });
}
