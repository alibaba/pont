import * as _ from 'lodash';
import { getDuplicateById } from './utils';
import { compileTemplate, parseAst2StandardDataType } from './compiler';

// primitive type
export enum PrimitiveType {
  number = 'number',
  string = 'string',
  boolean = 'boolean'
}

class Contextable {
  getDsName() {
    const context = this.getContext();

    if (context && context.dataSource) {
      return context.dataSource.name;
    }

    return '';
  }

  private context: any;

  getContext() {
    return this.context;
  }

  setContext(context) {
    this.context = context;
  }

  constructor(arg = {}) {
    _.forEach(arg, (value, key) => {
      if (value !== undefined) {
        this[key] = value;
      }
    });
  }

  toJSON() {
    return _.mapValues(this, (value, key) => {
      if (key === 'context') {
        return undefined;
      }

      return value;
    });
  }
}

/** deprecated */
class DataType {
  primitiveType: PrimitiveType;
  isArr: boolean = false;
  customType: string = '';

  // reference may have generic like Pagination<BaseBO>
  reference: string = '';

  enum: Array<string | number> = [];

  isTemplateRef = false;
}

// 兼容性代码，将老的 datatype 转换为新的。
function dateTypeRefs2Ast(refStr: string, originName: string, compileTemplateKeyword?: string) {
  let ref = refStr.replace(new RegExp(`defs.${originName}.`, 'g'), '');
  ref = ref.replace(/defs./g, '');
  ref = ref.replace(/= any/g, '');
  const PreTemplate = '«';
  const EndTemplate = '»';
  ref = ref.replace(/</g, PreTemplate).replace(/>/g, EndTemplate);

  const ast = compileTemplate(ref, compileTemplateKeyword);

  return ast;
}

// 兼容性代码，将老的 datatype 转换为新的。
function dataType2StandardDataType(
  dataType: DataType,
  originName: string,
  defNames: string[],
  compileTemplateKeyword?: string
) {
  let standardDataType = null as StandardDataType;

  if (dataType.enum && dataType.enum.length) {
    standardDataType = new StandardDataType([], '', false, -1, compileTemplateKeyword);
    standardDataType.setEnum(dataType.enum);
  } else if (dataType.primitiveType) {
    standardDataType = new StandardDataType([], dataType.primitiveType, false, -1, compileTemplateKeyword);
  } else if (dataType.reference) {
    const ast = dateTypeRefs2Ast(dataType.reference, originName, compileTemplateKeyword);
    standardDataType = parseAst2StandardDataType(ast, defNames, []);
  }

  if (dataType.isArr) {
    if (!standardDataType) {
      standardDataType = new StandardDataType();
    }

    return new StandardDataType([standardDataType], 'Array', false, -1, compileTemplateKeyword);
  }

  if (!standardDataType) {
    return new StandardDataType();
  }

  return standardDataType;
}

export class StandardDataType extends Contextable {
  enum: Array<string | number> = [];

  setEnum(enums: Array<string | number> = []) {
    this.enum = enums.map(value => {
      if (typeof value === 'string') {
        if (!value.startsWith("'")) {
          value = "'" + value;
        }

        if (!value.endsWith("'")) {
          value = value + "'";
        }
      }

      return value;
    });
  }

  constructor(
    public typeArgs = [] as StandardDataType[],
    /** 例如 number,A(defs.A),Array,Object, '1' | '2' | 'a' 等 */
    public typeName = '',
    public isDefsType = false,
    /** 指向类的第几个模板，-1 表示没有 */
    public templateIndex = -1,
    public compileTemplateKeyword = '#/definitions/'
  ) {
    super();
  }

  static constructorWithEnum(enums: Array<string | number> = []) {
    const dataType = new StandardDataType();
    dataType.setEnum(enums);

    return dataType;
  }

  static constructorFromJSON(dataType: StandardDataType, originName: string, defNames: string[]) {
    if (Object.getOwnPropertyNames(dataType).includes('reference')) {
      return dataType2StandardDataType(dataType as any, originName, defNames, dataType.compileTemplateKeyword);
    }

    const { isDefsType, templateIndex, typeArgs = [], typeName } = dataType;

    if (typeArgs.length) {
      const instance: StandardDataType = new StandardDataType(
        typeArgs.map(arg => StandardDataType.constructorFromJSON(arg, originName, defNames)),
        typeName,
        isDefsType,
        templateIndex
      );
      instance.setEnum(dataType.enum);
      return instance;
    }

    const result = new StandardDataType([], typeName, isDefsType, templateIndex);
    result.setEnum(dataType.enum);

    return result;
  }

  setTemplateIndex(classTemplateArgs: StandardDataType[]) {
    const codes = classTemplateArgs.map(arg => arg.generateCode());
    const index = codes.indexOf(this.generateCode());

    this.templateIndex = index;
  }

  getDefNameWithTemplate() {}

  generateCodeWithTemplate() {}

  getDefName(originName) {
    let name = this.typeName;

    if (this.isDefsType) {
      name = originName ? `defs.${originName}.${this.typeName}` : `defs.${this.typeName}`;
    }

    return name;
  }

  getEnumType() {
    return this.enum.join(' | ') || 'string';
  }

  /** 生成 Typescript 类型定义的代码 */
  generateCode(originName = '') {
    if (this.templateIndex !== -1) {
      return `T${this.templateIndex}`;
    }

    if (this.enum.length) {
      return this.getEnumType();
    }

    const name = this.getDefName(originName);

    if (this.typeArgs.length) {
      return `${name}<${this.typeArgs.map(arg => arg.generateCode(originName)).join(', ')}>`;
    }

    return name || 'any';
  }

