/**
 * @desc 搜索数据源
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 数据源使用类型 */
  useType?: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';
  /** 数据源类型 */
  dsType?:
    | 'MAX_COMPUTE'
    | 'MYSQL'
    | 'SQL_SERVER'
    | 'HIVE'
    | 'OS'
    | 'POSTGRE_SQL'
    | 'EMR_HIVE'
    | 'ORACLE'
    | 'FTP'
    | 'HDFS'
    | 'VERTICA'
    | 'HADOOP'
    | 'DRDS';
  /** 是否绑定项目 */
  isBindProject?: boolean;
  /** 数据源名称或者描述 */
  keyWord?: string;
}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/dsConfig/search',
    params,
    method: 'get'
  });
}
