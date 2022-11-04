import fetch from 'node-fetch';

import type { IStandardOirginConfig } from '../../types/pontConfig';
import type { IOriginReader } from '../../types/generate';
import type { StandardDataSource } from '../../main/StandardDataSource';

import { translateChinese } from '../../utils/translate';
import { transformSwaggerV3Data2Standard, transformSwaggerData2Standard } from '../../compiler';
import { OriginType } from '../../types/pontConfig';

export class OriginReader implements IOriginReader {
  private config: IStandardOirginConfig;

  setConfig(config: IStandardOirginConfig) {
    this.config = config;
  }

  fetchMethod(originUrl: string): Promise<string> {
    return fetch(originUrl).then((res) => res.text());
  }

  translate(jsonString: string): Promise<string> {
    return translateChinese(jsonString, this.config.rootDir);
  }

  async transform2StandardDataSource(json: any, config: IStandardOirginConfig): Promise<StandardDataSource> {
    const { name, usingOperationId } = config;

    switch (config.originType) {
      case OriginType.SwaggerV3: {
        return transformSwaggerV3Data2Standard(json, usingOperationId, name);
      }
      case OriginType.SwaggerV2: {
        return transformSwaggerData2Standard(json, usingOperationId, name);
      }
      default:
        return transformSwaggerData2Standard(json, usingOperationId, name);
    }
  }

  async transformStandardDataSource(dataSource: StandardDataSource): Promise<StandardDataSource> {
    return dataSource;
  }
}
