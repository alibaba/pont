import { Interface, BaseClass, Property, CodeGenerator } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const paramsCode = inter
      .getParamsCode()
      .replace('lock: number', 'lock?: number')
      .replace(': file', ': FormData');

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export const init: Response;

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

  getInterfaceContent(inter: Interface) {
    const method = inter.method.toUpperCase();

    const bodyParams = inter.getBodyParamsCode();

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import { pontCore } from '../../pontCore';

    export ${inter.getParamsCode('Params', this.surrounding)}

    export const init = ${inter.response.getInitialValue()};

    export function request(params = {}, option  = {}) {

      return pontCore.fetch(pontCore.getUrl("${inter.path}", params, "${method}"), {
        ...option,
        method: "${method}",
      });
    }
   `;
  }
}
