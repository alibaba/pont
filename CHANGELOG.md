
v0.3.5 / 2019-12-09
===================

  * chore: update version
  * release: v0.3.5
  * feat(pont-core): 支持tags中存在多级命名空间
  * fix(pont-core): works without tags on swagger json
  * chore: use yarnpkg registry
  * 修复一个仅配置original通过all同步导致的bug (#115)
  * fix: recover npm script
  * chore: update version
  * fix: 修复一个仅配置original通过all同步导致的bug
  * 修复一个单origin下mkdir报错的bug (#114)
  * fix: recover package.json
  * feat: build vscode plugin 0.3.3
  * fix: fix high severe dependency
  * fix: 修复单origin下mkdir异常的bug
  * Update README.md
  * Update README.md
  * Merge pull request #112 from alibaba/docs/pont-template
  * docs: 更新readme
  * docs: 更新文档
  * fix: 修复一个因为baseClass uniqBy时留下了错误的类型导致的泛型错误问题; 更新pont-engine版本到0… (#110)
  * fix: 修复一个因为baseClass uniqBy时留下了错误的类型导致的泛型错误问题; 更新pont-engine版本到0.3.1
  * Merge pull request #107 from capdiem/master
  * fix: 修复 operationId 不生效的问题
  * fix: 不存在顶层 tags 时使用 operation-object 下的 tags 并集
  * 🐛 fix: 修复swagger.tags可能为空的问题
  * Merge pull request #104 from alibaba/fix/name-change
  * chore: update package.json and plugin bin file
  * Merge pull request #105 from alibaba/feat/plugin-read-local-package-json-pont-engine-version
  * feat: change pont-engine version installed by pont plugin
  * fix: remove root package-lock.json
  * fix: Reload config when origin name changed
  * Merge pull request #103 from alibaba/feature/support-root-debug
  * feat: 支持根目录下直接调试 core 与 vscode plugin
  * docs: update readme
  * Merge pull request #99 from alibaba/refactor/mono
  * feat: add logo file
  * fix: ignore all node_modules dirs
  * chore: CHANGELOG  迁移到 根目录
  * feat: update lerna.json version field
  * chore: 迁移部分文件至根目录
  * chore: 迁移 nefe/vscode-pont
  * chore: 迁移 nefe/vscode-pont
  * chore: 将主库迁移到 packages 目录下， 并重命名为 pont-core
  * Merge pull request #96 from ShawDanon/master
  * Merge pull request #97 from alibaba/dependabot/npm_and_yarn/mixin-deep-1.3.2
  * chore(deps): bump mixin-deep from 1.3.1 to 1.3.2
  * chore: fix PULL_REQUEST_TEMPLATE
  * chore: Add LICENSE

v0.3.0 / 2019-09-03
===================

  * 0.3.0
  * Merge pull request #93 from Nikaple/fix/multi-dash-endpoint
  * 新增一个API暴露pont转换后的中间数据结构 (#95)
  * Merge remote-tracking branch 'origin/master' into feat/export-structure
  * fix: 恢复pontTemplate
  * feat: 新增一个getDataSourceCallback方法, 用于暴露pont转换后的数据结构
  * Merge pull request #92 from ShawDanon/master
  * fix: 修复API路径中含有多个中划线时生成代码不正确的问题
  * chore: fix translation issues
  * chore: edit pr temp
  * chore: add PULL_REQUEST_TEMPLATE
  * chore: fix ISSUE_TEMPLATE
  * chore: ISSUE_TEMPLATE中英文对照
  * chore: add ISSUE_TEMPLATE
  * Merge pull request #88 from alibaba/chore/md-rename
  * chore: English.md 改名为 README.en-US.md；History.md 改名为 CHANGELOG.md
  * Merge pull request #86 from inJs/master
  * Merge pull request #85 from kokoroX/master
  * fix: format
  * feat: 详细描述 origins 的配置项
  * feat: 添加 swagger v3 的 mock 文件
  * feat: 补充 compileTemplateKeyword
  * fix: revert project path constant variable
  * fix: 使用解构
  * feat: add v3
  * feat: add swagger v3 entry
  * docs: add FAQ
  * fix: fix utils
  * fix: fix type
  * fix: fix #68
  * fix: fix #75
  * Merge pull request #72 from youth95/master
  * Merge pull request #83 from gaoletian/master
  * Update README.md
  * feat: Add configuration item for fetchMethod (#70)
  * Merge branch 'master' of github.com:gaoletian/pont
  * fix: baseclass contain brackets
  * chore: fixed type error when build
  * Merge pull request #8 from alibaba/master
  * chore(deps): bump lodash.template from 4.4.0 to 4.5.0 (#82)
  * refactor: remove unused code (#78)
  * chore(deps): bump lodash.template from 4.4.0 to 4.5.0
  * 根据package-lock.json生成yarn.lock (#61)
  * Merge branch 'master' into fix/yarn-lock
  * Merge pull request #80 from alibaba/fix-base-class-name
  * fix: fixed #79
  * Merge pull request #7 from alibaba/master
  * refactor: remove unused code
  * Merge pull request #73 from youth95/fix/tags
  * Merge pull request #77 from DBvc/fix-typo
  * fix: fix typo
  * Merge pull request #74 from alibaba/dependabot/npm_and_yarn/lodash-4.17.14
  * chore(deps): bump lodash from 4.17.13 to 4.17.14
  * fix(swagger): swagger 2.0 中 tags属性是可选的
  * fix(compiler): 词法解析前替换掉template中的.替换为下划线
  * docs: add fetchMethodPath docs
  * feat: enbale config fetchMethod
  * docs: add fetchMethodPath docs
  * Merge pull request #67 from alibaba/dependabot/npm_and_yarn/lodash-4.17.13
  * Merge pull request #66 from alibaba/dependabot/npm_and_yarn/lodash.template-4.5.0
  * chore(deps): bump lodash from 4.17.11 to 4.17.13
  * chore(deps): bump lodash.template from 4.4.0 to 4.5.0
  * fix: 根据package-lock.json生成yarn.lock
  * Merge pull request #56 from alibaba/dependabot/npm_and_yarn/ecstatic-3.3.2
  * Merge pull request #6 from alibaba/master
  * chore(deps): bump ecstatic from 3.3.1 to 3.3.2
  * fix: fix error when parameters in path item object (#55)
  * fix: fix error when parameters in path item object
  * fix: fix param key (#52)
  * fix: fix identifier containers -
  * Update README.md
  * Update README.md
  * Update README.md
  * Update README.md
  * fix: fix param key
  * feat: add schema type support for Collection and double (#51)
  * feat: add schema type support for Collection and double
  * Update README.md
  * Merge pull request #5 from alibaba/master
  * Merge pull request #4 from alibaba/master

v0.2.1 / 2019-05-10
===================

  * feat: deploy 0.2.1
  * fix: fix code in manager
  * chore: update

v0.1.70 / 2019-05-08
====================

  * feat: deploy 0.1.70
  * fix: fix swagger
  * feat: deploy 0.1.69
  * chore: add ignore
  * feat: deploy 0.1.67
  * feat: deploy 0.1.66
  * feat: deploy 0.1.65
  * feat: deploy 0.1.64
  * feat: deploy 0.1.63
  * docs: update readm
  * chore: update
  * feat: add docs
  * Fixed #44 (#47)
  * fix: fix types of parameters in the body #44
  * chore: add commit lint

0.1.62 / 2019-04-19
===================

  * deploy 0.1.62
  * deploy 0.1.61
  * feat: using package-lock
  * deploy 0.1.60
  * deploy 0.1.58
  * fix: fix interface name repeat in same mod
  * deploy 0.1.57
  * fix: fix ObjectMap
  * deploy 0.1.55
