/**
 * @desc health
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/health',
    params,
    method: 'get'
  });
}
