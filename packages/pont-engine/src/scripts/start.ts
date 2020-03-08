/**
 * @author LeonZhu
 * @description pont配置生成
 */

import * as inquirer from 'inquirer';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as debugLog from '../debugLog';
import { CONFIG_FILE, lookForFiles, DataSourceConfig, Mocks, Surrounding, judgeIsVaildUrl } from '../utils';
import { templateRegistion } from '../templates';

const promptList = [
  {
    type: 'input',
    message: '请设置数据源地址',
    name: 'originUrl',
    validate: originUrl => {
      if (!judgeIsVaildUrl(originUrl)) {
        return '请输入正确的数据源地址';
      }

      return true;
    }
  },
  {
    type: 'input',
    message: '请设置自定义代码生成器(模板)的相对路径',
    name: 'templatePath',
    default: './pontTemplate'
  },
  {
    type: 'confirm',
    message: '是否使用内置模板？',
    name: 'useTemplate'
  },
  {
    type: 'list',
    message: '请选择内置模板类型:',
    name: 'templateType',
    choices: templateRegistion.map(template => template.templateType),
    when: function(answers) {
      // 当watch为true的时候才会提问当前问题
      return answers.useTemplate;
    }
  },
  {
    type: 'confirm',
    message: '是否使用自动化 mocks 服务？',
    name: 'enableMocks'
  },
  {
    type: 'input',
    message: '请设置生成代码存放的相对路径',
    name: 'outDir',
    default: './services'
  }
];

export async function generatePontConfig() {
  const configPath = await lookForFiles(process.cwd(), CONFIG_FILE);

  if (configPath) {
    const result = await inquirer.prompt({
      type: 'confirm',
      name: 'confirm',
      default: true,
      message: `检测到已存在pont-config文件，继续生成将覆盖配置项，是否继续？`
    });

    if (!result.confirm) {
      return;
    }
  }

  debugLog.info('配置文件生成中...');

  const answers = await inquirer.prompt(promptList);

  generateConfig(configPath, answers);

  debugLog.success('文件生成成功。');

  debugLog.info(`
    其余配置项请参阅官方文档 https://github.com/alibaba/pont
  `);
}

function generateConfig(configPath: string, answers: any) {
  const { originUrl, templatePath, outDir, enableMocks } = answers;
  const dirName = path.join(process.cwd(), '/pont-config.json');
  let config = {} as DataSourceConfig;
  if (configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');

      config = JSON.parse(content);
    } catch (e) {
      throw new Error('pont-config.json is not a validate json');
    }
  }

  config.originUrl = originUrl;
  config.templatePath = templatePath;
  config.outDir = outDir;
  config.surrounding = Surrounding.javaScript;
  config.mocks = {
    enable: enableMocks
  } as Mocks;

  if (answers.templateType) {
    config.templateType = answers.templateType;
  }

  fs.writeFileSync(configPath || dirName, JSON.stringify(config, null, 2));
}
