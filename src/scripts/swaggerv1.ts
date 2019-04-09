/*
 * Created Date: Monday March 11th 2019
 * Author: xuyanqi
 * Description: This source aims to transform swagger1.x dataSource to StandardDataSource
 * Copyright (c) 2019
 */

import * as _ from 'lodash';
import fetch from 'node-fetch';
import { StandardDataSource, Mod, BaseClass, Property } from '../standard';
import { hasChinese, DataSourceConfig, Config } from '../utils';
// import { findDefinition } from './compiler';

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
  $ref? = '';
  description? = '';
  name: string;
  required: boolean;
}

/**
 * 数据集合
 */
export class CompatibleSwaggerDataSource {
  definitions: { [key in string]: CompatibleModuleModel };
  apis: CompatibleModuleApi[];
}

/**
 * 索引数据
 */
export class CompatibleDataSource {
  apis: CompatibleModuleDescription[];
  info: {
    description: string;
    title: string;
  };
  swaggerVersion: string;
}

export class CompatibleModuleDescription {
  description: string;
  path: string;
}

/**
 * 模块数据
 */
export class CompatibleModuleSource {
  description: string;
  path: string;
  models: { [key in string]: CompatibleModuleModel };
  apis: CompatibleModuleApi[];
  resourcePath: string;
}

class CompatibleModuleModel {
  description: string;
  id: string;
  properties: { [key in string]: SwaggerProperty };
}

class CompatibleModuleApi {
  description: string;
  path: string;
  operations: SwaggerInterface[];
}

/**
 * api接口
 */
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

  static transformSwaggerInterface2Standard() {}
}

/**
 * api入参
 */
class SwaggerParameter {
  allowMultiple: boolean;
  /** 描述 */
  description: string;
  /** 字段名 */
  name: string;
  paramAccess: string;
  /** 传参形式 */
  paramType: 'query' | 'body' | 'path';
  required: boolean;
  /** 类型 */
  type: SwaggerType;
}

class Schema {
  enum?: string[];
  type: SwaggerType;
  items: {
    type: SwaggerType;
    $ref: string;
  };
  $ref: string;
}

// transform function
// export function transformCompatibleSwaggerData2Standard(
//   swagger: CompatibleDataSource,
//   usingOperationId = true,
//   originName = ''
// ) {
//   // build mods
//   const mods = swagger.groups.map((group, index) => {
//     const interfaces = group.apis.reduce((allInterfaces, api) => allInterfaces.concat(api.operations), []);

//     const standardInterfaces = interfaces.map(inter => {
//       inter.operationId = inter.nickname;
//       return SwaggerInterface.transformSwaggerInterface2Standard(inter, usingOperationId, '', originName);
//     });
//     const description = group.description;
//     const name = group.path.match(/([a-zA-Z]+)/g).pop();
//     return new Mod({
//       description,
//       interfaces: standardInterfaces,
//       name
//     });
//   });
//   // build baseClasses
//   const baseClasses = swagger.groups.reduce((allClasses, group) => {
//     return allClasses.concat(
//       _.map(group.models, (value, key) => {
//         // TODO: 格式化name
//         const name = key;
//         const description = value.description;
//         const templateName = findDefinition(key);
//         const properties = _.map(value.properties, (prop, propName) => {
//           const { $ref, description, type, required, items } = prop;

//           const dataType = Schema.swaggerSchema2StandardDataType(
//             {
//               $ref,
//               enum: prop.enum,
//               items,
//               type
//             } as Schema,
//             templateName,
//             originName
//           );

//           return new Property({
//             dataType,
//             name: propName,
//             description,
//             required
//           });
//         });

//         return new BaseClass({
//           name,
//           description,
//           properties
//         });
//       })
//     );
//   }, []);

//   const name = swagger.name;
//   return new StandardDataSource({
//     name,
//     mods,
//     baseClasses: _.uniqBy(baseClasses, base => base.justName)
//   });
// }

export class SwaggerV1Reader extends OriginBaseReader {
  /** 获取远程数据源 */
  async fetchData(): Promise<CompatibleSwaggerDataSource> {
    this.report('获取远程数据中...');
    const indexRes = await fetch(this.config.originUrl);
    const indexResStr = await indexRes.text();
    let indexData: CompatibleDataSource = await JSON.parse(indexResStr);

    let apis = [];
    let definitions = {};
    /** 遍历请求模块接口数据 */
    for (let i = 0; i < indexData.apis.length; i++) {
      let api = indexData.apis[i];
      const moduleRes = await fetch(this.config.originUrl + api.path);
      let moduleResStr = await moduleRes.text();
      /** 翻译中文基类 */
      moduleResStr = await this.translateChinese(moduleResStr);
      const moduleResData: CompatibleModuleSource = await JSON.parse(moduleResStr);
      apis = apis.concat(moduleResData.apis);
      Object.assign(definitions, moduleResData.models);
    }
    const dataSource = { apis, definitions };

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
    // return transformCompatibleSwaggerData2Standard(data, usingOperationId, originName);
    return new StandardDataSource({
      name: '',
      mods: [],
      baseClasses: []
    });
  }
}
