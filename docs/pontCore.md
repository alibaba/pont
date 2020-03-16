# Pont 请求中心

## pontCore

pont 配置生成后，将自动在 `outDir` 的路径中生成单例文件 `pontCore.js` , `pontCore` 是 pont 对外暴露的单例类实体, 提供基本的 fetch 方法，pont 所有内置模板生成的接口都通过 `pontCore` 完成请求。若需要定制请求信息，在项目入口处使用 `pontCore.useFetch` 传入即可.

![demo](https://img.alicdn.com/tfs/TB14mnkxYr1gK0jSZR0XXbP8XXa-592-167.png)
