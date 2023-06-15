import { StandardDataSource, Interface, BaseClass, Manager } from 'pont-engine';
import { StandardDataType, Property, format } from 'pont-engine';
import * as http from 'http';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as vscode from 'vscode';
import * as ts from 'typescript';
const Mock = require('mockjs');

const DEFAULT_ARR_LENGTH = 3;
const DEFAULT_STRING = '我是字串';

function useString(str: string) {
  return `'${str}'`;
}

export function getArr(arrItem, arrLength = DEFAULT_ARR_LENGTH) {
  const arr = [];

  for (let index = 0; index < arrLength; index++) {
    arr.push(arrItem);
  }

  return arr;
}

class Mocks {
  constructor(private ds: StandardDataSource) {}

  get bases() {
    return this.ds.baseClasses;
  }

  getBaseClassMocksFn(clazz: BaseClass) {
    const props = [] as string[];

    clazz.properties.forEach((prop) => {
      let { name, dataType } = prop;
      const templateIndex = dataType.templateIndex;

      if (templateIndex !== -1) {
        props.push(`${name}: typeArgs[${templateIndex}]`);
      } else {
        props.push(`${name}: ${this.getDefaultMocks(prop.dataType)}`);
      }
    });

    return `
      ${clazz.name}: (...typeArgs) => {
        return {
          ${props.join(',\n')}
        }
      }
    `;
  }

  getDefaultMocks(response: StandardDataType): string {
    const { typeName, isDefsType, initialValue, typeArgs, templateIndex } = response;

    if (isDefsType) {
      const defClass = this.bases.find((bs) => bs.name === typeName);

      if (!defClass) {
        return '{}';
      }

      return `defs.${defClass.name}(${typeArgs.map((arg) => this.getDefaultMocks(arg)).join(', ')})`;
    } else if (typeName === 'Array') {
      if (typeArgs.length) {
        const item = this.getDefaultMocks(typeArgs[0]);
        return `[${getArr(item).join(',')}]`;
      }
      return '[]';
    } else if (typeName === 'string') {
      return useString(DEFAULT_STRING);
    } else if (typeName === 'number') {
      return Math.random() * 100 + '';
    } else if (typeName === 'boolean') {
      return 'true';
    } else {
      return 'null';
    }
  }

  getMocksCode(wrapper) {
    const classes = this.ds.baseClasses.map((clazz) => {
      return this.getBaseClassMocksFn(clazz);
    });

    return `
    const defs = {
      ${classes.join(',\n\n')}
    }

    // pr 测试
    const escapeDeadCycle = (fn, num = 300) => {
      let n = 0;

      return (...args) => {
        if (n > num) return {};
        n++;

        const res = fn(...args);

        return res;
      };
    };

    Object.keys(defs).forEach(key => {
      defs[key] = escapeDeadCycle(defs[key]);
    });

      export default {
      ${this.ds.mods
        .map((mod) => {
          const modName = mod.name;

          return `
          /** ${mod.description} */
          ${modName}: {
            ${mod.interfaces
              .map((inter) => {
                const interName = inter.name;
                const interRes = this.getDefaultMocks(inter.response);

                return `
                  /** ${inter.description} */
                  ${interName}: ${wrapper(interRes)}
                `;
              })
              .join(',\n')}
          }`;
        })
        .join(',\n')}
      }
    `;
  }
}

export class MocksServer {
  constructor(private manager: Manager) {
    const rootPath = vscode.workspace.rootPath;
    const igonrePath = path.join(rootPath, '.gitignore');

    fs.ensureFileSync(igonrePath);

    let ignoreContent = fs.readFileSync(igonrePath, 'utf8');

    if (ignoreContent.includes('.mocks')) {
      return;
    } else {
      ignoreContent = ignoreContent + '\n' + '.mocks/';
    }
    fs.writeFileSync(igonrePath, ignoreContent);
  }

