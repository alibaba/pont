/**
 * @desc 校验SQL代码
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目ID */
  projectId: number;
  /** 校验规则 */
  rule: string;
}

export const init = new defs.CodeValidateBO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/editor/validate',
    params: bodyParams,
    method: 'post'
  });
}
