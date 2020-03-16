/**
 * @description pont内置请求单例
 */
declare class PontCoreManager {
    static singleInstance: PontCoreManager;
    static getSignleInstance(): PontCoreManager;
    /**
     * fetch请求
     * @param url 请求url
     * @param options fetch 请求配置
     */
    fetch(url: string, options?: {}): Promise<any>;
    /**
     * 使用外部传入的请求方法替换默认的fetch请求
     */
    useFetch(fetch: (url: string, options?: any) => Promise<any>): void;
    getUrl(path: string, queryParams: any, method: string): string;
}
export declare const PontCore: PontCoreManager;
export {};
