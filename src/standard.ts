import * as _ from 'lodash';
import { getDuplicateById } from './utils';

// primitive type
export enum PrimitiveType {
  number = 'number',
  string = 'string',
  boolean = 'boolean'
}

class Constructable {
  constructor(arg = {}) {
    _.forEach(arg, (value, key) => {
      if (value !== undefined) {
        this[key] = value;
      }
    });
  }
}

// all the data type here
export class DataType {
  primitiveType: PrimitiveType;
  isArr: boolean = false;

  customType: string = '';

  // reference may have generic like Pagination<BaseBO>
  reference: string = '';

  enum: Array<string | number> = [];

  constructor(inter: Partial<DataType>) {
    if (inter.enum) {
      this.enum = inter.enum;
    }
    if (inter.reference) {
      this.reference = inter.reference;
    }
    if (inter.customType) {
      this.customType = inter.customType;
    }
    if (inter.isArr) {
      this.isArr = inter.isArr;
    }
    if (inter.primitiveType) {
      this.primitiveType = inter.primitiveType;
    }
  }

  getReference() {
    return this.reference;
  }

  getEnumType() {
    // NOTE: fix the swagger can only export number bug in swagger transform programe
    if (!this.enum.length) {
      return 'string';
    }

    return this.enum
      .map(numOrStr => {
        if (typeof numOrStr === 'string') {
          return `'${numOrStr}'`;
        }

        return numOrStr;
      })
      .join(' | ');
  }

  get initialValue() {
    if (this.isArr) {
      return '[]';
    }

    if (this.reference) {
      if (this.reference.match(/<.+>/)) {
        const noTemplateRef = this.reference.replace(/<.+>/, '');

        return `new ${noTemplateRef}()`;
      }
      return `new ${this.reference}()`;
    }

    if (this.enum && this.enum.length) {
      const str = this.enum[0];

      if (typeof str === 'string') {
        return `'${str}'`;
      }

      return str + '';
    }

    if (this.primitiveType) {
      if (this.primitiveType === PrimitiveType.string) {
        return "''";
      }

      if (this.primitiveType === PrimitiveType.boolean) {
        return 'false';
      }
    }

    return 'undefined';
  }

  get type() {
    if (this.reference) {
      if (this.isArr) {
        return `${this.reference}[]`;
      }

      // todo
      return this.reference;
    }

    if (this.customType) {
      return `Array<${this.customType}>`;
    }

    if (this.isArr) {
      if (this.enum && this.enum.length) {
        return `Array<${this.getEnumType()}>`;
      }

      if (this.primitiveType) {
        return `${this.primitiveType}[]`;
      }

      return 'any[]';
    }

    if (this.enum && this.enum.length) {
      return this.getEnumType();
    }

    return this.primitiveType || 'any';
  }
}

// property both in params and response
export class Property extends Constructable {
  dataType: DataType;
  description?: string;
  name: string;
  required: boolean;

  in: 'query' | 'body' | 'path';

  constructor(prop: Partial<Property>) {
    super(prop);

    // FIXME: name 可能不合法，这里暂时只判断是否包含 . 。
    if (this.name.includes('.')) {
      this.name = this.name.slice(this.name.lastIndexOf('.') + 1);
    }
  }

  toPropertyCode(hasRequired = false, optional = false) {
    const dataType = this.dataType;
    let optionalSignal = hasRequired && optional ? '?' : '';

    if (hasRequired && !this.required) {
      optionalSignal = '?';
    }

    return `
      /** ${this.description || this.name} */
      ${this.name}${optionalSignal}: ${this.dataType.type};`;
  }

  toPropertyCodeWithInitValue(baseName = '') {
    const dataType = this.dataType;
    let typeWithValue = `= ${this.dataType.initialValue}`;

    if (
      dataType.type !== 'any' &&
      dataType.type !== 'any[]' &&
      !dataType.isArr
    ) {
      typeWithValue = `= ${dataType.initialValue}`;

      if (!this.dataType.initialValue) {
        return '';
      }
    }

    if (!this.dataType.initialValue) {
      typeWithValue = `: ${this.dataType.type}`;
    }

    if (typeWithValue.includes('defs.')) {
      typeWithValue = typeWithValue.replace(/defs.*\./g, '');
    }

    if (this.dataType.reference.includes(baseName)) {
      typeWithValue = `= {}`;
    }

    return `
      /** ${this.description || this.name} */
      ${this.name} ${typeWithValue}
      `;
  }

