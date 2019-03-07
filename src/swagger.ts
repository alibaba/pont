import { StandardDataSource, PrimitiveType, Interface, DataType, Mod, BaseClass, Property } from './standard';
import * as _ from 'lodash';
import {
  getMaxSamePath,
  getIdentifierFromOperatorId,
  getIdentifierFromUrl,
  transformCamelCase,
  toDashCase,
  toDashDefaultCase,
  hasChinese,
  transformModsName
} from './utils';
import { generateTemplate, generateTemplateDef, findDefinition } from './compiler';

import * as debugLog from './debugLog';

export enum SwaggerType {
  integer = 'integer',
  string = 'string',
  file = 'string',
  array = 'array',
  number = 'number',
  boolean = 'boolean',
  object = 'object'
}

export class SwaggerProperty {
  type: SwaggerType;
  enum? = [] as string[];
  items? = null as {
    type?: SwaggerType;
    $ref?: string;
  };
  $ref? = '';
  description? = '';
  name: string;
  required: boolean;
}

export class SwaggerParameter {
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
export class Schema {
  enum?: string[];
  type: SwaggerType;
  items: {
    type: SwaggerType;
    $ref: string;
  };
  $ref: string;

  static swaggerSchema2StandardDataType(schema: Schema, templateName = '', originName = '', isResponse = false) {
    const { items, $ref, type } = schema;
    let primitiveType = schema.type as string;

    if (type === 'array') {
      primitiveType === _.get(items, 'type', '');

      if (primitiveType === 'array') {
        primitiveType = '';
      }
    }

    if (primitiveType === 'object') {
      primitiveType = '';
    }

    if (primitiveType === 'integer') {
      primitiveType = 'number';
    }

    if (primitiveType === 'file') {
      primitiveType = 'File';
    }

    let reference = generateTemplate($ref || _.get(items, '$ref', ''), originName);

    if (reference === 'Model') {
      reference = '';
    }

    if (reference === 'Array') {
      primitiveType = 'any[]';
      reference = '';
    }

    let isTemplateRef = false;
    const reg = new RegExp(`defs\\.${originName}\\.`, 'g');
    const templateCompareName = reference.replace(reg, 'defs.') || primitiveType;

    if (
      (templateCompareName && templateCompareName === templateName) ||
      templateCompareName === 'defs.' + templateName
    ) {
      reference = 'T0';
      isTemplateRef = true;
    } else if (reference) {
      if (originName && !reference.includes(originName)) {
        reference = 'defs.' + originName + '.' + reference;
      } else if (isResponse && !reference.startsWith('defs.')) {
        reference = 'defs.' + reference;
      }
    }

    return new DataType({
      isArr: type === 'array',
      enum: fixSwaggerEnum(schema.enum),
      primitiveType: primitiveType as PrimitiveType,
      reference,
      isTemplateRef
    });
  }
}

export function fixSwaggerEnum(enumStrs: string[]) {
  if (!enumStrs) {
    return enumStrs;
  }

  let enums = enumStrs as Array<string | number>;

  enumStrs.forEach(str => {
    if (!Number.isNaN(Number(str))) {
      enums.push(Number(str));
    }
  });

  return enums.filter(str => {
    return String(str).match(/^[0-9a-zA-Z\_\-\$]+$/);
  });
}

export class SwaggerInterface {
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

