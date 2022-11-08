import * as vscode from 'vscode';
import { Manager, Interface } from 'pont-engine';
import * as path from 'path';
import * as fs from 'fs';
const packageJson = require('../../package.json');

export const pontEngineVersion = packageJson.dependencies['pont-engine'] as string;

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

export function verifyPontEngineVersion() {
  const rootPath = vscode.workspace.rootPath;
  const projectVersionPath = path.join(rootPath, 'node_modules/pont-engine/package.json');
  const hasProjectVersion = fs.existsSync(projectVersionPath);

  if (hasProjectVersion) {
    const projectVersion = require(projectVersionPath).version;
    return projectVersion === pontEngineVersion;
  }

  return false;
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
  const allConfigs = manager.getStandardOirginConfigs();
  const hasName = allConfigs.map((config) => config.name).includes(wordsWithOrigin[0]);
  const allLocalDataSources = await Promise.all(manager.getOriginManages().map((item) => item.getDataSource()));
  const currLocalDataSource = await manager.getCurrentOriginManage().getDataSource();

  if (hasName) {
    const dsName = wordsWithOrigin[0];
    const foundDs = allLocalDataSources.find((ds) => ds.name === dsName);

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
    const foundMod = currLocalDataSource.mods.find((mod) => mod.name === justWords[0]);

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
