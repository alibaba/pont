import { window, StatusBarAlignment, StatusBarItem } from 'vscode';
import { commandMap } from '../commands';

export function createShowPontBarStatusBar() {
  let statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);

  statusBarItem.text = 'Pont';
  statusBarItem.color = 'yellow';
  statusBarItem.tooltip = '打开pont侧边栏';
  statusBarItem.command = commandMap.showPontBar;

  statusBarItem.show();
}
