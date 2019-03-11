/**
 * @desc 删除线上和线下派生指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** projectId */
  projectId?: number;
  /** 派生指标名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/{id}/onlineAndDraft',
    params,
    method: 'delete'
  });
}
