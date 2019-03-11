/**
 * @desc GET接口
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = new defs.TimePartitionBO();

export async function request(params) {
  return pontFetch({
    url: '/api/bizUnitConfig/{bizUnitId}/timePartition',
    params,
    method: 'get'
  });
}
