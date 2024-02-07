import * as _ from 'lodash';
import type { SwaggerDataSource } from '../../compatible/scripts/swagger';
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
import type { SwaggerParameter, SwaggerReferenceObject } from './type';
import { compileTemplate, parseAst2StandardDataType } from './utils';
import { DEFAULT_MODULE_NAME } from '../../constants/defaultModule';

// TODO: $ref, options, head
interface SwaggerPathItemObject {
  get?: SwaggerInterface;
  post?: SwaggerInterface;
  put?: SwaggerInterface;
  patch?: SwaggerInterface;
  delete?: SwaggerInterface;
  parameters?: SwaggerParameter[] | SwaggerReferenceObject[];
}

function parseSwaggerMods(
  swagger: SwaggerDataSource,
  defNames: string[],
  usingOperationId: boolean,
  compileTempateKeyword?: string
) {
  const allSwaggerInterfaces = [] as SwaggerInterface[];
  _.forEach(swagger.paths, (methodInters, path) => {
    const pathItemObject = _.cloneDeep(methodInters);

    if (Array.isArray(pathItemObject.parameters)) {
      ['get', 'post', 'patch', 'delete', 'put'].forEach((method) => {
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
        inter.tags = [DEFAULT_MODULE_NAME];
      }

      allSwaggerInterfaces.push(inter);
    });
  });

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
    name: DEFAULT_MODULE_NAME,
    description: DEFAULT_MODULE_NAME
  });

  // swagger 2.0 中 tags属性是可选的
  const mods = swagger.tags
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
  const defNames = draftClasses.map((clazz) => clazz.name);

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
    baseClasses: _.uniqBy(baseClasses, (base) => base.name),
    mods: parseSwaggerMods(swagger, defNames, usingOperationId),
    name: originName
  });
}
