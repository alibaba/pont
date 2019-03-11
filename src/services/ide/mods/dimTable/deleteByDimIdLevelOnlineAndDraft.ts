/**
 * @desc 删除线上和线下层级维度表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId?: number;
  /** levelConfigId */
  levelConfigId?: number;
  /** dimId */
  dimId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/level/onlineAndDraft',
    params,
    method: 'delete'
  });
}
