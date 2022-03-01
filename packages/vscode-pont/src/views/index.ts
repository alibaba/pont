import { activate } from './pontOrigins';
import { createShowPontBarStatusBar } from './statusBar';

export function initViews() {
  activate();
  createShowPontBarStatusBar();
}
