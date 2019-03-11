/**
 * @desc 请求上传资源文件, 返回资源Uri
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目ID */
  projectId?: number;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/resource/upload',
    params,
    method: 'post'
  });
}
