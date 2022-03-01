'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Manager, Config, lookForFiles } from 'pont-engine';
import * as path from 'path';
import { showProgress, syncNpm } from './utils';
import { MocksServer } from './mocks';
import { CommandCenter } from './commands';
import { setContext } from './utils/setContext';
import { initViews } from './views';
import { getPontOriginsProvider } from './views/pontOrigins';

const managerCleanUps: vscode.Disposable[] = [];

export function doCleanUp() {
  vscode.Disposable.from(...managerCleanUps).dispose();
}

export async function createManager(
  configPath: string,
  commandCenter: CommandCenter,
  outputChannel: vscode.OutputChannel
) {
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
    setContext('isInit', true);
    setContext('initError', '');
  } catch (e) {
    outputChannel.appendLine(e.toString());
    outputChannel.show();
    vscode.window.showErrorMessage('Pont初始化失败');
    setContext('isInit', false);
    setContext('initError', 'Pont初始化失败');
  }
}

export async function activate(context: vscode.ExtensionContext) {
  console.log('extension "Pont" is now active!');

  const disposables: vscode.Disposable[] = [];
  context.subscriptions.push(new vscode.Disposable(() => vscode.Disposable.from(...disposables).dispose()));

  const outputChannel = vscode.window.createOutputChannel('Pont');
  const commandCenter = new CommandCenter(outputChannel);
  initViews();

  disposables.push(commandCenter);

  const configPath = await lookForFiles(vscode.workspace.rootPath, 'pont-config.json');
  const fileWatcher = vscode.workspace.createFileSystemWatcher('**/pont-config.json');

  try {
    await syncNpm();
  } catch (e) {
    outputChannel.appendLine(e.toString());
    outputChannel.show();
  }

  if (configPath) {
    createManager(configPath, commandCenter, outputChannel);
  }

  fileWatcher.onDidCreate((uri) => createManager(uri.fsPath, commandCenter, outputChannel));
  fileWatcher.onDidChange((uri) => createManager(uri.fsPath, commandCenter, outputChannel));

  disposables.push(fileWatcher);
}

export async function deactivate() {
  doCleanUp();
}
