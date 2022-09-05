export { CONFIG_FILE } from './constants';

export { Manager } from './main/Manager';

export { DataSourceConfig } from './main/Config';
export { Surrounding } from './types/pontConfig';

export { getTemplate } from './utils/templateHelp';
export { Config } from './main/Config';

export { BaseClass, Interface, Mod, PrimitiveType, Property, StandardDataSource, StandardDataType } from './standard';

export {
  createManager,
  format,
  getDuplicateById,
  getIdentifierFromOperatorId,
  getIdentifierFromUrl,
  getMaxSamePath,
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
