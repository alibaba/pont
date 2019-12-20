<div align="center">
  <img src="https://img.alicdn.com/tfs/TB1cpLSGrvpK1RjSZFqXXcXUVXa-726-396.png" height="100">
  <h2>Pont - 搭建前后端之桥  </h2>
</div>

[![npm version](https://badge.fury.io/js/pont-engine.png)](https://badge.fury.io/js/pont-engine)
[![npm downloads](https://img.shields.io/npm/dt/pont-engine.svg?style=flat-square)](https://www.npmjs.com/package/pont-engine)
[![Gitter](https://badges.gitter.im/jasonHzq/pont-engine.svg)](https://gitter.im/jasonHzq/pont-engine?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

pont 在法语中是“桥”的意思，寓意着前后端之间的桥梁。

## 介绍

Pont 把 swagger、rap、dip 等多种接口文档平台，转换成 Pont 元数据。Pont 利用接口元数据，可以高度定制化生成前端接口层代码，接口 mock 平台和接口测试平台。

其中 swagger 数据源，Pont 已经完美支持。并在一些大型项目中使用了近两年，各种高度定制化需求都可以满足。

![](https://img.alicdn.com/tfs/TB15pZGI6TpK1RjSZKPXXa3UpXa-1584-1090.png)

### 沉浸式接口开发

接口检索：

![屏幕快照 2019-05-28 22.35.25.png](https://img.alicdn.com/tfs/TB1HaZ3bliE3KVjSZFMXXbQhVXa-1786-742.png)

接口开发：
![pont.gif](https://img.alicdn.com/tfs/TB1Y6w8blKw3KVjSZFOXXarDVXa-1546-1016.gif)

### 联调维护

实时发现后端接口更新：
![屏幕快照 2019-05-28 00.14.41.png](https://img.alicdn.com/tfs/TB1xE71bfWG3KVjSZFgXXbTspXa-1792-470.png)

更新接口层后，可迅速定位接口调用代码，进行调用修改。
![屏幕快照 2019-05-28 00.13.34.png](https://img.alicdn.com/tfs/TB1PPE8blKw3KVjSZFOXXarDVXa-850-290.png)

## 快速开始

- 1、在 vscode 中安装 vscode 插件 pont。插件使用方法请参考：[vscode-pont](https://github.com/nefe/vscode-pont)

- 2、确保服务端使用 Swagger（目前只支持 Swagger），提供的数据源接口是免登录的。如果不是，请后端帮忙简单配置一下即可。

- 3、在项目中任何位置添加 `pont-config.json` 文件，vscode-pont 检测到项目中有合法的 `pont-config.json`，插件马上启动。

## `pont-config.json` 配置项

对于 pont-config.json 的配置，在 vscode-pont 插件中已经做了自动提示、自动补全、配置项描述提醒等功能。具体配置项介绍如下：

#### originUrl

值类型：字符串

描述： 接口平台提供数据源的 open api url（需要免登），目前只支持 Swagger。如 "https://petstore.swagger.io/v2/swagger.json"

#### outDir

值类型：字符串

描述： 生成代码的存放路径，使用相对路径即可。如："./src/api"

#### templatePath

值类型：字符串

描述：指定自定义代码生成器的路径（使用相对路径指定）。一旦指定，pont 将即刻生成一份默认的自定义代码生成器。自定义代码生成器是一份 ts 文件，通过覆盖默认的代码生成器，来自定义生成代码。默认的代码生成器包含两个类，一个负责管理目录结构，一个负责管理目录结构每个文件如何生成代码。自定义代码生成器通过继承这两个类（类型完美，可以查看提示和含义），覆盖对应的代码来达到自定义的目的。具体使用方法请参看[自定义代码生成器文档](./packages/pont-core/Template.md)。

示例：可以参看示例 demo 中的 template。

#### prettierConfig

值类型：object

描述：生成的代码会用 prettier 来美化。此处配置 prettier 的配置项即可，具体可以参考 [prettier 文档](https://prettier.io/docs/en/options.html)。

#### usingMultipleOrigins

值类型：boolean

描述：pont 支持一个项目中配置多个 Swagger 来源。此处配置是否启用多数据源

#### origins

值类型：array

描述：配置每个数据来源

配置项：

```javascript
{
  "originType": "SwaggerV2 | SwaggerV3", // 注：暂不支持 SwaggerV1
  "originUrl": string,
  "name": string,
  "usingOperationId": boolean,
  "transformPath"?: string,
  "fetchMethodPath"?: string
}
```

示例：

```json
"origins": [{
  "name": "pet",
  "originUrl": "",
}, {
  "name": "fruit",
  "originUrl": ""
}]
```

### transformPath

值类型：string

描述：可选项。指定数据源预处理路径（使用相对路径指定）。一旦指定，Pont 将生成一份默认的数据预处理器。Pont 将 Swagger.josn 数据转换为内部标准数据源之后会尝试调用由`transformPath`指定的转换程序,这样用户就有机会对数据进行一些处理。

数据预处理器示例：

```typescript
// transfrom.ts 根据 Mod.name进行过滤
import { StandardDataSource } from 'pont-engine';

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
  let mods = data.mods.filter(mod => {
    return filterMods.includes(mod.name);
  });
  // 获取所有typeName
  let typeNames = JSON.stringify(mods).match(/"typeName":".+?"/g);

  typeNames = Array.from(new Set(typeNames)) // 去重
    // 取typeName的值
    .map(item => item.split(':')[1].replace(/\"/g, ''));

  // 过滤baseClasses
  let baseClasses = data.baseClasses.filter(cls => typeNames.includes(cls.name));

  return { mods, baseClasses };
}
```

### fetchMethodPath

值类型：string

描述： 可选项。用于 Swagger 数据源需要登录才能请求成功的场景，可指定获取 Swagger 源数据的方法。默认为 node-fetch 的 fetch 方法，可通过自定义 fetch 方法获取带鉴权的接口的文档

示例：

```javascript
import axios from 'axios';

export default async function(url: string): Promise<string> {
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
    .then(res => JSON.stringify(res.data));
}
```

### mocks

自动化 mocks 功能开始内测，https://github.com/alibaba/pont/issues/48

## demo

参考下面的例子，来体验 pont。

- [pont-demo](https://github.com/nefe/pont-demo)
- [nuxt-ts-pont-demo](https://github.com/gaoletian/nuxt-ts-pont-demo)

持续丰富中...

## 命令行使用方法

目前 pont 以 vscode 扩展 —— vscode-pont 来提供 pont 的元数据能力。其它 IDE 的插件也将逐渐提供，这里非常渴望社区的力量。

为了避免一部分用户和技术团队不使用 vscode-pont，pont 可以以命令行命令的方式来提供服务。

命令行提供的命令目前还比较基础，提供命令如下：

#### pont check

校验本地的 pont-lock.json 文件是否缺失、损坏。建议用户在项目中，在 pre-commit 里加上 pont check 命令，以防止在团队协作过程中，pont-lock.json 被误删、解决该文件冲突时被损坏等情况。

#### pont ls

查看所有数据源

#### pont select [dsName]

切换当前数据源

#### pont diff

查看远程数据和本地数据在模块、基类上的差异，以作针对性、选择性同步。

#### pont updateBo [boName]

选择性更新本地的基类

#### pont updateMod [modName]

选择性更新本地的模块

## 最佳实践建议

- 项目 pre-commit hook 中，加上 pont check，防止本地数据源被研发人员损坏。

- 很多 Swagger 所有的接口返回的类型都类似是 Result<T>，主要是囊括了约定的接口错误字段，类似 `{ errorCode: 0, data: T, errMessage: '' }`。这里建议，让后端 Swagger 的接口返回类型，去掉这个 Result 外壳。只返回 data 的 T 类型。

- vscode 配置 `trigger suggest` 的快捷键(cmd K + cmd S)，传参时，用快捷键触发提醒，非常好用；

- pont template 配置 API、defs 为全局变量；这样不需要 import 任何接口、实体类；使用 API 直接触发建议找到 模块、接口，非常方便

- 快捷键 cmd + ctrl + p 进行接口查找，非常方便；

- 善于利用实体类（defs），可以当成类型用、也可以作为逻辑实现的辅助；实体类是后端写得实体类，前端自己写实体类，既没有必要，长期来看也会和后端的实现差异越来越大。如果有自定义逻辑，继承 defs 实体类即可。

- redux 项目，建议结合 [https://github.com/nefe/iron-redux](https://github.com/nefe/iron-redux)，一个致力类型完美和去冗余的轻量化 redux 库。例如类型友好的，运行安全的 get 方法：https://github.com/nefe/iron-redux#safeget

- 待补充

## 常见答疑问题

- 1、demo 中，生成代码的 pontFetch 函数，是要自己实现的吗？

  答：pontFetch 是用户自己项目的请求公共方法。因为每个项目的接口有自己的业务逻辑，比如如何判断接口返回的结果是否正确，所以 pont 的默认模板并没有自己实现一套 fetch 方法。另外 Pont 生成的代码是可以用自定义模板配置的。可以在模板上更改 pontFetch 的引用路径和名字。

- 2、nestjs 搭配的 Swagger JSON 生成出来的 pont 文件为什么没有 mods?

  答：nestjs 中的 Swagger 必须在每个 Controller 上添加 ApiUseTags 装饰器，并且在每个控制器的方法上添加 ApiOperation 装饰器 才能正确输出带 Tags 以及 operationId 的 Swagger JSON。Tags 和 operationId 是 pont 必需的（@nestjs/swagger 自动生成的 default Tags 暂时不被兼容）。
  示例如下

  ```
  import { Controller } from '@nestjs/common';
  import { ApiUseTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

  @ApiUseTags('pet')
  @Controller('pet')
  export class PetController {
    @ApiOperation({ title: 'getDog', operationId: 'getDog' })
    @Get()
    getDog() {}
  }
  ```

- 3、API、defs 全局变量找不到

  答：将 pont 生成的 api.d.ts 塞到 tsconfig.json 中的 includes 数组最前面。并在项目入口处 import pont 生成的入口文件。

## 其它接口平台接入

目前 pont 支持 [Swagger](https://swagger.io/) V1 V2 V3 三种数据源。其他类型数据源只需要在 scripts 中添加对应的数据格式转换文件，把对应数据格式转换为 pont 标准格式，即可适配新的数据源类型。希望社区可以踊跃贡献代码，接入更多类型的数据源！

## 钉钉用户群

[Pont 对外用户群](https://qr.dingtalk.com/action/joingroup?code=v1,k1,zyeunCjwfx1zC9lk6bBWDLa2PwkPi9oiRBW0+Eqgj64=&_dt_no_comment=1&origin=11)

<img src="https://img.alicdn.com/tfs/TB17EwzHFzqK1RjSZFvXXcB7VXa-696-688.png" height="300">

## 谁在使用

- 阿里巴巴
