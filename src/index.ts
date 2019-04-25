export { Manager } from './manage';
export { BaseClass, Interface, Mod, PrimitiveType, Property, StandardDataSource, StandardDataType } from './standard';

export {
  Config,
  DataSourceConfig,
  createManager,
  format,
  getDuplicateById,
  getIdentifierFromOperatorId,
  getIdentifierFromUrl,
  getMaxSamePath,
  getTemplate,
  hasChinese,
  lookForFiles,
  toDashCase,
  toDashDefaultCase,
  toUpperFirstLetter,
  transformCamelCase,
  transformDescription,
  transformModsName
} from './utils';
export { CodeGenerator, FileStructures, FilesManager } from './generators/generate';
export { diff, Model, removeCtx } from './diff';
export { PontDictManager } from './LocalDictManager';
