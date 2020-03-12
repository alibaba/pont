/**
 * @description pont内置请求单例
 */

import * as _ from 'lodash';

export class PontCore {
  static singleInstance = null;

  static getSignleInstance() {
    if (!PontCore.singleInstance) {
      PontCore.singleInstance = new PontCore();
      return PontCore.singleInstance;
    }
    return PontCore.singleInstance;
  }

  /**
   * 使用外部传入的请求方法替换默认的fetch请求
   */
  useFetch(fetch) {
    if (!typeof fetch === 'function') {
      console.error('fetch should be a function ');
      return;
    }
    this.fetch = fetch;
  }

  /**
   * fetch请求
   * @param url 请求url
   * @param options fetch 请求配置
   */
  fetch(url, options) {
    return fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(res => Promise.resolve(res.data || res))
      .catch(err => Promise.reject(err));
  }

  getUrl(path, queryParams, method) {
    const params = _.cloneDeep(queryParams);

    const url = path.replace(/\{([^\\}]*(?:\\.[^\\}]*)*)\}/gm, (match, key) => {
      // eslint-disable-next-line no-param-reassign
      key = key.trim();

      if (params[key] !== undefined) {
        const value = params[key];
        delete params[key];
        return value;
      }
      console.warn('Please set value for template key: ', key);
      return '';
    });

    const paramStr = _.map(params, (value, key) => (value === 'undefined' ? '' : `${key}=${value}`))
      .filter(_.identity)
      .join('&');

    if (paramStr) {
      return `${url}?${paramStr}`;
    }

    return url;
  }
}

export const pontCore = PontCore.getSignleInstance();
