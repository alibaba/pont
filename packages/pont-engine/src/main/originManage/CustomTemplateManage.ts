/**
 * 自定义模板管理器
 */

import type { IStandardConfig } from '../../types/pontConfig';
import type { Constructor } from '../../types';
import { getTemplate } from '../../utils/templateHelp';
import { CodeGenerator } from './CodeGenerator';
import { FilesManager } from './FilesManager';
import { FileStructures } from './FileStructures';
import { OriginReader } from './OriginReader';
import { getTemplateByTemplateType } from '../../compatible/templates';
import { Logger } from '../Logger';

export class CustomTemplateManage {
  filesManager: FilesManager;

  private originReader: OriginReader = new OriginReader();

  private CodeGenerator: Constructor<typeof CodeGenerator> = CodeGenerator;

  private FileStructures: Constructor<typeof FileStructures> = FileStructures;

  private FilesManager: Constructor<typeof FilesManager> = FilesManager;

  constructor(private config: IStandardConfig) {
    this.init();
  }

  private log(message: string, ...optionalParams: any[]) {
    Logger.log(`[CustomTemplate] ${message}`, ...optionalParams);
  }

  private init() {
    this.log('初始化模板');

    try {
      const customTemplate = this.getCustomTemplate();
      const fetchMethodTemplate = this.getFetchMethodTemplate();
      const transformFromTemplate = this.getTransformFromTemplate();
      const template = this.getGeneratorAndFileStructuresTemplate();

      const originReader = customTemplate?.OriginReader ? new customTemplate.OriginReader() : new OriginReader();

      this.CodeGenerator = customTemplate?.CodeGenerator || template.CodeGenerator;

      this.FileStructures = customTemplate?.FileStructures || template.FileStructures;

      this.FilesManager = customTemplate?.FilesManager || FilesManager;

      if (fetchMethodTemplate) {
        originReader.fetchMethod = fetchMethodTemplate.bind(originReader);
      }

      if (transformFromTemplate) {
        originReader.transformStandardDataSource = transformFromTemplate.bind(originReader);
      }

      this.originReader = originReader;

      this.log('初始化完成');
    } catch (error) {
      console.error('[CustomTemplate]', error);
    }
  }

  getOriginReader() {
    return this.originReader;
  }

  getCodeGenerator() {
    return this.CodeGenerator;
  }

  getFileStructures() {
    return this.FileStructures;
  }

  getFilesManager() {
    return this.FilesManager;
  }

  private getCustomTemplate(): {
    OriginReader: Constructor<typeof OriginReader>;
    CodeGenerator: Constructor<typeof CodeGenerator>;
    FileStructures: Constructor<typeof FileStructures>;
    FilesManager: Constructor<typeof FilesManager>;
  } {
    const { name, rootDir, customTemplatePath } = this.config;

    if (customTemplatePath) {
      const moduleResult = getTemplate(rootDir, {
        name,
        templateType: 'customTemplate',
        templatePath: customTemplatePath
      });

      return moduleResult;
    }

    return null;
  }

  /** 兼容 */
  private getFetchMethodTemplate(): OriginReader['fetchMethod'] {
    const { name, rootDir, fetchMethodPath } = this.config;

    if (fetchMethodPath) {
      const moduleResult = getTemplate(rootDir, {
        name,
        templateType: 'fetchMethod',
        templatePath: fetchMethodPath
      });

      if (moduleResult) {
        return moduleResult.default;
      }
    }

    return null;
  }

  /** 兼容 */
  private getTransformFromTemplate(): OriginReader['transformStandardDataSource'] {
    const { name, rootDir, transformPath } = this.config;

    if (transformPath) {
      const moduleResult = getTemplate(rootDir, {
        name,
        templateType: 'transform',
        templatePath: transformPath
      });

      if (moduleResult) {
        return moduleResult.default;
      }
    }

    return null;
  }

  /** 兼容 */
  private getGeneratorAndFileStructuresTemplate(): {
    CodeGenerator: Constructor<typeof CodeGenerator>;
    FileStructures: Constructor<typeof FileStructures>;
  } {
    const { name, rootDir, templatePath, templateType } = this.config;

    if (templatePath) {
      const moduleResult = getTemplate(rootDir, {
        name,
        templateType: 'template',
        templatePath,
        defaultCode: getTemplateByTemplateType(templateType)
      });

      if (moduleResult) {
        return {
          CodeGenerator: moduleResult.default || CodeGenerator,
          FileStructures: moduleResult.MyFileStructures || FileStructures
        };
      }
    }

    return null;
  }
}
