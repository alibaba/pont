import { FilesManager as OldFilesManager } from '../../compatible/generators/generate';
import * as _ from 'lodash';

export class FilesManager extends OldFilesManager {
  prevFiles: any;

  private dispatch(files: {}) {
    return _.mapValues(files, (value: Function | {}) => {
      if (typeof value === 'function') {
        return value();
      }

      if (typeof value === 'object') {
        return this.dispatch(value);
      }

      return value;
    });
  }

  initPrevFiles(files: any) {
    this.prevFiles = files;
  }

  private getGeneratedFiles() {
    const files = this.fileStructures.getFileStructures();
    try {
      return this.dispatch(files);
    } catch (err) {
      return {};
    }
  }

  async generateCode(update = false) {
    const files = this.getGeneratedFiles();
    await this.regenerate(files, update ? this.prevFiles : null);
    this.prevFiles = files;
  }
}
