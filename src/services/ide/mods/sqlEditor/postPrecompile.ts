/**
 * @desc 预编译SQL脚本
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目ID */
  projectId: number;
  /** 选中代码的起始行号 */
  selRowStart?: string;
  /** 选中代码的起始列号 */
  selColStart?: string;
}

export const init = new defs.PreCompileBO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/editor/precompile',
    params: bodyParams,
    method: 'post'
  });
}
