# pont-config.json 配置

对于 pont-config.json 的配置，在 vscode-pont 插件中已经做了自动提示、自动补全、配置项描述提醒等功能。具体配置项介绍如下：

| 配置项 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fetchMethodPath | 可选项, 相对项目根目录路径。用于 Swagger 数据源需要登录才能请求成功的场景，可指定获取 Swagger 源数据的方法。默认为 node-fetch 的 fetch 方法，可通过自定义 fetch 方法获取带鉴权的接口的文档  具体使用方法请参看[自定义数据获取文档](./customizedPont.md#fetchMethodPath) | `string` |  |
| mocks | 接口mock配置 | 见下方 | - |
| name | 数据源名称，仅多数据源时需配置 | `string` | `''` |
| origins | 配置每个数据来源，参考单个数据源配置。 | 见下方 | - |
| originUrl | 接口平台提供数据源的 open api url（需要免登），目前只支持 Swagger。如 "[https://petstore.swagger.io/v2/swagger.json](https://petstore.swagger.io/v2/swagger.json)" | `string` | - |
| originType | 数据源接口类型（注：暂不支持 SwaggerV1） | `"SwaggerV2"`<br /> &#124; `"SwaggerV3"` | `"SwaggerV2"` |
| outDir | 生成代码的存放路径，使用相对路径即可。如："./src/api" | `string` | `"src/service"` |
| prettierConfig | 生成的代码会用 prettier 来美化。此处配置 prettier 的配置项即可，具体可以参考 [prettier 文档](https://prettier.io/docs/en/options.html) | `object` | `{}` |
| pollingTime | pont定时拉取数据，单位为秒，默认 20 分钟 | `number` | `60 * 20` |
| scannedRange | 废弃接口扫描范围，使用相对pont-config文件位置的相对路径。如：["./src/pages", "./src/components"]。需要配合pontTemplate中类FileStructures的getApiUseCases方法使用 [如下所示](#scannedrange)。完成配置后，使用 `pont scan` 命令进行扫描。 | `Array<string>` | - |
| spiltApiLock | 是否拆分api-lock.json到具体数据源 | `boolean` | `false` |
| surrounding | 生成文件类型 | `"typeScript"` &#124;` "javaScript"` | `""typeScript""` |
| templatePath | 指定自定义代码生成器的路径（使用相对路径指定）。一旦指定，pont 将即刻生成一份默认的自定义代码生成器。自定义代码生成器是一份 ts 文件，通过覆盖默认的代码生成器，来自定义生成代码。默认的代码生成器包含两个类，一个负责管理目录结构，一个负责管理目录结构每个文件如何生成代码。自定义代码生成器通过继承这两个类（类型完美，可以查看提示和含义），覆盖对应的代码来达到自定义的目的。具体使用方法请参看[自定义代码生成器文档](./customizedPont.md#templatepath) | `string` | "serviceTemplate" |
| templateType | 可选项。用于生成 pont 内置模板。配置该项时，一旦检测到本地模板文件不存在将自动使用配置的模板类型生成模板文件。内置模板功能强大，使用方法请参看[内置模板使用方法及贡献流程](https://github.com/alibaba/pont/tree/master/docs/templates.md) | `"fetch"` &#124;` "hooks"` | `''` |
| transformPath | 数据源预处理。指定数据源预处理路径（使用相对路径指定）。Pont 将 Swagger.json 数据转换为内部标准数据源之后会尝试调用由`transformPath`<br />指定的转换程序,这样用户就有机会对数据进行一些处理。具体使用方法请参看[自定义数据源预处理文档](./customizedPont.md#transformpath) | `string` | `''` |
| usingOperationId | 使用operationId作为方法名 | `boolean` | `true` |
| usingMultipleOrigins | pont 支持一个项目中配置多个 Swagger 来源。此处配置是否启用多数据源 | `boolean` | `false` |
| baiduTranslateConfigs | pont内置多种翻译引擎，用于转换非法类名（如包含特殊字符或者中文）。填写了此配置将优先使用百度开放翻译引擎。需填写APP_ID和APP_SECRET,详见https://fanyi-api.baidu.com/product/113 | `Array<{appId:string,appSecret:string}>` | null |


## origins 配置项
| 配置项 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 数据源名称，仅多数据源时需配置 | `string` | `''` |
| originType | 同单个数据源，如果未配置使用外层公共部分 | `"SwaggerV2"`<br /> &#124; `"SwaggerV3"` | `"SwaggerV2"` |
| originUrl | 同单个数据源 | `string` | - |
| usingOperationId | 同单个数据源，如果未配置使用外层公共部分 | `boolean` | `true` |
| transformPath | 同单个数据源，如果未配置使用外层公共部分 | `string` | `''` |
| fetchMethodPath | 同单个数据源，如果未配置使用外层公共部分 | `string` |  |
| outDir | 同单个数据源，如果未配置使用外层公共部分 | `string` | `"src/service"` |


## mocks 配置项
| 配置项 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enable | 是否启用 | `boolean` | `false` |
| port | mocks 服务的端口号 | `number` | 8080 |
| basePath | 接口的 basePath | `string` |  |
| wrapper | 接口返回结构，pont 可以计算返回数据类型(比如此处会替换到 {response})，此处可以指定接口返回结构。 | `object` | `"{"code": 0, "data": {response}, "message": ""}"` |


## 配置示例
#### 单数据源完整示例
```json
{
  "outDir": "src/service",
  "originUrl": "",
  "originType": "SwaggerV2",
  "fetchMethodPath": "./fetchMethod",
  "transformPath": "./transform",
  "templatePath": "./template",
  "templateType": "",
  "scannedRange": "./scannedRange",
  "pollingTime": 1200,
  "spiltApiLock": false,
  "usingOperationId": true,
  "usingMultipleOrigins": false,
  "prettierConfig": {},
  "mocks": {
    "enable": false,
    "basePath": "",
    "port": 8080,
    "wrapper": "{\"code\": 0, \"data\": {response}, \"message\": \"\"}"
  }
}
```

#### 多数据源完整示例
```json
{
  "outDir": "src/service",
  "originUrl": "",
  "originType": "SwaggerV2",
  "fetchMethodPath": "./fetchMethod",
  "transformPath": "./transform",
  "templatePath": "./template",
  "templateType": "",
  "scannedRange": "./scannedRange",
  "pollingTime": 1200,
  "origins": [
    {
      "name": "",
      "originUrl": "",
      "originType": "SwaggerV2",
      "usingOperationId": true,
      "transformPath": "./transform",
      "fetchMethodPath": "./fetchMethod",
      "outDir": "src/service"
    },
    {
      "name": "",
      "originUrl": "",
      "originType": "SwaggerV2",
      "usingOperationId": true,
      "transformPath": "./transform",
      "fetchMethodPath": "./fetchMethod",
      "outDir": "src/service"
    },
  ],
  "spiltApiLock": false,
  "usingOperationId": true,
  "usingMultipleOrigins": true,
  "prettierConfig": {},
  "mocks": {
    "enable": false,
    "basePath": "",
    "port": 8080,
    "wrapper": "{\"code\": 0, \"data\": {response}, \"message\": \"\"}"
  }
}
```

### scannedRange
需要进行扫描的文件夹路径，配合自定义 [FileStructures.getApiUseCases](#FileStructures) 进行接口代码匹配。<br />使用 `pont scan`命令进行扫描

#### JSON配置
```json
{
  // ...
  "scannedRange": ["./src/pages", "./src/components"],
}
```
#### 
#### 代码示例
下例代码可以匹配出 API.xxx.xxx 的接口用法，如果有其他接口用法，重写该方法
```javascript
// scannedRange.ts

/** API 使用case，用于scan扫描接口 */
getApiUseCases = (inter: Interface): Array<string> => {
  const context = inter.getContext();

  return [`API${this.usingMultipleOrigins ? `.${context.dataSource.name}` : ''}.${context.mod.name}.${inter.name}`];
};
```
### 
### mocks

```json
{
  "mocks": {
    "enable": true,
    "basePath": "",
    "port": 8080,
    "wrapper": "{\"code\": 0, \"data\": {response}, \"message\": \"\"}"
  }
}
```

## <br />
