/**
 * @desc 查询自定义报警
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** alertReason */
  alertReason?: Array<string>;
  /** alertType */
  alertType?: Array<string>;
  /** alertStatus */
  alertStatus?: Array<string>;
  /** alertSentTo */
  alertSentTo?: Array<string>;
  /** creators */
  creators?: Array<string>;
  /** dateList */
  dateList?: Array<string>;
  /** nodeName */
  nodeName?: string;
  /** projectId */
  projectId?: number;
  /** currPage */
  currPage?: number;
  /** limit */
  limit?: number;
  /** tenantId */
  tenantId?: number;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/qsmd/api/customAlert/search',
    params,
    method: 'get'
  });
}
