import * as _ from 'lodash';
const { google } = require('translation.js');
import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';

export class Translate {
  private localDictDir = os.homedir() + '/.pont';
  private dict: { [key: string]: string } = {};
  private dictFullPath = '';

  constructor(dictName = 'dict.json') {
    fs.mkdirpSync(this.localDictDir);
    this.dictFullPath = path.normalize(this.localDictDir + '/' + dictName);
    this.dict = fs.pathExistsSync(this.dictFullPath) ? this.loadDict() : {};
  }

  loadDict() {
    let dictstr = fs.readFileSync(this.dictFullPath, { encoding: 'utf8' });
    dictstr = dictstr.slice(0, dictstr.length - 2);
    return JSON.parse(`{${dictstr}}`);
  }

  appendToDict(pairKey: { cn: string; en: string }) {
    fs.appendFileSync(this.dictFullPath, `"${pairKey.cn}": "${pairKey.en}",\n`);
  }

  async translateAsync(text: string) {
    if (this.dict[text]) return this.dict[text];

    let res = await google.translate(text);

    let wordArray = _.startCase(res.result[0]).split(' ');
    if (wordArray.length > 6) {
      wordArray = [].concat(wordArray.slice(0, 5), wordArray.slice(-1));
    }

    let enKey = wordArray.join('');

    this.appendToDict({ cn: text, en: enKey });
    return enKey;
  }
}

export default new Translate();
