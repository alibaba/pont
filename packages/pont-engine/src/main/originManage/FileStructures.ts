import type { IFileStructures } from '../../types/generate';
import type { CodeGenerator } from './CodeGenerator';

import { FileStructures as OldFileStructures } from '../../compatible/generators/generate';

export class FileStructures extends OldFileStructures implements IFileStructures {
  updateGenerators(generators: CodeGenerator[]) {
    this.generators = generators;
  }
}
