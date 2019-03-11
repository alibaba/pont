/**
 * @desc 删除线上和线下维度
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id?: number;
  /** projectId */
  projectId?: number;
  /** 维度名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/dim/{id}/onlineAndDraft',
    params,
    method: 'delete'
  });
}
