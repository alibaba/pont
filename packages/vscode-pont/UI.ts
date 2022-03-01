import { Manager, Interface, Mod } from 'pont-engine';
import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as path from 'path';
import { showProgress } from './utils';

export class Control {
  private static singleInstance: Control;

  public async initInstance() {

    return showProgress('ready', this.manager, async () => {
      try {
        await this.manager.ready();
      } catch (e) {
        vscode.window.showErrorMessage(e.toString());
      }
      this.manager.calDiffs();

      this.ui.reRender();
    });
  }

  public static getSingleInstance(manager: Manager) {
    if (!Control.singleInstance) {
      Control.singleInstance = new Control(manager);
    } else if (manager) {
      const instance = Control.singleInstance;

      instance.manager = manager;
    }

    return Control.singleInstance;
  }

  manager: Manager;
  dispose: Function;

  watchLocalFile() {
    const config = this.manager.currConfig;
    const lockWatcher = vscode.workspace.createFileSystemWatcher(
      path.join(config.outDir, this.manager.lockFilename),
      true,
      false,
      true
    );
    let lockDispose = lockWatcher.onDidChange(async () => {
      await this.manager.readLocalDataSource();
      this.manager.calDiffs();
      this.ui.reRender();
    });

    this.dispose = () => {
      lockDispose.dispose();
    };
  }

  constructor(manager: Manager) {
    this.manager = manager;
    this.watchLocalFile();
  }

  get isMultiple() {
    return this.manager.allConfigs.length > 1;
  }

  updateMod() {
    const modDiffs = this.manager.diffs.modDiffs;
    const items = modDiffs.map((item) => {
      return {
        label: item.name,
        description: `${item.details[0]}等 ${item.details.length} 条更新`
      } as vscode.QuickPickItem;
    });
    const oldFiles = this.manager.getGeneratedFiles();

    vscode.window.showQuickPick(items).then(
      (thenItems) => {
        if (!thenItems) {
          return;
        }

        const modName = thenItems.label;

        vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Window,
            title: 'updateMod'
          },
          (p) => {
            return new Promise(async (resolve, reject) => {
              try {
                p.report({ message: '开始更新...' });

                this.manager.makeSameMod(modName);
                await this.manager.lock();

                this.manager.calDiffs();
                this.ui.reRender();
                await this.manager.update(oldFiles);

                p.report({ message: '更新成功！' });
                vscode.window.showInformationMessage(modName + '更新成功!');
                resolve();
              } catch (e) {
                reject(e);
              }
            });
          }
        );
      },
      (e) => {}
    );
  }

  updateBo() {
    const boDiffs = this.manager.diffs.boDiffs;
    const oldFiles = this.manager.getGeneratedFiles();

    const items = boDiffs.map((item) => {
      return {
        label: item.name,
        description: item.details.join(', ')
      } as vscode.QuickPickItem;
    });

    vscode.window.showQuickPick(items).then(
      (item) => {
        if (!item) {
          return;
        }

        let boName = item.label;

        vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: 'updateBo'
          },
          (p) => {
            return new Promise(async (resolve, reject) => {
              try {
                p.report({ message: '开始更新...' });

                this.manager.makeSameBase(boName);
                await this.manager.lock();

                this.manager.calDiffs();
                this.ui.reRender();
                await this.manager.update(oldFiles);

                p.report({ message: '更新成功！' });
                vscode.window.showInformationMessage(boName + '更新成功!');
                resolve();
              } catch (e) {
                reject(e);
              }
            });
          }
        );
      },
      (e) => {}
    );
  }

}
