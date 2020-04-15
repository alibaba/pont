import { Interface, BaseClass, Property, CodeGenerator } from "pont-engine";

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const method = inter.method.toUpperCase();

    const paramsCode = inter
      .getParamsCode("Params")
      .replace("lock: number", "lock?: number")
      .replace(": file", ": FormData");

    return `
      export ${paramsCode}

      export type HooksParams = () => Params | Params;

      export type Response = ${inter.responseType}

      export function mutate(params?: HooksParams, newValue?: any, shouldRevalidate = true);
  
      export function trigger(params?: HooksParams, shouldRevalidate = true);

      ${
        method === "GET"
          ? `
        export function useRequest(params?: HooksParams, options?: ConfigInterface): { isLoading: boolean; data: Response, error: Error };`
          : `
        export function useRequest(params?: HooksParams, options?: ConfigInterface): { isLoading: boolean; data: Response, error: Error };
        `
      }

      export const method: string;

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

  getCommonDeclaration() {
    return `
    declare type ConfigInterface = import("swr").ConfigInterface;
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

    import * as SWR from 'swr';

    import { PontCore } from '../../pontCore'

    export ${inter.getParamsCode("Params", this.surrounding)}

    export const method = "${method}";

    export function mutate(params = {}, newValue = undefined, shouldRevalidate = true) {
      return SWR.mutate(Hooks.getUrlKey("${
        inter.path
      }", params, "${method}"), newValue, shouldRevalidate);
    }

    export function trigger(params = {}, shouldRevalidate = true) {
      return SWR.trigger(Hooks.getUrlKey("${
        inter.path
      }", params, "${method}"), shouldRevalidate);
    }

    ${
      method === "GET"
        ? `
      export function useRequest(params = {}, swrOptions = {}) {
        return Hooks.useRequest("${inter.path}", params, swrOptions);
      };`
        : `
      export function useDeprecatedRequest(params = {}, swrOptions = {}) {
        return Hooks.useRequest("${inter.path}", params, swrOptions, { method: ${method} });
      }
      `
    }

    export function request(params = {}, option  = {}) {
      return PontCore.fetch(PontCore.getUrl("${
        inter.path
      }", params, "${method}"), {
        ...option,
        method: "${method}",
      });
    }`;
  }
}
