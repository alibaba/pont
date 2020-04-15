/**
 * @description 基于 swr 的取数hooks
 */
import { ConfigInterface } from 'swr';
import * as React from 'react';
export declare const SWRProvider: React.FC<ConfigInterface>;
/**
 * 基于 swr 的取数 hooks
 * @param url 请求地址
 * @param params 请求参数
 * @param options 配置信息
 */
export declare function useRequest(url: any, params?: any, swrOptions?: any, fetchOptions?: any): {
    data: any;
    error: any;
    mutate: (data?: any, shouldRevalidate?: boolean) => Promise<any>;
    isLoading: boolean;
};
export declare function getUrlKey(url: any, params: any, method: string): string | (() => string);
