/**
 * @author wangyou
 * @description 内置模板
 */
import * as fs from 'fs-extra';
import * as _ from 'lodash';

const templateRegistion = [
  {
    templateType: 'react',
    templatePath: '/react.ts'
  }
];

export function getTemplateByTemplateType(templateType: string) {
  const templateObj = templateRegistion.find(template => templateType === template.templateType);

  if (templateObj) {
    return fs.readFileSync(__dirname.replace('/lib', '/templates') + templateObj.templatePath, 'utf8');
  }

  return '';
}
