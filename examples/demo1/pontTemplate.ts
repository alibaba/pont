import { CodeGenerator, Interface } from "pont-engine";

export default class MyGenerator extends CodeGenerator {
  getInterfaceContentInDeclaration(inter: Interface) {
    const params = inter.getParamsCode();
    const bodyParams = inter.getBodyParamsCode();
    const url = inter.path;
    const requestParams = bodyParams
      ? `params: Params, bodyParams: ${bodyParams}`
      : "params: Params";

    return `
      export ${params};

      export function request(${requestParams}): ${inter.responseType}
    `;
  }
}
