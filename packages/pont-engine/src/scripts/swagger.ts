import { StandardDataSource, Interface, Mod, BaseClass, Property, StandardDataType } from '../standard';
import * as _ from 'lodash';
import {
  getMaxSamePath,
  getIdentifierFromOperatorId,
  getIdentifierFromUrl,
  transformCamelCase,
  toDashCase,
  hasChinese,
  transformModsName
} from '../utils';
import { Omit } from '../utilTypes';
import { compileTemplate, parseAst2StandardDataType } from '../compiler';

import { OriginBaseReader } from './base';

enum SwaggerType {
  integer = 'integer',
  string = 'string',
  file = 'string',
  array = 'array',
  number = 'number',
  boolean = 'boolean',
  object = 'object'
}

class SwaggerProperty {
  type: SwaggerType;
  enum? = [] as string[];
  items? = null as {
    type?: SwaggerType;
    $ref?: string;
  };
  additionalProperties: SwaggerProperty;
  $ref? = '';
  description? = '';
  name: string;
}

class SwaggerParameter {
  /** 字段名 */
  name = '';

  in: 'query' | 'body' | 'path';

  /** 描述 */
  description = '';

  /** 是否必填 */
  required: boolean;

  /** 类型 */
  type: SwaggerType;

  enum: string[];

  items? = null as {
    type?: SwaggerType;
    $ref?: string;
  };

  schema: Schema;
}

class Schema {
  enum?: string[];
  type: SwaggerType;
  additionalProperties?: Schema;
  items: {
    type?: SwaggerType;
    $ref?: string;
  };
  $ref: string;

  static parseSwaggerSchema2StandardDataType(
    schema: Schema,
    defNames: string[],
    classTemplateArgs = [] as StandardDataType[],
    compileTemplateKeyword?: string
  ) {
    const { items, $ref, type, additionalProperties } = schema;
    let typeName = schema.type as string;
    // let primitiveType = schema.type as string;

    if (type === 'array') {
      let itemsType = _.get(items, 'type', '');
      const itemsRef = _.get(items, '$ref', '');

      if (itemsType) {
        if (itemsType === 'integer') {
          itemsType = 'number';
        }

        if (itemsType === 'file') {
          itemsType = 'File';
        }

        let contentType = new StandardDataType([], itemsType, false, -1);

        if (itemsType === 'array') {
          contentType = new StandardDataType([new StandardDataType()], 'Array', false, -1);
        }

        return new StandardDataType([contentType], 'Array', false, -1);
      }

      if (itemsRef) {
        const ast = compileTemplate(itemsRef, compileTemplateKeyword);
        const contentType = parseAst2StandardDataType(ast, defNames, classTemplateArgs);

        return new StandardDataType([contentType], 'Array', false, -1);
      }
    }

    if (typeName === 'integer') {
      typeName = 'number';
    }

    if (typeName === 'file') {
      typeName = 'File';
    }

    if ($ref) {
      const ast = compileTemplate($ref, compileTemplateKeyword);

      if (!ast) {
        return new StandardDataType();
      }

      return parseAst2StandardDataType(ast, defNames, classTemplateArgs);
    }

    if (schema.enum) {
      return StandardDataType.constructorWithEnum(parseSwaggerEnumType(schema.enum));
    }

    if (type === 'object') {
      if (additionalProperties) {
        const typeArgs = [
          new StandardDataType(),
          Schema.parseSwaggerSchema2StandardDataType(
            additionalProperties,
            defNames,
            classTemplateArgs,
            compileTemplateKeyword
          )
        ];
        return new StandardDataType(typeArgs, 'ObjectMap', false);
      }
    }

    return new StandardDataType([], typeName, false);
  }
}

export function parseSwaggerEnumType(enumStrs: string[]) {
  let enums = enumStrs as Array<string | number>;

  enumStrs.forEach(str => {
    if (!Number.isNaN(Number(str))) {
      enums.push(Number(str));
    }
  });

  return enums
    .filter(str => {
      return String(str).match(/^[0-9a-zA-Z\_\-\$]+$/);
    })
    .map(numOrStr => {
      if (typeof numOrStr === 'string') {
        return `'${numOrStr}'`;
      }

      return numOrStr;
    });
}

