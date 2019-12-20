import * as vscode from 'vscode';
import { Manager } from 'pont-engine';
import * as path from 'path';
import * as child_process from 'child_process';
import * as fs from 'fs';

export function wait(ttl = 500) {
  return new Promise(resolve => {
    setTimeout(resolve, ttl);
  });
}

export function showProgress(title: string, manager: Manager, task: (report?: (info: string) => any) => Thenable<any>) {
  return vscode.window.withProgress(
    {
      title,
      location: vscode.ProgressLocation.Notification
    },
    async p => {
      try {
        manager.setReport(info => {
          p.report({
            message: info
          });
        });

        await task(info => p.report({ message: info }));
      } catch (e) {
        vscode.window.showErrorMessage(e.toString());
      }
    }
  );
}

export async function syncNpm() {
  try {
    const currVersion = require(path.join(__dirname, '../node_modules/pont-engine/package.json')).version;
    const projectVersionPath = path.join(vscode.workspace.rootPath, 'node_modules/pont-engine/package.json');
    const yarnPath = path.join(vscode.workspace.rootPath, 'yarn.lock');

    const hasProjectVersion = fs.existsSync(projectVersionPath);
    const useYarn = fs.existsSync(yarnPath);

    const cmd = useYarn ? 'yarn add -D pont-engine@' + currVersion : 'npm i -D pont-engine@' + currVersion;

    if (!hasProjectVersion) {
      console.log(cmd);
      child_process.execSync(cmd, {
        cwd: vscode.workspace.rootPath
      });
    } else {
      const projectVersion = require(projectVersionPath).version;

      if (projectVersion !== currVersion) {
        console.log(cmd);
        child_process.execSync(cmd, {
          cwd: vscode.workspace.rootPath
        });
      }
    }
  } catch (e) {
    vscode.window.showErrorMessage('npm 同步错误' + e.toString());
  }
}
