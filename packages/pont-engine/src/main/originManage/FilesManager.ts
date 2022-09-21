import { FilesManager as OldFilesManager } from '../../compatible/generators/generate';

export class FilesManager extends OldFilesManager {
  prevFiles: any;

  private dispatch(files: {}) {
    return Object.values(files).map((value: Function | {}) => {
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
    this.prevFiles = files || this.getGeneratedFiles();
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
    this.prevFiles = files;
    await this.regenerate(files, update ? this.prevFiles : null);
  }
}
