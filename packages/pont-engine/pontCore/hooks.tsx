/**
 * @description 基于 swr 的取数hooks
 */

import useSWR, { SWRConfig, ConfigInterface } from 'swr';
import * as React from 'react';
import { PontCore } from './pontCore';

const defaultOptions = {
  /** 错误重试，默认关闭 */
  shouldRetryOnError: false
};

export const SWRProvider: React.FC<ConfigInterface> = props => {
  const { children, ...options } = props;

  return <SWRConfig value={{ ...defaultOptions, ...options }}>{props.children}</SWRConfig>;
};

/**
 * 基于 swr 的取数 hooks
 * @param url 请求地址
 * @param params 请求参数
 * @param options 配置信息
 */
export function useRequest(url: any, params = {} as any, swrOptions = {} as any, fetchOptions = {} as any) {
  const fetcher = requestUrl => PontCore.fetch(requestUrl, fetchOptions);
  const method = fetchOptions?.method || 'GET';

  const urlKey = getUrlKey(url, params, method);
  const { data, error, isValidating } = useSWR(urlKey, fetcher, swrOptions);

  return {
    data,
    error,
    isLoading: data === undefined || isValidating
  };
}

export function getUrlKey(url: any, params = {} as any, method: string) {
  const urlKey =
    typeof params === 'function'
      ? () => {
          return PontCore.getUrl(url, params(), method);
        }
      : PontCore.getUrl(url, params, method);

  return urlKey;
}
