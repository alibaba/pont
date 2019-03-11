/**
 * @desc 维度表-获取单个模型
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
}

export const init = new defs.SingleModelBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/model/single',
    params,
    method: 'get'
  });
}
