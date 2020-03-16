/**
 * @description pont内置请求单例
 */

class PontCoreManager {
  static singleInstance = null as PontCoreManager;

  static getSignleInstance() {
    if (!PontCoreManager.singleInstance) {
      PontCoreManager.singleInstance = new PontCoreManager();
      return PontCoreManager.singleInstance;
    }
    return PontCoreManager.singleInstance;
  }

  /**
   * fetch请求
   * @param url 请求url
   * @param options fetch 请求配置
   */
  fetch(url: string, options = {}) {
    return fetch(url, options).then(res => {
      return res.json();
    });
  }

  /**
   * 使用外部传入的请求方法替换默认的fetch请求
   */
  useFetch(fetch: (url: string, options?: any) => Promise<any>) {
    if (typeof fetch !== 'function') {
      console.error('fetch should be a function ');
      return;
    }

    this.fetch = fetch;
  }

  getUrl(path: string, queryParams: any, method: string) {
    const params = {
      ...(queryParams || ({} as any))
    };

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

    const paramStr = Object.keys(params)
      .map(key => {
        return params[key] === undefined ? '' : `${key}=${params[key]}`;
      })
      .filter(id => id)
      .join('&');

    if (paramStr) {
      return `${url}?${paramStr}`;
    }

    return url;
  }
}

export const PontCore = PontCoreManager.getSignleInstance();
