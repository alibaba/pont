/**
 * @desc 调起解析任务
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 表id */
  modelId: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/api/dip/meta/table/modelId/{modelId}/parseRelation',
    params,
    method: 'post'
  });
}
