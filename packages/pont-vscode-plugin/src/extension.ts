'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Manager, Config, lookForFiles } from 'pont-engine';
import * as path from 'path';
import { Control } from './ui';
import { syncNpm } from './utils';

export async function createManager(configPath: string) {
  try {
    await syncNpm();
    const config = Config.createFromConfigPath(configPath);
    const errMsg = config.validate();

    if (errMsg) {
      vscode.window.showErrorMessage(errMsg);
      return;
    }
    const manager = new Manager(config, path.dirname(configPath));

    Control.getSingleInstance(manager);
  } catch (e) {
    vscode.window.showErrorMessage(e.toString());
  }
}

export async function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "pont" is now active!');
  const configPath = await lookForFiles(vscode.workspace.rootPath, 'pont-config.json');
  const fileWatcher = vscode.workspace.createFileSystemWatcher('**/pont-config.json');

  if (configPath) {
    createManager(configPath);
  }

  fileWatcher.onDidCreate(uri => createManager(uri.fsPath));
  fileWatcher.onDidChange(uri => createManager(uri.fsPath));
}
