/**
 * @desc 删除业务过程
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 业务过程ID */
  id?: number;
  /** name */
  name?: string;
  /** projectId */
  projectId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/bizProcess/{id}',
    params,
    method: 'delete'
  });
}
