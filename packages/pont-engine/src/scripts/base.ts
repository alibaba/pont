import { Translator } from '../translate';
import * as _ from 'lodash';
import { hasChinese, DataSourceConfig, Config } from '../utils';
import { StandardDataSource } from '../standard';
import fetch from 'node-fetch';

export class OriginBaseReader {
  constructor(protected config: DataSourceConfig, protected report: any) {}

  /** 翻译中文类名等 */
  async translateChinese(jsonString: string) {
    let retString = jsonString;
    try {
      const matchItems = jsonString
        // 匹配中英文混合及包含 空格，«，»，-, (,)的情况
        .match(/"[a-z0-9\s-]*[\u4e00-\u9fa5]+[a-z0-9\s-«»()\u4e00-\u9fa5]*":/gi);
      if (!matchItems) {
        return retString;
      }

      let chineseKeyCollect = matchItems.map(item => item.replace(/["":]/g, ''));

      // 去重
      chineseKeyCollect = _.uniq(chineseKeyCollect.map(item => (item.includes('«') ? item.split('«')[0] : item)));

      // 按长度倒序排序，防止替换时中文名部分重名
      // 例如: 请求参数vo, 请求参数, 替换时先替换 请求参数vo, 后替换请求参数
      chineseKeyCollect.sort((pre, next) => next.length - pre.length);

      let result = await Promise.all(chineseKeyCollect.map(text => Translator.translateAsync(text)));
      // const normalizeRegStr = (str: string) => str.replace(/(\W)/g, '$1');
      const toRegStr = str => str.replace(/(\W)/g, '\\$1');
      result.forEach((enKey: string, index) => {
        const chineseKey = chineseKeyCollect[index];
        // this.report(chineseKey + ' ==> ' + enKey);
        if (enKey) {
          retString = retString.replace(eval(`/${toRegStr(chineseKey)}/g`), enKey);
        }
      });
      return retString;
    } catch (err) {
      return retString;
    }
  }

  /** 数据转换，可覆盖 */
  transform2Standard(data, _usingOperationId: boolean, _originName: string) {
    return data;
  }

  /** 数据获取 */
  fetchMethod(url: string): Promise<string> {
    if (this.config.fetchMethodPath) {
      const fetchMethod = Config.getFetchMethodFromConfig(this.config);
      return fetchMethod(url);
    }

    return fetch(url).then(res => res.text());
  }

  /** 获取远程数据源 */
  async fetchData() {
    // 获取数据源
    this.report('获取远程数据中...');
    let swaggerJsonStr: string = await this.fetchMethod(this.config.originUrl);

    // 翻译中文类名等
    swaggerJsonStr = await this.translateChinese(swaggerJsonStr);
    this.report('自动翻译中文基类完成！');

    const data = await JSON.parse(swaggerJsonStr);
    this.report('远程数据获取成功！');

    return data;
  }

  /** 获取接口数据，解析并返回 */
  async fetchRemoteData(): Promise<StandardDataSource> {
    try {
      const data = await this.fetchData();

      // 将数据源转换为标准数据源格式
      let remoteDataSource = this.transform2Standard(data, this.config.usingOperationId, this.config.name);
      this.report('远程数据解析完毕!');

      // 如果用户配置了数据的自定义转换方法、如接口过滤等
      if (this.config.transformPath) {
        this.report('获取用户自定义数据转换方法中...');
        const transformProgram = Config.getTransformFromConfig(this.config);

        remoteDataSource = transformProgram(remoteDataSource);
        this.report('用户自定义数据转换方法执行完毕');
      }

      // 对解析后的标准数据源进行校验
      this.checkDataSource(remoteDataSource);
      this.report('解析后数据校验完毕！');

      this.report('远程对象创建完毕！');

      return remoteDataSource;
    } catch (e) {
      throw new Error('读取远程接口数据失败！' + e.toString());
    }
  }

  protected checkDataSource(dataSource: StandardDataSource) {
    const { mods, baseClasses } = dataSource;

    const errorModNames = [] as string[];
    const errorBaseNames = [] as string[];

    mods.forEach(mod => {
      if (hasChinese(mod.name)) {
        errorModNames.push(mod.name);
      }
    });

    baseClasses.forEach(base => {
      if (hasChinese(base.name)) {
        errorBaseNames.push(base.name);
      }
    });

    if (errorBaseNames.length && errorModNames.length) {
      const errMsg = ['当前数据源有如下项不符合规范，需要后端修改'];
      errorModNames.forEach(modName => errMsg.push(`模块名${modName}应该改为英文名！`));
      errorBaseNames.forEach(baseName => errMsg.push(`基类名${baseName}应该改为英文名！`));

      throw new Error(errMsg.join('\n'));
    }
  }
}
