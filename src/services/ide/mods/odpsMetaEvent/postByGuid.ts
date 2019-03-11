/**
 * @desc handleOdpsMetaEvent
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** guid */
  guid: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/meta-event-callback/{guid}',
    params,
    method: 'post'
  });
}
