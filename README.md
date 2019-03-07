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

## `pont-config.json` 配置

- originUrl(string)

接口平台提供数据源的 open api url（需要免登），目前只支持 Swagger

- outDir(string)

生成代码的存放路径，使用相对路径。

- templatePath(string)

指定自定义代码生成器（ts 文件）的路径，使用相对路径指定。一旦指定，pont 将会为你生成一份默认的自定义代码生成器。关于自定义代码生成器，请参看[文档](./Template.md);

- prettierConfig(object)

生成的代码会用 prettier 美化。这里可以配置 prettier。

## 自定义 template

可以参考 pont-demo 中的配置 [pont-template](https://github.com/nefe/pont-demo/blob/master/pontTemplate.ts)。

在这份 ts 代码中，用户可以覆盖默认 Generator 类的各种方法，以自定义生成代码。

能够覆盖的方法、以及各个方法的含义，都可以通过 Typescript 的提示来看到。

## example

参考下面的例子，来体验 pont。

- [pont-demo](https://github.com/nefe/pont-demo)
- [nuxt-ts-pont-demo](https://github.com/gaoletian/nuxt-ts-pont-demo)

## 其它接口平台接入

目前 pont 暂时只支持 [Swagger](https://swagger.io/) 数据源。目前计划支持 DIP 和 RAP2。更希望社区可以踊跃贡献代码！

目前 pont 只需要写一份数据源格式转换代码，把其它接口平台的数据源格式转换为 pont 中的标准格式，即可快捷支持其他接口平台。

## 钉钉用户群

[Pont 对外用户群](https://qr.dingtalk.com/action/joingroup?code=v1,k1,zyeunCjwfx1zC9lk6bBWDLa2PwkPi9oiRBW0+Eqgj64=&_dt_no_comment=1&origin=11)

<img src="https://img.alicdn.com/tfs/TB17EwzHFzqK1RjSZFvXXcB7VXa-696-688.png" height="300">

## 谁在使用

- 阿里巴巴
