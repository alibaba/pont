/**
 * @author LeonZhu
 * @description 内置模板
 */
import * as _ from 'lodash';
import { getTemplatesDirFile } from './utils';

export const templateRegistion = [
  {
    templateType: 'fetch',
    templateFileName: 'fetch.ts'
  },
  {
    templateType: 'hooks',
    templateFileName: 'hooks.ts'
  }
];

export function getTemplateByTemplateType(templateType = 'fetch') {
  const templateObj = templateRegistion.find(template => templateType === template.templateType);

  if (templateObj) {
    return getTemplatesDirFile(templateObj.templateFileName);
  }

  return '';
}
