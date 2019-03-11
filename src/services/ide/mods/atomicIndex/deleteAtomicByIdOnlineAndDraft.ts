/**
 * @desc 删除线上和线下原子指标
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** 原子指标名 */
  name: string;
  /** projectId */
  projectId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/index/atomic/{id}/onlineAndDraft',
    params,
    method: 'delete'
  });
}
