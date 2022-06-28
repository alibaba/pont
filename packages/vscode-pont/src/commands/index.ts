import { Interface, Config, Manager } from 'pont-engine';
import * as path from 'path';
import * as fs from 'fs';
import * as child_process from 'child_process';
import {
  commands,
  Disposable,
  MessageOptions,
  OutputChannel,
  Position,
  ProgressLocation,
  QuickPickItem,
  Selection,
  Uri,
  window,
  workspace
} from 'vscode';
import { MocksServer } from '../mocks';
import { findInterface, pontEngineVersion, showProgress } from '../utils';
import { execSync } from 'child_process';
import { OriginTreeItem, getPontOriginsProvider, getPontOriginsTreeView } from '../views/pontOrigins';
import { setContext } from '../utils/setContext';

export const commandMap = {
  /** 选择数据源 */
  switchOrigin: 'pont.switchOrigin',
  /** 更新全部数据源 */
  makeAllSame: 'pont.makeAllSame',
  /** 远程数据源同步 */
  syncRemote: 'pont.syncRemote',
  /** 搜索接口 */
  findInterface: 'pont.findInterface',
  /** 更新Mock */
  refreshMocks: 'pont.refreshMocks',
  /** 生成接口代码 */
  regenerate: 'pont.regenerate',
  /** 跳转到对应的mock代码位置 */
  jumpToMocks: 'pont.jumpToMocks',
  /** 浏览器查看当前mock接口 */
  visitMocks: 'pont.visitMocks',
  /** 更新本地接口 */
  updateMod: 'pont.updateMod',
  /** 搜索并更新本地接口 */
  qickPickMod: 'pont.updateMod',
  /** 更新本地基类 */
  updateBo: 'pont.updateBo',
  /** 搜索并更新本地基类 */
  qickPickBo: 'pont.updateBo',
  /** 显示pont侧边栏 */
  showPontBar: 'pont.showPontBar',
  /** 重新创建 Manager */
  createManager: 'pont.createManager',
  /** 安装pont-enging包 */
  installPontEngine: 'pont.installPontEngine'
};

type CommandId = `pont.${keyof typeof commandMap}`;

type CommandType = 'command' | 'TextEditorCommand';

interface ScmCommand {
  commandId: string;
  key: string;
  method: Function;
  type: CommandType;
}

const Commands: ScmCommand[] = [];
const managerCleanUps: Disposable[] = [];

function command(commandId: CommandId, type: CommandType = 'command'): Function {
  return (_target: any, key: string, descriptor: any) => {
    if (!(typeof descriptor.value === 'function')) {
      throw new Error('not supported');
    }
    Commands.push({ commandId, key, type, method: descriptor.value });
  };
}

export class CommandCenter {
  private manager: Manager;

  private configPath: string;

  private disposables: Disposable[];

  constructor(private outputChannel: OutputChannel) {
    this.disposables = Commands.map(({ commandId, key, type, method }) => {
      const command = this.createCommand(commandId, key, method);
      if (type === 'command') {
        return commands.registerCommand(commandId, command);
      }
      if (type === 'TextEditorCommand') {
        return commands.registerTextEditorCommand(commandId, command);
      }
    });
  }

  setConfigPath(configPath: string) {
    this.configPath = configPath;
  }

  setManage(manager: Manager) {
    this.manager = manager;
  }

  @command('pont.switchOrigin')
  async switchOrigin() {
    const manager = this.manager;
    const origins: QuickPickItem[] = manager.allConfigs.map((conf) => {
      return {
        label: conf.name,
        description: conf.originUrl
      };
    });

    const pickItem = await window.showQuickPick(origins);

    this.outputChannel.appendLine(`showQuickPick:${pickItem?.label}`);

    if (!pickItem) return;

    if (pickItem.label === manager.currConfig.name) return;

    await showProgress('切换数据源', async (report) => {
      await manager.selectDataSource(pickItem.label);
      manager.calDiffs();
      MocksServer.getSingleInstance(manager).checkMocksPath();
      getPontOriginsProvider().refresh(manager);
      report('成功');
    });
  }

  @command('pont.makeAllSame')
  async makeAllSame() {
    const manager = this.manager;

    await showProgress('更新全部数据源', async (report) => {
      report('更新中...');
      manager.makeAllSame();
      await manager.lock();
      manager.calDiffs();
      getPontOriginsProvider().refresh(manager);
      report('成功');
    });
  }

