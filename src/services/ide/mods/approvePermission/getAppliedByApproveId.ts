/**
 * @desc 获取权限审批单详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** approveId */
  approveId: number;
}

export const init = new defs.ApproveDetailBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/applied/{approveId}',
    params,
    method: 'get'
  });
}
