import * as assert from 'assert'
import * as path from 'path'
import httpServer = require('http-server');
import * as fs from 'fs-extra';
import { exec } from 'child_process'

const getPath = (fname) => path.join(__dirname, fname);
const clearDir = (dirName) => {
    try {
        fs.removeSync(getPath(dirName))
    } catch (error) { }
}
const oneline = (code: string) => code.replace(/[\s\n]/g, '');
const server = httpServer.createServer({
    root: getPath('fixtures')
});

let apidts = '';

describe('pont功能测试', () => {

    before(function (done) {
        // 清除路径
        clearDir('services');

        server.listen(8080, (err) => {
            console.log('http server start successfull')
            exec('node bin/init.js', (err, stdout) => {
                // console.log(stdout)
                // 读取 api.d.ts 并转换为单行
                apidts = oneline(fs.readFileSync(getPath('services/api1/api.d.ts'), { encoding: 'utf8' }));
                done();
            })
        });
    })
    after(function () {
        server.close();
    });

    it('api.d.ts should exists', () => {
        assert.ok(fs.existsSync(getPath('services/api.d.ts')));
    })
    it('api.d.ts should export class DataTransOutput<T0>', () => {
        let rightCode = oneline(`
            export class DataTransOutput<T0> {
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
        `)
        assert.ok(apidts.includes(rightCode));
    })

    it('api.d.ts should not export class DataTransOutput', () => {

        let wrongCode = oneline(`export class DataTransOutput {`)

        assert.ok(!apidts.includes(wrongCode));

    })
    it('api.d.ts should auto fix defs.api1.DataTransOutput to defs.api1.DataTransOutput<any>', () => {

        let rightCode = oneline(`Promise<defs.api1.DataTransOutput<any>>`)
        let wrongCode = oneline(`Promise<defs.api1.DataTransOutput>`)

        assert.ok(apidts.includes(rightCode));
        assert.ok(!apidts.includes(wrongCode));
    })
})