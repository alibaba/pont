# Pont 模板中心

## 介绍

为了优化使用体验，降低用户的接入成本，并充分发挥 Pont 优势，我们将[团队](https://zhuanlan.zhihu.com/p/108101603)的最佳实践分享出来，并封装成不同框架、语言的模板供用户选择。

目前 Pont 中已经内置了 `fetch` 、 `hooks`两种模板。 并在 `pont--config.json` 中新增了对应的 `templateType` 配置项来开启对应的内置模板。

为了不影响已经接入 Pont 的项目，除了 `templateType`， 我们还增加了 `surrounding`( javaScript | typeScript ) 配置项来声明当前项目环境（默认为 typeScript），`surrounding` 为 typeScript 时 , [pontCore](https://github.com/alibaba/pont/tree/master/docs/pontCore.md) 等内置文件将不会生成，所以内置模板将不会生效。

如果你已经接入 Pont 并想切换为内置模板，请在 `pont-config.json` 中将 `surrounding` 设置为 `javaScript`，再配置内置模板。

> 新接入 Pont 的用户无需关心 `surrounding`配置， 通过 [pont start](https://github.com/alibaba/pont#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)接入项目 `surrounding` 将自动置为 `javaScript`。

## 接入流程

1、准备好你的项目并参照[快速开始流程](https://github.com/alibaba/pont#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)接入 Pont。

> 如果你是已经接入 Pont 的项目，你需要先做好如下准备:
>
> - 1、 在 `pont-config.json`中设置 `surrounding`为 `javaScript`, 否则内置模板 依赖的文件将无法生成。
>
> - 2、 删除原有的 pontTemplate 文件。

2、在 `pont-config.json` 中将 `templateType` 设置为对应的内置模板( fetch | hooks )即可。

> hooks 模板依赖 swr, 使用命令之前需要先安装 swr, 具体步骤请参考[Hooks 模板接入流程](https://github.com/alibaba/pont/blob/master/docs/templates.md#%E6%8E%A5%E5%85%A5%E6%96%B9%E6%B3%95)

> 若需要修改默认的 pontCore 提供的默认请求，请参考[pontCore 使用说明](https://github.com/alibaba/pont/tree/master/docs/pontCore.md)

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

基于 swr 的取数接口。注意 SWR 只支持取数型接口调用！useRequest 功能强大，主要功能列举如下：

- 普通调用

```jsx
const UserList: React.FC<ListProps> = props => {
  const { data: userList, error, isLoading } = API.common.getUserList.useRequest({ userName: 'hupu' });

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading...</div>;

  return userList.map(item => <div key={item.name}>{item.name}</div>);
};
```

- 声明式接口依赖调用

```jsx
const MyProjects: React.FC<Props> = props => {
  const { data: user } = API.common.getUserDetail.useRequest({ userName: 'hupu' });
  const { data: projects, isLoading } = API.common.getProjectList.useRequest(() => ({
    type: 'stream',
    userId: user.id
  }));

  if (isLoading) {
    return 'loading...';
  }

  return 'You have ' + projects.length + ' projects';
};
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

其它如：页面重获焦点，自动重新请求；优先使用缓存数据快速渲染；支持 Suspense 取数模式；

更多用法请参看 [swr](https://github.com/zeit/swr)

- useDeprecatedRequest

基于 swr 的取数接口。当接口 method 为 POST，DELETE，PUT 等，但仍然是取数接口（后端定义不规范），可以调用 useDeprecatedRequest 方法。

- mutate

乐观更新

```jsx
const Profile: React.FC<Props> = () => {
  const { data, isLoading } = API.common.getUserList.useRequest({ userName: 'hupu' });

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          // update the local data immediately and revalidate (refetch)
          API.common.getUserList.mutate({ userName: 'hupu' }, { ...data, name: newName });
          // send a request to the API to update the data
          await API.common.putUserName.request({ name: newName });
        }}>
        Uppercase my name!
      </button>
    </div>
  );
};
```

- trigger

手动触发重新取数

```jsx
const App: React.FC<AppProps> = props => {
  return (
    <div>
      <Profile />
      <button
        onClick={() => {
          // set the cookie as expired
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          // tell all SWRs with this key to revalidate
          API.common.getUserList.trigger({ userName: 'hupu' });
        }}>
        Logout
      </button>
    </div>
  );
};
```

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
