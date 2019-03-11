/**
 * @desc 保存(增加或者修改)汇总逻辑表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目Id */
  projectId: number;
  /** lock */
  lock?: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/sumTable',
    params: bodyParams,
    method: 'post'
  });
}
