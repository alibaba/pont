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
const server = httpServer.createServer({
    root: getPath('fixtures'),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
});



describe('origins 2 个源测试', () => {

    before(function (done) {
        // 清除路径
        clearDir('services');

        server.listen(8080, (err) => {
            console.log(err, 'http server start successfull')
            exec('node bin/init.js', (err, stdout) => {
                // console.log(stdout)
                done();
            })
        });
    })
    after(function () {
        server.close();
    });

    it('api.d.ts should exists', () => {
        // let dts = fs.readFileSync(getPath('services/api.d.ts'), { encoding: 'utf8' });
        assert.ok(fs.existsSync(getPath('services/api.d.ts')));
        // assert.ok(fs.existsSync(getPath('services/api1/api.d.ts')));
        // assert.ok(fs.existsSync(getPath('services/api2/api.d.ts')));
    })
})


