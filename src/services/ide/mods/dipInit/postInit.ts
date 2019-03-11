/**
 * @desc 初始化资源文件和任务
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目名称 */
  projectName: string;
  /** 数据源类型 */
  tenantComputeTypeEnum: 'MAX_COMPUTE' | 'HADOOP' | 'E_MAP_REDUCE';
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/dip/init',
    params: bodyParams,
    method: 'post'
  });
}