  static singleInstance = null as MocksServer;

  static getSingleInstance(manager?: Manager) {
    if (!MocksServer.singleInstance) {
      MocksServer.singleInstance = new MocksServer(manager);
      return MocksServer.singleInstance;
    }

    MocksServer.singleInstance.manager = manager;

    return MocksServer.singleInstance;
  }

  async getCurrMocksData() {
    await this.checkMocksPath();
    const rootPath = vscode.workspace.rootPath;
    const mockPath = path.join(rootPath, '.mocks');
    const sourcePath = path.join(mockPath, 'mocks.ts');
    const noCacheFix = (Math.random() + '').slice(2, 5);
    const jsPath = path.join(mockPath, `mocks.${noCacheFix}.js`);
    const code = fs.readFileSync(sourcePath, 'utf8');

    const { outputText } = ts.transpileModule(code, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2015,
        module: ts.ModuleKind.CommonJS
      }
    });
    fs.writeFileSync(jsPath, outputText);
    const currMocksData = require(jsPath).default;
    fs.unlinkSync(jsPath);

    return currMocksData;
  }

  async getMocksCode() {
    const baseConfig = this.manager.getStandardBaseConfig();
    const currentManager = this.manager.getCurrentOriginManage();
    const dataSource = await currentManager.getDataSource();

    const wrapper = baseConfig.mocks.wrapper;
    const prettierConfig = baseConfig.prettierConfig;

    const wrapperFn = wrapper ? (dataCode) => wrapper.replace(/{response}/g, dataCode) : (data) => data;

    const code = new Mocks(dataSource).getMocksCode(wrapperFn);
    return format(code, prettierConfig);
  }

  async refreshMocksCode() {
    const rootPath = vscode.workspace.rootPath;
    const mockDir = path.join(rootPath, '.mocks');
    const mockPath = path.join(rootPath, '.mocks/mocks.ts');

    const code = await this.getMocksCode();
    fs.removeSync(mockDir);
    fs.mkdirSync(mockDir);

    fs.writeFileSync(mockPath, code);
  }

  async checkMocksPath() {
    const rootPath = vscode.workspace.rootPath;
    const mockPath = path.join(rootPath, '.mocks/mocks.ts');

    if (!fs.existsSync(mockPath)) {
      const code = await this.getMocksCode();
      if (!fs.existsSync(path.join(rootPath, '.mocks'))) {
        fs.mkdirSync(path.join(rootPath, '.mocks'));
      }
      await fs.writeFile(mockPath, code);
    } else {
      // todo 补齐后端更新
    }
  }

  async createServer() {
    const baseConfig = this.manager.getStandardBaseConfig();
    const currentManager = this.manager.getCurrentOriginManage();

    const ds = await currentManager.getDataSource();
    const port = baseConfig.mocks.port;

    return http
      .createServer(async (req, res) => {
        const mocksData = await this.getCurrMocksData();

        ds.mods.forEach((mod) => {
          mod.interfaces.forEach(async (inter) => {
            // 把 url int path 的参数，转换为匹配参数的正则表达式
            const reg = new RegExp(
              '^' + inter.path.replace(/\//g, '\\/').replace(/{.+?}/g, '[0-9a-zA-Z_-]*?') + '(\\?|$)'
            );

            if (req.url.match(reg) && req.method.toUpperCase() === inter.method.toUpperCase()) {
              const wrapperRes = JSON.stringify(Mock.mock(mocksData[mod.name][inter.name]));
              res.writeHead(200, {
                'Content-Type': 'text/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
                'Access-Control-Max-Age': 2592000 // 30 days
              });
              res.end(wrapperRes, 'utf8');
            }
          });
        });
        res.writeHead(404);
        res.end();
      })
      .listen(port);
  }

  async run() {
    await this.checkMocksPath();
    const server = await this.createServer();

    return () => {
      server.close();
    };
  }
}
