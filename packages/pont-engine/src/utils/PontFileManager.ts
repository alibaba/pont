/**
 * @description 文件处理相关
 */

import * as fs from 'fs-extra';
import * as path from 'path';

import { LOCAL_DICT_DIR } from '../constants';

export class PontFileManager {
  static getFilePath(rootDir: string, filename: string): string {
    return path.join(rootDir, LOCAL_DICT_DIR, filename);
  }

  static loadJson<T>(filePath: string): T {
    if (fs.existsSync(filePath)) {
      const obj = fs.readJsonSync(filePath, { throws: false });

      return obj;
    }

    return null;
  }

  static writeJson<T>(filePath: string, obj: T) {
    fs.ensureFileSync(filePath);

    try {
      const content = JSON.stringify(obj, null, 2);
      return fs.writeFileSync(filePath, content);
    } catch (error) {
      console.error(error);
    }
  }

  static loadFile(filePath: string) {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
      return fileContent;
    }

    return null;
  }

  static saveFile(filePath: string, content: string) {
    fs.ensureFileSync(filePath);

    return fs.writeFileSync(filePath, content);
  }

  static appendFile(filePath: string, content: string) {
    if (fs.existsSync(filePath)) {
      return fs.appendFile(filePath, content);
    }
  }

  static removeFile(filePath: string) {
    if (fs.existsSync(filePath)) {
      return fs.remove(filePath);
    }
  }
}
