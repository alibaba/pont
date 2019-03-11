/**
 * @desc 删除线上和线下业务限定
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** 业务限定名 */
  name: string;
  /** projectId */
  projectId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/bizCondition/{id}/onlineAndDraft',
    params,
    method: 'delete'
  });
}
