
<div align="center">

[![Pont logo](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648553869584-66c3761b-79f5-466d-92e4-ed4c6cdd3cf1.png#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=154&id=ub6370ba6&name=%E6%A1%A5%E6%A2%81.png&originHeight=200&originWidth=200&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3585&status=done&style=none&taskId=ua3612409-5685-4d87-8de5-6cf3a398aea&title=&width=154)](https://github.com/alibaba/pont)

# Pont - 搭建前后端之桥

[![npm version](https://badge.fury.io/js/pont-engine.svg)](https://www.npmjs.com/package/pont-engine)
[![npm downloads](https://img.shields.io/npm/dm/pont-engine.svg?style=flat-square)](https://www.npmjs.com/package/pont-engine)
[![GitHub license](https://img.shields.io/github/license/alibaba/pont)](https://github.com/alibaba/pont/blob/master/LICENSE)
[![Gitter](https://badges.gitter.im/jasonHzq/pont-engine.svg)](https://gitter.im/jasonHzq/pont-engine?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

![Pont Process](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648634133414-a1f46be4-f9a7-4c1e-85fd-71d38594fbd0.png#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=1&id=mNKTs&name=image.png&originHeight=1090&originWidth=1584&originalType=binary&ratio=1&rotation=0&showTitle=false&size=192016&status=done&style=none&taskId=u6b14950f-c9a8-484b-b4ca-d82b93677a6&title=)

</div>

pont 在法语中是“桥”的意思，寓意着前后端之间的桥梁。Pont 把 swagger、rap、dip 等多种接口文档平台，转换成 Pont 元数据。Pont 利用接口元数据，可以高度定制化生成前端接口层代码，接口 mock 平台和接口测试平台。

其中 swagger 数据源，Pont 已经完美支持。并在一些大型项目中使用了近两年，各种高度定制化需求都可以满足。

Pontx 用户请访问 [Pontx](https://github.com/pontjs/pontx)

## ✨特性

- **跨语言** 天然支持 Javascript 项目及 Typescript 项目。如果使用 `Java`、`C++` 等语言，可定制代码生成器支持
- **支持高度定制化**  通过复写内部方法，各种高度定制化需求都可以满足
- **VSCode 插件支持** 专门为 Pont 开发的 VSCode 插件 vscode-pont，完美支持 Pont 所有能力
- **丰富的命令行**提供丰富的命令行命令，满足不同场景的使用
- **自动化 mocks 服务**Pont 自动生成所有 mocks 数据，并提供所有接口的 mocks 服务

## ⚡快速开始

### 1. 安装

全局安装 pont-engine

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm i -g pont-engine

# Yarn
$ yarn global add pont-engine

# pnpm
$ pnpm add -g pont-engine
```

### 2. 初始化

使用 `pont start` 命令，快速创建初始模板
![test9.gif](https://intranetproxy.alipay.com/skylark/lark/0/2022/gif/332171/1648558306636-c144cbfc-ff71-4822-996b-680b397915bf.gif#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=423&id=PGyYc&name=test9.gif&originHeight=750&originWidth=1329&originalType=binary&ratio=1&rotation=0&showTitle=false&size=650633&status=done&style=none&taskId=uf925e5ee-b701-4994-925c-75b4c2214f1&title=&width=749.5)

### 3. 安装 VSCode 插件

打开 VSCode 插件商店，输入 `vscode-pont` 搜索安装
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648630306151-7398a852-370b-4c41-80e5-c435b8003932.png#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=423&id=ue189ea7d&name=image.png&originHeight=676&originWidth=1192&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109566&status=done&style=none&taskId=u02872ef9-c6f9-47e5-beb7-d8a6c4343fb&title=&width=745)

####

### 4. 沉浸式接口开发

插件安装成功后，点击 Pont 图标，打开面板进行进一步操作。更多插件相关请参考 [插件文档](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont)
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648630408341-fc30aa88-564b-4001-a6c4-50212b494fb3.png#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=0.4901&from=paste&height=529&id=u6648fb46&name=image.png&originHeight=770&originWidth=1082&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81838&status=done&style=none&taskId=u83ce7020-1417-44c3-ba81-2fc285170b8&title=&width=744)

点击接口代码片段图标，打开接口列表，搜索后生成接口代码片段，快速开始接口开发
![test12.gif](https://intranetproxy.alipay.com/skylark/lark/0/2022/gif/332171/1648629476436-1140ba66-111e-43b5-81d1-07dfddb1c1b8.gif#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=319&id=JpkUS&name=test12.gif&originHeight=547&originWidth=1281&originalType=binary&ratio=1&rotation=0&showTitle=false&size=808877&status=done&style=none&taskId=uc33a7057-e0e6-426c-8fb2-48217e122ff&title=&width=747.5)

### 5. 联调维护

实时发现后端接口更新
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648629880109-3948a84c-88ad-4d0c-b6b3-debfeabf361f.png#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=0.6761&from=paste&height=414&id=gs9QO&name=image.png&originHeight=644&originWidth=1158&originalType=binary&ratio=1&rotation=0&showTitle=false&size=113103&status=done&style=none&taskId=uaaef3281-3150-4144-a772-a9c9f2f1e17&title=&width=744)
更新接口层后，可迅速定位接口调用代码，进行调用修改。
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648632170521-66dadabd-54c6-4c0a-ac00-c6b4d49d5bc6.png#clientId=u9fdc963e-89e2-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=311&id=PbZKX&name=image.png&originHeight=616&originWidth=1478&originalType=binary&ratio=1&rotation=0&showTitle=false&size=300123&status=done&style=none&taskId=u2749c27e-321c-4241-9aff-f8a1a25befc&title=&width=745)

### 6. 自定义

Pont 支持自定义**数据获取 、数据源预处理、自定义代码生成器**等。请参考 [定制化 Pont](./docs/customizedPont.md)

### 7. 提示

- 确保服务端使用 Swagger（目前只支持 Swagger V2、V3），提供的数据源接口是免登录的。如果不是，请后端帮忙简单配置一下，或者使用 [fetchMethodPath 配置](./docs/customizedPont.md#fetchmethodpath)，通过自定义**数据获取**来获取带鉴权的接口的文档。
- 若需替换默认的请求信息，请参阅 [pontCore](https://github.com/alibaba/pont/tree/master/docs/pontCore.md)。

## 🔍 文档

[命令行](./docs/CMD.md)

[标准数据源模型](./docs/standardDataSource.md)

[pont-config.josn 配置项](./docs/pontConfig.md)

[定制化 Pont](./docs/customizedPont.md)

[VSCode 插件](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont)

## 自动化 mocks 服务

mocks.enable 配置为 true，pont 将自动生成所有 mocks 数据，并提供所有接口的 mocks 服务。此外 IDE 提供如下功能

- 右键 pont 接口代码，可以跳转(jump to mock position)去编辑接口的 mocks 数据
- 右键 pont 接口代码，可以访问(visit mocks interface) GET 类型的 mocks 接口。

mocks 自动生成所有 mocks 数据，你也可以自由更新 mocks 数据，支持 [mockjs](http://mockjs.com/examples.html) 语法更新 mocks 数据。

## demo

参考下面的例子，来体验 pont。

- [pont-demo](https://github.com/nefe/pont-demo)
- [nuxt-ts-pont-demo](https://github.com/gaoletian/nuxt-ts-pont-demo)

## 👍 最佳实践

- 项目 pre-commit hook 中，加上 pont check，防止本地数据源被研发人员损坏。
- 很多 Swagger 所有的接口返回的类型都类似是 Result，主要是囊括了约定的接口错误字段，类似 `{ errorCode: 0, data: T, errMessage: '' }`。这里建议，让后端 Swagger 的接口返回类型，去掉这个 Result 外壳。只返回 data 的 T 类型。
- vscode 配置 `trigger suggest` 的快捷键(cmd K + cmd S)，传参时，用快捷键触发提醒，非常好用；
- pont template 配置 API、defs 为全局变量；这样不需要 import 任何接口、实体类；使用 API 直接触发建议找到 模块、接口，非常方便
- 快捷键 cmd + ctrl + p 进行接口查找，非常方便；
- 善于利用实体类（defs），可以当成类型用、也可以作为逻辑实现的辅助；实体类是后端写得实体类，前端自己写实体类，既没有必要，长期来看也会和后端的实现差异越来越大。如果有自定义逻辑，继承 defs 实体类即可。
- redux 项目，建议结合 [https://github.com/nefe/iron-redux](https://github.com/nefe/iron-redux)，一个致力类型完美和去冗余的轻量化 redux 库。例如类型友好的，运行安全的 get 方法：[https://github.com/nefe/iron-redux#safeget](https://github.com/nefe/iron-redux#safeget)

## ❓常见问题

1. demo 中，生成代码的 pontFetch 函数，是要自己实现的吗？
答：pontFetch 是用户自己项目的请求公共方法。因为每个项目的接口有自己的业务逻辑，比如如何判断接口返回的结果是否正确，所以 pont 的默认模板并没有自己实现一套 fetch 方法。另外 Pont 生成的代码是可以用自定义模板配置的。可以在模板上更改 pontFetch 的引用路径和名字。
1. nestjs 搭配的 Swagger JSON 生成出来的 pont 文件为什么没有 mods?
答：nestjs 中的 Swagger 必须在每个 Controller 上添加 ApiUseTags 装饰器，并且在每个控制器的方法上添加 ApiOperation 装饰器 才能正确输出带 Tags 以及 operationId 的 Swagger JSON。Tags 和 operationId 是 pont 必需的（@nestjs/swagger 自动生成的 default Tags 暂时不被兼容）。
示例如下 (`@nestjs/swagger@^3`)
对于 `@nestjs/swagger@^4`，需要如下配置来手动注册 Tag

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

```typescript
// ...
const options = new DocumentBuilder().setTitle('your app').addTag('pet').build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('/api', app, document);
```

3. API、defs 全局变量找不到
答：将 pont 生成的 api.d.ts 塞到 tsconfig.json 中的 includes 数组最前面。并在项目入口处 import pont 生成的入口文件。

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "outDir": "./**"
  },
  "include": ["./services/api.d.ts", "./src"],
  "exclude": []
}

```

## 其它接口平台接入

目前 pont 支持 [Swagger](https://swagger.io/) V2 V3 三种数据源。其他类型数据源只需要在 scripts 中添加对应的数据格式转换文件，把对应数据格式转换为 pont 标准格式，即可适配新的数据源类型。希望社区可以踊跃贡献代码，接入更多类型的数据源！

## 钉钉用户群

群号：33661609

## 🎉 谁在使用

- [阿里巴巴](https://www.alibabagroup.com/about-alibaba)
- 北京知道创宇信息技术股份有限公司
- 长沙蜜獾信息科技有限公司
- [联众智慧科技股份有限公司](http://www.mediinfo.com.cn/)
- 深圳万国游科技有限公司

> 我们在这里列出了部分使用者，如果你的公司和产品使用了 Pont，欢迎到 [这里](https://github.com/alibaba/pont/issues/301) 留言。