  static transformSwaggerInterface2Standard(
    inter: SwaggerInterface,
    usingOperationId: boolean,
    samePath: string,
    originName: string
  ) {
    let name = getIdentifierFromOperatorId(inter.operationId);

    if (!usingOperationId) {
      name = getIdentifierFromUrl(inter.path, inter.method, samePath);
    }

    const responseSchema = _.get(inter, 'responses.200.schema', {}) as Schema;
    const response = Schema.swaggerSchema2StandardDataType(responseSchema, '', originName, true);

    const parameters = (inter.parameters || []).map(param => {
      const { description, items, name, type, schema = {} as Schema, required } = param;

      return new Property({
        in: param.in,
        description,
        name,
        required,
        dataType: Schema.swaggerSchema2StandardDataType(
          {
            enum: param.enum,
            items,
            type,
            $ref: _.get(schema, '$ref')
          } as Schema,
          '',
          originName,
          param.in === 'body'
        )
      });
    });

    const standardInterface = new Interface({
      consumes: inter.consumes,
      description: inter.summary,
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

export class SwaggerDataSource {
  name: string;
  paths: {
    [key in string]: {
      put: SwaggerInterface;
      delete: SwaggerInterface;
      post: SwaggerInterface;
      get: SwaggerInterface;
    }
  };
  tags: { name: string; description: string }[];
  definitions: {
    [key in string]: {
      description: string;
      required?: string[];
      properties: { [key in string]: SwaggerProperty };
    }
  };
}

// TODO: 转换1.2版本的swagger数据成标准数据
export function transformV102SwaggerData2Standard(swagger, usingOperationId = true, originName = '') {}

export function transformSwaggerData2Standard(swagger: SwaggerDataSource, usingOperationId = true, originName = '') {
  const allSwaggerInterfaces = [] as SwaggerInterface[];
  _.forEach(swagger.paths, (methodInters, path) => {
    _.forEach(methodInters, (inter, method) => {
      inter.path = path;
      inter.method = method;
      allSwaggerInterfaces.push(inter);
    });
  });

  // 取mods
  const mods = swagger.tags
    .filter(tag => {
      // ignore un annotation case
      // if (toDashDefaultCase(tag.name) === toDashDefaultCase(tag.description)) {
      //   return false;
      // }

      return true;
    })
    .map(tag => {
      // 筛选所有的swagger方法，tags中包含了tag字段的
      const modInterfaces = allSwaggerInterfaces.filter(inter => {
        return (
          inter.tags.includes(tag.name) ||
          inter.tags.includes(tag.name.toLowerCase()) ||
          inter.tags.includes(tag.description.toLowerCase()) ||
          inter.tags.includes(toDashCase(tag.description))
        );
      });
      const samePath = getMaxSamePath(
        // 去除掉前面的'/'
        modInterfaces.map(inter => inter.path.slice(1))
      );

      const standardInterfaces = modInterfaces.map(inter => {
        return SwaggerInterface.transformSwaggerInterface2Standard(inter, usingOperationId, samePath, originName);
      });

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

  const baseClasses = _.map(swagger.definitions, (def, defName) => {
    const templateName = findDefinition(defName);
    defName = generateTemplateDef(defName);

    const properties = _.map(def.properties, (prop, propName) => {
      const { $ref, description, name, type, required, items } = prop;
      let primitiveType = (type as string) as any;

      const dataType = Schema.swaggerSchema2StandardDataType(
        {
          $ref,
          enum: prop.enum,
          items,
          type
        } as Schema,
        templateName,
        originName
      );

      return new Property({
        dataType,
        name: propName,
        description,
        required
      });
    });

    if (defName.replace(/(.+)<.+/, '$1') === 'Map') {
      return null;
    }

    return new BaseClass({
      description: def.description,
      name: defName,
      properties
    });
  }).filter(id => id);

  baseClasses.sort((pre, next) => {
    if (pre.justName === next.justName) {
      return pre.name.length > next.name.length ? -1 : 1;
    }

    return next.justName > pre.justName ? 1 : -1;
  });

  // 校验所有接口参数，如果是 body，body 指向的 BO 是否存在
  mods.forEach(mod => {
    mod.interfaces.forEach(inter => {
      inter.parameters = inter.parameters.map(param => {
        if (param.in === 'body') {
          const dataType = param.dataType.reference;
          let ref = dataType;

          // 如果 ref = "Foo<defs.Bar>" 则 ref = Foo
          if (ref.includes('«')) {
            ref = ref.slice(0, ref.indexOf('«'));
          }
          if (ref.includes('<')) {
            ref = ref.slice(0, ref.indexOf('<'));
          }

          if (ref.includes('defs.')) {
            ref = ref.slice(ref.lastIndexOf('.') + 1);
          }

          if (ref && !baseClasses.find(base => base.name === ref || base.justName === ref)) {
            debugLog.warn(`baseClasses not contains ${dataType} in ${param.name} param of ${inter.name} interface `);
            return {
              ...param,
              dataType: {
                ...param.dataType,
                reference: ''
              }
            } as Property;
          }
        }

        return param;
      });
    });
  });

  return new StandardDataSource({
    baseClasses: _.uniqBy(baseClasses, base => base.justName),
    mods,
    name: swagger.name
  });
}
