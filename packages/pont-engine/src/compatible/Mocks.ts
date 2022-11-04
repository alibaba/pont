import type { IMocks } from '../types/mocks';

export class Mocks implements IMocks {
  enable = false;
  port = 8080;
  basePath = '';
  wrapper = `{
      "code": 0,
      "data": {response},
      "message": ""
    }`;
}
