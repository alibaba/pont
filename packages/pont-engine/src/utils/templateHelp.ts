/**
 * @description 编译自定义模板文件
 */

import * as ts from 'typescript';
import * as path from 'path';
import { existsSync, writeFileSync } from 'fs-extra';
import { LOCAL_DICT_DIR } from '../constants';

interface TemplateInfo {
  name: string;
  templateType: 'template' | 'transform' | 'fetchMethod';
  templatePath: string;
  defaultCode: string;
}

export function getTemplate(rootPath: string, templateInfo: TemplateInfo) {
  const templateFileName = `${templateInfo.templatePath}.ts`;

  if (!existsSync(templateFileName)) {
    writeFileSync(templateFileName, templateInfo.defaultCode);
  }

  const outDir = path.resolve(
    rootPath,
    `${LOCAL_DICT_DIR}/${templateInfo.templateType}/${templateInfo.name || 'default'}`
  );
  const outFile = `${outDir}${templateInfo.templatePath.split(rootPath)[1]}`;

  const program = ts.createProgram([templateFileName], {
    outDir,
    rootDir: rootPath,
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    experimentalDecorators: true,
    allowJs: true
  });

  program.emit();

  return require(outFile);
}
