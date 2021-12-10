import * as fs from 'fs';
import * as path from 'path';
import * as debugLog from './debugLog';
import { lookForFiles, CONFIG_FILE, Config } from './utils';

/** 全量接口数组 */
let allRequests = [];
/** 未被使用的接口数组 */
let unusedRequests = [];
/** 自动生成的文件，无需扫描 */
const escapedFiles = ['api.d.ts', 'index.ts', 'baseClass.ts', 'api-lock.json', 'api.lock'];

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
export function main() {
  debugLog.info('service scanning...');
  const rootPath = process.cwd();
  lookForFiles(rootPath, CONFIG_FILE)
    .then((configPath) => {
      const config = Config.createFromConfigPath(configPath).getDataSourcesConfig(path.parse(configPath)?.dir)[0];
      readDirRecursively(config.outDir, (currentPath) => {
        const needEscape = escapedFiles.find((file) => currentPath.endsWith(file));
        if (!needEscape) {
          allRequests.push(currentPath);
          unusedRequests.push(currentPath);
        }
      });

      config.scannedRange.forEach((dir) => {
        readDirRecursively(dir, (currentPath) => {
          const fileContent = fs.readFileSync(currentPath).toString();
          const toBeRemovedRequests = [];
          unusedRequests.forEach((req) => {
            const searchedPart = path.parse(req)?.name;
            if (fileContent.indexOf(searchedPart) > 0) {
              toBeRemovedRequests.push(req);
            }
          });

          unusedRequests = unusedRequests.filter((req) => toBeRemovedRequests.indexOf(req) === -1);
        });
      });

      unusedRequests.forEach((file) => {
        const fileContent = fs.readFileSync(file).toString();
        if (!config.scannedPattern) {
          throw new Error(`Configuration item 'scannedPattern' is required`);
        }
        const pattern = fileContent.match(new RegExp(config.scannedPattern));
        try {
          fs.writeFileSync('./unusedRequests.js', pattern[2] + '\n', { flag: 'a' });
        } catch (err) {
          debugLog.error(`Exception file: ${file}`);
          debugLog.error(`pattern: ${pattern}`);
        }
      });

      debugLog.info(`unused case percentage: ${unusedRequests.length} / ${allRequests.length}`);
      debugLog.success('done');
    })
    .catch((e) => {
      debugLog.error(e.message);
    });
}
