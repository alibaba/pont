### 🐛 Bug Fixes

- `pont-core`
  - 怪异类型兼容
  - #129 Convert int to number
- `general`
  - Works without tags on swagger json
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
  - Fix code in manager
  - Fix swagger
  - #44 Fix types of parameters in the body
- `swagger`
  - Swagger 2.0 中 tags属性是可选的
- `compiler`
  - 词法解析前替换掉template中的.替换为下划线


### 🚀 Features

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
  - Deploy 0.2.1
  - Deploy 0.1.70
  - Deploy 0.1.69
  - Deploy 0.1.67
  - Deploy 0.1.66
  - Deploy 0.1.65
  - Deploy 0.1.64
  - Deploy 0.1.63
  - Add docs


### 💅 Refactors

- `general`
  - #78 Remove unused code
  - Remove unused code


### 🏡 Chore

- `pre-commit`
  - 只运行格式化和提交格式较验
- `doc`
  - Add transformPath example code
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
  - Update
  - Add ignore
  - Update
  - Add commit lint


### 💖 Thanks to

- DBvc
- Jason
- ShawDanon
- calvin
- dbvc
- injser
- jasonHzq
- jim_
- nikaple
- sinchang
- zongquan.hzq
- 崆峒
- 赵前
- 非壹