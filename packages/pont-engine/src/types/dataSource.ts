export interface IStandardDataSource {
  name: string;

  mods: IMod[];

  baseClasses: IBaseClass[];
}

export interface IMod {
  name: string;

  description: string;

  interfaces: Interface[];
}

export interface IBaseClass {
  name: string;

  description: string;

  properties: Property[];

  templateArgs: IStandardDataType[];
}

export enum HTTPMethod {
  CONNECT = 'connect',

  DELETE = 'delete',

  GET = 'get',

  HEAD = 'head',

  OPTIONS = 'options',

  PATCH = 'patch',

  POST = 'post',

  PUT = 'put',

  TRACE = 'trace'
}

export interface Interface {
  path: string;

  method?: HTTPMethod;

  name: string;

  description: string;

  consumes: string[];

  parameters: Property[];

  response: IStandardDataType;
}

export enum PropertyIn {
  QUERY = 'query',

  BODY = 'body',

  PATH = 'path',

  FORMDATA = 'formData',

  HEADER = 'header'
}

export interface Property {
  in?: PropertyIn;

  name: string;

  description: string;

  required: boolean;

  dataType: IStandardDataType;
}

export interface IStandardDataType {
  typeArgs: IStandardDataType[];

  /**
   * @example number,A(defs.A),Array,Object, '1' | '2' | 'a'
   */
  typeName: string;

  isDefsType: boolean;

  /** 指向类的第几个模板，-1 表示没有 */
  templateIndex: number;

  compileTemplateKeyword: string;

  enum: Array<string | number>;

  typeProperties: Property[];
}
