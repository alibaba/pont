import * as assert from 'assert';
import * as path from 'path';
import httpServer = require('http-server');
import * as fs from 'fs-extra';
import { exec } from 'child_process';
import { createManager } from '../src/utils';

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
const server = httpServer.createServer({
    root: getPath('fixtures')
});

let apidts = '';

describe('pont功能测试', () => {
    before(function (done) {
        // 清除路径
        clearDir('services');

        server.listen(9090, async err => {
            console.log('http server start successfull');
            await createManager('test-pont-config.json');

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
        assert.ok(fs.existsSync(getPath('services/api.d.ts')));
        assert.ok(fs.existsSync(getPath('services/api1/api.d.ts')));
        assert.ok(fs.existsSync(getPath('services/api2/api.d.ts')));
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
        // 通用请求参数token«输出参数vo»
        assert.ok(apidts.includes(`GenericRequestParameterToken<T0=any>`));
        // 输出参数vo
        assert.ok(apidts.includes(`OutputParameterVo`));
        // 查询参数
        assert.ok(apidts.includes(`QueryParameter`));
        // abc输出参数
        assert.ok(apidts.includes(`AbcOutputParameter`));
        // " 中英文 混合 带 空格 Vo "
        assert.ok(apidts.includes(`ChineseAndEnglishMixedWithVo`));
    });
});
