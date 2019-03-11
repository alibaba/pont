/**
 * @desc 发布业务限定
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
  /** projectId */
  projectId?: number;
  /** 业务限定名 */
  name: string;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/bizCondition/{id}/online',
    params,
    method: 'put'
  });
}
