import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';

class LocalDictManager {
  static singleInstance = null as LocalDictManager;

  static getSingleInstance() {
    if (!LocalDictManager.singleInstance) {
      LocalDictManager.singleInstance = new LocalDictManager();
      return LocalDictManager.singleInstance;
    }

    return LocalDictManager.singleInstance;
  }

  private localDictDir = os.homedir() + '/.pont';

  constructor() {
    if (!fs.pathExistsSync(this.localDictDir)) {
      fs.mkdirpSync(this.localDictDir);
    }
  }

  isFileExists(filename: string) {
    const filePath = path.join(this.localDictDir, filename);

    return fs.existsSync(filePath);
  }

  removeFile(filename: string) {
    const filePath = path.join(this.localDictDir, filename);

    if (fs.existsSync(filePath)) {
      return fs.remove(filePath);
    }
  }

  loadJsonFileIfExistsSync(filename: string) {
    const fileContent = this.loadJsonFileIfExistsSync(filename);

    if (fileContent) {
      return JSON.parse(fileContent);
    }

    return false;
  }

  loadFileIfExistsSync(filename: string) {
    const filePath = path.join(this.localDictDir, filename);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, {
        encoding: 'utf8'
      });

      return fileContent;
    }

    return false;
  }

  async loadFileIfExists(filename: string) {
    const filePath = path.join(this.localDictDir, filename);

    if (fs.existsSync(filePath)) {
      const fileContent = await fs.readFile(filePath, {
        encoding: 'utf8'
      });

      return fileContent;
    }

    return false;
  }

  async saveFile(filename: string, content: string) {
    const filePath = path.join(this.localDictDir, filename);
    const dirname = path.dirname(filename);

    if (!fs.pathExistsSync(dirname)) {
      fs.mkdirpSync(dirname);
    }

    return fs.writeFile(filePath, content);
  }

  saveFileSync(filename: string, content: string) {
    const filePath = path.join(this.localDictDir, filename);
    const dirname = path.dirname(filename);

    if (!fs.pathExistsSync(dirname)) {
      fs.mkdirpSync(dirname);
    }

    return fs.writeFileSync(filePath, content);
  }

  async appendFileSync(filename: string, content: string) {
    const filePath = path.join(this.localDictDir, filename);
    if (fs.existsSync(filePath)) {
      return fs.appendFile(filePath, content);
    }
  }

  getFilePath(filename: string) {
    return path.join(this.localDictDir, filename);
  }
}

const PontDictManager = LocalDictManager.getSingleInstance();

export { PontDictManager };
