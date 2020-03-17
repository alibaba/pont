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

## 内置模板列表

### fetch

fetch 模板会对外暴露如下属性:

- Response: 返回值类型

- request: 正常的请求接口

### hooks

#### 接入方法

1、新项目将 templateType 置为 hooks。老项目需要删除原有 pont template，并将 templateType 置为 hooks。

2、安装 swr

hooks 模板基于 [swr](https://github.com/zeit/swr)。因此使用 hooks 模板，请在项目中安装 swr：

```sh
# yarn
yarn add swr

# npm
npm i -S swr
```

3、在根组件使用 SWRProvider，声明默认配置。

```jsx
const App: React.FC<AppProps> = props => {
  // ... your code here

  return (
    <SWRProvider {...your custom default options}>
      <your children here...>
    </SWRProvider>
  );
}
```

#### hooks 模板提供如下方法进行接口请求

- useRequest

基于 swr 的取数接口。注意 SWR 只支持取数型接口调用！

- 普通调用

```jsx
const List: React.FC<ListProps> = props => {
  const { data, isLoading, error } = API.mod.getList.useRequest({ param: paramValue });

  return <div>{isLoading ? <span>loading....</span> : <span>{data.name}</span>}</div>;
};
```

- 声明式接口依赖调用

```jsx
const List: React.FC<ListProps> = props => {
  const { data, isLoading, error } = API.mod.getList.useRequest({ param: paramValue });
  const { data: data2 } = API.mod.getList2.useRequest(() => ({ param: data.id }));

  return ...
}
```

- 搜索

```jsx
const List: React.FC<ListProps> = props => {
  const [keyword, changeKeyword] = useState('');
  const { data, isLoading, error } = API.mod.getList.useRequest({ keyword });

  return ...
}
```

- 轮询

```jsx
const List: React.FC<ListProps> = props => {
  const { data, isLoading, error } = API.mod.getList.useRequest({ param: paramValue }, { refreshInterval: 3000 });

  return ...
}
```

更多用法请参看 [swr](https://github.com/zeit/swr)

- useDeprecatedRequest

基于 swr 的取数接口。当接口 method 为 POST，DELETE，PUT 等，但仍然是取数接口（后端定义不规范），可以调用 useDeprecatedRequest 方法。

- mutate

乐观更新

- trigger

手动触发重新取数

- request

原正常取数接口

#### hooks demo

参考如下使用 hooks 模板的例子，来体验内置模板：

- [hooks-demo](https://github.com/alibaba/pont/tree/master/examples/hooks-app)

## 内置模板贡献流程

> 如果你有好的想法或者好的模板，非常欢迎来给我们提 PR，我们非常渴望利用社区的力量来共建 Pont。

- 1、准备好一份符合社区规范的通用模板。
- 2、在 `templates`目录下增加你的模板文件
- 3、在 `templates.ts` 的 `templateRegistion`对象中增加你的模板名称和路径。
- 4、如果有对应的请求方法，需要在 `pontCore` 文件夹中增加你模板对应的请求方法。
- 5、充分的测试，并且给我们提交 PR。
