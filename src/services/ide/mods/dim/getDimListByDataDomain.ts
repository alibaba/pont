/**
 * @desc 获取业务板块下的数据域以及所属的维度中英文名称 以及维度的主键 主键计算逻辑
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId?: number;
  /** 维度Id */
  dimId?: number;
  /** 业务板块id */
  bizUnitId?: number;
  /** 是否过滤未发布维度逻辑表的维度 */
  excludeTableUnpublished?: boolean;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dim/list/byDataDomain',
    params,
    method: 'get'
  });
}
