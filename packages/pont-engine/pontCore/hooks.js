"use strict";
/**
 * @description 基于 swr 的取数hooks
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlKey = exports.useRequest = exports.SWRProvider = void 0;
var swr_1 = require("swr");
var React = require("react");
var pontCore_1 = require("./pontCore");
var defaultOptions = {
    /** 错误重试，默认关闭 */
    shouldRetryOnError: false,
    /** 获取焦点时，不重新请求 */
    revalidateOnFocus: false,
    /** 接口缓存 1 分钟 */
    dedupingInterval: 60000
};
exports.SWRProvider = function (props) {
    var children = props.children, options = __rest(props, ["children"]);
    return React.createElement(swr_1.SWRConfig, { value: __assign(__assign({}, defaultOptions), options) }, props.children);
};
/**
 * 基于 swr 的取数 hooks
 * @param url 请求地址
 * @param params 请求参数
 * @param options 配置信息
 */
function useRequest(url, params, swrOptions, fetchOptions) {
    if (params === void 0) { params = {}; }
    if (swrOptions === void 0) { swrOptions = {}; }
    if (fetchOptions === void 0) { fetchOptions = {}; }
    var fetcher = function (requestUrl) { return pontCore_1.PontCore.fetch(requestUrl, fetchOptions); };
    var method = (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.method) || 'GET';
    var urlKey = getUrlKey(url, params, method);
    var _a = swr_1.default(urlKey, fetcher, swrOptions), data = _a.data, error = _a.error, isValidating = _a.isValidating, mutate = _a.mutate;
    return {
        data: data,
        error: error,
        mutate: mutate,
        isLoading: data === undefined || isValidating
    };
}
exports.useRequest = useRequest;
function getUrlKey(url, params, method) {
    if (params === void 0) { params = {}; }
    var urlKey = typeof params === 'function'
        ? function () {
            return params ? pontCore_1.PontCore.getUrl(url, params(), method) : null;
        }
        : params
            ? pontCore_1.PontCore.getUrl(url, params, method)
            : null;
    return urlKey;
}
exports.getUrlKey = getUrlKey;
