# Pont 模板中心

## 内置模板介绍

Pont 提供多种内置模板，目前已支持 Fetch、 基于 swr 的 Hooks 模板。

## 模板接入流程

> 这里以 create-react-app 为例

- 1、在 vscode 中安装 vscode 插件 pont 以获取 pont 的全部能力。插件使用方法请参考：[vscode-pont](https://github.com/nefe/vscode-pont)

- 2、全局安装 pont-engine

```bash
// npm
npm i -g pont-engine

// 或yarn
yarn global add pont-engine
```

- 3、使用 create-react-app 创建好项目之后，进入项目目录

- 4、 在项目中安装 pont-engine

```bash

// npm

npm i pont-engine

// 或yarn

yarn add pont-engine
```

- 5、使用 `pont start` 命令，按照提示生成 `pont-config.json`

> hooks 模板依赖 swr, 使用命令之前需要先安装 swr

- 6、 在项目入口处引入生成的文件（即 outDir 路径下的文件）

> 若需要修改默认的 pontCore 提供的默认请求，请参考[pontCore 文档]()

## 模板使用教程

### fetch

fetch 模板会对外暴露如下属性:

- Response: 返回值类型

- request: 正常的请求接口

### hooks

> hooks 模板基于 [swr](https://github.com/zeit/swr)，所以使用之前需要在项目中安装 swr

```sh
yarn add swr

# npm
npm i -S swr
```

> hooks 模板提供如下方法：

- mutate: 乐观更新
- trigger: 手动取数
- useRequest: 基于 swr 的取数接口。接口 method 为 GET。
- useDeprecatedRequest: 基于 swr 的取数接口，接口 method 为非 GET。注意 SWR 只支持取数型接口调用！！！

> 非 GET 方法接口，请使用正常取数方法：

- request: 非 hooks 的正常取数接口

### swr 功能简介

- 轮询取数

- 接口缓存

- React Hooks 声明式取数

- 乐观更新

- Suspense mode

- 声明式接口依赖

- 失败重试等...

详情参看 [swr](https://github.com/zeit/swr)

### demo

参考下面的例子，来体验内置模板。

- [hooks-demo](https://github.com/alibaba/pont/tree/master/examples/hooks-app)

## 模板接入流程

> 如果你有好的想法或者好的模板，非常欢迎来给我们提 PR，我们非常渴望利用社区的力量来共建 Pont。

- 1、准备好一份符合社区规范的通用模板。
- 2、在 `templates`目录下增加你的模板文件
- 3、在 `templates.ts` 的 `templateRegistion`对象中增加你的模板名称和路径。
- 4、如果有对应的请求方法，需要在 `pontCore` 文件夹中增加你模板对应的请求方法。
- 5、充分的测试，并且给我们提交 PR。
