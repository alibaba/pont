import * as _ from 'lodash';
import { OriginBaseReader } from './base';
import { SwaggerV2Reader } from './swagger';
import { DataSourceConfig } from 'src';

export enum OriginType {
  SwaggerV2 = 'SwaggerV2',
  SwaggerV1 = 'SwaggerV1'
}

export async function readRemoteDataSource(config: DataSourceConfig, report: any) {
  switch (config.originType) {
    case OriginType.SwaggerV2: {
      return new SwaggerV2Reader(config, report).fetchRemoteData();
    }
    default:
      return new SwaggerV2Reader(config, report).fetchRemoteData();
  }
}
