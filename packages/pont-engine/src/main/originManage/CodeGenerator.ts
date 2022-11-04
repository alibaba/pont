import type { ICodeGenerator } from '../../types/generate';
import { CodeGenerator as OldCodeGenerator } from '../../compatible/generators/generate';

export class CodeGenerator extends OldCodeGenerator implements ICodeGenerator {}
