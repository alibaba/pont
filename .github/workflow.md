# pont mongo-repo workflow

本次工程改造的目标如下：

1. [ x ] 规范工作流，包括： commit 格式规范、发包流程规范、(`wip`)规则 ChangeLog
2. [ x ] 提升开发体验
3. [ x ] 避免额外的学习成本
4. [ x ] 利用 yarn workspace(工作区) 统一公共依赖，比如 typescript ,@type/\*
5. [ x ] 使用 jest 替换 mocha
6. [ x ] 使用`yarn`或`npm`完成常用操作
7. 持续集成支持

## 命令

### `yarn`

安装所有依赖包括公共依赖和所有子包的依赖

### `yarn test`

单元测试

### `yarn build`

打包构建

### `yarn lint`

手动格式化代码

### `yarn release`

发包

```bash

      # 发布流程

      发布版本号确认(可自定义版本号)
          |
          v
      运行单元测试(可跳过)
          |
          v
      更新版本号
          |
          v
      运行构建命令(可跳过)
          |
          v
      判断是否为dry模式（否：继续执行 是： 到此中止）
          |
          v
      git本地提交
          |
          v
      发布到npm
          |
          v
      tag版本号并push到远端仓库

```

参数选项

#### `--dry` dry 模式

#### `--skipTest` 跳过测试

#### `--skipBuild` 跳过构建

## 提交信息规范

用户每次提交时都会触发如下动作

```bash

prettier格式化代码 -> commit格式较验

```

### commit 格式较验规则

```js
/^(release: )?(revert: )?(feat|fix|docs|refactor|perf|test|workflow|build|ci|chore|wip|release)(\(.+\))?: .{1,50}/;
```

- 正确的提交格式如下

```
  fix(pont-core): int convert to number (close #128)

  chore(doc): add transformPath example code
```
