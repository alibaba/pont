/**
 * @desc 删除文件，ide的配置和调度的节点
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** projectId */
  projectId: number;
  /** 文件id */
  fileId: number;
  /** 类型 */
  operatorType?: number;
  /** 文件名 */
  fileName?: string;
  /** 是否包含下游节点,默认不包含 */
  withDownstream?: boolean;
}

export const init = false;

export async function request(params) {
  return pontFetch({
    url: '/api/smc/project/{projectId}/nodes/{fileId}',
    params,
    method: 'delete'
  });
}
