/**
 * @desc 触发手工节点执行
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 节点id */
  nodeId: string;
  /** 业务日期 */
  bizDate: string;
  /** 实例名称 */
  flowName: string;
}

export const init = '';

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{nodeId}/triggerManual',
    params,
    method: 'post'
  });
}
