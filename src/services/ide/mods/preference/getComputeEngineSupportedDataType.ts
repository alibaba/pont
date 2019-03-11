/**
 * @desc 获取当前计算引擎支持的数据类型
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/preference/computeEngine/supportedDataType',
    params,
    method: 'get'
  });
}
