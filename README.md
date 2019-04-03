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

Pont 将为你的项目自动生成完美的 API 代码。

![](https://cdn.nlark.com/yuque/0/2019/png/86228/1547715423432-8989c22f-974b-4c8b-b938-3a0799d54b39.png?x-oss-process=image/resize,w_837)

![](https://cdn.nlark.com/yuque/0/2019/png/86228/1547715324636-41b40b03-a80f-4dcf-b44c-f2f46dc8b336.png?x-oss-process=image/resize,w_836)

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

描述：指定自定义代码生成器的路径（使用相对路径指定）。一旦指定，pont 将即刻生成一份默认的自定义代码生成器。自定义代码生成器是一份 ts 文件，通过覆盖默认的代码生成器，来自定义生成代码。默认的代码生成器包含两个类，一个负责管理目录结构，一个负责管理目录结构每个文件如何生成代码。自定义代码生成器通过继承这两个类（类型完美，可以查看提示和含义），覆盖对应的代码来达到自定义的目的。具体使用方法请参看[自定义代码生成器文档](./Template.md)。

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

描述：可选项。指定数据源预处理路径（使用相对路径指定）。一旦指定，Pont 将生成一份默认的数据预处理器。

数据预处理器示例：

```javascript
import { StandardDataSource } from "pont-engine";

export default function(dataSource: StandardDataSource): StandardDataSource {
  dataSource.mods = dataSource.mods.filter(mod => mod.name !== 'user');

  return dataSource;
}
```

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

## 其它接口平台接入

目前 pont 暂时只支持 [Swagger V2](https://swagger.io/) 数据源。目前只需要在 scripts 中添加对应的数据格式转换文件，把对应数据格式转换为 pont 标准格式，即可适配新的数据源类型。希望社区可以踊跃贡献代码，接入更多类型的数据源！

## 钉钉用户群

[Pont 对外用户群](https://qr.dingtalk.com/action/joingroup?code=v1,k1,zyeunCjwfx1zC9lk6bBWDLa2PwkPi9oiRBW0+Eqgj64=&_dt_no_comment=1&origin=11)

<img src="https://img.alicdn.com/tfs/TB17EwzHFzqK1RjSZFvXXcB7VXa-696-688.png" height="300">

## 谁在使用

- 阿里巴巴
