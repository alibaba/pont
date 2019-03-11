/**
 * @desc 事实逻辑表-修改主表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** bizMainTable */
  bizMainTable: string;
  /** 事实表名字 */
  name: string;
  /** lock */
  lock: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}/bizMainTable',
    params,
    method: 'put'
  });
}
