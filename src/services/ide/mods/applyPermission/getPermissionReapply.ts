/**
 * @desc 重新提交权限申请
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 申请内容 */
  content: string;
  /** approveId */
  approveId: number;
}

export const init = new defs.ReapplyDTO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/reapply',
    params,
    method: 'get'
  });
}
