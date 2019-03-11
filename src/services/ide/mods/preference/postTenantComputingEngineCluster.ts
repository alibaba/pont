/**
 * @desc 检查计算引擎是否已经初始化元数据部署任务
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = false;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/preference/tenant/computingEngine/cluster',
    params: bodyParams,
    method: 'post'
  });
}
