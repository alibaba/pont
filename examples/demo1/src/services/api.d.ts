
      

      
        declare  namespace defs {
      
        export class DimConfigBO {
      
      /** attributeName */
      attributeName?: string;

      /** attributeNameCn */
      attributeNameCn?: string;

      /** attributeValue */
      attributeValue?: string;

      /** attributeValueList */
      attributeValueList?: any[];

      /** desc */
      desc?: string;

      /** dimId */
      dimId?: string;

      /** dimName */
      dimName?: string;

      /** dimNameCn */
      dimNameCn?: string;

      /** num */
      num?: number;

      /** queryWord */
      queryWord?: string;

      /** taskId */
      taskId?: string;

      /** userId */
      userId?: string;
    }
    
      

        export class DingTalkAttributeBO {
      
      /** attributeId */
      attributeId?: string;

      /** attributeName */
      attributeName?: string;

      /** attributeNameCn */
      attributeNameCn?: string;

      /** attributeValue */
      attributeValue?: string;

      /** dimensionId */
      dimensionId?: number;

      /** dimensionName */
      dimensionName?: string;

      /** dimensionNameCn */
      dimensionNameCn?: string;
    }
    
      

        export class H5DetailDO {
      
      /** attributeName */
      attributeName?: string;

      /** attributeNameCn */
      attributeNameCn?: string;

      /** attributeValue */
      attributeValue?: string;

      /** attributeValueList */
      attributeValueList?: any[];

      /** configId */
      configId?: number;

      /** dateRate */
      dateRate?: string;

      /** derivedIndexId */
      derivedIndexId?: number;

      /** derivedIndexName */
      derivedIndexName?: string;

      /** derivedIndexNameCn */
      derivedIndexNameCn?: string;

      /** derivedIndexNameCnAll */
      derivedIndexNameCnAll?: string;

      /** dimensionId */
      dimensionId?: string;

      /** ds */
      ds?: string;

      /** queryStateCode */
      queryStateCode?: string;

      /** relativeIndex */
      relativeIndex?: any[];

      /** sourceTable */
      sourceTable?: string;

      /** subscribe */
      subscribe?: boolean;

      /** taskId */
      taskId?: string;

      /** trendValue */
      trendValue?: string;

      /** trendValueMap */
      trendValueMap?: any;

      /** userId */
      userId?: string;

      /** value */
      value?: string;
    }
    
      

        export class PreinstallBO {
      
      /** desc */
      desc?: string;

      /** indexNameAllCn */
      indexNameAllCn?: string;

      /** sql */
      sql?: string;
    }
    
      

        export class QueryStatusBO {
      
      /** attributeValueList */
      attributeValueList?: any[];

      /** result */
      result?: string;

      /** schedule */
      schedule?: string;

      /** status */
      status?: number;
    }
    
      

        export class SqlConfigBO {
      
      /** attributeSelectMap */
      attributeSelectMap?: any;

      /** attributeString */
      attributeString?: string;

      /** attributeValue */
      attributeValue?: string;

      /** bizUnitName */
      bizUnitName?: string;

      /** conditionMap */
      conditionMap?: any;

      /** configClass */
      configClass?: any;

      /** derivedAttributeIndexNameCn */
      derivedAttributeIndexNameCn?: string;

      /** derivedIndexId */
      derivedIndexId?: number;

      /** derivedIndexName */
      derivedIndexName?: string;

      /** derivedIndexNameCn */
      derivedIndexNameCn?: string;

      /** dimId */
      dimId?: string;

      /** dimensionName */
      dimensionName?: string;

      /** ds */
      ds?: string;

      /** id */
      id?: number;

      /** isSubscription */
      isSubscription?: string;

      /** queryResult */
      queryResult?: string;

      /** queryWord */
      queryWord?: string;

      /** relativeIndexNameCn */
      relativeIndexNameCn?: string;

      /** sourceLogicTabelName */
      sourceLogicTabelName?: string;

      /** sql */
      sql?: string;

      /** startDate */
      startDate?: string;

      /** taskId */
      taskId?: string;

      /** timePeriodNameCn */
      timePeriodNameCn?: string;

      /** type */
      type?: number;

      /** userId */
      userId?: string;
    }
    
      

        export class StaffBO {
      
      /** sortMethod */
      sortMethod?: string;

      /** userId */
      userId?: number;

      /** userNameCn */
      userNameCn?: string;
    }
    
      

        export class SystemIndexBO {
      
      /** attributeValue */
      attributeValue?: string;

      /** granularity */
      granularity?: any[];

      /** indexNameAllCn */
      indexNameAllCn?: string;

      /** indexNameCn */
      indexNameCn?: string;

      /** sourceTable */
      sourceTable?: string;
    }
    
      
    }
    
      

      
        declare  namespace API {
        
          /**
           * 系统指标（主推指标)）
           */
          export namespace  {
            
      /**
        * 获取系统指标
        * /dataphin/assistant/dingtalk/portal/systemindex
        */
      export namespace getSystemIndex {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params): defs.SystemIndexBO
    
      }
    

      /**
        * 插入一条指标
        * /dataphin/assistant/dingtalk/portal/systemindex
        */
      export namespace insertSystemIndexBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.SystemIndexBO): number
    
      }
    

      /**
        * 更新指标群
        * /dataphin/assistant/dingtalk/portal/systemindex
        */
      export namespace updateSystemIndex {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: any): number
    
      }
    

      /**
        * 预览提交
        * /dataphin/assistant/dingtalk/portal/systemindex/preview
        */
      export namespace previewCommit {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.SystemIndexBO): string
    
      }
    

      /**
        * 预览轮询
        * /dataphin/assistant/dingtalk/portal/systemindex/preview/{taskId}
        */
      export namespace previewResult {
        
      export 
      class Params {
        
      /** 查询进度及结果的对象体 */
      taskId: string;
      }
    ;

      export function request(params: Params): defs.QueryStatusBO
    
      }
    

      /**
        * 删除一条指标
        * /dataphin/assistant/dingtalk/portal/systemindex/{indexNameAllCn}
        */
      export namespace deleteSystemIndex {
        
      export 
      class Params {
        
      /** indexNameAllCn */
      indexNameAllCn: string;
      }
    ;

      export function request(params: Params): number
    
      }
    
          }
        


          /**
           * 预设指标
           */
          export namespace  {
            
      /**
        * 获取所有预设指标
        * /dataphin/assistant/dingtalk/portal/preinstall
        */
      export namespace getPreinstallBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params): defs.PreinstallBO
    
      }
    

      /**
        * 更新一条预设指标
        * /dataphin/assistant/dingtalk/portal/preinstall
        */
      export namespace updatePreinstallBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.PreinstallBO): number
    
      }
    

      /**
        * 预设指标提交预览
        * /dataphin/assistant/dingtalk/portal/preinstall/preview
        */
      export namespace preinstallCommit {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.PreinstallBO): string
    
      }
    

      /**
        * 删除某条预设指标
        * /dataphin/assistant/dingtalk/portal/preinstall/{indexNameAllCn}
        */
      export namespace deletePreinstallBO {
        
      export 
      class Params {
        
      /** 指标中文名 */
      indexNameAllCn: string;
      }
    ;

      export function request(params: Params): defs.PreinstallBO
    
      }
    
          }
        


          /**
           * 核心维度增减
           */
          export namespace  {
            
      /**
        * 获取核心维度
        * /dataphin/assistant/dingtalk/portal/dimconfig
        */
      export namespace getDimConfigBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params): defs.DimConfigBO
    
      }
    

      /**
        * 添加一条核心维度
        * /dataphin/assistant/dingtalk/portal/dimconfig
        */
      export namespace insertDimConfigBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.DimConfigBO): number
    
      }
    

      /**
        * 搜索框来查询维度值
        * /dataphin/assistant/dingtalk/portal/dimconfig/attribute/commit
        */
      export namespace queryAttributeValueCommit {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.DimConfigBO): string
    
      }
    

      /**
        * 根据维度id去获取属性名称
        * /dataphin/assistant/dingtalk/portal/dimconfig/attribute/name/{dimensionId}
        */
      export namespace getAttributeByDimId {
        
      export 
      class Params {
        
      /** 维度id */
      dimensionId: string;
      }
    ;

      export function request(params: Params): defs.DingTalkAttributeBO
    
      }
    

      /**
        * 轮询属性查询结果
        * /dataphin/assistant/dingtalk/portal/dimconfig/attribute/status/{taskId}
        */
      export namespace queryAttributeValue {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.DimConfigBO): defs.QueryStatusBO
    
      }
    

      /**
        * 根据dimId去删除核心维度配置
        * /dataphin/assistant/dingtalk/portal/dimconfig/{dimId}
        */
      export namespace deleteDimConfigBO {
        
      export 
      class Params {
        
      /** 维度id */
      dimId: string;
      }
    ;

      export function request(params: Params): number
    
      }
    

      /**
        * 搜索框，维度名称搜寻提交
        * /dataphin/assistant/dingtalk/portal/dimconfig/{dimNameCn}
        */
      export namespace searchDimByName {
        
      export 
      class Params {
        
      /** 维度名 */
      dimNameCn: string;
      }
    ;

      export function request(params: Params): defs.DimConfigBO
    
      }
    
          }
        


          /**
           * h5页面接口
           */
          export namespace  {
            
      /**
        * 插入收藏-详情页
        * /dataphin/assistant/dingtalk/portal/h5/detail
        */
      export namespace insertSubBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.H5DetailDO): string
    
      }
    

      /**
        * 取消收藏-详情页
        * /dataphin/assistant/dingtalk/portal/h5/detail
        */
      export namespace delSubBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.H5DetailDO): string
    
      }
    

      /**
        * 详情页信息
        * /dataphin/assistant/dingtalk/portal/h5/detail/{queryResult}
        */
      export namespace getH5Detail {
        
      export 
      class Params {
        
      /** 带有userId，date，confgid的字符串，131745u20180703d-492110612c  */
      queryResult: string;
      }
    ;

      export function request(params: Params): defs.H5DetailDO
    
      }
    

      /**
        * 提交查询
        * /dataphin/assistant/dingtalk/portal/h5/query
        */
      export namespace commitQuery {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.SqlConfigBO): defs.SqlConfigBO
    
      }
    

      /**
        * 轮询判断
        * /dataphin/assistant/dingtalk/portal/h5/query/status/
        */
      export namespace queryProcess {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: defs.H5DetailDO): defs.SqlConfigBO
    
      }
    
          }
        


          /**
           * 值班人员管理
           */
          export namespace  {
            
      /**
        * 获取接单人员名单
        * /dataphin/assistant/dingtalk/portal/staff
        */
      export namespace getStaffBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params): defs.StaffBO
    
      }
    

      /**
        * 更新接单人员名单
        * /dataphin/assistant/dingtalk/portal/staff
        */
      export namespace updateStaffBO {
        
      export 
      class Params {
        
      }
    ;

      export function request(params: Params, bodyParams: any): number
    
      }
    
          }
        


          /**
           * h5及pc端的查询接口
           */
          export namespace  {
            
      /**
        * index
        * /dataphin/assistant/dingtalk/portal/h5/{id}
        */
      export namespace index {
        
      export 
      class Params {
        
      /** id */
      id: string;
      }
    ;

      export function request(params: Params): string
    
      }
    
          }
        
      }
    
      
    