class SwaggerInterface {
  consumes = [] as string[];

  parameters = [] as SwaggerParameter[];

  summary = '';

  description: string;

  initialValue: string;

  tags = [] as string[];

  response: Schema;

  method: string;

  name: string;

  path: string;

  samePath: string;

  operationId: string;

  static transformSwaggerV3Interface2Standard(
    inter: SwaggerInterface,
    usingOperationId: boolean,
    samePath: string,
    defNames: string[] = []
  ) {
    let name = '';
    const compileTemplateKeyword = '#/components/schemas/';

    if (!usingOperationId || !inter.operationId) {
      name = getIdentifierFromUrl(inter.path, inter.method, samePath);
    } else {
      name = getIdentifierFromOperatorId(inter.operationId);
    }

    const responseSuccessContent = _.get(inter, 'responses.200.content', {});

    let responseSchema;
    if (responseSuccessContent) {
      const responseFormat = Object.keys(responseSuccessContent)[0];

      responseSchema = _.get(responseSuccessContent, `${responseFormat}.schema`, {});
    }

    const response = Schema.parseSwaggerSchema2StandardDataType(responseSchema, defNames, [], compileTemplateKeyword);

    const parameters = (inter.parameters || []).map(param => {
      let paramSchema: Schema;
      const { description, items, name, type, schema = {} as Schema, required } = param;
      // 如果请求参数在body中的话，处理方式与response保持一致，因为他们本身的结构是一样的
      if (param.in === 'body') {
        paramSchema = param.schema;
      } else {
        paramSchema = {
          enum: param.enum,
          items,
          type,
          $ref: _.get(schema, '$ref')
        };
      }

      return new Property({
        in: param.in,
        description,
        name: name.includes('/') ? name.split('/').join('') : name,
        required,
        dataType: Schema.parseSwaggerSchema2StandardDataType(paramSchema, defNames, [], compileTemplateKeyword)
      });
    });

    let interDesc = inter.summary;

    if (inter.description) {
      if (interDesc) {
        interDesc += '\n' + inter.description;
      } else {
        interDesc = inter.description;
      }
    }

    const standardInterface = new Interface({
      consumes: inter.consumes,
      description: interDesc,
      name,
      method: inter.method,
      path: inter.path,
      response,
      /** 后端返回的参数可能重复 */
      parameters: _.unionBy(parameters, 'name')
    });

    return standardInterface;
  }

  static transformSwaggerInterface2Standard(
    inter: SwaggerInterface,
    usingOperationId: boolean,
    samePath: string,
    defNames: string[] = [],
    compileTempateKeyword?: string
  ) {
    let name = '';

    if (!usingOperationId || !inter.operationId) {
      name = getIdentifierFromUrl(inter.path, inter.method, samePath);
    } else {
      name = getIdentifierFromOperatorId(inter.operationId);
    }

    const responseSchema = _.get(inter, 'responses.200.schema', {}) as Schema;
    const response = Schema.parseSwaggerSchema2StandardDataType(responseSchema, defNames, [], compileTempateKeyword);

    const parameters = (inter.parameters || []).map(param => {
      let paramSchema: Schema;
      const { description, items, name, type, schema = {} as Schema, required } = param;
      // 如果请求参数在body中的话，处理方式与response保持一致，因为他们本身的结构是一样的
      if (param.in === 'body') {
        paramSchema = param.schema;
      } else {
        paramSchema = {
          enum: param.enum,
          items,
          type,
          $ref: _.get(schema, '$ref')
        };
      }

      return new Property({
        in: param.in,
        description,
        name: name.includes('/') ? name.split('/').join('') : name,
        required,
        dataType: Schema.parseSwaggerSchema2StandardDataType(paramSchema, defNames)
      });
    });

    let interDesc = inter.summary;

    if (inter.description) {
      if (interDesc) {
        interDesc += '\n' + inter.description;
      } else {
        interDesc = inter.description;
      }
    }

    const standardInterface = new Interface({
      consumes: inter.consumes,
      description: interDesc,
      name,
      method: inter.method,
      path: inter.path,
      response,
      /** 后端返回的参数可能重复 */
      parameters: _.unionBy(parameters, 'name')
    });

    return standardInterface;
  }
}

