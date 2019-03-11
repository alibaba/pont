/**
 * @desc 上传文件
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** keytab文件 */
  keytabFile?: File;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/upload',
    params,
    method: 'post'
  });
}
