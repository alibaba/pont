# Pont Template

## 介绍

## 起步
根目录下新建一个pontTemplate.ts文件, export default 一个CodeGenerator子类, 根据自身需求覆盖CodeGenerator中的方法

```typescript
import { CodeGenerator, Interface } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
}

```

## 示例

实例中的Request就是一个可用的http请求库, 可以替换为axios, fetch等可用的http请求封装
```typescript
import { CodeGenerator, Interface } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
getInterfaceContent(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const method = inter.method.toUpperCase();
    let requestParams = bodyParamsCode ? `bodyParams = {}` : `params = {}`;

    return `
      /**
      * @description ${inter.description}
      */
    
    import { getUrl } from 'src/utils/getUrl';
    import Request from 'src/utils/requests';
    import * as defs from '../../baseClass';

    export ${paramsCode}

    export const init = ${inter.response.initialValue};

    export async function request(${requestParams}) {
      return Request({
        url: getUrl("${inter.path}", ${bodyParamsCode ? 'bodyParams' : 'params'}, "${method}"),
        ${bodyParamsCode ? 'params: bodyParams' : 'params'},
        method: '${inter.method}',
      });
    }

    export function createFetchAction(types, stateKey) {
      return (${bodyParamsCode ? `bodyParams = {}` : 'params = {}'}, meta?: any) => {
        return {
          types,
          meta,
          stateKey,
          method: '${inter.method}',
          url: getUrl("${inter.path}", ${bodyParamsCode ? 'bodyParams' : 'params'}, "${method}"),
          ${bodyParamsCode ? 'params: bodyParams,' : 'params,'}
          init,
        };
      };
    }
   `;
  }
}
```
