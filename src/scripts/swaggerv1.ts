/*
 * Created Date: Monday March 11th 2019
 * Author: xuyanqi
 * Description: This source aims to transform swagger1.x dataSource to StandardDataSource
 * Copyright (c) 2019
 */

import * as _ from 'lodash';
import fetch from 'node-fetch';
import { Mod, BaseClass, Property, Interface, StandardDataType, StandardDataSource } from '../standard';
import { hasChinese, DataSourceConfig, Config } from '../utils';

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

const SWAGGER_TYPE = ['integer', 'string', 'file', 'array', 'number', 'boolean', 'object'];

/**
 * 数据集合
 */
class SwaggerV1DataSource {
  definitions: { [key in string]: SwaggerV1ModuleModel };
  modules: SwaggerV1ModuleAPiData[];
}

/**
 * 索引数据
 */
class SwaggerV1IndexDataSource {
  apis: SwaggerV1ModuleDescription[];
  info: {
    description: string;
    title: string;
  };
  swaggerVersion: string;
}

class SwaggerV1ModuleDescription {
  description: string;
  path: string;
}

/**
 * 模块数据
 */
class SwaggerV1ModuleDataSource {
  description: string;
  path: string;
  models: { [key in string]: SwaggerV1ModuleModel };
  apis: SwaggerV1ModuleApi[];
  resourcePath: string;
}

class SwaggerV1ModuleAPiData {
  description: string;
  name: string;
  interfaces: SwaggerV1ModuleApi[];
}

class SwaggerV1ModuleModel {
  description: string;
  id: string;
  properties: { [key in string]: SwaggerV1Property };
  static transformSwaggerV1Model2Standard() {}
}

class SwaggerV1ModuleApi {
  description: string;
  path: string;
  operations: SwaggerV1Interface[];
  static transformSwaggerV1Api2Standard() {}
}

class SwaggerV1Property {
  type: string;
  enum? = [] as string[];
  items? = null as {
    type: string;
  };
  description? = '';
  name? = '';
  required: boolean;
}

/**
 * api接口
 */
class SwaggerV1Interface {
  consumes = [] as string[];

  deprecated: 'true' | 'false';

  method: string;

  nickname: string;

  notes: string;

  parameters = [] as SwaggerV1Parameter[];

  produces: string[];

  responseMessages: SwaggerV1Response[];

  summary: string;

  type: string;

  static transformSwaggerV1Interface2Standard() {}
}

class SwaggerV1Response {}

/**
 * api入参
 */
