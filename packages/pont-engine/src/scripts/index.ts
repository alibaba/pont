import { SwaggerV2Reader, SwaggerV3Reader } from './swagger';
import { DataSourceConfig } from '../utils';
import { RapV2Reader } from './rap';

export enum OriginType {
  SwaggerV3 = 'SwaggerV3',
  SwaggerV2 = 'SwaggerV2',
  SwaggerV1 = 'SwaggerV1',
  RapV2 = 'RapV2'
}

export async function readRemoteDataSource(config: DataSourceConfig, report: any) {
  switch (config.originType) {
    case OriginType.SwaggerV3: {
      return new SwaggerV3Reader(config, report).fetchRemoteData();
    }
    case OriginType.SwaggerV2: {
      return new SwaggerV2Reader(config, report).fetchRemoteData();
    }
    case OriginType.RapV2: {
      return new RapV2Reader(config, report).fetchRemoteData();
    }
    default:
      return new SwaggerV2Reader(config, report).fetchRemoteData();
  }
}
