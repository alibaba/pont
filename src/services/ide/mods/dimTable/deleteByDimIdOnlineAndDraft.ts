/**
 * @desc 删除线上和线下维度表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dimId */
  dimId?: number;
  /** projectId */
  projectId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/onlineAndDraft',
    params,
    method: 'delete'
  });
}
