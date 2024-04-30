// @ts-nocheck
import * as Pont from '../../src';
import { CodeGenerator, Interface, Surrounding } from '../../src';
import * as fs from 'fs-extra';
import { getTemplatesDirFile } from '../../src/compatible/utils';

export class FileStructures extends Pont.FileStructures {
  getFileStructures() {
    const result =
      this.usingMultipleOrigins || this.generators.length > 1
        ? this.getMultipleOriginsFileStructures()
        : this.getOriginFileStructures(this.generators[0]);

    // js环境时，默认为新用户，生成pontCore文件
    if (this.surrounding === Surrounding.javaScript) {
      if (!fs.existsSync(this.baseDir + '/pontCore.js')) {
        result['pontCore.js'] = getTemplatesDirFile('pontCore.js', 'pontCore/');
        result['pontCore.d.ts'] = getTemplatesDirFile('pontCore.d.ts', 'pontCore/');
      }

      if (this.templateType && this.checkHasTemplateFetch()) {
        result[`${this.templateType}.js`] = getTemplatesDirFile(`${this.templateType}.js`, 'pontCore/');
        result[`${this.templateType}.d.ts`] = getTemplatesDirFile(`${this.templateType}.d.ts`, 'pontCore/');
      }
    }

    return result;
  }
}

export default class MyGenerator extends CodeGenerator {}
