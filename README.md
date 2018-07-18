# pont

pont 是法语中桥的意思，寓意着搭建前后端之间的桥梁。

pont 将 swagger 等多种接口文档数据，转换为前端 Typescript 接口层代码。

[![npm version](https://badge.fury.io/js/pont-engine.png)](https://badge.fury.io/js/pont-engine)
[![npm downloads](https://img.shields.io/npm/dt/pont-engine.svg?style=flat-square)](https://www.npmjs.com/package/pont-engine)
[![Gitter](https://badges.gitter.im/jasonHzq/pont-engine.svg)](https://gitter.im/jasonHzq/pont-engine?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## usage

- 1、vscode 中安装 vscode-pont

- 2、在你的项目中任意位置添加 pont-config.json。配置项请参考 [配置指南](#config)

## 数据源

目前 pont 暂时只支持 [Swagger](https://swagger.io/) 数据源。目前计划支持 DIP 和 RAP2。更希望社区可以踊跃贡献代码！

目前 pont 只需要写一份数据源格式转换代码，把其它接口平台的数据源格式转换为 pont 中的标准格式，即可快捷支持其他接口平台，数据源格式转换代码可以参考 Swagger 的转换代码： [代码地址](https://github.com/nefe/pont/blob/master/src/swagger.ts)。

#### 接入指南

- 1、确保服务端提供的数据源接口免登录，后端简单配置一下即可。

- 2、在 vscode 中安装插件 pont。

- 3、在你的项目中配置一份 pont-config.json。vscode 会提示您可以配置的配置项及其含义。配置项及其含义如下：

#### pont-config.json 配置

- originUrl(string)

接口平台提供数据源的 open api url（需要免登）

- outDir(string)

生成代码的存放路径

- templatePath(string)

一份 ts 文件，可以配置自定义生成代码。

- prettierConfig(object)

生成的代码会用 prettier 美化。这里可以配置 prettier。

#### 自定义 template

可以参考 pont-demo 中的配置 [pont-template](https://github.com/nefe/pont-demo/blob/master/pontTemplate.ts)。

在这份 ts 代码中，用户可以覆盖默认 Generator 类的各种方法，以自定义生成代码。

能够覆盖的方法、以及各个方法的含义，都可以通过 Typescript 的提示来看到。
