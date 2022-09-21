import { hasChinese } from '../compatible/utils';
import {
  StandardDataType as OldStandardDataType,
  Property as OldProperty,
  Interface as OldInterface,
  Mod as OldMod,
  BaseClass as OldBaseClass,
  StandardDataSource as OldStandardDataSource
} from '../compatible/standard';

export class StandardDataType extends OldStandardDataType {}

export class Property extends OldProperty {}

export class Interface extends OldInterface {}

export class Mod extends OldMod {}

export class BaseClass extends OldBaseClass {}

export class StandardDataSource extends OldStandardDataSource {
  /** 对解析后的标准数据源进行校验 */
  static checkDataSource(dataSource: StandardDataSource) {
    const { mods, baseClasses } = dataSource;

    const errorModNames = [] as string[];
    const errorBaseNames = [] as string[];

    mods.forEach((mod) => {
      if (hasChinese(mod.name)) {
        errorModNames.push(mod.name);
      }
    });

    baseClasses.forEach((base) => {
      if (hasChinese(base.name)) {
        errorBaseNames.push(base.name);
      }
    });

    if (errorBaseNames.length && errorModNames.length) {
      const errMsg = ['当前数据源有如下项不符合规范，需要后端修改'];
      errorModNames.forEach((modName) => errMsg.push(`模块名${modName}应该改为英文名！`));
      errorBaseNames.forEach((baseName) => errMsg.push(`基类名${baseName}应该改为英文名！`));

      return errMsg.join('\n');
    }
  }
}
