/**
 * @description 基于 swr 的取数hooks
 */

import useSWR from 'swr';
import { pontCore } from './pontCore';

/**
 * 基于 swr 的取数 hooks
 * @param url 请求地址
 * @param params 请求参数
 * @param swrOptions swr配置信息
 */
export function useRequest(url, params = {}, swrOptions = {}) {
  const method = 'GET';

  return baseRequest(getSwrUrl(url, params, method), swrOptions, { method });
}

/**
 * 仅在非 GET 的取数接口时调用
 *
 * @param url 请求地址
 * @param params 请求参数
 * @param options 配置信息
 */
export function useDeprecatedRequest(url, params = {}, swrOptions = {}, fetchOptions) {
  return baseRequest(getSwrUrl(url, params, fetchOptions.method), swrOptions, fetchOptions);
}

/**
 * 生成swr的url
 *
 * @param url 请求地址
 * @param params 请求参数
 * @param method 请求方法类型
 */
function getSwrUrl(url, params = {}, method) {
  if (typeof params === 'function') {
    // 依赖取数
    try {
      return pontCore.getUrl(url, params(), method);
    } catch (error) {
      return '';
    }
  }

  return pontCore.getUrl(url, params, method);
}

function baseRequest(url, swrOptions = {}, fetchOptions = {}) {
  const fetcher = requestUrl => pontCore.fetch(requestUrl, fetchOptions);
  const { data, error, isValidating } = useSWR(url, fetcher, swrOptions);

  return {
    data,
    error,
    isLoading: data === undefined || isValidating
  };
}
