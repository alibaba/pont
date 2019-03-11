/**
 * @desc 获取维度相关的表单浮层
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 点击的维度id */
  dimId: number;
  /** 业务板块id */
  bizUnitId: number;
}

export const init = new defs.TreeNodeBO();

export async function request(params) {
  return pontFetch({
    url: '/api/dip/graph/dimGraph/formLayer/{dimId}',
    params,
    method: 'get'
  });
}
