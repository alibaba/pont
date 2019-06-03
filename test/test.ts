import * as assert from 'assert';
import * as path from 'path';
import httpServer = require('http-server');
import * as fs from 'fs-extra';
import { createManager } from '../src/utils';
import { Translator } from '../src/translate';

const getPath = fname => path.join(__dirname, fname);
const clearDir = dirName => {
  try {
    const fullpath = getPath(dirName);

    if (fs.existsSync(fullpath)) {
      fs.removeSync(getPath(dirName));
    }
  } catch (error) { }
};
const oneline = (code: string) => code.replace(/[\s\n]/g, '');
const exists = filepath => fs.existsSync(getPath(filepath));

const server = httpServer.createServer({
  root: getPath('fixtures')
});

let apidts = '';

describe('pont功能测试', () => {
  before(function (done) {
    // 清除路径
    clearDir('services');

    server.listen({ port: 9090 }, async err => {
      console.log('http server start successfull');
      await createManager('config-multiple-origins.json');
      // 读取 api.d.ts 并转换为单行
      const codeBuffer = await fs.readFile(getPath('services/api1/api.d.ts'));
      apidts = oneline(codeBuffer.toString('utf8'));

      done();
    });
  });
  after(function () {
    server.close();
  });

  it('api.d.ts should exists', () => {
    assert.ok(exists('services/api.d.ts'));
    assert.ok(exists('services/api1/api.d.ts'));
    assert.ok(exists('services/api2/api.d.ts'));
  });
  it('api.d.ts should export class DataTransOutput<T0=any>', () => {
    let rightCode = oneline(`
            export class DataTransOutput<T0=any> {
                    /** 返回数据 */
                    data?: T0;

                    /** 错误码。
                        100000 成功
                        200000 入参不合法
                        400000 权限不足
                        500000 服务失败 */
                    transCode?: number;

                    /** 错误信息。成功：“成功” 失败：“失败对应的msg” */
                    transMessage?: string;

                    /** 信息详情” */
                    transMessageDetail?: string;
                }
        `);
    assert.ok(apidts.includes(rightCode));
  });

  it('api.d.ts should not export class DataTransOutput', () => {
    let wrongCode = oneline(`export class DataTransOutput {`);

    assert.ok(!apidts.includes(wrongCode));
  });

  it('api.d.ts should translate chinese of baseClass to english', () => {
    let dict: { [key: string]: string } = Translator.loadDict();
    ['通用请求参数token', '输出参数vo', '查询参数', 'abc输出参数', ' 中英文 混合 带 空格 Vo '].forEach(cnKey => {
      const enKey = dict[cnKey];
      assert.ok(enKey);
      assert.ok(apidts.includes(enKey));
    });
  });

  it('api.d.ts should transform Map without template params to object', () => {
    let rightCode = oneline(`
      export namespace getAllMsgForMap {
          export class Params {
            /** accountTime */
            accountTime: string;
            /** type */
            type: string;
          }

          export type Response = defs.api1.Result<Array<object>>;
          export const init: Response;
          export function request(
            params: Params,
          ): Promise<defs.api1.Result<Array<object>>>;
        }
    `);

    assert.ok(apidts.includes(rightCode));
  });

  it('config-single-usingMultipleOrigins should has multiple origin fileStructure', async () => {
    // 清除路径
    clearDir('services');
    await createManager('config-single-usingMultipleOrigins.json');
    assert.ok(exists('services/api1/api.d.ts'));
  });
});

describe('Swagger 1.X接口测试', () => {
  const handleRequest = async (req, res, next) => {
    const indexData = fs.readFileSync(getPath('mock/v1/api-docs.json'), { encoding: 'utf8' });
    const cardealercontroller = fs.readFileSync(getPath('mock/v1/cardealercontroller.json'), { encoding: 'utf8' });
    const groupcontroller = fs.readFileSync(getPath('mock/v1/groupcontroller.json'), { encoding: 'utf8' })
    const shopauthcontroller = fs.readFileSync(getPath('mock/v1/shopauthcontroller.json'), { encoding: 'utf8' })
    if (req.url === '/api-docs') {
      res.end(indexData);
    }
    if (req.url === '/api-docs/souche/cardealercontroller') {
      res.end(cardealercontroller);
    }
    if (req.url === '/api-docs/souche/groupcontroller') {
      res.end(groupcontroller);
    }
    if (req.url === '/api-docs/souche/shopauthcontroller') {
      res.end(shopauthcontroller);
    }
    next();
  }
  const server2 = httpServer.createServer({
    before: [handleRequest]
  });
  before(function (done) {
    // 清除路径
    clearDir('services');

    server2.listen({ port: 9099 }, async err => {
      console.log('http server start on prot 9099 successfully');
      done();
    });
  });
  after(function () {
    server2.close();
  });

  it('V1.x 接口测试', async () => {
    // 清除路径
    clearDir('services');
    await createManager('config-swagger-v1.json');
    assert.ok(exists('services/api.d.ts'));
  });
})
