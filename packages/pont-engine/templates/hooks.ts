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

      export function mutate(params?: any, newValue?:any, shouldRevalidate = true);
  
      export function trigger(params?: any, shouldRevalidate = true);

      export function ${getHooksReuqestNameByMethod(
        method
      )}(params?: Params, swrOptions?: ConfigInterface): Promise<Response>;

      export function request(params?: Params, option = {}): Promise<Response>;
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

  getInterfaceContent(inter: Interface) {
    const method = inter.method.toUpperCase();

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import * as Hooks from '../../hooks';

    import * as swr from 'swr';

    import { pontCore } from '../../pontCore'

    export ${inter.getParamsCode('Params', this.surrounding)}

    export function mutate(params = {}, newValue = undefined, shouldRevalidate = true) {
      return swr.mutate(pontCore.getUrl("${inter.path}", params, "${method}"), newValue, shouldRevalidate);
    }

    export function trigger(params = {}, shouldRevalidate = true) {
      return swr.trigger(pontCore.getUrl("${inter.path}", params, "${method}"), shouldRevalidate);
    }

    ${
      method === 'GET'
        ? `
      export function useRequest(params = {}, swrOptions = {}) {
        return Hooks.useRequest("${inter.path}", params, swrOptions);
      };`
        : `
      export function useDeprecatedRequest(params = {}, swrOptions = {},fetchOptions = {},) {
        return Hooks.useDeprecatedRequest("${inter.path}", params, swrOptions,Object.assign(fetchOptions, { method: "${method}" }));
      }
      `
    }

    export function request(params = {}, option  = {}) {
      return pontCore.fetch(pontCore.getUrl("${inter.path}", params, "${method}"), {
        ...option,
        method: "${method}",
      });
    }`;
  }
}

function getHooksReuqestNameByMethod(method: string) {
  return method === 'GET' ? 'useRequest' : 'useDeprecatedRequest';
}
