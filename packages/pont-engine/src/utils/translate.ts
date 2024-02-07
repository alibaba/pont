/**
 * @description 翻译中文名称
 */

import * as assert from 'assert';
import * as _ from 'lodash';
import { PontFileManager } from './PontFileManager';
import { IBaiduTranslateConfig } from '../types/pontConfig';
import { youdao, baidu, google } from 'translation.js';
import pinyin from './pinyin';
import { GoogleTranslator } from '@translate-tools/core/translators/GoogleTranslator';
import { translate as googleTranslate } from '@vitalets/google-translate-api';
const baiduTranslator = require('baidu-translate');

const googleTranslator = new GoogleTranslator();
const engines = [
  {
    name: 'baiduOpen',
    translate: (text, appId?, secret?) =>
      baiduTranslator(appId, secret)(text, { to: 'en' }).then((res) => {
        if (res.error_msg) {
          throw new Error(res.error_msg);
        }
        return _.get(res, 'trans_result.0.dst');
      })
  },
  { name: 'google1', translate: (text) => googleTranslator.translate(text, 'zh-CN', 'en') },
  { name: 'google2', translate: (text) => googleTranslate(text, { to: 'en' }).then((res) => res.text) },
  {
    name: 'google',
    translate: (text) => google.translate(text).then((res) => res.result[0])
  },
  {
    name: 'youdao',
    translate: (text) => youdao.translate(text).then((res) => res.result[0])
  },
  {
    name: 'baidu',
    translate: (text) => baidu.translate(text).then((res) => res.result[0])
  },
  {
    name: 'pinyin',
    translate: (text) => pinyin.getCamelChars(text)
  }
];

export const dict: { [rootDir: string]: { [cn: string]: string } } = {};
const dicPath: { [rootDir: string]: string } = {};

function init(rootDir: string, translatePath: string) {
  dicPath[rootDir] = PontFileManager.getLocalFilePath(rootDir, null, translatePath);
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

export async function translate(
  rootDir,
  translatePath,
  baiduTranslateConfigs: IBaiduTranslateConfig[],
  text: string,
  engineIndex = 0
) {
  if (!dicPath[rootDir]) {
    init(rootDir, translatePath);
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
  const translateEngine = engines[index];
  try {
    let res;
    if (translateEngine.name === 'baiduOpen') {
      const baiduOpenTranslate = async (level) => {
        if (!baiduTranslateConfigs || level >= baiduTranslateConfigs.length) {
          if (!baiduTranslateConfigs) {
            throw new RangeError('no baiduTranslateConfigs, skip baiduOpen translate');
          }
          throw new RangeError('all of baidu appIds can not work');
        }
        const config = baiduTranslateConfigs[level];

        try {
          return await translateEngine.translate(text, config.appId, config.appSecret);
        } catch (e) {
          if (e instanceof RangeError) {
            throw e;
          } else {
            console.error(`translateEngine:${translateEngine.name} appId:${config.appId} text:${text} err:${e}`);
          }
          return await baiduOpenTranslate(level + 1);
        }
      };
      res = await baiduOpenTranslate(0);
    } else {
      res = await translateEngine.translate(text);
    }
    enKey = startCaseClassName(res);

    assert.ok(enKey);

    appendToDict(rootDir, { cn: text, en: enKey });
    return enKey;
  } catch (err) {
    console.error(`translateEngine:${translateEngine.name} text:${text} err:${err}`);
    return translate(rootDir, translatePath, baiduTranslateConfigs, text, index + 1);
  }
}

/** 翻译中文类名等 */
export async function translateChinese(
  jsonString: string,
  rootDir: string,
  translatePath: string,
  baiduTranslateConfigs?: IBaiduTranslateConfig[]
) {
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

    let result = await Promise.all(
      chineseKeyCollect.map((text) => translate(rootDir, translatePath, baiduTranslateConfigs, text))
    );
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
