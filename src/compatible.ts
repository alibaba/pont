/*
 * Created Date: Monday March 11th 2019
 * Author: xuyanqi
 * Description: This source aims to transform swagger1.x dataSource to StandardDataSource
 * Copyright (c) 2019
 */

import * as _ from 'lodash';
import { StandardDataSource, Mod, BaseClass, Property } from './standard';
import { SwaggerProperty, SwaggerInterface, Schema } from './swagger';
import { findDefinition } from './compiler';

/**
 * step1 fetch dataType
 */
export class CompatibleDataSource {
  name: string;
  apis: { description: string; path: string }[];
  info: {
    description: string;
    title: string;
  };
  groups: CompatibleModuleSource[];
  swaggerVersion: string;
}

/**
 * step2 fetch dataType
 */
export class CompatibleModuleSource {
  description: string;
  path: string;
  models: {
    [key in string]: {
      description: string;
      id: string;
      properties: { [key in string]: SwaggerProperty };
    }
  };
  apis: {
    description: string;
    path: string;
    operations: SwaggerInterface[];
  }[];
  resourcePath: string;
}

// transform function
export function transformCompatibleSwaggerData2Standard(
  swagger: CompatibleDataSource,
  usingOperationId = true,
  originName = ''
) {
  // build mods
  const mods = swagger.groups.map((group, index) => {
    const interfaces = group.apis.reduce((allInterfaces, api) => allInterfaces.concat(api.operations), []);

    const standardInterfaces = interfaces.map(inter => {
      inter.operationId = inter.nickname;
      return SwaggerInterface.transformSwaggerInterface2Standard(inter, usingOperationId, '', originName);
    });
    const description = group.description;
    const name = group.path.match(/([a-zA-Z]+)/g).pop();
    return new Mod({
      description,
      interfaces: standardInterfaces,
      name
    });
  });
  // build baseClasses
  const baseClasses = swagger.groups.reduce((allClasses, group) => {
    return allClasses.concat(
      _.map(group.models, (value, key) => {
        const name = key;
        const description = value.description;
        const templateName = findDefinition(key);
        const properties = _.map(value.properties, (prop, propName) => {
          const { $ref, description, type, required, items } = prop;

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

        return new BaseClass({
          name,
          description,
          properties
        });
      })
    );
  }, []);

  const name = swagger.name;
  return new StandardDataSource({
    name,
    mods,
    baseClasses: _.uniqBy(baseClasses, base => base.justName)
  });
}
