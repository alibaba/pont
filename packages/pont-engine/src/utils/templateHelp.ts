/**
 * @description 编译自定义模板文件
 */

import * as ts from 'typescript';
import * as path from 'path';
import { existsSync, writeFileSync } from 'fs-extra';
import { LOCAL_DICT_DIR } from '../constants';
import { Logger } from '../main/Logger';

interface TemplateInfo {
  name: string;
  templateType: 'commonTemplate' | 'customTemplate' | 'template' | 'transform' | 'fetchMethod';
  templatePath: string;
  defaultCode?: string;
}

export function getTemplate<T = any>(rootPath: string, templateInfo: TemplateInfo, originalPath?: string): T {
  const templateFileName = `${templateInfo.templatePath}.ts`;
  const nodeModulesPath = `${rootPath}/node_modules/${originalPath}`;

  try {
    if (originalPath && existsSync(nodeModulesPath)) {
      Logger.log(`[getTemplate ${templateInfo.templateType}] ${nodeModulesPath}`);
      delete require.cache[require.resolve(nodeModulesPath)];
      return require(nodeModulesPath);
    }

    if (!existsSync(templateFileName)) {
      if (!templateInfo.defaultCode) return null;
      writeFileSync(templateFileName, templateInfo.defaultCode);
    }

    /** 配置文件相对于rootPath的文件夹路径 */
    const relativeDir = path.parse(path.relative(rootPath, templateInfo.templatePath)).dir;

    const outDir = path.resolve(
      rootPath,
      `${LOCAL_DICT_DIR}/${relativeDir ? `${relativeDir}/` : ''}${templateInfo.templateType}/${
        templateInfo.name || 'default'
      }`
    );

    const outFile = `${outDir}${templateInfo.templatePath.split(rootPath)[1]}`;

    const program = ts.createProgram([templateFileName], {
      outDir,
      rootDir: rootPath,
      target: ts.ScriptTarget.ES2016,
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      experimentalDecorators: true,
      allowJs: true
    });

    program.emit();

    Logger.log(`[getTemplate ${templateInfo.templateType}] ${outFile}`);
    delete require.cache[require.resolve(outFile)];
    return require(outFile);
  } catch (error) {
    Logger.log(`[getTemplate error ${templateInfo.templateType}]`, error);
    return null;
  }
}
