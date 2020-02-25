/**
 * @author LeonZhu
 * @description 内置模板
 */
import * as fs from 'fs-extra';
import * as _ from 'lodash';

export const templateRegistion = [
  {
    templateType: 'react',
    templatePath: '/react.ts'
  }
];

export function getTemplateByTemplateType(templateType = 'react') {
  const templateObj = templateRegistion.find(template => templateType === template.templateType);

  if (templateObj) {
    return fs.readFileSync(
      __dirname.substring(0, __dirname.lastIndexOf('lib')) + '/templates' + templateObj.templatePath,
      'utf8'
    );
  }

  return '';
}
