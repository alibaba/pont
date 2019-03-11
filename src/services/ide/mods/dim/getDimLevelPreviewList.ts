/**
 * @desc 获取层级维度模板预览列表
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 主维度名，用户填写 */
  dimName?: string;
  /** 主维度中文名，用户填写 */
  dimCn?: string;
  /** projectId */
  projectId?: number;
  /** dimensionList */
  dimensionList?: Array<integer>;
  /** id */
  id?: number;
  /** name */
  name?: string;
  /** cn */
  cn?: string;
  /** des */
  des?: string;
  /** gmtCreate */
  gmtCreate?: string;
  /** gmtModified */
  gmtModified?: string;
  /** lastModifier */
  lastModifier?: string;
  /** owner */
  owner?: string;
  /** status */
  status?: number;
  /** projectName */
  projectName?: string;
  /** sourceTableName */
  sourceTableName?: string;
  /** sourcePk */
  sourcePk?: string;
  /** sourcePkCn */
  sourcePkCn?: string;
  /** sourcePkDataType */
  sourcePkDataType?: string;
  /** midTableName */
  midTableName?: string;
  /** parentFieldName */
  parentFieldName?: string;
  /** childFieldName */
  childFieldName?: string;
  /** namingFieldName */
  namingFieldName?: string;
  /** namingFieldCn */
  namingFieldCn?: string;
  /** maxLevel */
  maxLevel?: number;
  /** rootCondition */
  rootCondition?: string;
  /** filterCondition */
  filterCondition?: string;
  /** hasLeaf */
  hasLeaf?: boolean;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dim/level/preview/list',
    params,
    method: 'get'
  });
}
