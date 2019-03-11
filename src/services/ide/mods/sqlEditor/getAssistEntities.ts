/**
 * @desc SQL自动完成提示
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 当前项目 */
  projectId?: number;
  /** 用户输入 */
  keyword?: string;
  /** 实体类型 */
  entityType?: string;
  /** 上一级实体的类型 */
  parentEntityType?: string;
  /** 上一级实体的id */
  parentEntityId?: string;
  /** 编辑器环境，design|online，design环境下提示未发布元数据，默认为online */
  envirenment?: string;
  /** 当前编辑的表名 */
  designtable?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/editor/assist/entities',
    params,
    method: 'get'
  });
}
