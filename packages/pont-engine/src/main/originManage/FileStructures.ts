import type { IFileStructures } from '../../types/generate';
import type { CodeGenerator } from '../../compatible/generators/generate';
import { FileStructures as OldFileStructures } from '../../compatible/generators/generate';
import * as _ from 'lodash';

export class FileStructures extends OldFileStructures implements IFileStructures {
  getMultipleOriginsFileStructures() {
    const fileStructures = super.getMultipleOriginsFileStructures();

    return _.omit(fileStructures, 'api-lock.json');
  }

  getOriginFileStructures(generator: CodeGenerator, usingMultipleOrigins?: boolean) {
    const fileStructures = super.getOriginFileStructures(generator, usingMultipleOrigins);

    return _.omit(fileStructures, 'api-lock.json') as any;
  }
}
