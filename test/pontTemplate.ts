import { CodeGenerator, Interface } from "../";

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const paramsCode = inter.getParamsCode().replace(': file', ': FormData');
    const bodyParamsCode = inter.getBodyParamsCode();
    const method = inter.method.toUpperCase();

    return `
      /**
      * @description ${inter.description}
      */
    
    import { getUrl } from 'src/utils/Url';
    import * as defs from '../../baseClass';

    export ${paramsCode}

    export const init = ${inter.response.initialValue};

    export function createFetchAction(types, stateKey) {
      return (params = {}${bodyParamsCode ? `, bodyParams` : ''}, meta?: any) => {
        return {
          types,
          meta,
          stateKey,
          method: "${method}",
          url: getUrl("${inter.path}", params, "${method}"),
          ${bodyParamsCode ? 'params: bodyParams,' : 'params,'}
          init,
        };
      };
    }
   `;
  }
}
