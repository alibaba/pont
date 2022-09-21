/** compatible */

export { createManager } from './compatible/Manager';

export {
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
  transformModsName,
  getFileName
} from './compatible/utils';
export { diff, Model, removeCtx } from './compatible/diff';
export {
  BaseClass,
  Interface,
  Mod,
  PrimitiveType,
  Property,
  StandardDataSource,
  StandardDataType
} from './compatible/standard';
export { CodeGenerator, FileStructures, FilesManager } from './compatible/generators/generate';

/** deprecated */

export { PontDictManager } from './deprecated/LocalDictManager';

/** new */

export { CONFIG_FILE } from './constants';

export { Manager } from './main/Manager';

export { DataSourceConfig } from './main/Config';
export { Surrounding } from './types/pontConfig';

export { getTemplate } from './utils/templateHelp';
export { Config } from './main/Config';
