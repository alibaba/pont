import * as _ from 'lodash';
const { youdao, baidu, google } = require('translation.js');
import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';
import * as debugLog from './debugLog';

export class Translate {
  private localDictDir = os.homedir() + '/.pont';
  private dict: { [key: string]: string } = {};
  private dictFullPath = '';
  private engines = [google, youdao, baidu];

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
    if (!this.dict[pairKey.cn]) {
      this.dict[pairKey.cn] = pairKey.en;
      fs.appendFileSync(this.dictFullPath, `"${pairKey.cn}": "${pairKey.en}",\n`);
    }
  }

  startCaseClassName(result) {
    let wordArray = _.startCase(result).split(' ');
    if (wordArray.length > 6) {
      wordArray = [].concat(wordArray.slice(0, 5), wordArray.slice(-1));
    }
    return wordArray.join('');
  }

  async translateAsync(text: string, engineIndex = 0) {
    if (this.dict[text]) {
      // debugLog.info('using local dictinary')
      return this.dict[text];
    }

    if (engineIndex >= this.engines.length) {
      throw new Error('translate error, all translate engine can not access');
    }

    let enKey;
    let index = engineIndex;

    try {
      let res = await this.engines[index].translate(text);
      enKey = this.startCaseClassName(res.result[0]);
      this.appendToDict({ cn: text, en: enKey });
      return enKey;
    } catch (err) {
      this.translateAsync(text, index++);
    }
  }
}

export default new Translate();
