import * as _ from 'lodash';
const { youdao, baidu, google } = require('translation.js');
import * as assert from 'assert';
import * as debugLog from './debugLog';
import { PontDictManager } from './LocalDictManager';

export class Translate {
  private engines = [google, youdao, baidu];
  dict = {};

  constructor(private dictName = 'dict.json') {
    const localDict = PontDictManager.loadFileIfExistsSync(dictName);

    if (localDict) {
      const dictstr = localDict.slice(0, localDict.length - 2);

      try {
        this.dict = JSON.parse(`{${dictstr}}`);
      } catch (err) {
        debugLog.error('[translate] local dict is invalid, attempting auto fix');
        PontDictManager.removeFile(dictName);
      }
    }
  }

  appendToDict(pairKey: { cn: string; en: string }) {
    if (!this.dict[pairKey.cn]) {
      this.dict[pairKey.cn] = pairKey.en;
      PontDictManager.appendFileSync(this.dictName, `"${pairKey.cn}": "${pairKey.en}",\n`);
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

      assert.ok(enKey);

      this.appendToDict({ cn: text, en: enKey });
      return enKey;
    } catch (err) {
      return this.translateAsync(text, index + 1);
    }
  }
}

export const Translator = new Translate();
