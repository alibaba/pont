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

prettier 手动格式化代码

### `yarn changelog [targetVersion]`

显示自上一次 tag 的所有更改，如果指定了版本号则自动写入到 `CHANGELOG.MD`。

```bash
# 只显示自上一次 tag 的所有更改，不写入 `CHANGELOG.MD`
yarn changelog

# 显示自上一次 tag 的所有更改，并写入到 `CHANGELOG.MD`。
yarn changelog 0.3.10
```

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
      更新CHANGELOG.MD(yarn changelog targetVersion)
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

#### `--dry` 空运行模式, 预览 release 流程，不提交 git,也不发布 npm。

#### `--skipTest` 跳过测试

#### `--skipBuild` 跳过构建

## 提交信息规范

每次执行`git commit`时都会触发如下动作

```bash

prettier格式化代码 -> commit格式较验

```

### 目的

- 为了清楚的表示每一次提交所做的更改
- 发布时生成友好的 changelog 文档

### 格式较验规则

```js
/^(revert: )?(feat|fix|docs|refactor|perf|test|workflow|build|ci|chore|wip|release)(\(.+\))?: .{1,50}/;
```

### 规范：

提交格式为：

```
action(scope): message(支持换行，但字数不超过50)
```

- 有关`packages`目录下的任何修改，`必须指定scope`，`scope为子包名称`

示例：

```bash

fix(pont-engine): 修复了pont-engine的什么问题 #issues(本次提交相关的issus)

feat(pont-engine): 对pont-engine增加了什么特性 #issuse(本次提交相关的issus)

test(pont-engine): 对pont-engine的测试做了什么更改

fix(vscode-pont): 修复了vscode-pont的什么问题 #issues(本次提交相关的issus)

feat(vscode-pont): 对vscode-pont增加了什么特性 #issuse(本次提交相关的issus)

refactor(vscode-pont) 对vscode-pont做了哪些重构工作 #issuse(本次提交相关的issus)

```

- 未涉及到`packages`的修改，比如工作流、脚本、依赖包更新等，可不指定 scope

示例：

```bash

docs: 对文档做了什么修改（增加，修改）

chore: 杂项比如更新了依赖包版本

chore: 修改了哪些脚本

ci: 持续集成相关的改动

```

- 发布时必须以 `release: 版本号`提交， 注意： `yarn release` 会自动生成符合规范的提交信息
