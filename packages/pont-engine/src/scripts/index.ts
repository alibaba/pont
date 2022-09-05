import { IDataSourceConfig } from '../types/pontConfig';
import { SwaggerV2Reader, SwaggerV3Reader } from './swagger';

export enum OriginType {
  SwaggerV3 = 'SwaggerV3',
  SwaggerV2 = 'SwaggerV2',
  SwaggerV1 = 'SwaggerV1'
}

export async function readRemoteDataSource(config: IDataSourceConfig, report: any) {
  switch (config.originType) {
    case OriginType.SwaggerV3: {
      return new SwaggerV3Reader(config, report).fetchRemoteData();
    }
    case OriginType.SwaggerV2: {
      return new SwaggerV2Reader(config, report).fetchRemoteData();
    }
    default:
      return new SwaggerV2Reader(config, report).fetchRemoteData();
  }
}
