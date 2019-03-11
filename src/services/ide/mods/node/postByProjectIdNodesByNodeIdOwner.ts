/**
 * @desc 修改node的责任人
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** nodeId */
  nodeId?: string;
  /** ownerId */
  ownerId?: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/owner',
    params,
    method: 'post'
  });
}
