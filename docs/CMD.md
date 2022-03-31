# 命令行使用方法

目前 pont 以 vscode 插件 —— [vscode-pont](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont) 来提供 pont 的元数据能力。其它 IDE 的插件也将逐渐提供，这里非常渴望社区的力量。

为了避免一部分用户和技术团队不使用 [vscode-pont](https://marketplace.visualstudio.com/items?itemName=jasonHzq.vscode-pont)，pont 可以以命令行命令的方式来提供服务。

命令行提供的命令目前还比较基础，提供命令如下：

| 命令 | 描述 |
| --- | --- |
| pont start | 一键接入 pont，若本地存在 [pont-config.json](./pontConfig.md)配置文件，将覆盖重复的配置项 |
| pont check | 校验本地的 pont-lock.json 文件是否缺失、损坏。建议用户在项目中，在 pre-commit 里加上 pont check 命令，以防止在团队协作过程中，pont-lock.json 被误删、解决该文件冲突时被损坏等情况 |
| pont scan | 扫描未使用的接口，在 process.cwd()位置生成并写入 unusedRequests.json 文件，需要配置 scannedRange。请参考 [pont-config.json 配置项](./pontConfig.md) |
| pont ls | 查看所有数据源 |
| pont select [dsName] | 切换当前数据源 |
| pont diff | 查看远程数据和本地数据在模块、基类上的差异，以作针对性、选择性同步 |
| pont updateMod [modName] | 选择性更新本地的模块 |
| pont updateBo [boName] | 选择性更新本地的基类 |


![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/332171/1648467606899-487b668d-1a23-4ff4-b4b5-43e881885057.png#clientId=u8becc08d-fe3e-4&crop=0&crop=0&crop=1&crop=0.9817&from=paste&height=338&id=u3912945f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=676&originWidth=1842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=191780&status=done&style=none&taskId=u54a3866f-0cd1-449c-aed8-ae05d59cec1&title=&width=921)

![test2.gif](https://intranetproxy.alipay.com/skylark/lark/0/2022/gif/332171/1648468264010-a2be8d0f-fe59-43aa-bb5e-4ff0585b601c.gif#clientId=u8becc08d-fe3e-4&crop=0&crop=0&crop=1&crop=0.5889&from=paste&height=441&id=u256a584f&margin=%5Bobject%20Object%5D&name=test2.gif&originHeight=543&originWidth=920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28790&status=done&style=none&taskId=u6de847fe-f06d-4789-99d6-ef3569a4ef2&title=&width=748)