  @command('pont.syncRemote')
  async syncRemote() {
    const manager = this.manager;
    await showProgress('拉取远程数据源', async (report) => {
      report('拉取中...');
      await manager.readRemoteDataSource();
      report('差异比对中...');
      manager.calDiffs();
      report('完成');
      getPontOriginsProvider().refresh(manager);
    });
  }

  @command('pont.findInterface')
  async findInterface(ignoreEdit = false) {
    const codeTemplate = this.manager.getCodeSnippet();

    const items = this.manager.currLocalDataSource.mods
      .map((mod) => {
        return mod.interfaces.map((inter) => {
          return {
            label: `[${inter.method}] ${inter.path}`,
            detail: `${mod.name}.${inter.name}`,
            description: `${inter.description}`,
            inter
          } as QuickPickItem & { inter: Interface };
        });
      })
      .reduce((pre, next) => pre.concat(next), []);

    const pickItem = await window.showQuickPick(items, {
      matchOnDescription: true,
      matchOnDetail: true
    });

    if (!pickItem) return;

    const code = codeTemplate(pickItem.inter);

    const editor = window.activeTextEditor;

    if (!ignoreEdit) {
      editor?.edit((builder) => {
        if (editor.selection.isEmpty) {
          const position = editor.selection.active;

          builder.insert(position, code);
        } else {
          builder.replace(editor.selection, code);
        }
      });
    }

    return code.split('.').filter((id) => id);
  }

  @command('pont.refreshMocks')
  refreshMocks() {
    if (MocksServer.singleInstance) {
      MocksServer.singleInstance.refreshMocksCode();
    }
  }

  @command('pont.regenerate')
  async regenerate() {
    await showProgress('接口代码', async (report) => {
      report('生成中...');
      await this.manager.regenerateFiles();
      report('完成');
    });
  }

  @command('pont.updateMod')
  async updateMod(item: OriginTreeItem) {
    if (!item) return;

    const manager = this.manager;
    const modName = item.label;
    const oldFiles = manager.getGeneratedFiles();

    await showProgress(
      '更新本地模块',
      async (report) => {
        report('更新中...');
        manager.makeSameMod(modName);
        await manager.lock();
        manager.calDiffs();
        await manager.update(oldFiles);
        getPontOriginsProvider().refreshNode(manager, item.parent);
        report('更新成功');
      },
      ProgressLocation.SourceControl
    );
  }

  @command('pont.qickPickMod')
  async qickPickMod() {
    const modDiffs = this.manager.diffs.modDiffs;
    const items = modDiffs.map((item) => {
      return {
        label: item.name,
        description: `${item.details[0]}等 ${item.details.length} 条更新`
      } as QuickPickItem;
    });
    const pickItem = await window.showQuickPick(items);

    if (!pickItem) return;

    this.updateMod(getPontOriginsProvider().modList.find((item) => item.label === pickItem.label));
  }

  @command('pont.updateBo')
  async updateBo(item: OriginTreeItem) {
    if (!item) return;

    const manager = this.manager;
    const boName = item.label;
    const oldFiles = manager.getGeneratedFiles();

    await showProgress(
      '更新本地基类',
      async (report) => {
        report('更新中...');

        manager.makeSameBase(boName);
        await manager.lock();

        manager.calDiffs();
        await manager.update(oldFiles);

        getPontOriginsProvider().refreshNode(manager, item.parent);
        report('更新成功');
      },
      ProgressLocation.SourceControl
    );
  }

  @command('pont.qickPickBo')
  async qickPicBo() {
    const boDiffs = this.manager.diffs.boDiffs;

    const items = boDiffs.map((item) => {
      return {
        label: item.name,
        description: item.details.join(', ')
      } as QuickPickItem;
    });

    const pickItem = await window.showQuickPick(items);

    if (!pickItem) return;

    this.updateMod(getPontOriginsProvider().boList.find((item) => item.label === pickItem.label));
  }

  @command('pont.showPontBar')
  async showPontBar() {
    commands.executeCommand('pontOrigins.focus');
  }

