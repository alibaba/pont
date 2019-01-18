# pont

pont 在法语中是“桥”的意思，寓意着前后端之间的桥梁。

[![npm version](https://badge.fury.io/js/pont-engine.png)](https://badge.fury.io/js/pont-engine)
[![npm downloads](https://img.shields.io/npm/dt/pont-engine.svg?style=flat-square)](https://www.npmjs.com/package/pont-engine)
[![Gitter](https://badges.gitter.im/jasonHzq/pont-engine.svg)](https://gitter.im/jasonHzq/pont-engine?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

#### 原理

pont 能够获取多种接口文档数据（目前完美支持 Swagger），将其转换为类型完美的前端 Typescript 接口层代码！

![](https://cdn.nlark.com/yuque/0/2019/png/86228/1547715423432-8989c22f-974b-4c8b-b938-3a0799d54b39.png?x-oss-process=image/resize,w_837)

![](https://cdn.nlark.com/yuque/0/2019/png/86228/1547715324636-41b40b03-a80f-4dcf-b44c-f2f46dc8b336.png?x-oss-process=image/resize,w_836)

#### 快速使用

- 1、在 vscode 中安装插件 pont。
  
  ![](https://img.alicdn.com/tfs/TB1zIZHCpzqK1RjSZFCXXbbxVXa-618-316.png)
  
  每个按钮依次是：更新同步数据源(sync) | 全量更新(all) | 选择要更新的模块(mod) | 选择要更新的实体类(bo) | 生成接口层代码(generate)

- 2、在你的项目中配置一份 `pont-config.json`。vscode 会提示您可以配置的配置项及其含义。配置项及其含义如下：

- 3、确保服务端提供的数据源接口是免登录的。如果不是，请后端帮忙简单配置一下即可。

#### 谁在使用

- 阿里巴巴

#### 如何配置 `pont-config.json`

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

## 其它接口平台接入

目前 pont 暂时只支持 [Swagger](https://swagger.io/) 数据源。目前计划支持 DIP 和 RAP2。更希望社区可以踊跃贡献代码！

目前 pont 只需要写一份数据源格式转换代码，把其它接口平台的数据源格式转换为 pont 中的标准格式，即可快捷支持其他接口平台。
