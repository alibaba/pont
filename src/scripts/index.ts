import * as _ from 'lodash';
import { OriginBaseReader } from './base';
import { SwaggerV2Reader } from './swagger';

export enum OriginType {
  SwaggerV2 = 'SwaggerV2',
  SwaggerV1 = 'SwaggerV1'
}

export class OriginReader extends OriginBaseReader {
  fetchRemoteData() {
    switch (this.config.originType) {
      case OriginType.SwaggerV2: {
        return new SwaggerV2Reader(this.config, this.report).fetchRemoteData();
      }
      default:
        return new SwaggerV2Reader(this.config, this.report).fetchRemoteData();
    }
  }
}
