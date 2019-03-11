/**
 * @desc 查询可申请的资源属性
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 资源id */
  id?: string;
  /** 资源名称 */
  name?: string;
  /** 资源类型 */
  entityType?: number;
  /** 逻辑表类型 */
  tableType?: number;
  /** 项目id */
  projectId?: number;
  /** 资源描述 */
  des?: string;
  /** 资源中文名 */
  cn?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dip/permission/list/resource/attribute',
    params,
    method: 'get'
  });
}
