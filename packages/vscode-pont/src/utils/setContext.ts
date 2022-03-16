/**
 * 添加自定义 when 子句上下文
 * https://code.visualstudio.com/api/references/when-clause-contexts#add-a-custom-when-clause-context
 */

import { commands } from 'vscode';

const namespace = 'pontContext';

interface PontContext {
  /** 版本不一致 */
  versionError: boolean;
  /** 不存在配置文件 */
  noConfigFile: boolean;
  /** pont是否初始化完成 */
  isInit: boolean;
  /** pont-manager是否初始化完成 */
  initManager: boolean;
  /** pont是否初始化失败 */
  initError: boolean;
}

export function setContext<K extends keyof PontContext>(key: K, value: PontContext[K]) {
  return commands.executeCommand('setContext', `${namespace}.${key}`, value);
}