class SwaggerV1Parameter {
  allowMultiple: boolean;
  /** 描述 */
  description: string;
  /** 字段名 */
  name: string;
  paramAccess: string;
  /** 传参形式 */
  paramType: string;
  required: boolean;
  /** 类型 */
  type: SwaggerType;
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

class Schema {
  enum?: string[];
  type: SwaggerType;
  items: {
    type: string;
  };
  static parseSwaggerSchema2StandardDataType(
    schema: Schema,
    defNames: string[],
    classTemplateArgs = [] as StandardDataType[]
  ) {
    const { items, type } = schema;
    let typeName = schema.type as string;
    if (type === 'array') {
      let itemsType = _.get(items, 'type', '');
      if (itemsType) {
        if (SWAGGER_TYPE.indexOf(itemsType) === -1) {
          // 如果是包装类型
          const ast = compileTemplate(itemsType);
          const contentType = parseAst2StandardDataType(ast, defNames, classTemplateArgs);

          return new StandardDataType([contentType], 'Array', false, -1);
        }
        // 如果是基本类型
        if (itemsType === 'integer') {
          itemsType = 'number';
        }
        if (itemsType === 'file') {
          itemsType = 'file';
        }
        let contentType = new StandardDataType([], itemsType, false, -1);
        if (itemsType === 'array') {
          contentType = new StandardDataType([new StandardDataType()], 'Array', false, -1);
        }
        return new StandardDataType([contentType], 'Array', false, -1);
      }
    }

    // 如果是包装类型
    if (SWAGGER_TYPE.indexOf(typeName) === -1) {
      const ast = compileTemplate(typeName);

      if (!ast) {
        return new StandardDataType();
      }

      return parseAst2StandardDataType(ast, defNames, classTemplateArgs);
    }
    if (typeName === 'integer') {
      typeName = 'number';
    }

    if (typeName === 'file') {
      typeName = 'File';
    }

    if (schema.enum) {
      return StandardDataType.constructorWithEnum(parseSwaggerEnumType(schema.enum));
    }

    return new StandardDataType([], typeName, false);
  }
}

export function transformModuleName(_name) {
  // 将关键词转化
  return _name.replace('/', '_');
}

// transform function
export function transformCompatibleSwaggerData2Standard(
  swagger: SwaggerV1DataSource,
  usingOperationId = true,
  originName = ''
) {
  const { definitions, modules } = swagger;

  const swaggerStr = JSON.stringify(swagger);

  // build mods
  const mods = _.map(modules, module => {
    const { description, name } = module;
    const interfaces = _.map(module.interfaces, inter => {
      const interner = { ...inter, ...inter.operations[0] };
      // Params,去重
      interner.parameters = _.uniqBy(interner.parameters, 'name');
      const consumes = interner.consumes;
      const parameters = _.map(interner.parameters, param => {
        const dataType = Schema.parseSwaggerSchema2StandardDataType({ type: param.type } as Schema, [], []);
        const description = param.description;
        const name = param.name;
        const required = param.required;
        return new Property({ dataType, description, name, required });
      });
      const description = interner.description;
      const response = Schema.parseSwaggerSchema2StandardDataType({ type: interner.type } as Schema, [], []);
      const method = interner.method;
      const name = interner.nickname;
      const path = interner.path;
      return new Interface({
        consumes,
        parameters,
        description,
        response,
        method,
        name,
        path
      });
    });
    return new Mod({
      description,
      interfaces,
      name: transformModuleName(name)
    });
  });
  const draftClasses = _.map(definitions, (def, defName) => {
    const defNameAst = compileTemplate(defName);
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
    const props = _.map(properties, (prop, propName) => {
      const dataType = Schema.parseSwaggerSchema2StandardDataType(
        { enum: prop.enum, type: prop.type, items: prop.items } as Schema,
        defNames,
        templateArgs
      );
      return new Property({
        dataType,
        name: propName,
        description,
        required: false
      });
    });
    return new BaseClass({
      description,
      name: clazz.name,
      properties: props,
      templateArgs
    });
  });
  const data = new StandardDataSource({
    // baseClasses: _.uniqBy(baseClasses, base => base.name),
    baseClasses: baseClasses,
    mods,
    name: originName
  });
  return data;
  // const baseClasses = _.map(draftClasses, (definition, definitionName) => {
  //   const name = definitionName;
  //   const description = definition.description;
  //   const properties = _.map(definition.properties, (property, propertyName) => {
  //     const dataType = property.type;
  //     const name = propertyName;
  //     const required = property.required;
  //     return new Property({
  //       // dataType,
  //       name,
  //       required
  //     });
  //   });
  // });
}

export class SwaggerV1Reader extends OriginBaseReader {
  /** 获取远程数据源 */
  async fetchData(): Promise<SwaggerV1DataSource> {
    this.report('获取远程数据中...');
    const indexRes = await fetch(this.config.originUrl);
    const indexResStr = await indexRes.text();
    let indexData: SwaggerV1IndexDataSource = await JSON.parse(indexResStr);

    let modules = [];
    let definitions = {};
    /** 遍历请求模块接口数据 */
    for (let i = 0; i < indexData.apis.length; i++) {
      let api = indexData.apis[i];
      const moduleRes = await fetch(this.config.originUrl + api.path);
      let moduleResStr = await moduleRes.text();
      /** 翻译中文基类 */
      moduleResStr = await this.translateChinese(moduleResStr);
      const moduleResData: SwaggerV1ModuleDataSource = await JSON.parse(moduleResStr);
      const moduleApiData: SwaggerV1ModuleAPiData = {
        description: api.description,
        interfaces: moduleResData.apis,
        name: api.path.slice(1)
      };
      modules.push(moduleApiData);
      Object.assign(definitions, moduleResData.models);
    }
    const dataSource = { modules, definitions };

    return dataSource;
  }

  /** 获取接口数据，解析并返回 */
  async fetchRemoteData(): Promise<StandardDataSource> {
    try {
      const data = await this.fetchData();

      // 将数据源转换为标准数据源格式
      let remoteDataSource = this.transform2Standard(data, this.config.usingOperationId, this.config.name);
      this.report('远程数据解析完毕!');

      // 如果用户配置了数据的自定义转换方法、如接口过滤等
      if (this.config.transformPath) {
        this.report('获取用户自定义数据转换方法中...');
        const transformProgram = Config.getTransformFromConfig(this.config);

        remoteDataSource = transformProgram(remoteDataSource);
        this.report('用户自定义数据转换方法执行完毕');
      }

      // 对解析后的标准数据源进行校验
      this.checkDataSource(remoteDataSource);
      this.report('解析后数据校验完毕！');

      this.report('远程对象创建完毕！');

      return remoteDataSource;
    } catch (e) {
      throw new Error('读取远程接口数据失败！' + e.toString());
    }
  }

  /**
   * 数据转换方法
   * @param data
   * @param usingOperationId
   * @param originName
   */
  transform2Standard(data, usingOperationId: boolean, originName: string) {
    return transformCompatibleSwaggerData2Standard(data, usingOperationId, originName);
  }
}
