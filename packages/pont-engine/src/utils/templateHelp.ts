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


  const program = ts.createProgram([templateFileName], {
    outDir,
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.CommonJS
  });

  program.emit();

  return require(`${outDir}/${path.parse(templateInfo.templatePath).name}`);
}
