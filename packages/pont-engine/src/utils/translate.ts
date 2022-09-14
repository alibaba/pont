/**
 * @description 翻译中文名称
 */

import * as assert from 'assert';
import _ from 'lodash';

import { PontFileManager } from './PontFileManager';
import * as debugLog from '../debugLog';
import { TRANSLATE_DICT_NAME } from '../constants';

const { youdao, baidu, google } = require('translation.js');

const engines = [google, youdao, baidu];
let dict: { [cn: string]: string } = {};
let dicPath: string;

function init(rootDir: string) {
  dicPath = PontFileManager.getFilePath(rootDir, TRANSLATE_DICT_NAME);
  const localDict = PontFileManager.loadFile(dicPath);

  if (localDict) {
    const dictstr = localDict.slice(0, localDict.length - 2);

    try {
      dict = JSON.parse(`{${dictstr}}`);
    } catch (err) {
      debugLog.error('[translate] local dict is invalid, attempting auto fix');
      PontFileManager.removeFile(dicPath);
    }
  }
}

function appendToDict(pairKey: { cn: string; en: string }) {
  if (!dict[pairKey.cn]) {
    dict[pairKey.cn] = pairKey.en;
    PontFileManager.appendFile(dicPath, `"${pairKey.cn}": "${pairKey.en}",\n`);
  }
}

function startCaseClassName(result) {
  let wordArray = _.startCase(result).split(' ');
  if (wordArray.length > 6) {
    wordArray = [].concat(wordArray.slice(0, 5), wordArray.slice(-1));
  }
  return wordArray.join('');
}

export async function translate(rootDir, text: string, engineIndex = 0) {
  if (!dicPath) {
    init(rootDir);
  }

  if (dict[text]) {
    return dict[text];
  }

  if (engineIndex >= engines.length) {
    debugLog.error('translate error, all translate engine can not access');
    return text;
  }

  let enKey: string;
  let index = engineIndex;

  try {
    let res = await engines[index].translate(text);
    enKey = startCaseClassName(res.result[0]);

    assert.ok(enKey);

    appendToDict({ cn: text, en: enKey });
    return enKey;
  } catch (err) {
    return translate(rootDir, text, index + 1);
  }
}
