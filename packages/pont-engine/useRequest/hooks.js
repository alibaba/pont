/**
 * @description 基于 swr 的取数hooks
 */

import useSWR from 'swr';
import SWRConfigContext from 'swr/esm/swr-config-context';
import { useContext } from 'react';
import { pontCore } from './pontCore';

const defaultOptions = {
  /** 错误重试，默认关闭 */
  shouldRetryOnError: false,

  /** 防抖间隔，默认3秒 */
  dedupingInterval: 3000,

  /** 节流间隔，默认3秒 */
  focusThrottleInterval: 3000,

  /** 超时时间，默认5秒 */
  loadingTimeout: 5000
};

/**
 * 基于swr的取数hooks
 * @param url 请求地址
 * @param userSWROptions 用户当前传入的swr配置
 * @param fetchOptions fetch的请求配置
 */
export function Request(url, params = {}, options = {}) {
  return baseRequest(url, params, options);
}

/**
 * 仅在非 GET 的取数接口时调用
 *
 * @param url 请求地址
 * @param userSWROptions 用户当前传入的swr配置
 * @param fetchOptions fetch的请求配置
 */
export function DeprecatedRequest(url, params = {}, options = {}) {
  return baseRequest(url, params, options);
}

function baseRequest(url, params = {}, options = {}) {
  let fetchUrl;

  // 优先级 用户传入的配置 > swr的全局配置 > 默认配置
  const config = Object.assign({}, defaultOptions, useContext(SWRConfigContext), options);

  if (typeof params === 'function') {
    try {
      fetchUrl = getDependentUrl(url, params(), options.fetchOption.method);
    } catch (err) {
      fetchUrl = '';
    }
  } else {
    fetchUrl = pontCore.getUrl(url, params, options.fetchOption.method);
  }

  const fetcher = requestUrl => pontCore.fetch(requestUrl, options.fetchOption);

  const { data, error, isValidating } = useSWR(fetchUrl, fetcher, config);

  return {
    data,
    error,
    loading: data === undefined || isValidating
  };
}

function getDependentUrl(url, paramConfig, method) {
  return () => pontCore.getUrl(url, paramConfig, method);
}
