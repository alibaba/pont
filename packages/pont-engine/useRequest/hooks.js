/**
 * @description 基于 swr 的取数hooks
 */

import useSWR from 'swr';
import { useContext } from 'react';
import { pontCore } from './pontCore';

const defaultOptions = {
  /** 错误重试，默认关闭 */
  shouldRetryOnError: false
};

/**
 * 基于 swr 的取数 hooks
 * @param url 请求地址
 * @param params 请求参数
 * @param options 配置信息
 */
export function useRequest(url, params = {}, options = {}) {
  return baseRequest(url, params, options);
}

/**
 * 仅在非 GET 的取数接口时调用
 *
 * @param url 请求地址
 * @param params 请求参数
 * @param options 配置信息
 */
export function useDeprecatedRequest(url, params = {}, options = {}) {
  return baseRequest(url, params, options);
}

function baseRequest(url, swrOptions = {}, fetchOptions = {}) {
  const fetcher = requestUrl => pontCore.fetch(requestUrl, fetchOption);
  const { data, error, isValidating } = useSWR(url, fetcher, swrOptions);

  return {
    data,
    error,
    isLoading: data === undefined || isValidating
  };
}

function getDependentUrl(url, paramConfig, method) {
  return () => pontCore.getUrl(url, paramConfig, method);
}
