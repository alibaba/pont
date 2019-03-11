/**
 * @desc 创建事件
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** dsId */
  dsId?: number;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/meta-event-callback/createEvent',
    params,
    method: 'post'
  });
}
