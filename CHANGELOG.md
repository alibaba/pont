### 🐛 Bug Fixes

- `general`
  - Fix code
  - Vscode的launch.json更新
  - 文档链接错误修正
  - Works without tags on swagger json
- `pont-engine`
  - 去掉多余的处理
  - 在removeCtx中除去item上不存在context的情况
- `pont-core`
  - 怪异类型兼容路径问题
  - #129 Convert int to number
  - Works without tags on swagger json


### 🚀 Features

- `general`
  - Code
  - Add lazy generate
  - Add CONTRIBUTING.md
  - Merge mocks and report
  - Add property in standard type
- `pont-core`
  - 支持tags中存在多级命名空间


### 💅 Refactors

- `pont-engine,vscode-pont`
  - Rename pont-core => pont-engine , pont-vscode-plugin => vscode-pont
- `pont-core`
  - 将类型兼容抽取为独文件


### 🏡 Chore

- `general`
  - Update docs
  - 添加 lerna run watch
  - Remove @commitlint/cli dep
  - Yarn release add --non-interactive option
  - Update script (verifyCommit,changelog)
  - Script/release.js use yarn publish packages
  - 添加 yarn changlog 命令
  - Pre-commit 只运行格式化和提交格式较验
  - Update version
- `script`
  - Add pretest script


### 💖 Thanks to

- briefguo
- chengaoyuan
- gaoletian
- jasonHzq
- mimimi
- sinchang
- zongquan.hzq
- 非壹