/**
 * @desc 根据选中的模型获取业务限定详情
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 来源模型ID */
  modelId?: number;
  /** 模型选中表ID */
  selectedModelId?: number;
  /** 模型选中表类型 */
  selectedModelType?: number;
  /** modelType */
  modelType?: number;
  /** 选中的属性 */
  selectedAttributeName?: string;
  /** 所选中的path */
  selectedPath?: string;
  /** projectId */
  projectId?: number;
}

export const init = new defs.BaseBO();

export async function request(params) {
  return pontFetch({
    url: '/api/bizCondition/detail',
    params,
    method: 'get'
  });
}
