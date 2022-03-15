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

export async function activate(context: vscode.ExtensionContext) {
  console.log('extension "Pont" is now active!');

  setContext('versionError', true);
  setContext('noConfigFile', true);

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

  // 没有安装 pont-engine 或 版本不一致。安装当前vscode插件对应版本的pont-engine
  setContext('versionError', verifyPontEngineVersion());

  setContext('noConfigFile', !!configPath);

  if (configPath) {
    commandCenter.createManager();
  }

  disposables.push(fileWatcher);

  setContext('isInit', true);
}

export async function deactivate() {
  doCleanUp();
}
