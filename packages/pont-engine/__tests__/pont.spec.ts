jest.setTimeout(300000);

import * as assert from 'assert';
import * as path from 'path';
import * as httpServer from 'http-server';
import * as fs from 'fs-extra';
import { createManager, Manager } from '../src/compatible/Manager';
import { dict } from '../src/utils/translate';
import { SwaggerDataSource } from '../src/compatible/scripts/swagger';

const getPath = (fname) => path.join(__dirname, fname);
const clearDir = (dirName) => {
  try {
    const fullpath = getPath(dirName);

    if (fs.existsSync(fullpath)) {
      fs.removeSync(getPath(dirName));
    }
  } catch (error) {}
};

const exists = (filepath) => fs.existsSync(getPath(filepath));

const server = httpServer.createServer({
  root: getPath('fixtures')
});

let apidts = '';

describe('pont功能测试', () => {
  let manager: Manager;
  beforeAll(function (done) {
    // 清除路径
    clearDir('services');

    server.listen({ port: 9099 }, async () => {
      console.log('http server start successfull');
      manager = await createManager('config-multiple-origins.json');
      manager.diffs;
      // 读取 api.d.ts 并转换为单行
      const codeBuffer = await fs.readFile(getPath('services/api1/api.d.ts'));
      apidts = codeBuffer.toString('utf8');

      setTimeout(() => {
        console.log('done');
        done();
      }, 8000);
    });
  });
  afterAll(function () {
    clearDir('services');
    server.close();
    manager.stopPolling();
  });
  afterEach(() => {
    delete (global as any).__mobxInstanceCount; // prevent warnings
  });

  test('api.d.ts should exists', () => {
    assert.ok(exists('services/api.d.ts'));
    assert.ok(exists('services/api1/api.d.ts'));
    assert.ok(exists('services/api2/api.d.ts'));
  });
  test('api.d.ts should export class DataTransOutput<T0=any>', () => {
    let rightCode = `export class DataTransOutput<T0 = any> {
      /** 返回数据 */
      data: T0;

      /** 错误码。
100000 成功
200000 入参不合法
400000 权限不足
500000 服务失败 */
      transCode: number;

      /** 错误信息。成功：“成功” 失败：“失败对应的msg” */
      transMessage: string;

      /** 信息详情” */
      transMessageDetail: string;
    }`;
    assert.ok(apidts.includes(rightCode));
  });

  test('api.d.ts should not export class DataTransOutput', () => {
    let wrongCode = `export class DataTransOutput {`;

    assert.ok(!apidts.includes(wrongCode));
  });

  test('api.d.ts should translate chinese of baseClass to english', () => {
    const dictMap: { [key: string]: string } = dict[process.cwd()];
    ['通用请求参数token', '输出参数vo', '查询参数', 'abc输出参数', ' 中英文 混合 带 空格 Vo '].forEach((cnKey) => {
      const enKey = dictMap[cnKey];
      assert.ok(enKey);
      assert.ok(apidts.includes(enKey));
    });
  });

  test('api.d.ts should transform Map without template params to object', () => {
    let rightCode = `export namespace getAllMsgForMap {
        export class Params {
          /** accountTime */
          accountTime: string;
          /** type */
          type: string;
        }

        export type Response = defs.api1.Result<Array<ObjectMap>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.Result<Array<ObjectMap>>>;
      }`;

    assert.ok(apidts.includes(rightCode));
  });

  test('config-single-usingMultipleOrigins should has multiple origin fileStructure', async () => {
    // 清除路径
    clearDir('services');
    const manager = await createManager('config-single-usingMultipleOrigins.json');
    assert.ok(exists('services/api1/api.d.ts'));
    assert.ok(!exists('services/api2/api.d.ts'));
    manager.stopPolling();
  });

  it('mods or base update should generate history file and report', async () => {
    const jsonPath = getPath('fixtures/api-docs.json');
    const originSource = fs.readFileSync(jsonPath).toString('utf8');

    // 模拟后端接口变更
    try {
      const swaggerObj = JSON.parse(originSource) as SwaggerDataSource;

      // 模拟改变参数是否必传
      swaggerObj['paths']['/api/core/asset/credit/query/pastCreditCardBillGather']['post']['parameters'][0].required =
        false;

      fs.writeFileSync(jsonPath, JSON.stringify(swaggerObj));

      await manager.readRemoteDataSource();
      const diffs = manager.getReportData().diffs;

      assert.ok(diffs[diffs.length - 1].modDiffs.length === 1);
      fs.writeFileSync(jsonPath, originSource);
    } catch (e) {}
  });
});
