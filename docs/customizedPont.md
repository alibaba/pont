# 定制化 Pont 

Pont 支持自定义 **数据获取 、数据源预处理、代码生成器** 等。JSON配置中其他配置请参考 [pont-config.json](./pontConfig.md) 配置
## 执行流程图

在自定义前，需要了解 Pont 在运行时的执行流程。蓝色框表示自定义文件，绿色框表示被自定义的环节<br />
![image](https://user-images.githubusercontent.com/25757494/178680057-40c23cc7-5efe-43c4-9a12-1d704f6c4b98.png)


## fetchMethodPath
指定 **数据获取** 路径（使用相对路径指定）。<br />注意：此文件目前只能使用 `.ts` 后缀,且路径字段不需要加 `.ts` 后缀

#### JSON配置
```json
{
  // ...
  "fetchMethodPath": "./myFetchMethod",
}
```
<br />
#### 类型
```javascript
export default function (url: string): Promise<string>
```

#### 代码示例
```javascript
// ./myFetchMethod.ts
import axios from 'axios';

export default async function (url: string): Promise<string> {
  const { data } = await axios.post('/api/login', {
    username: 'my_name',
    password: '123456'
  });

  return axios
    .get(url, {
      headers: {
        Authorization: data.token
      }
    })
    .then((res) => JSON.stringify(res.data));
}
```

## transformPath 
指定 **数据源预处理** 路径（使用相对路径指定）。<br />Pont 将 Swagger.json 数据转换为内部标准数据源之后会尝试调用由`transformPath`指定的转换程序，对数据进行一些处理。

#### JSON配置
```json
{
  // ...
  "transformPath": "./pontTransfrom",
}
```
#### 
#### 类型
```javascript
export default function transform(dataSource: StandardDataSource): StandardDataSource
```

#### 代码示例
pont-config.json 同级目录下新建一个 pontTransfrom.ts文件, export default 默认方法
```typescript
// pontTransfrom.ts 

import { StandardDataSource } from 'pont-engine';

// 根据 Mod.name进行过滤
export default function transform(data: StandardDataSource) {
  if (data.name === 'fooapi') {
    const filterMods = ['modName1', 'modName2', 'modName3'];
    let { mods, baseClasses } = filterModsAndBaseClass(filterMods, data);
    data.mods = mods;
    data.baseClasses = baseClasses;
  }
  return data;
}

/**
 * 过滤mod及所依赖的baseClass
 * @param filterMods Mod.name数组
 * @param data StandardDataSource
 */
function filterModsAndBaseClass(filterMods: string[], data: StandardDataSource) {
  let mods = data.mods.filter((mod) => {
    return filterMods.includes(mod.name);
  });
  // 获取所有typeName
  let typeNames = JSON.stringify(mods).match(/"typeName":".+?"/g);

  typeNames = Array.from(new Set(typeNames)) // 去重
    // 取typeName的值
    .map((item) => item.split(':')[1].replace(/\"/g, ''));

  // 过滤baseClasses
  let baseClasses = data.baseClasses.filter((cls) => typeNames.includes(cls.name));

  return { mods, baseClasses };
}
```

## templatePath
指定 **代码生成器** 路径（使用相对路径指定）。<br />一旦指定，pont 将即刻生成一份默认的自定义代码生成器。自定义代码生成器是一份 ts 文件，通过覆盖默认的代码生成器，来自定义生成代码。默认的代码生成器包含两个类，一个负责管理目录结构，一个负责管理目录结构每个文件如何生成代码。自定义代码生成器通过继承这两个类（类型完美，可以查看提示和含义），覆盖对应的代码来达到自定义的目的。

#### JSON配置
```json
{
  // ...
  "templatePath": "./pontTemplate",
}
```


**类型**
```javascript
import * as Pont from 'pont-engine'
import { CodeGenerator, FileStructures } from 'pont-engine';

// 代码生成器
export default class MyCodeGenerator extends CodeGenerator {}

// 文件结构生成
export class FileStructures extends Pont.FileStructures {}
```
#### CodeGenerator 
代码生成器
```javascript
export class CodeGenerator {
  usingMultipleOrigins = false;

  dataSource: StandardDataSource;

  hasContextBund = false;

  constructor(public surrounding = Surrounding.typeScript, public outDir = '') {}

  setDataSource(dataSource: StandardDataSource) {
    this.dataSource = dataSource;
    // 将basic-resource这种命名转化成合法命名
    this.dataSource.name = _.camelCase(this.dataSource.name);
  }

  /** 获取某个基类的类型定义代码 */
  getBaseClassInDeclaration(base: BaseClass): string

  /** 
   * 获取所有基类的类型定义代码，一个 namespace
   * surrounding, 优先级高于this.surrounding,用于生成api.d.ts时强制保留类型
   */
  getBaseClassesInDeclaration(): string

  /** 获取接口内容的类型定义代码 */
  getInterfaceContentInDeclaration(inter: Interface): string
	
  /** 获取接口内容的类型定义 */
  private getInterfaceInDeclaration(inter: Interface): string

  /** 获取模块的类型定义代码，一个 namespace ，一般不需要覆盖 */
  getModsDeclaration(): string

  /** 获取公共的类型定义代码 */
  getCommonDeclaration(): string
  
  /** 获取总的类型定义代码 */
  getDeclaration(): string

  /** 获取接口类和基类的总的 index 入口文件代码 */
  getIndex(): string

  /** 获取所有基类文件代码 */
  getBaseClassesIndex(): string

  /** 获取接口实现内容的代码 */
  getInterfaceContent(inter: Interface): string

  /** 获取单个模块的 index 入口文件 */
  getModIndex(mod: Mod): string

  /** 获取所有模块的 index 入口文件 */
  getModsIndex(): string

  /** 获取中间态数据结构 */
  getDataSourceCallback(dataSource?: StandardDataSource): void

  /** VSCode插件接口代码片段生成 */
  codeSnippet(inter: Interface): string
}

```
#### FileStructures 
文件结构生成
```javascript
export interface FileStructure {
  [filePath: string]: FileStructure | (() => string) | string;
}

export class FileStructures {
  
  constructor(
    private generators: CodeGenerator[],
    private usingMultipleOrigins: boolean,
    private surrounding = Surrounding.typeScript,
    private baseDir = 'src/service',
    private templateType = ''
  ) {}
	
  /** 获取所有基类的类型定义代码, generator.hasContextBund 为true时覆盖 generator的同名方法 */
  getBaseClassesInDeclaration(originCode: string, usingMultipleOrigins: boolean): string
	
  /** 获取模块的类型定义代码, generator.hasContextBund 为true时覆盖 generator的同名方法 */
  getModsDeclaration(originCode: string, usingMultipleOrigins: boolean): string
  
	/** 获取多个数据源的文件结构  */
  getMultipleOriginsFileStructures(): FileStructure
  
	/** 获取单个数据源的文件结构  */
  getOriginFileStructures(generator: CodeGenerator, usingMultipleOrigins = false): FileStructure
	
	/** 获取总文件结构  */
  getFileStructures(): FileStructure
	
	/** 检测是否存在 fetch 模板文件  */
  private checkHasTemplateFetch(): boolean
	
	/** 多源下的数据名称 */
  getMultipleOriginsDataSourceName(): string[]
	
	/** 判断是否有多个不同输出地址 */
  judgeHasMultipleFilesName(): boolean
	
	/** 获取 index 内容 */
  getDataSourcesTs(): string
	
  /** 获取 api.d.ts 内容 */
  getDataSourcesDeclarationTs(): string
	
	/** 获取 api-lock.json 内容 */
  getLockContent(): string
  
  /** 用于scan扫描接口 */
  getApiUseCases: (inter: Interface) => Array<string>
}
```
#### 代码示例


根据 pont-config.json 中配置的 templatePath 路径下新建一个 pontTemplate.ts文件, ,export default 一个 CodeGenerator 子类 MyGenerator  和 export 一个 FileStructures 子类 MyFileStructures  , 根据自身需求覆盖 CodeGenerator 和 FileStructures 中的方法。

实例中的 Request 就是一个可用的 http 请求库, 可以替换为 axios、fetch 等可用的 http 请求封装。
```javascript
// pontTemplate.ts

import { CodeGenerator, Interface } from 'pont-engine';

export class MyFileStructures extends FileStructures {}

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const method = inter.method.toUpperCase();
    let requestParams = bodyParamsCode ? `bodyParams = {}` : `params = {}`;
    
    return `
    /**
    * @description ${inter.description}
    */
    
    import { getUrl } from 'src/utils/getUrl';
    import Request from 'src/utils/requests';
    import * as defs from '../../baseClass';
    
    export ${paramsCode}
    
    export const init = ${inter.response.initialValue};
    
    export async function request(${requestParams}) {
    return Request({
    url: getUrl("${inter.path}", ${bodyParamsCode ? 'bodyParams' : 'params'}, "${method}"),
    ${bodyParamsCode ? 'params: bodyParams' : 'params'},
    method: '${inter.method}',
    });
    }
    
    export function createFetchAction(types, stateKey) {
    return (${bodyParamsCode ? `bodyParams = {}` : 'params = {}'}, meta?: any) => {
    return {
    types,
    meta,
    stateKey,
    method: '${inter.method}',
    url: getUrl("${inter.path}", ${bodyParamsCode ? 'bodyParams' : 'params'}, "${method}"),
    ${bodyParamsCode ? 'params: bodyParams,' : 'params,'}
    init,
    };
    };
    }
    `;
  }
}
```