  toBody() {
    return this.dataType.type;
  }
}

export class Interface extends Constructable {
  consumes: string[];
  parameters: Property[];
  description: string;
  response: DataType;
  method: string;
  name: string;
  path: string;

  get responseType() {
    return this.response.type;
  }

  getParamsCode(className = 'Params') {
    return `
      class ${className} {
        ${this.parameters
          .filter(param => param.in !== 'body')
          .map(param => param.toPropertyCode(true))
          .join('')}
      }
    `;
  }

  getBodyParamsCode() {
    const bodyParam = this.parameters.find(param => param.in === 'body');

    return (bodyParam && bodyParam.dataType.type) || '';
  }

  constructor(inter: Partial<Interface>) {
    super(inter);
  }
}

export class Mod extends Constructable {
  description: string;
  interfaces: Interface[];
  name: string;

  constructor(mod: Partial<Mod>) {
    super(mod);

    this.interfaces = _.orderBy(this.interfaces, 'path');
  }
}

export class BaseClass extends Constructable {
  name: string;
  description: string;
  properties: Property[];

  get justName() {
    return this.name.replace(/(.+)<.+/, '$1');
  }

  constructor(base: Partial<BaseClass>) {
    super(base);

    this.properties = _.orderBy(this.properties, 'name');
  }
}

export class StandardDataSource {
  public name: string;
  public baseClasses: BaseClass[];
  public mods: Mod[];

  reOrder() {
    this.baseClasses = _.orderBy(this.baseClasses, 'name');
    this.mods = _.orderBy(this.mods, 'name');
  }

  // validate the if the dataSource is valid
  validate() {
    const errors = [] as string[];

    this.mods.forEach(mod => {
      if (!mod.name) {
        errors.push(`lock 文件不合法，发现没有 name 属性的模块;`);
      }
    });

    this.baseClasses.forEach(base => {
      if (!base.name) {
        errors.push(`lock 文件不合法，发现没有 name 属性的基类;`);
      }
    });

    const dupMod = getDuplicateById(this.mods, 'name');
    const dupBase = getDuplicateById(this.baseClasses, 'name');

    if (dupMod) {
      errors.push(`模块 ${dupMod.name} 重复了。`);
    }
    if (dupBase) {
      errors.push(`基类 ${dupBase.name} 重复了。`);
    }

    if (errors && errors.length) {
      throw new Error(errors.join('\n'));
    }

    return errors;
  }

  serialize() {
    return JSON.stringify(
      {
        mods: this.mods,
        baseClasses: this.baseClasses
      },
      null,
      2
    );
  }

  constructor(standard: {
    mods: Mod[];
    name: string;
    baseClasses: BaseClass[];
  }) {
    this.mods = standard.mods;
    if (standard.name) {
      this.name = standard.name;
    }
    this.baseClasses = standard.baseClasses;

    this.reOrder();
  }

  static constructorFromLock(localDataObject: StandardDataSource) {
    try {
      const baseClasses = localDataObject.baseClasses.map(base => {
        const props = base.properties.map(prop => {
          const dataType = new DataType(prop.dataType);

          return new Property({
            ...prop,
            dataType
          });
        });

        return new BaseClass({
          description: base.description,
          name: base.name,
          properties: _.unionBy(props, 'name')
        });
      });
      const mods = localDataObject.mods.map(mod => {
        const interfaces = mod.interfaces.map(inter => {
          const response = new DataType(inter.response);
          const parameters = inter.parameters
            .map(param => {
              const dataType = new DataType(param.dataType);

              if (param.in === 'body') {
                const dataType = param.dataType.reference;
                const ref = dataType.includes('defs.')
                  ? dataType.slice(5)
                  : dataType;

                if (
                  !baseClasses.find(
                    base => base.name === ref || base.justName === ref
                  )
                ) {
                  return;
                }
              }

              return new Property({
                ...param,
                dataType
              });
            })
            .filter(_.identity);

          return new Interface({
            ...inter,
            parameters,
            response
          });
        });

        return new Mod({
          description: mod.description,
          name: mod.name,
          interfaces
        });
      });

      return new StandardDataSource({
        baseClasses,
        mods,
        name: localDataObject.name
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
