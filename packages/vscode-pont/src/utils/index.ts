import * as vscode from 'vscode';
import { Manager, Interface } from 'pont-engine';
import * as path from 'path';
import * as child_process from 'child_process';
import * as fs from 'fs';

export function wait(ttl = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ttl);
  });
}

export async function showProgress(
  title: string,
  task: (report?: (info: string) => any) => Thenable<any>,
  location: vscode.ProgressLocation = vscode.ProgressLocation.Window
) {
  return vscode.window.withProgress(
    {
      title: `Pont${title}`,
      location: location
    },
    async (p) => {
      await task((info) => p.report({ message: info }));
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
    throw new Error('npm 同步错误' + e.toString());
  }
}

export async function findInterface(editor: vscode.TextEditor, manager: Manager) {
  const pos = editor.selection.start;
  const codeAtLine = editor.document.getText().split('\n')[pos.line];

  if (!codeAtLine) {
    return Promise.reject(new Error(`<findInterface>:找不到接口 ${codeAtLine}`));
  }

  const words = codeAtLine.split('.');

  if (words.length < 2) {
    return Promise.reject(new Error(`<findInterface>:找不到接口 ${words}`));
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

  if (manager.allConfigs.map((config) => config.name).includes(wordsWithOrigin[0])) {
    const dsName = wordsWithOrigin[0];
    const foundDs = manager.allLocalDataSources.find((ds) => ds.name === dsName);

    if (foundDs) {
      const foundMod = foundDs.mods.find((mod) => mod.name === wordsWithOrigin[1]);

      if (foundMod) {
        const foundInter = foundMod.interfaces.find((inter) => inter.name === wordsWithOrigin[2]);

        if (foundInter) {
          matchedWords.push(dsName, foundMod.name, foundInter.name);
          foundInterface = foundInter;
        }
      }
    }
  }

  // 没有数据源名的情况
  if (!matchedWords.length) {
    const foundMod = manager.currLocalDataSource.mods.find((mod) => mod.name === justWords[0]);

    if (foundMod) {
      const foundInter = foundMod.interfaces.find((inter) => inter.name === justWords[1]);

      if (foundInter) {
        matchedWords.push(foundMod.name, foundInter.name);
        foundInterface = foundInter;
      }
    }
  }

  if (!matchedWords.length) {
    return Promise.reject(new Error(`<findInterface>:找不到接口 ${matchedWords}`));
  }

  return { foundInterface };
}