interface SwaggerReferenceObject {
  $ref: string;
}

// TODO: $ref, options, head
interface SwaggerPathItemObject {
  get?: SwaggerInterface;
  post?: SwaggerInterface;
  put?: SwaggerInterface;
  patch?: SwaggerInterface;
  delete?: SwaggerInterface;
  parameters?: SwaggerParameter[] | SwaggerReferenceObject[];
}

export class SwaggerDataSource {
  paths: { [key in string]: SwaggerPathItemObject };
  tags: { name: string; description: string }[];
  definitions: {
    [key in string]: {
      description: string;
      required?: string[];
      properties: { [key in string]: SwaggerProperty };
    };
  };
}

export class SwaggerV3DataSource {
  paths: { [key in string]: SwaggerPathItemObject };
  tags: { name: string; description: string }[];
  components: {
    schemas: {
      [key in string]: {
        description: string;
        required?: string[];
        properties: { [key in string]: SwaggerProperty };
      };
    };
  };
}

export function parseSwaggerV3Mods(swagger: SwaggerV3DataSource, defNames: string[], usingOperationId: boolean) {
  const allSwaggerInterfaces = [] as SwaggerInterface[];
  _.forEach(swagger.paths, (methodInters, path) => {
    const pathItemObject = _.cloneDeep(methodInters);

    if (Array.isArray(pathItemObject.parameters)) {
      ['get', 'post', 'patch', 'delete', 'put'].forEach(method => {
        if (pathItemObject[method]) {
          pathItemObject[method].parameters = (pathItemObject[method].parameters || []).concat(
            pathItemObject.parameters
          );
        }
      });

      delete pathItemObject.parameters;
    }

    _.forEach(pathItemObject as Omit<SwaggerPathItemObject, 'parameters'>, (inter, method) => {
      inter.path = path;
      inter.method = method;

      if (!inter.tags) {
        inter.tags = ['defaultModule'];
      }

      allSwaggerInterfaces.push(inter);
    });
  });

  // 不存在顶层 tags 时使用 operation-object 下的 tags 并集
  // https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.0.md#operation-object
  if (!swagger.tags) {
    swagger.tags = [];
    allSwaggerInterfaces.forEach(({ tags }) => {
      if (tags && tags.length) {
        tags.forEach(tag => {
          if (!swagger.tags.some(u => u.name == tag)) {
            swagger.tags.push({ name: tag, description: '' });
          }
        });
      }
    });
  }

  swagger.tags.push({
    name: 'defaultModule',
    description: 'defaultModule'
  });

  // swagger 2.0 中 tags属性是可选的
  const mods = (swagger.tags || [])
    .map(tag => {
      const modInterfaces = allSwaggerInterfaces.filter(inter => {
        // swagger 3.0+ 中可能不存在 description 字段
        if (tag.description === undefined || tag.description === null) {
          tag.description = '';
        }

        return (
          inter.tags.includes(tag.name) ||
          inter.tags.includes(tag.name.toLowerCase()) ||
          inter.tags.includes(tag.description.toLowerCase()) ||
          inter.tags.includes(toDashCase(tag.description))
        );
      });

      const samePath = getMaxSamePath(modInterfaces.map(inter => inter.path.slice(1)));

      const standardInterfaces = modInterfaces.map(inter => {
        return SwaggerInterface.transformSwaggerV3Interface2Standard(inter, usingOperationId, samePath, defNames);
      });

      // 判断是否有重复的 name
      if (usingOperationId) {
        const names = [] as string[];

        standardInterfaces.forEach(inter => {
          if (!names.includes(inter.name)) {
            names.push(inter.name);
          } else {
            inter.name = getIdentifierFromUrl(inter.path, inter.method, samePath);
          }
        });
      }

      // 兼容某些项目把swagger tag的name和description弄反的情况
      if (hasChinese(tag.name)) {
        // 当检测到name包含中文的时候，采用description
        return new Mod({
          description: tag.name,
          interfaces: _.uniqBy(standardInterfaces, 'name'),
          name: transformCamelCase(tag.description)
        });
      } else {
        return new Mod({
          description: tag.description,
          interfaces: _.uniqBy(standardInterfaces, 'name'),
          name: transformCamelCase(tag.name)
        });
      }
    })
    .filter(mod => {
      return mod.interfaces.length;
    });

  transformModsName(mods);

  return mods;
}

