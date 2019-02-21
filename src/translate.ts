import * as _ from 'lodash';
import googleTranslate = require('node-google-translate-china');
import * as fs from 'fs-extra';
import * as path from 'path';

export class Translate {

    private localDictDir = process.env.HOME + '/.pont';
    private dict: { [key: string]: string } = {}
    private dictFullPath = ''

    constructor(dictName = 'dict.json') {
        fs.mkdirpSync(this.localDictDir);
        this.dictFullPath = path.normalize(this.localDictDir + '/' + dictName);
        this.dict = fs.pathExistsSync(this.dictFullPath)
            ? this.loadDict()
            : {}
    }

    loadDict() {
        let dictstr = fs.readFileSync(this.dictFullPath, { encoding: 'utf8' })
        dictstr = dictstr.slice(0, dictstr.length - 2)
        return JSON.parse(`{${dictstr}}`);
    }

    appendToDict(pairKey: { cn: string, en: string }) {
        fs.appendFileSync(this.dictFullPath, `"${pairKey.cn}": "${pairKey.en}",\n`)
    }

    translateAsync(text: string): Promise<string> {

        if (this.dict[text]) return Promise.resolve(this.dict[text])

        return new Promise((resolve) => {
            googleTranslate({
                text,
                source: 'zh-CN',
                target: 'en'
            }, (result: any) => {
                let wordArray = _.startCase(result.translation).split(' ');
                if (wordArray.length > 6) {
                    wordArray = [].concat(wordArray.slice(0, 5), wordArray.slice(-1))
                }

                let enKey = wordArray.join('');

                this.appendToDict({ cn: text, en: enKey });

                resolve(enKey);
            });
        })
    }
}

export default new Translate();
