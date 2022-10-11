import { Interface, BaseClass, Property, CodeGenerator, Surrounding } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const requestParams = inter.getRequestParams();
    const paramsCode = inter.getParamsCode('Params');

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export const init: Response;

      export function request(${requestParams}): Promise<Response>;
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
    const requestParams = inter.getRequestParams(this.surrounding);
    const paramsCode = inter.getParamsCode('Params', this.surrounding);

    return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import { PontCore } from '../../pontCore';

    export ${paramsCode}

    export const init = ${inter.response.getInitialValue()};

    export function request(${requestParams}) {
      return PontCore.fetch(PontCore.getUrl("${inter.path}", params, "${method}"), ${inter.getRequestContent()});
    }
   `;
  }
}