export function parseSwaggerMods(
  swagger: SwaggerDataSource,
  defNames: string[],
  usingOperationId: boolean,
  compileTempateKeyword?: string
) {
  const allSwaggerInterfaces = [] as SwaggerInterface[];
  _.forEach(swagger.paths, (methodInters, path) => {
    const pathItemObject = _.cloneDeep(methodInters);

    if (Array.isArray(pathItemObject.parameters)) {
      ['get', 'post', 'patch', 'delete', 'put'].forEach(method => {
        if (pathItemObject[method]) {
          pathItemObject[method].parameters = (pathItemObject[method].parameters || []).concat(
            pathItemObject.parameters
          );
        }
      });

      delete pathItemObject.parameters;
    }

    _.forEach(pathItemObject as Omit<SwaggerPathItemObject, 'parameters'>, (inter, method) => {
      inter.path = path;
      inter.method = method;

      if (!inter.tags) {
        inter.tags = ['defaultModule'];
      }

      allSwaggerInterfaces.push(inter);
    });
  });

  if (!swagger.tags) {
    swagger.tags = [];
  }

  swagger.tags.push({
    name: 'defaultModule',
    description: 'defaultModule'
  });

  // swagger 2.0 中 tags属性是可选的
  const mods = swagger.tags
    .map(tag => {
      const modInterfaces = allSwaggerInterfaces.filter(inter => {
        // swagger 3.0+ 中可能不存在 description 字段
        if (tag.description === undefined || tag.description === null) {
          tag.description = '';
        }

        return (
          inter.tags.includes(tag.name) ||
          inter.tags.includes(tag.name.toLowerCase()) ||
          inter.tags.includes(tag.description.toLowerCase()) ||
          inter.tags.includes(toDashCase(tag.description))
        );
      });

      const samePath = getMaxSamePath(modInterfaces.map(inter => inter.path.slice(1)));

      const standardInterfaces = modInterfaces.map(inter => {
        return SwaggerInterface.transformSwaggerInterface2Standard(
          inter,
          usingOperationId,
          samePath,
          defNames,
          compileTempateKeyword
        );
      });

      // 判断是否有重复的 name
      if (usingOperationId) {
        const names = [] as string[];

        standardInterfaces.forEach(inter => {
          if (!names.includes(inter.name)) {
            names.push(inter.name);
          } else {
            inter.name = getIdentifierFromUrl(inter.path, inter.method, samePath);
          }
        });
      }

      // 兼容某些项目把swagger tag的name和description弄反的情况
      if (hasChinese(tag.name)) {
        // 当检测到name包含中文的时候，采用description
        return new Mod({
          description: tag.name,
          interfaces: _.uniqBy(standardInterfaces, 'name'),
          name: transformCamelCase(tag.description)
        });
      } else {
        return new Mod({
          description: tag.description,
          interfaces: _.uniqBy(standardInterfaces, 'name'),
          name: transformCamelCase(tag.name)
        });
      }
    })
    .filter(mod => {
      return mod.interfaces.length;
    });

  transformModsName(mods);

  return mods;
}

