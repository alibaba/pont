'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { lookForFiles } from 'pont-engine';
import { syncNpm, verifyPontEngineVersion } from './utils';
import { CommandCenter } from './commands';
import { setContext } from './utils/setContext';
import { initViews } from './views';

const managerCleanUps: vscode.Disposable[] = [];

function doCleanUp() {
  vscode.Disposable.from(...managerCleanUps).dispose();
}

export async function activate(context: vscode.ExtensionContext) {
  console.log('extension "Pont" is now active!');

  setContext('versionError', false);
  setContext('noConfigFile', false);

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

  await syncNpm();

  const versionError = !verifyPontEngineVersion();
  const noConfigFile = !configPath;
  // 没有安装 pont-engine 或 版本不一致。安装当前vscode插件对应版本的pont-engine
  setContext('versionError', versionError);

  setContext('noConfigFile', noConfigFile);

  if (!noConfigFile && !versionError) {
    commandCenter.createManager();
  }

  disposables.push(fileWatcher);

  setContext('isInit', true);
}

export async function deactivate() {
  doCleanUp();
}
