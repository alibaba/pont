import type { IFileStructures } from '../../types/generate';
import { FileStructures as OldFileStructures } from '../../compatible/generators/generate';

export class FileStructures extends OldFileStructures implements IFileStructures {}
