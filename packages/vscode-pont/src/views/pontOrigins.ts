import * as vscode from 'vscode';
import * as path from 'path';
import { CONFIG_FILE, Manager, getFileName } from 'pont-engine';

class PontOriginsProvider implements vscode.TreeDataProvider<OriginTreeItem> {
  manager: Manager;

  modList: OriginTreeItem[] = [];

  boList: OriginTreeItem[] = [];

  constructor() {}

  getTreeItem(element: OriginTreeItem): vscode.TreeItem {
    if (!this.manager) return null;

    const currentManager = this.manager.getCurrentOriginManage();

    if (element.type == 'MOD') {
      const modDiffs = currentManager.getDiffs().modDiffs || [];
      return {
        ...element,
        label: `更新本地模块(${modDiffs.length})`,
        collapsibleState: vscode.TreeItemCollapsibleState.Expanded
      };
    }

    if (element.type == 'BO') {
      const boDiffs = currentManager.getDiffs().boDiffs || [];
      return {
        ...element,
        label: `更新本地基类(${boDiffs.length})`,
        collapsibleState: vscode.TreeItemCollapsibleState.Expanded
      };
    }

    return element;
  }

  getChildren(element?: OriginTreeItem): Thenable<any[]> {
    if (!this.manager) return null;

    const allConfigs = this.manager.getStandardConfigs();
    const currentManager = this.manager.getCurrentOriginManage();

    const { modDiffs, boDiffs } = currentManager.getDiffs() || { modDiffs: [], boDiffs: [] };
    const currConfig = currentManager.getConfig();

    if (!element && allConfigs.length > 0) {
      const { name, originUrl, templatePath, transformPath } = currConfig;
      const items: OriginTreeItem[] = [];

      if (allConfigs.length > 1) {
        const originItem = new OriginTreeItem(name, vscode.TreeItemCollapsibleState.None);
        originItem.description = originUrl;
        originItem.contextValue = 'origin';
        items.push(originItem);
      }

      if (currConfig.configDir) {
        items.push(new OriginTreeItemFile(path.join(currConfig.configDir, CONFIG_FILE)));
      }

      if (templatePath) {
        items.push(new OriginTreeItemFile(getFileName(templatePath, '.ts')));
      }

      if (transformPath) {
        items.push(new OriginTreeItemFile(getFileName(transformPath, '.ts')));
      }

      if (modDiffs.length) {
        const modTreeItem = new OriginTreeItem(
          `更新本地模块(${modDiffs.length})`,
          vscode.TreeItemCollapsibleState.Collapsed,
          'MOD'
        );
        modTreeItem.tooltip = originUrl;
        modTreeItem.contextValue = 'MODParent';
        items.push(modTreeItem);
      }

      if (boDiffs.length) {
        const boTreeItem = new OriginTreeItem(
          `更新本地基类(${boDiffs.length})`,
          vscode.TreeItemCollapsibleState.Collapsed,
          'BO'
        );
        boTreeItem.tooltip = originUrl;
        boTreeItem.contextValue = 'BOParent';
        items.push(boTreeItem);
      }

      return Promise.resolve(items);
    }

    if (element?.type === 'MOD') {
      let prevModItem: OriginTreeItem = null;
      const modList: OriginTreeItem[] = modDiffs.map((item) => {
        const modItem = new OriginTreeItem(item.name, vscode.TreeItemCollapsibleState.None);
        modItem.tooltip = `${item.details[0]}等 ${item.details.length} 条更新`;
        modItem.description = `${item.details[0]}等 ${item.details.length} 条更新`;
        modItem.contextValue = 'MOD';
        modItem.parent = element;
        modItem.prev = modItem;

        if (prevModItem) {
          prevModItem.next = modItem;
        }

        prevModItem = modItem;
        return modItem;
      });

      this.modList = modList;
      return Promise.resolve(modList);
    }

    if (element?.type === 'BO') {
      const boList: OriginTreeItem[] = boDiffs.map((item) => {
        const boItem = new OriginTreeItem(item.name, vscode.TreeItemCollapsibleState.None);
        boItem.tooltip = item.details.join(', ');
        boItem.description = item.details.join(', ');
        boItem.contextValue = 'BO';
        boItem.parent = element;
        return boItem;
      });

      this.boList = boList;
      return Promise.resolve(boList);
    }

    return Promise.resolve([]);
  }

  setManger(manager: Manager) {
    this.manager = manager;
  }

  private _onDidChangeTreeData: vscode.EventEmitter<OriginTreeItem> = new vscode.EventEmitter<OriginTreeItem>();
  readonly onDidChangeTreeData: vscode.Event<OriginTreeItem> = this._onDidChangeTreeData.event;

  triggerNodeChange(node?: OriginTreeItem) {
    // Since the root node won't actually refresh, force everything
    this._onDidChangeTreeData.fire(node != null ? node : undefined);
  }

  refresh(manager: Manager): void {
    this.manager = manager;
    this.triggerNodeChange();
  }

  refreshNode(manager: Manager, node: OriginTreeItem): void {
    this.manager = manager;
    this.triggerNodeChange(node);
  }

  getParent(element: OriginTreeItem) {
    return element.parent;
  }
}

export class OriginTreeItem extends vscode.TreeItem {
  parent: OriginTreeItem = null;
  prev: OriginTreeItem = null;
  next: OriginTreeItem = null;

  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly type?: 'MOD' | 'BO'
  ) {
    super(label, collapsibleState);
  }
}

class OriginTreeItemFile extends OriginTreeItem {
  constructor(filePath: string) {
    super(path.basename(filePath), vscode.TreeItemCollapsibleState.None);
    this.iconPath = vscode.ThemeIcon.File;
    this.resourceUri = vscode.Uri.parse(`_.${path.extname(filePath)}`);

    this.command = {
      title: '',
      command: 'vscode.open',
      arguments: [vscode.Uri.file(filePath)]
    };
  }
}

const pontOriginsProvider = new PontOriginsProvider();
let treeView: vscode.TreeView<OriginTreeItem>;

export function getPontOriginsTreeView() {
  return treeView;
}

export function getPontOriginsProvider() {
  return pontOriginsProvider;
}

export function activate() {
  treeView = vscode.window.createTreeView('pontOrigins', {
    treeDataProvider: pontOriginsProvider
  });
}
