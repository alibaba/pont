import * as _ from "lodash";
import { parseSwaggerEnumType } from "../../compatible/scripts/swagger";
import { getIdentifierFromUrl, getIdentifierFromOperatorId } from "../../compatible/utils";
import { Interface, Property, StandardDataType } from '../../main/StandardDataSource';
import { compileTemplate, parseAst2StandardDataType } from "./utils";

enum SwaggerType {
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
  additionalProperties: SwaggerProperty;
  $ref? = '';
  description? = '';
  name: string;
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
  type?: SwaggerType;

  enum?: string[];

  items? = null as {
    type?: SwaggerType;
    $ref?: string;
  };

  schema: Schema;
}

class SwaggerRequestBody {
  /** 描述 */
  description = '';

  /** 是否必填 */
  required: boolean;

  content = null as {
    [key: string]: {
      schema: Schema;
    };
  };
}

export class Schema {
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
      const itemsEnum = _.get(items, 'enum', []);

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

        // 处理枚举类型数据
        if (itemsEnum.length) {
          contentType = StandardDataType.constructorWithEnum(parseSwaggerEnumType(itemsEnum));
          contentType.typeName = itemsType;
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

export class SwaggerInterface {
  consumes = [] as string[];

  parameters = [] as SwaggerParameter[];

  requestBody = {} as SwaggerRequestBody;

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

    const parameters = (inter.parameters || []).map((param) => {
      const { description, required, schema, name } = param;

      return new Property({
        description,
        required,
        in: param.in,
        name: name.includes('/') ? name.split('/').join('') : name,
        // 处理方式与response保持一致，因为他们本身的结构是一样的
        dataType: Schema.parseSwaggerSchema2StandardDataType(schema, defNames, [], compileTemplateKeyword)
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

    const parameters = (inter.parameters || []).map((param) => {
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

export interface SwaggerReferenceObject {
  $ref: string;
}
