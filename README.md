# pont

pont 是法语中桥的意思，寓意着搭建前后端之间的桥梁。

pont 将 swagger 等多种接口文档数据，转换为前端 Typescript 接口层代码。

## usage

- 1、vscode 中安装 vscode-pont

- 2、在你的项目中任意位置添加 pont-config.json。配置项请参考 ![配置指南](#config)

## 数据源

### swagger

#### 了解 swagger

swagger 是一个 API 管理工具

#### 接入指南

- 1、确保服务端项目的 swagger 接口免登录。

- 2、确保 swagger 数据符合如下规范：

#### config

- originUrl(string)

swagger api url

- outDir(string)

auto generate code file path

- templatePath(string)

your custom template path

- prettierConfig(object)

generated code is formatted by prettier, your can config your prettier style here;
