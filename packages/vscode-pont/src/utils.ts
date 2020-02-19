import * as vscode from 'vscode';
import { Manager, Interface } from 'pont-engine';
import * as path from 'path';
import * as child_process from 'child_process';
import * as fs from 'fs';
import { execSync } from 'child_process';

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

export function findInterface(editor: vscode.TextEditor, manager: Manager) {
  const pos = editor.selection.start;
  const codeAtLine = editor.document.getText().split('\n')[pos.line];

  if (!codeAtLine) {
    vscode.window.showErrorMessage('找不到接口');
    return;
  }

  const words = codeAtLine.split('.');

  if (words.length < 2) {
    vscode.window.showErrorMessage('找不到接口');
    return;
  }

  let wordIndex = 0;
  let chPos = 0;

  for (let index = 0; index < words.length; ++index) {
    const word = words[index];

    if (chPos + word.length > pos.character) {
      wordIndex = index;

      break;
    }

    chPos += word.length;
    // add . length
    chPos++;
  }

  if (wordIndex === 0) {
    return;
  }

  const wordsWithOrigin = [words[wordIndex - 2], words[wordIndex - 1], words[wordIndex]];
  const justWords = [words[wordIndex - 1], words[wordIndex]];
  const matchedWords = [];
  let foundInterface = null as Interface;

  if (manager.allConfigs.map(config => config.name).includes(wordsWithOrigin[0])) {
    const dsName = wordsWithOrigin[0];
    const foundDs = manager.allLocalDataSources.find(ds => ds.name === dsName);

    if (foundDs) {
      const foundMod = foundDs.mods.find(mod => mod.name === wordsWithOrigin[1]);

      if (foundMod) {
        const foundInter = foundMod.interfaces.find(inter => inter.name === wordsWithOrigin[2]);

        if (foundInter) {
          matchedWords.push(dsName, foundMod.name, foundInter.name);
          foundInterface = foundInter;
        }
      }
    }
  }

  // 没有数据源名的情况
  if (!matchedWords.length) {
    const foundMod = manager.currLocalDataSource.mods.find(mod => mod.name === justWords[0]);

    if (foundMod) {
      const foundInter = foundMod.interfaces.find(inter => inter.name === justWords[1]);

      if (foundInter) {
        matchedWords.push(foundMod.name, foundInter.name);
        foundInterface = foundInter;
      }
    }
  }

  if (!matchedWords.length) {
    vscode.window.showErrorMessage('未找到该接口！');
    return;
  }

  return { foundInterface };
}

export function createMenuCommand(manager: Manager) {
  vscode.commands.registerTextEditorCommand('pont.jumpToMocks', (editor, edit) => {
    const mocksPath = path.join(vscode.workspace.rootPath, '.mocks/mocks.ts');

    if (!fs.existsSync(mocksPath)) {
      vscode.window.showErrorMessage('mocks文件不存在！');
      return;
    }

    const { foundInterface } = findInterface(editor, manager);

    vscode.workspace.openTextDocument(vscode.Uri.file(mocksPath)).then(doc => {
      const mocksCode = doc.getText();
      const codeIndex = mocksCode.indexOf(foundInterface.name + ':');

      if (codeIndex === -1) {
        vscode.window.showErrorMessage('Mocks文件不存在该接口！');
        return;
      }

      const lineNum = mocksCode.slice(0, codeIndex).split('\n').length;
      const lineIndex = mocksCode
        .split('\n')
        .slice(0, lineNum - 1)
        .join('\n').length;
      const ch = codeIndex - lineIndex + foundInterface.name.length;
      const pos = new vscode.Position(lineNum - 1, ch);

      vscode.window
        .showTextDocument(doc, {
          selection: new vscode.Selection(pos, pos)
        })
        .then(editor => {});
    });
  });

  vscode.commands.registerTextEditorCommand('pont.visitMocks', (editor, edit) => {
    const { foundInterface } = findInterface(editor, manager);

    execSync(
      `open http://127.0.0.1:${manager.currConfig.mocks.port}${
        manager.currConfig.mocks.basePath
      }${foundInterface.path.replace(/\{.+?\}/g, 'paramInPath')}`
    );
  });
}
