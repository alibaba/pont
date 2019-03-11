/**
 * @desc 输入事实表或者逻辑表表名，获取雪花模型下的所有字段
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
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
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/index/derived/parent/model/attrs',
    params,
    method: 'get'
  });
}
