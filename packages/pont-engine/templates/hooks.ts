import { Interface, BaseClass, Property, CodeGenerator } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const method = inter.method.toUpperCase();

    const paramsCode = inter
      .getParamsCode('Params', this.surrounding)
      .replace('lock: number', 'lock?: number')
      .replace(': file', ': FormData');

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export function useMutate(newValue?);
  
      export function useTrigger();

      export function ${getHooksReuqestNameByMethod(method)}(params?: Params, options?: Options): Promise<Response>;

      export const method: string;

      ${method === 'GET' ? '' : 'export function request(params?: Params, option = {}): Promise<Response>;'}
      
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

  /** 获取总的类型定义代码 */
  getDeclaration() {
    return `
      import { ConfigInterface } from 'swr/dist/types';

      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      ${this.getCommonDeclaration()}

      ${super.getBaseClassesInDeclaration()}

      ${super.getModsDeclaration()}
    `;
  }

  getCommonDeclaration() {
    return `
    interface Options<Data, Error> extends ConfigInterface<Data, Error> {
      /** 请求函数 */ 
      fetcher?: (url: string, meta?: any) => Promise<Data>,
    
      /** 扩展swr的options, 请求相关元数据 */
      fetchOption: {
        /** 请求方法 */
        method?: string;
    
        /** 请求头 */ 
        headers?: any,
    
        [key: string]: any
      };
    }
    `;
  }

  getInterfaceContent(inter: Interface) {
    const method = inter.method.toUpperCase();

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import { ${getHooksReuqestNameByMethod(method).replace(
      'use',
      ''
    )}, mutateRequest, triggerRequest } from '../../hooks';

    import { mutate, trigger } from 'swr';

    import { pontCore } from '../../pontCore'

    export ${inter.getParamsCode('Params', this.surrounding)}

    export const method = "${method}";

    export function useMutate(params = {}, newValue = undefined, shouldRevalidate = true) {
      return mutate(pontCore.getUrl("${inter.path}", params, "${method}"), newValue, shouldRevalidate);
    }

    export function useTrigger(params = {}, shouldRevalidate = true) {
      return trigger(pontCore.getUrl("${inter.path}", params, "${method}"), shouldRevalidate);
    }

    export function ${getHooksReuqestNameByMethod(method)}(params = {}, options = {}) {
      return ${getHooksReuqestNameByMethod(method).replace('use', '')}("${inter.path}", params, {
        ...options,
        fetchOption: {
          ...(options.fetchOption || {}),
          method: "${method}"
        }
      });
    };

    ${
      method === 'GET'
        ? ''
        : `export function request(params = {}, option  = {}) {
      return pontCore.fetch(pontCore.getUrl("${inter.path}", params, "${method}"), {
        ...option,
        method: "${method}",
      });
    }`
    }

   `;
  }
}

function getHooksReuqestNameByMethod(method: string) {
  return method === 'GET' ? 'useRequest' : 'useDeprecatedRequest';
}
