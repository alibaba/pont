### 🐛 Bug Fixes

- `pont-core`
  - 怪异类型兼容路径问题
  - #129 Convert int to number


### 💅 Refactors

- `pont-engine,vscode-pont`
  - Rename pont-core => pont-engine , pont-vscode-plugin => vscode-pont
- `pont-core`
  - 将类型兼容抽取为独文件


### 🏡 Chore

- `general`
  - Remove @commitlint/cli dep
  - Yarn release add --non-interactive option
  - Update script (verifyCommit,changelog)
  - Script/release.js use yarn publish packages
  - 添加 yarn changlog 命令
  - Pre-commit 只运行格式化和提交格式较验


### 💖 Thanks to

- gaoletian

# 0.3.5

### 🐛 Bug Fixes

- `pont-core`
  - Works without tags on swagger json
- `general`
  - Recover npm script
  - 修复一个仅配置original通过all同步导致的bug
  - Recover package.json
  - Fix high severe dependency
  - 修复单origin下mkdir异常的bug
  - #110 修复一个因为baseClass uniqBy时留下了错误的类型导致的泛型错误问题; 更新pont-engine版本到0…
  - 修复一个因为baseClass uniqBy时留下了错误的类型导致的泛型错误问题; 更新pont-engine版本到0.3.1
  - 修复 operationId 不生效的问题
  - 不存在顶层 tags 时使用 operation-object 下的 tags 并集
  - Remove root package-lock.json
  - Reload config when origin name changed
  - Ignore all node_modules dirs
  - 恢复pontTemplate
  - 修复API路径中含有多个中划线时生成代码不正确的问题
  - Format
  - Revert project path constant variable
  - 使用解构
  - Fix utils
  - Fix type
  - #68 Fix
  - #75 Fix
  - Baseclass contain brackets
  - #79 Fixed
  - Fix typo
  - 根据package-lock.json生成yarn.lock
  - #55 Fix error when parameters in path item object
  - Fix error when parameters in path item object
  - #52 Fix param key
  - Fix identifier containers -
  - Fix param key
- `swagger`
  - Swagger 2.0 中 tags属性是可选的
- `compiler`
  - 词法解析前替换掉template中的.替换为下划线


### 🚀 Features

- `pont-core`
  - 支持tags中存在多级命名空间
- `general`
  - Build vscode plugin 0.3.3
  - Change pont-engine version installed by pont plugin
  - 支持根目录下直接调试 core 与 vscode plugin
  - Add logo file
  - Update lerna.json version field
  - 新增一个getDataSourceCallback方法, 用于暴露pont转换后的数据结构
  - 详细描述 origins 的配置项
  - 添加 swagger v3 的 mock 文件
  - 补充 compileTemplateKeyword
  - Add v3
  - Add swagger v3 entry
  - #70 Add configuration item for fetchMethod
  - Enbale config fetchMethod
  - #51 Add schema type support for Collection and double
  - Add schema type support for Collection and double


### 💅 Refactors

- `general`
  - #78 Remove unused code
  - Remove unused code


### 🏡 Chore

- `general`
  - Update version
  - Use yarnpkg registry
  - Update version
  - Update package.json and plugin bin file
  - CHANGELOG  迁移到 根目录
  - 迁移部分文件至根目录
  - 迁移 nefe/vscode-pont
  - 迁移 nefe/vscode-pont
  - 将主库迁移到 packages 目录下， 并重命名为 pont-core
  - Fix PULL_REQUEST_TEMPLATE
  - Add LICENSE
  - Fix translation issues
  - Edit pr temp
  - Add PULL_REQUEST_TEMPLATE
  - Fix ISSUE_TEMPLATE
  - ISSUE_TEMPLATE中英文对照
  - Add ISSUE_TEMPLATE
  - English.md 改名为 README.en-US.md；History.md 改名为 CHANGELOG.md
  - Fixed type error when build
- `deps`
  - Bump mixin-deep from 1.3.1 to 1.3.2
  - #82 Bump lodash.template from 4.4.0 to 4.5.0
  - Bump lodash.template from 4.4.0 to 4.5.0
  - Bump lodash from 4.17.13 to 4.17.14
  - Bump lodash from 4.17.11 to 4.17.13
  - Bump lodash.template from 4.4.0 to 4.5.0
  - Bump ecstatic from 3.3.1 to 3.3.2


