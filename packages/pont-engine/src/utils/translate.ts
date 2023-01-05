/**
 * @description 翻译中文名称
 */

import * as assert from 'assert';
import * as _ from 'lodash';

import { PontFileManager } from './PontFileManager';
import { TRANSLATE_DICT_NAME } from '../constants';

const { youdao, baidu, google } = require('translation.js');

const engines = [google, youdao, baidu];
let dict: { [rootDir: string]: { [cn: string]: string } } = {};
let dicPath: { [rootDir: string]: string } = {};

function init(rootDir: string) {
  dicPath[rootDir] = PontFileManager.getLocalFilePath(rootDir, TRANSLATE_DICT_NAME);
  const localDict = PontFileManager.loadFile(dicPath[rootDir]);

  if (localDict) {
    const dictstr = localDict.slice(0, localDict.length - 2);

    try {
      dict[rootDir] = JSON.parse(`{${dictstr}}`);
    } catch (err) {
      console.error('[translate] local dict is invalid, attempting auto fix');
      PontFileManager.removeFile(dicPath[rootDir]);
    }
  }
}

function appendToDict(rootDir: string, pairKey: { cn: string; en: string }) {
  if (!dict[rootDir]) {
    dict[rootDir] = {};
  }

  if (!dict[rootDir][pairKey.cn]) {
    dict[rootDir][pairKey.cn] = pairKey.en;
    PontFileManager.appendFile(dicPath[rootDir], `"${pairKey.cn}": "${pairKey.en}",\n`);
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
  if (!dicPath[rootDir]) {
    init(rootDir);
  }

  if (dict[rootDir]?.[text]) {
    return dict[rootDir][text];
  }

  if (engineIndex >= engines.length) {
    console.error('translate error, all translate engine can not access');
    return text;
  }

  let enKey: string;
  let index = engineIndex;

  try {
    let res = await engines[index].translate(text);
    enKey = startCaseClassName(res.result[0]);

    assert.ok(enKey);

    appendToDict(rootDir, { cn: text, en: enKey });
    return enKey;
  } catch (err) {
    return translate(rootDir, text, index + 1);
  }
}

/** 翻译中文类名等 */
export async function translateChinese(jsonString: string, rootDir: string) {
  let retString = jsonString;
  try {
    const matchItems = jsonString
      // 匹配中英文混合及包含 空格，«，»，-, (,) / 的情况
      .match(/"[a-z0-9\s-\/]*[\u4e00-\u9fa5]+[a-z0-9\s-\/«»()\u4e00-\u9fa5]*":/gi);
    if (!matchItems) {
      return retString;
    }

    let chineseKeyCollect = matchItems.map((item) => item.replace(/["":]/g, ''));

    // 去重
    chineseKeyCollect = _.uniq(chineseKeyCollect.map((item) => (item.includes('«') ? item.split('«')[0] : item)));

    // 按长度倒序排序，防止替换时中文名部分重名
    // 例如: 请求参数vo, 请求参数, 替换时先替换 请求参数vo, 后替换请求参数
    chineseKeyCollect.sort((pre, next) => next.length - pre.length);

    let result = await Promise.all(chineseKeyCollect.map((text) => translate(rootDir, text)));
    // const normalizeRegStr = (str: string) => str.replace(/(\W)/g, '$1');
    const toRegStr = (str) => str.replace(/(\W)/g, '\\$1');
    result.forEach((enKey: string, index) => {
      const chineseKey = chineseKeyCollect[index];
      if (enKey) {
        retString = retString.replace(eval(`/${toRegStr(chineseKey)}/g`), enKey);
      }
    });
    return retString;
  } catch (err) {
    return Promise.reject(err);
  }
}
