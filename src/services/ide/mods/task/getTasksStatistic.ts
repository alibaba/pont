/**
 * @desc 获取任务统计信息
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.TaskStatisticVO();

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/tasks/statistic',
    params,
    method: 'get'
  });
}