### 💖 Thanks to

- DBvc
- Jason
- ShawDanon
- calvin
- capdiem
- chengaoyuan
- dbvc
- dependabot[bot]
- gaoletian
- injser
- jasonHzq
- jim_
- kokoro
- linningmii
- nikaple
- sinchang
- zongquan.hzq
- 崆峒
- 赵前
- 非壹

# 0.2.1

### 🐛 Bug Fixes

- `general`
  - Fix code in manager


### 🚀 Features

- `general`
  - Deploy 0.2.1


### 🏡 Chore

- `general`
  - Update


### 💖 Thanks to

- jasonHzq

# 0.1.70

### 🐛 Bug Fixes

- `general`
  - Fix swagger
  - #44 Fix types of parameters in the body


### 🚀 Features

- `general`
  - Deploy 0.1.70
  - Deploy 0.1.69
  - Deploy 0.1.67
  - Deploy 0.1.66
  - Deploy 0.1.65
  - Deploy 0.1.64
  - Deploy 0.1.63
  - Add docs


### 🏡 Chore

- `general`
  - Add ignore
  - Update
  - Add commit lint


### 💖 Thanks to

- Jason
- calvin
- jasonHzq

# 0.1.62

### 🐛 Bug Fixes

- `general`
  - Fix interface name repeat in same mod
  - Fix ObjectMap


### 🚀 Features

- `general`
  - Using package-lock


### 💖 Thanks to

- jasonHzq

# 0.1.54

### 🐛 Bug Fixes

- `general`
  - Fix no operationId
  - Fix swagger test
  - Fix conflict
  - Fix ftest
  - Fix test
  - Fix launch script
  - Fix data-type in pont
  - Fix code style in scripts base
  - Fix code style


### 🚀 Features

- `general`
  - Change dir
  - Delete useless code
  - Delete deprecated code
  - Delete useless code
  - Add scripts adapter
  - Test
  - Test


### 🏡 Chore

- `general`
  - Add pretest script


### 💖 Thanks to

- Jason
- jasonHzq

# 0.1.53

### 🐛 Bug Fixes

- `general`
  - #29 Map without template params fixes
  - SetFilesManager  call twice , it has call by  regenerateFiles


### 🚀 Features

- `general`
  - Add check cmd
  - Add lock-file-name


### 🏡 Chore

- `general`
  - Clean code


### 👓 Tests

- `general`
  - Map without template params to object
  - Delete unused file
  - Add usingMultipleOrigins test case


### 💖 Thanks to

- Jason
- gaoletian
- jasonHzq
- 高乐天

# 0.1.52

### 🐛 Bug Fixes

- `general`
  - 
- `translate`
  - When loadDict error auto remove dict.json


### 🚀 Features

- `general`
  - Add custom generator
  - Add File Structures


### 👓 Tests

- `general`
  - Update test && translate log


### 💖 Thanks to

- Jason
- gaoletian
- jasonHzq

# 0.1.51

### 🐛 Bug Fixes

- `general`
  - Assert enKey
  - Regex for chinese of baseClass
  - Translate engine with google or  baidu or youdao
  - Replace node-google-translate-china with translation.js && update test case
  - Commit
  - Set using yarn


### 👓 Tests

- `general`
  - Update test case


### 💖 Thanks to

- gaoletian
- jasonHzq

# 0.1.50

### 🐛 Bug Fixes

- `general`
  - Remove error test spec
  - 中文翻译


### 🚀 Features

- `general`
  - Add huscky;feat: add test debugger;feat: refactor test;


### 👓 Tests

- `general`
  - Update test
  - Add test case
  - 修改测试用例


### 💖 Thanks to

- gaoletian
- jasonHzq

# 0.1.49

### 💖 Thanks to

- jasonHzq

# 0.1.48

### 🐛 Bug Fixes

- `general`
  - Fix master


### 🏡 Chore

- `general`
  - Update ignore


### 💖 Thanks to

- jasonHzq
- 高乐天

# 0.1.47

