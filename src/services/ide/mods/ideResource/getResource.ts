/**
 * @desc 关键词搜索当前项目中的资源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** keyword */
  keyword: string;
  /** 搜索资源类型: oss/udf , 默认搜索对象资源文件(oss) */
  type?: string;
  /** 返回记录数限制, 最大30 */
  limit?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/resource',
    params,
    method: 'get'
  });
}
