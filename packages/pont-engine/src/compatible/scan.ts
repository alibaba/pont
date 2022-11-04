import * as fs from 'fs';
import * as path from 'path';
import * as debugLog from './debugLog';
import type { Manager } from './Manager';
import type { Interface } from './standard';

/** 内部方法，递归扫描文件夹 */
function readDirRecursively(dirPath, callback) {
  fs.readdirSync(dirPath).forEach((subPath) => {
    const currentPath = dirPath + '/' + subPath;
    const stat = fs.lstatSync(currentPath);
    if (stat.isDirectory()) {
      readDirRecursively(currentPath, callback);
    } else {
      callback(currentPath);
    }
  });
}

/** 入口方法 */
export function main(manager: Manager) {
  debugLog.info('service scanning...');
  const rootPath = process.cwd();
  const {
    currConfig,
    allLocalDataSources,
    fileManager: {
      fileStructures: { getApiUseCases }
    }
  } = manager;

  /** 全量接口数组 */
  const allRequests = new Set<Interface>(
    allLocalDataSources
      .map((ds) => ds.mods)
      .reduce((acc, cur) => [...acc, ...cur], [])
      .map((mod) => mod.interfaces)
      .reduce((acc, cur) => [...acc, ...cur], [])
  );

  /** 未被使用的接口数组 */
  const unusedRequests = new Set<Interface>(allRequests);

  /** 输出文件名 */
  const outputFileName = './unusedRequests.json';

  currConfig.scannedRange.forEach((dir) => {
    readDirRecursively(dir, (currentPath) => {
      const fileContent = fs.readFileSync(currentPath).toString();
      unusedRequests.forEach((inter: Interface) => {
        const useCases = getApiUseCases(inter);
        if (useCases.some((useCase) => fileContent.includes(useCase))) {
          unusedRequests.delete(inter);
        }
      });
    });
  });

  fs.writeFileSync(
    outputFileName,
    JSON.stringify(
      [...unusedRequests].map(({ method, path, description }) => ({ method, path, description })),
      null,
      2
    )
  );

  debugLog.info(`unused case percentage: ${unusedRequests.size} / ${allRequests.size}`);
  debugLog.success(`done!\nunused file is outputted to ${path.resolve(rootPath, outputFileName)}`);
}
