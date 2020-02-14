import { CodeGenerator, Interface, BaseClass, Property } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const paramsCode = inter
      .getParamsCode()
      .replace('lock: number', 'lock?: number')
      .replace(': file', ': FormData');
    const bodyParamsCode = inter.getBodyParamsCode();

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export const init: Response;

      export function request(params${bodyParamsCode ? '' : '?'}: Params${
      bodyParamsCode ? `, bodyParams: ${bodyParamsCode}` : ''
    }): Promise<Response>;

      export function createFetchAction<Key>(types: FetchTypes<Key>, stateKey?: string): (params${
        bodyParamsCode ? '' : '?'
      }: Params${bodyParamsCode ? `, bodyParams: ${bodyParamsCode}` : ''}, meta?)
        => { type: Key; payload?: Response; params?: Params; url: string; types: string[]; meta } & Promise<Response>
        `;
  }

  getBaseClassInDeclaration(base: BaseClass) {
    const originProps = base.properties;

    base.properties = base.properties.map(prop => {
      return new Property({
        ...prop,
        required: false
      });
    });

    const result = super.getBaseClassInDeclaration(base);
    base.properties = originProps;

    return result;
  }

  getCommonDeclaration() {
    return `
    interface FetchTypes<key> {
			error: 'error',
			success: key,
			loading: 'loading',
		};

		interface FetchAction<BO, key> {
			type: key,
			payload: BO,
    }
    `;
  }

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