  @command('pont.jumpToMocks', 'TextEditorCommand')
  async jumpToMocks(textEditor) {
    const mocksPath = path.join(workspace.rootPath, '.mocks/mocks.ts');

    if (!fs.existsSync(mocksPath)) {
      throw new Error(`mocks文件不存在: ${mocksPath}`);
    }

    const { foundInterface } = await findInterface(textEditor, this.manager);

    const doc = await workspace.openTextDocument(Uri.file(mocksPath));

    if (!doc) return;

    const mocksCode = doc.getText();
    const codeIndex = mocksCode.indexOf(foundInterface.name + ':');

    if (codeIndex === -1) {
      throw new Error(`mocks文件不存在接口: ${foundInterface.name}`);
    }

    const lineNum = mocksCode.slice(0, codeIndex).split('\n').length;
    const lineIndex = mocksCode
      .split('\n')
      .slice(0, lineNum - 1)
      .join('\n').length;
    const ch = codeIndex - lineIndex + foundInterface.name.length;
    const pos = new Position(lineNum - 1, ch);

    window.showTextDocument(doc, { selection: new Selection(pos, pos) });
  }

  @command('pont.visitMocks', 'TextEditorCommand')
  async visitMocks(textEditor) {
    const manager = this.manager;
    const { foundInterface } = await findInterface(textEditor, manager);
    const { port, basePath } = manager.currConfig?.mocks || {};

    const url = `http://127.0.0.1:${port}${basePath}${foundInterface.path.replace(/\{.+?\}/g, 'paramInPath')}`;

    this.outputChannel.appendLine(`[open url]: ${url}`);

    execSync(`open ${url}`);
  }

  @command('pont.createManager')
  async createManager(configFilePath?: string) {
    try {
      const rootPath = workspace.rootPath;
      const configPath = configFilePath || this.configPath || '';
      Disposable.from(...managerCleanUps).dispose();

      const config = Config.createFromConfigPath(configPath);
      const errMsg = config.validate();

      if (errMsg) {
        throw new Error(errMsg);
      }

      const manager = new Manager(rootPath, config, path.dirname(configPath));
      manager.setReport((info) => this.outputChannel.appendLine(info));
      this.setManage(manager);

      await showProgress('初始化', async (report) => {
        report('进行中...');
        await manager.ready();
        report('完成');
      });
      manager.beginPolling();
      managerCleanUps.push({ dispose: manager.stopPolling });

      if (config.mocks && config.mocks.enable) {
        const closeServer = await MocksServer.getSingleInstance(manager).run();
        managerCleanUps.push({ dispose: closeServer });
      }
      manager.calDiffs();

      setContext('initManager', true);
      setContext('initError', false);
      getPontOriginsProvider().refresh(manager);
    } catch (e) {
      window.showErrorMessage('Pont初始化失败');
      setContext('initError', true);
      setContext('initManager', false);
      return Promise.reject(e);
    }
  }

  @command('pont.installPontEngine')
  async installPontEngine(params: { type: 'yarn' | 'npm' }) {
    const rootPath = workspace.rootPath;
    const useYarn = params?.type === 'yarn';
    const cmd = useYarn ? `yarn add -D pont-engine@${pontEngineVersion}` : `npm i -D pont-engine@${pontEngineVersion}`;
    try {
      child_process.execSync(cmd, { cwd: rootPath });
    } catch (error) {
      window.showErrorMessage(`请手动执行 ${cmd} 命令，安装pont-engine ${pontEngineVersion} 版本`);
    }
  }

  private createCommand(id: string, key: string, method: Function): (...args: any[]) => any {
    const result = (...args: any[]) => {
      let result: Promise<any>;

      result = Promise.resolve(method.apply(this, args));

      return result.catch(async (err) => {
        const options: MessageOptions = {
          modal: false
        };

        let message: string = err.message;
        let type: 'error' | 'warning' = 'error';

        if (!message) {
          console.error(err);
          return;
        }

        this.outputChannel.appendLine(`----------------------`);
        this.outputChannel.appendLine(`[${id}]:${message}`);
        this.outputChannel.show();
        if (type === 'error') {
          await window.showErrorMessage(`[${id}]:执行失败`, options);
        } else {
          await window.showWarningMessage(message, options);
        }
      });
    };

    // patch this object, so people can call methods directly
    (this as any)[key] = result;

    return result;
  }

  dispose(): void {
    this.disposables.forEach((d) => d.dispose());
  }
}