export function transformSwaggerData2Standard(swagger: SwaggerDataSource, usingOperationId = true, originName = '') {
  const draftClasses = _.map(swagger.definitions, (def, defName) => {
    const defNameAst = compileTemplate(defName);

    if (!defNameAst) {
      throw new Error('compiler error in defname: ' + defName);
    }

    return {
      name: defNameAst.name,
      defNameAst,
      def
    };
  });
  const defNames = draftClasses.map(clazz => clazz.name);

  const baseClasses = draftClasses.map(clazz => {
    const dataType = parseAst2StandardDataType(clazz.defNameAst, defNames, []);
    const templateArgs = dataType.typeArgs;
    const { description, properties } = clazz.def;
    const requiredProps = clazz.def.required || [];

    const props = _.map(properties, (prop, propName) => {
      const { $ref, description, type, items, additionalProperties } = prop;
      const required = requiredProps.includes(propName);

      const dataType = Schema.parseSwaggerSchema2StandardDataType(
        {
          $ref,
          enum: prop.enum,
          items,
          type,
          additionalProperties
        } as Schema,
        defNames,
        templateArgs
      );

      return new Property({
        dataType,
        name: propName,
        description,
        required
      });
    });

    return new BaseClass({
      description,
      name: clazz.name,
      properties: props,
      templateArgs
    });
  });

  baseClasses.sort((pre, next) => {
    if (pre.name === next.name && pre.templateArgs.length === next.templateArgs.length) {
      return pre.templateArgs.filter(({ isDefsType }) => isDefsType).length >
        next.templateArgs.filter(({ isDefsType }) => isDefsType).length
        ? -1
        : 1;
    }

    if (pre.name === next.name) {
      return pre.templateArgs.length > next.templateArgs.length ? -1 : 1;
    }

    return next.name > pre.name ? 1 : -1;
  });

  return new StandardDataSource({
    baseClasses: _.uniqBy(baseClasses, base => base.name),
    mods: parseSwaggerMods(swagger, defNames, usingOperationId),
    name: originName
  });
}

export function transformSwaggerV3Data2Standard(
  swagger: SwaggerV3DataSource,
  usingOperationId = true,
  originName = ''
) {
  const compileTemplateKeyword = '#/components/schemas/';

  const draftClasses = _.map(swagger.components.schemas, (def, defName) => {
    const defNameAst = compileTemplate(defName, compileTemplateKeyword);

    if (!defNameAst) {
      throw new Error('compiler error in defname: ' + defName);
    }

    return {
      name: defNameAst.name,
      defNameAst,
      def
    };
  });

  const defNames = draftClasses.map(({ name }) => name);

  const baseClasses = draftClasses.map(clazz => {
    const dataType = parseAst2StandardDataType(clazz.defNameAst, defNames, []);
    const templateArgs = dataType.typeArgs;
    const { description, properties } = clazz.def;
    const requiredProps = clazz.def.required || [];

    const props = _.map(properties, (prop, propName) => {
      const { $ref, description, type, items, additionalProperties } = prop;
      const required = requiredProps.includes(propName);

      const dataType = Schema.parseSwaggerSchema2StandardDataType(
        {
          $ref,
          enum: prop.enum,
          items,
          type,
          additionalProperties
        } as Schema,
        defNames,
        templateArgs,
        compileTemplateKeyword
      );

      return new Property({
        dataType,
        name: propName,
        description,
        required
      });
    });

    return new BaseClass({
      description,
      name: clazz.name,
      properties: props,
      templateArgs
    });
  });

  baseClasses.sort((prev, next) => {
    if (prev.name === next.name) {
      return prev.templateArgs.length > next.templateArgs.length ? -1 : 1;
    }

    // 使用 ascii 规则排序
    return next.name > prev.name ? 1 : -1;
  });

  return new StandardDataSource({
    baseClasses: _.uniqBy(baseClasses, base => base.name),
    mods: parseSwaggerV3Mods(swagger, defNames, usingOperationId),
    name: originName
  });
}

export class SwaggerV2Reader extends OriginBaseReader {
  transform2Standard(data, usingOperationId: boolean, originName: string) {
    return transformSwaggerData2Standard(data, usingOperationId, originName);
  }
}

export class SwaggerV3Reader extends OriginBaseReader {
  transform2Standard(data, usingOperationId: boolean, originName: string) {
    return transformSwaggerV3Data2Standard(data, usingOperationId, originName);
  }
}
