import * as ts from 'typescript';
import * as path from 'path';
import { existsSync, writeFileSync } from 'fs-extra';

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
    `node_modules/.pont/${templateInfo.templateType}/${templateInfo.name || 'default'}`
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
