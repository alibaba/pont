/**
 * @desc 删除线上和线下层级维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** levelConfigId */
  levelConfigId?: number;
  /** 主表维度ID */
  mainTableId: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dim/level/{levelConfigId}/onlineAndDraft',
    params,
    method: 'delete'
  });
}
