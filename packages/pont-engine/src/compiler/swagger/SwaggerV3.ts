import * as _ from 'lodash';
import { Mod, Property, BaseClass, StandardDataSource } from '../../main/StandardDataSource';
import {
  toDashCase,
  getMaxSamePath,
  getIdentifierFromUrl,
  hasChinese,
  transformCamelCase,
  transformModsName
} from '../../compatible/utils';
import { SwaggerInterface, Schema } from './type';
import type { SwaggerParameter, SwaggerReferenceObject, SwaggerProperty } from './type';
import { compileTemplate, parseAst2StandardDataType } from './utils';

// TODO: $ref, options, head
interface SwaggerPathItemObject {
  get?: SwaggerInterface;
  post?: SwaggerInterface;
  put?: SwaggerInterface;
  patch?: SwaggerInterface;
  delete?: SwaggerInterface;
  parameters?: SwaggerParameter[] | SwaggerReferenceObject[];
}

interface SwaggerV3DataSource {
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

function parseSwaggerV3Mods(swagger: SwaggerV3DataSource, defNames: string[], usingOperationId: boolean) {
  const allSwaggerInterfaces = [] as SwaggerInterface[];
  _.forEach(swagger.paths, (methodInters, path) => {
    const pathItemObject = _.cloneDeep(methodInters);

    _.forEach(pathItemObject as Omit<SwaggerPathItemObject, 'parameters'>, (inter, method) => {
      inter.path = path;
      inter.method = method;

      if (inter.requestBody) {
        const requestBodyContent = _.get(inter, 'requestBody.content', {});
        const requestFormat = Object.keys(requestBodyContent)[0];
        inter.parameters = [
          ...(inter.parameters ?? []),
          {
            name: 'requestBody',
            in: 'body',
            description: inter.requestBody.description,
            required: inter.requestBody.required,
            schema: _.get(requestBodyContent, `${requestFormat}.schema`, {}) as any
          }
        ];
      }

      if (!inter.tags) {
        inter.tags = ['defaultModule'];
      }

      allSwaggerInterfaces.push(inter);
    });
  });

  // 不存在顶层 tags 时使用 operation-object 下的 tags 并集
  // https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.0.md#operation-object
  if (_.isEmpty(swagger.tags)) {
    swagger.tags = [];
    allSwaggerInterfaces.forEach(({ tags }) => {
      if (tags && tags.length) {
        tags.forEach((tag) => {
          if (!swagger.tags.some((u) => u.name == tag)) {
            swagger.tags.push({ name: tag, description: tag });
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
    .map((tag) => {
      const modInterfaces = allSwaggerInterfaces.filter((inter) => {
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

      const samePath = getMaxSamePath(modInterfaces.map((inter) => inter.path.slice(1)));

      const standardInterfaces = modInterfaces.map((inter) => {
        return SwaggerInterface.transformSwaggerV3Interface2Standard(inter, usingOperationId, samePath, defNames);
      });

      // 判断是否有重复的 name
      if (usingOperationId) {
        const names = [] as string[];

        standardInterfaces.forEach((inter) => {
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
    .filter((mod) => {
      return mod.interfaces.length;
    });

  transformModsName(mods);

  return mods;
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

  const baseClasses = draftClasses.map((clazz) => {
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
      dataType.setTemplateIndex(templateArgs);

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
    baseClasses: _.uniqBy(baseClasses, (base) => base.name),
    mods: parseSwaggerV3Mods(swagger, defNames, usingOperationId),
    name: originName
  });
}
