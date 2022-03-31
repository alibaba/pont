# Pont 标准数据源模型

## 什么是标准数据源模型
标准数据源是Pont定义的一个用于生成接口代码的中间数据模型，该模型的具体数据通过内置 swagger 解析器生成。其他接口文档解析生成需要使用者自行实现并提交PR，目前暂不支持外部自定义解析器。详情 [内置模板贡献流程](./templates.md#内置模板贡献流程)

## 使用场景
在 pont-config.json文件中配置 [transformPath](./customizedPont.md#transformpath)，来过滤和重写标准数据源的数据。

在 pont-config.json文件中配置 [templatePath](./customizedPont.md#templatepath) ，通过解析标准数据源生成对应的接口代码。

## 结构图
![](https://intranetproxy.alipay.com/skylark/lark/0/2021/jpeg/332171/1638760187138-7d7ae10a-65f6-46e1-8ebe-7d671d521c80.jpeg)

## 类型定义
```javascript
export class StandardDataSource {
  name: string = '';

  mods: Mod[] = [];

  baseClasses: BaseClass[] = [];
}

export class Mod {
  name: string = '';

  description: string = '';

  interfaces: Interface[] = [];
}

export class BaseClass {
  name: string = '';

  description: string = '';

  properties: Property[] = [];

  templateArgs: StandardDataType[] = [];
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

export class Interface {
  path: string = '';

  method?: HTTPMethod;

  name: string = '';

  description: string = '';

  consumes: string[] = [];

  parameters: Property[] = [];

  response: StandardDataType = new StandardDataType();
}

export enum PropertyIn {
  QUERY = 'query',

  BODY = 'body',

  PATH = 'path',

  FORMDATA = 'formData',

  HEADER = 'header'
}

export class Property {
  in?: PropertyIn;

  name: string = '';

  description: string = '';

  required: boolean = false;

  dataType: StandardDataType = new StandardDataType();
}

export class StandardDataType {
  typeArgs: StandardDataType[] = [];

  /**
   * @example number,A(defs.A),Array,Object, '1' | '2' | 'a'
   */
  typeName: string = '';

  isDefsType: boolean = false;

  /** 指向类的第几个模板，-1 表示没有 */
  templateIndex: number = -1;

  compileTemplateKeyword: string = '#/definitions/';

  enum: Array<string | number> = [];

  typeProperties: Property[] = [];
}

```
#### <br />
