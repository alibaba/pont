/**
 * 自定义模板管理器
 */

import type { IStandardBaseConfig, IStandardOirginConfig } from '../../types/pontConfig';
import type { Constructor } from '../../types';
import { getTemplate } from '../../utils/templateHelp';
import { CodeGenerator } from './CodeGenerator';
import { FilesManager } from './FilesManager';
import { FileStructures } from './FileStructures';
import { OriginReader } from './OriginReader';
import { getTemplateByTemplateType } from '../../compatible/templates';
import { Logger } from '../Logger';

export type BaseTemplate = {
  OriginReader: typeof OriginReader;
  CodeGenerator: Constructor<typeof CodeGenerator>;
  FileStructures: Constructor<typeof FileStructures>;
  FilesManager: Constructor<typeof FilesManager>;
  fetchMethodTemplate: OriginReader['fetchMethod'];
  transformFromTemplate: OriginReader['transformStandardDataSource'];
};

export type OriginTemplate = {
  originReader: OriginReader;
  CodeGenerator: Constructor<typeof CodeGenerator>;
};

export class CustomTemplateManage {
  private static log(message: string, ...optionalParams: any[]) {
    Logger.log(`[CustomTemplate] ${message}`, ...optionalParams);
  }

  private static getCustomTemplate(config: IStandardOirginConfig): {
    OriginReader: Constructor<typeof OriginReader>;
    CodeGenerator: Constructor<typeof CodeGenerator>;
  } {
    const { name, rootDir, customTemplatePath, templateOriginalPath } = config;

    if (customTemplatePath) {
      const moduleResult = getTemplate(
        rootDir,
        {
          name,
          templateType: 'customTemplate',
          templatePath: customTemplatePath
        },
        templateOriginalPath.customTemplatePath
      );

      return moduleResult;
    }

    return null;
  }

  private static getCommonTemplate(config: IStandardBaseConfig): {
    OriginReader: Constructor<typeof OriginReader>;
    CodeGenerator: Constructor<typeof CodeGenerator>;
    FileStructures: Constructor<typeof FileStructures>;
    FilesManager: Constructor<typeof FilesManager>;
  } {
    const { rootDir, commonTemplatePath, templateOriginalPath } = config;

    if (commonTemplatePath) {
      const moduleResult = getTemplate(
        rootDir,
        {
          name: '',
          templateType: 'commonTemplate',
          templatePath: commonTemplatePath
        },
        templateOriginalPath.commonTemplatePath
      );

      return moduleResult;
    }

    return null;
  }

  /** 兼容 */
  private static getFetchMethodTemplate(config: IStandardBaseConfig): OriginReader['fetchMethod'] {
    const { rootDir, fetchMethodPath, templateOriginalPath } = config;

    if (fetchMethodPath) {
      const moduleResult = getTemplate(
        rootDir,
        {
          name: '',
          templateType: 'fetchMethod',
          templatePath: fetchMethodPath
        },
        templateOriginalPath.fetchMethodPath
      );

      if (moduleResult) {
        return moduleResult.default;
      }
    }

    return null;
  }

  /** 兼容 */
  private static getTransformFromTemplate(config: IStandardBaseConfig): OriginReader['transformStandardDataSource'] {
    const { rootDir, transformPath, templateOriginalPath } = config;

    if (transformPath) {
      const moduleResult = getTemplate(
        rootDir,
        {
          name: '',
          templateType: 'transform',
          templatePath: transformPath
        },
        templateOriginalPath.transformPath
      );

      if (moduleResult) {
        return moduleResult.default;
      }
    }

    return null;
  }

  /** 兼容 */
  private static getGeneratorAndFileStructuresTemplate(config: IStandardBaseConfig): {
    CodeGenerator: Constructor<typeof CodeGenerator>;
    FileStructures: Constructor<typeof FileStructures>;
  } {
    const { rootDir, templatePath, templateType, templateOriginalPath } = config;

    if (templatePath) {
      const moduleResult = getTemplate(
        rootDir,
        {
          name: '',
          templateType: 'template',
          templatePath,
          defaultCode: getTemplateByTemplateType(templateType)
        },
        templateOriginalPath.templatePath
      );

      if (moduleResult) {
        return {
          CodeGenerator: moduleResult.default || CodeGenerator,
          FileStructures: moduleResult.FileStructures || FileStructures
        };
      }
    }

    return null;
  }

  static getBaseTemplate(config: IStandardBaseConfig): BaseTemplate {
    CustomTemplateManage.log(`base 初始化模板`);

    try {
      const commonTemplate = CustomTemplateManage.getCommonTemplate(config);

      const fetchMethodTemplate = CustomTemplateManage.getFetchMethodTemplate(config);
      const transformFromTemplate = CustomTemplateManage.getTransformFromTemplate(config);
      const template = CustomTemplateManage.getGeneratorAndFileStructuresTemplate(config);

      CustomTemplateManage.log(`base 初始化模板完成`);

      return {
        OriginReader: commonTemplate?.OriginReader || OriginReader,
        CodeGenerator: commonTemplate?.CodeGenerator || template?.CodeGenerator || CodeGenerator,
        FileStructures: commonTemplate?.FileStructures || template?.FileStructures || FileStructures,
        FilesManager: commonTemplate?.FilesManager || FilesManager,
        fetchMethodTemplate,
        transformFromTemplate
      };
    } catch (error) {
      CustomTemplateManage.log('base 初始化模板错误', error);
    }

    return null;
  }

  static getOriginTemplate(
    config: IStandardOirginConfig,
    options: {
      OriginReader: Constructor<typeof OriginReader>;
      CodeGenerator: Constructor<typeof CodeGenerator>;
      fetchMethodTemplate: OriginReader['fetchMethod'];
      transformFromTemplate: OriginReader['transformStandardDataSource'];
    }
  ): OriginTemplate {
    CustomTemplateManage.log(`${config.name} 初始化模板`);

    try {
      const customTemplate = CustomTemplateManage.getCustomTemplate(config);

      const OriginReaderTemplate = customTemplate?.OriginReader || options?.OriginReader || OriginReader;
      const originReader = new OriginReaderTemplate();

      originReader.setConfig(config);

      if (options?.fetchMethodTemplate) {
        originReader.fetchMethod = options.fetchMethodTemplate.bind(originReader);
      }
      if (options?.transformFromTemplate) {
        originReader.transformStandardDataSource = options.transformFromTemplate.bind(originReader);
      }

      CustomTemplateManage.log(`${config.name} 初始化模板完成`);

      return {
        originReader,
        CodeGenerator: customTemplate?.CodeGenerator || options?.CodeGenerator || CodeGenerator
      };
    } catch (error) {
      CustomTemplateManage.log(`${config.name} 初始化模板错误`, error);
    }

    return null;
  }
}
