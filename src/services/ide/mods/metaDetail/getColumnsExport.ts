/**
 * @desc 表结构 - 导出逻辑表字段信息为 CSV
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 导出文件名 */
  fileName: string;
  /** 表Id */
  modelId: string;
  /** 表类型 */
  modelType: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/columns/export',
    params,
    method: 'get'
  });
}
