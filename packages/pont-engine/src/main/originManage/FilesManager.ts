import * as _ from 'lodash';

import { FilesManager as OldFilesManager } from '../../compatible/generators/generate';
import { Logger } from '../Logger';

export class FilesManager extends OldFilesManager {
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
  getGeneratedFiles() {
    const files = this.fileStructures.getFileStructures();
    try {
      return this.dispatch(files);
    } catch (err) {
      Logger.error(err)
      return {};
    }
  }

  async generateCode(oldFiles = {}) {
    const files = this.getGeneratedFiles();
    await this.regenerate(files, oldFiles);
  }
}