  getInitialValue(usingDef = true) {
    if (this.typeName === 'Array') {
      return '[]';
    }

    if (this.isDefsType) {
      const originName = this.getDsName();

      if (!usingDef) {
        return `new ${this.typeName}()`;
      }

      return `new ${this.getDefName(originName)}()`;
    }

    if (this.templateIndex > -1) {
      return 'undefined';
    }

    if (this.typeName === 'string') {
      return "''";
    }

    if (this.typeName === 'boolean') {
      return 'false';
    }

    if (this.enum && this.enum.length) {
      const str = this.enum[0];

      if (typeof str === 'string') {
        return `${str}`;
      }

      return str + '';
    }

    return 'undefined';
  }

  /** deprecated */
  get initialValue() {
    return this.getInitialValue();
  }
}

// property both in params and response
export class Property extends Contextable {
  dataType: StandardDataType;
  description?: string;
  name: string;
  required: boolean;

  in: 'query' | 'body' | 'path';

  setContext(context) {
    super.setContext(context);
    this.dataType.setContext(context);
  }

  constructor(prop: Partial<Property>) {
    super(prop);

    // FIXME: name 可能不合法，这里暂时只判断是否包含 . 。
    if (this.name.includes('.')) {
      this.name = this.name.slice(this.name.lastIndexOf('.') + 1);
    }
  }

  toPropertyCode(hasRequired = false, optional = false) {
    let optionalSignal = hasRequired && optional ? '?' : '';

    if (hasRequired && !this.required) {
      optionalSignal = '?';
    }

    let name = this.name;
    if (!name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
      name = `'${name}'`;
    }

    return `
      /** ${this.description || this.name} */
      ${name}${optionalSignal}: ${this.dataType.generateCode(this.getDsName())};`;
  }

  toPropertyCodeWithInitValue(baseName = '') {
    let typeWithValue = `= ${this.dataType.getInitialValue(false)}`;

    if (!this.dataType.getInitialValue(false)) {
      typeWithValue = `: ${this.dataType.generateCode(this.getDsName())}`;
    }

    if (this.dataType.typeName === baseName) {
      typeWithValue = `= {}`;
    }

    let name = this.name;
    if (!name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
      name = `'${name}'`;
    }

    return `
      /** ${this.description || this.name} */
      ${name} ${typeWithValue}
      `;
  }

  toBody() {
    return this.dataType.generateCode(this.getDsName());
  }
}

export class Interface extends Contextable {
  consumes: string[];
  parameters: Property[];
  description: string;
  response: StandardDataType;
  method: string;
  name: string;
  path: string;

  get responseType() {
    return this.response.generateCode(this.getDsName());
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

    return (bodyParam && bodyParam.dataType.generateCode(this.getDsName())) || '';
  }

  setContext(context: any) {
    super.setContext(context);
    this.parameters.forEach(param => param.setContext(context));
    this.response && this.response.setContext(context);
  }

  constructor(inter: Partial<Interface>) {
    super(inter);
  }
}

export class Mod extends Contextable {
  description: string;
  interfaces: Interface[];
  name: string;

  setContext(context: any) {
    super.setContext(context);
    this.interfaces.forEach(inter => inter.setContext(context));
  }

  constructor(mod: Partial<Mod>) {
    super(mod);

    this.interfaces = _.orderBy(this.interfaces, 'path');
  }
}

export class BaseClass extends Contextable {
  name: string;
  description: string;
  properties: Property[];
  templateArgs: StandardDataType[];

  setContext(context: any) {
    super.setContext(context);
    this.properties.forEach(prop => prop.setContext(context));
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

  setContext() {
    this.baseClasses.forEach(base => base.setContext({ dataSource: this }));
    this.mods.forEach(mod => mod.setContext({ dataSource: this }));
  }

  constructor(standard: { mods: Mod[]; name: string; baseClasses: BaseClass[] }) {
    this.mods = standard.mods;
    if (standard.name) {
      this.name = standard.name;
    }
    this.baseClasses = standard.baseClasses;

    this.reOrder();
    this.setContext();
  }

  static constructorFromLock(localDataObject: StandardDataSource, originName) {
    try {
      // 兼容性代码，将老的数据结构转换为新的。
      const defNames = localDataObject.baseClasses.map(base => {
        if (base.name.includes('<')) {
          return base.name.slice(0, base.name.indexOf('<'));
        }
        return base.name;
      });
      const baseClasses = localDataObject.baseClasses.map(base => {
        const props = base.properties.map(prop => {
          return new Property({
            ...prop,
            dataType: StandardDataType.constructorFromJSON(prop.dataType, originName, defNames)
          });
        });
        let templateArgs = base.templateArgs;
        let name = base.name;

        if (!templateArgs && base.name.includes('<')) {
          // 兼容性代码，将老的数据结构转换为新的。
          const defNameAst = dateTypeRefs2Ast(base.name, localDataObject.name);
          const dataType = parseAst2StandardDataType(defNameAst, defNames, []);

          templateArgs = dataType.typeArgs;
          name = dataType.typeName;
        }

        return new BaseClass({
          description: base.description,
          name,
          templateArgs,
          properties: _.unionBy(props, 'name')
        });
      });
      const mods = localDataObject.mods.map(mod => {
        const interfaces = mod.interfaces.map(inter => {
          const response = StandardDataType.constructorFromJSON(inter.response, localDataObject.name, defNames);

          const parameters = inter.parameters
            .map(param => {
              const dataType = StandardDataType.constructorFromJSON(param.dataType, localDataObject.name, defNames);

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
