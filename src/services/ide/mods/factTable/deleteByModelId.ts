/**
 * @desc 事实逻辑表-删除
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** modelId */
  modelId: number;
  /** lock */
  lock?: number;
  /** 事实表名字 */
  name: string;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/model/factTable/{modelId}',
    params,
    method: 'delete'
  });
}
