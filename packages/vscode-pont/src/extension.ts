'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Manager, Config, lookForFiles } from 'pont-engine';
import * as path from 'path';
import { showProgress, verifyPontEngineVersion } from './utils';
import { MocksServer } from './mocks';
import { CommandCenter } from './commands';
import { setContext } from './utils/setContext';
import { initViews } from './views';
import { getPontOriginsProvider } from './views/pontOrigins';

const managerCleanUps: vscode.Disposable[] = [];

function doCleanUp() {
  vscode.Disposable.from(...managerCleanUps).dispose();
}

async function createManager(configPath: string, commandCenter: CommandCenter, outputChannel: vscode.OutputChannel) {
  doCleanUp();

  try {
    const config = Config.createFromConfigPath(configPath);
    const errMsg = config.validate();

    if (errMsg) {
      throw new Error(errMsg);
    }

    const manager = new Manager(vscode.workspace.rootPath, config, path.dirname(configPath));
    manager.setReport((info) => outputChannel.appendLine(info));
    commandCenter.setManage(manager);
    getPontOriginsProvider().refresh(manager);

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
    // setContext('isInit', true);
    setContext('initError', '');
  } catch (e) {
    outputChannel.appendLine(e.toString());
    outputChannel.show();
    vscode.window.showErrorMessage('Pont初始化失败');
    // setContext('isInit', false);
    setContext('initError', 'Pont初始化失败');
  }
}

export async function activate(context: vscode.ExtensionContext) {
  console.log('extension "Pont" is now active!');

  const disposables: vscode.Disposable[] = [];
  context.subscriptions.push(new vscode.Disposable(() => vscode.Disposable.from(...disposables).dispose()));

  const outputChannel = vscode.window.createOutputChannel('Pont');
  const commandCenter = new CommandCenter(outputChannel);
  disposables.push(commandCenter);

  const fileWatcher = vscode.workspace.createFileSystemWatcher('**/pont-config.json');
  fileWatcher.onDidCreate((uri) => commandCenter.createManager(uri.fsPath));
  fileWatcher.onDidChange((uri) => commandCenter.createManager(uri.fsPath));

  initViews();

  const configPath = await lookForFiles(vscode.workspace.rootPath, 'pont-config.json');

  commandCenter.setConfigPath(configPath);

  if (verifyPontEngineVersion()) {
    // 没有安装 pont-engine 或 版本不一致。安装当前vscode插件对应版本的pont-engine
    setContext('versionError', true);
  }

  if (configPath) {
    commandCenter.createManager();
    setContext('noConfigFile', true);
  }

  disposables.push(fileWatcher);
}

export async function deactivate() {
  doCleanUp();
}
