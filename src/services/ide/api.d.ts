
      

      
      declare namespace defs {
        export namespace ide {
      
        export class AccountSourceId {
      
      /** inheritable */
      inheritable?: boolean;

      /** name */
      name?: string;

      /** pushable */
      pushable?: boolean;

      /** syncable */
      syncable?: boolean;
    }
    
      

        export class AddResourceDTO {
      
      /** content */
      content?: string;

      /** contentType */
      contentType?: string;

      /** description */
      description?: string;

      /** dirName */
      dirName?: string;

      /** name */
      name?: string;

      /** size */
      size?: number;
    }
    
      

        export class ApplyDTO {
      
      /** 账号类型 */
      accountType?: number;

      /** 申请内容 */
      content?: string;

      /** 权限实体 */
      entities?: Array<defs.ResourceAttributeBO>;

      /** 资源类型 */
      entityType?: number;

      /** 结束时间 */
      gmtEnd?: string;

      /** 开始时间 */
      gmtStart?: string;

      /** 权限类型 - 查询、开发 */
      operationTypes?: Array<integer>;

      /** 项目id或业务板块id */
      projectId?: number;

      /** 项目名称 */
      projectName?: string;

      /** 申请理由 */
      reason?: string;

      /** 资源中文名 */
      resourceCn?: string;

      /** 资源描述 */
      resourceDes?: string;

      /** 资源id */
      resourceId?: string;

      /** 逻辑表类型 */
      tableType?: number;
    }
    
      

        export class ApproveBO {
      
      /** accountType */
      accountType?: number;

      /** applicant */
      applicant?: string;

      /** applyId */
      applyId?: number;

      /** approveId */
      approveId?: number;

      /** approveReason */
      approveReason?: string;

      /** approver */
      approver?: string;

      /** content */
      content?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** operationTypes */
      operationTypes?: Array<integer>;

      /** permissionApproveStatus */
      permissionApproveStatus?: '1' | '2' | '3' | '4' | 1 | 2 | 3 | 4;

      /** permissionEnd */
      permissionEnd?: string;

      /** permissionStart */
      permissionStart?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** reason */
      reason?: string;

      /** resourceId */
      resourceId?: number;

      /** resourceName */
      resourceName?: string;

      /** resourceType */
      resourceType?: '1' | '2' | '3' | 1 | 2 | 3;
    }
    
      

        export class ApproveDetailBO {
      
      /** accountType */
      accountType?: number;

      /** applicant */
      applicant?: string;

      /** applyId */
      applyId?: number;

      /** approveId */
      approveId?: number;

      /** approveReason */
      approveReason?: string;

      /** approver */
      approver?: string;

      /** content */
      content?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** modelAttributes */
      modelAttributes?: object;

      /** operationTypes */
      operationTypes?: Array<integer>;

      /** permissionApproveStatus */
      permissionApproveStatus?: '1' | '2' | '3' | '4' | 1 | 2 | 3 | 4;

      /** permissionEnd */
      permissionEnd?: string;

      /** permissionStart */
      permissionStart?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** reason */
      reason?: string;

      /** resourceId */
      resourceId?: number;

      /** resourceName */
      resourceName?: string;

      /** resourceType */
      resourceType?: '1' | '2' | '3' | 1 | 2 | 3;

      /** tableType */
      tableType?: '-1' | '1' | '2' | '3' | '4' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | -1 | 1 | 2 | 3 | 4 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;
    }
    
      

        export class AtomicIndexAddBO {
      
      /** atomicIndex */
      atomicIndex?: defs.AtomicIndexBO;

      /** 模型选择路径，用户选择切换模型的顺序，给model name */
      modelSelectedPath?: Array<string>;

      /** projectId */
      projectId?: number;

      /** 是否顺带发布 */
      withPublish?: boolean;
    }
    
      

        export class AtomicIndexBO {
      
      /** 计算逻辑表达式 */
      atomIndexLogic?: string;

      /** 业务板块ID */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 数据域 */
      dataDomain?: defs.DataDomainBO;

      /** 衍生原子指标数据域列表 */
      dataDomains?: Array<defs.DataDomainBO>;

      /** 数据类型 */
      dataType?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 是否支持累加 */
      isAccSum?: boolean;

      /** isDerived */
      isDerived?: boolean;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 来源模型ID */
      modelId?: number;

      /** 模型类型 */
      modelType?: '1' | '2' | '3' | 1 | 2 | 3;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 如果该指标为衍生原子指标，此处表示他所依赖的原子指标 */
      parentIds?: Array<integer>;

      /** 所属项目显示名 */
      projectCn?: string;

      /** 所属project，针对odps为所属project */
      projectId?: number;

      /** 所属项目英文名 */
      projectName?: string;

      /** 原子指标来源路径和属性名 */
      sourcePathAttribute?: string;

      /** status */
      status?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 租户ID */
      tenantId?: number;

      /** 原子指标对应时间周期字段 */
      timeColAttributeId?: number;

      /** 原子指标对应时间周期字段的格式 */
      timeColFormat?: string;

      /** 计算逻辑中使用到的字段名 */
      usedAttributes?: Array<string>;

      /** 计算逻辑中使用到的字段（统计路径+字段） */
      usedFields?: Array<string>;
    }
    
      

        export class AtomicIndexDetailBO {
      
      /** 选中的模型属性名 */
      attributeName?: string;

      /** 数据域 */
      dataDomain?: defs.DataDomainBO;

      /** 该属性的衍生和非衍生指标 */
      derivedAtomicIndexes?: Array<defs.AtomicIndexBO>;

      /** model */
      model?: defs.SingleModelBO;

      /** modelId */
      modelId?: number;

      /** modelType */
      modelType?: '1' | '2' | '3' | 1 | 2 | 3;
    }
    
      

        export class AttributeAddBO {
      
      /** 字段类型 */
      attributeType?: number;

      /** 属性列表 */
      attributes?: Array<defs.AttributeBO>;

      /** 逻辑表名 */
      factTableName?: string;

      /** logics */
      logics?: string;

      /** 是否主键 */
      needPk?: boolean;
    }
    
      

        export class AttributeBO {
      
      /** 属性数据类型 */
      attributeDataType?: string;

      /** 默认值 */
      attributeDefaultValue?: string;

      /** 属性是否分区 */
      attributeIsPartition?: boolean;

      /** 计算逻辑 */
      attributeLogic?: string;

      /** 作用域 */
      attributeScope?: string;

      /** 属性序列 */
      attributeSeq?: number;

      /** attributeSqlFromPart */
      attributeSqlFromPart?: string;

      /** 事实表属性类型，维度（dimension）或度量（measure），@see BizAttributeTypeEnum */
      attributeType?: number;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 维度id */
      dimensionId?: number;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 是否有下游依赖 */
      hasChildDependence?: boolean;

      /** 是否有线上版本 */
      hasOnline?: boolean;

      /** 热度值 */
      hotVal?: number;

      /** 对象ID */
      id?: number;

      /** 是否外键 */
      isFk?: boolean;

      /** isNotNull */
      isNotNull?: boolean;

      /** 是否物理化 */
      isPhysical?: boolean;

      /** 是否主键 */
      isPk?: boolean;

      /** isRepeat */
      isRepeat?: boolean;

      /** isUnique */
      isUnique?: boolean;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** 模型id */
      modelId?: number;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 是否推荐字段 */
      recommend?: boolean;

      /** 引用维度逻辑表中文名称 */
      refDimCn?: string;

      /** 引用维度逻辑表英文名称 */
      refDimName?: string;

      /** 引用维度逻辑表ID */
      refDimensionId?: number;

      /** 引用维度 */
      refDimensionIsMaxPt?: boolean;

      /** 引用维度角色名 */
      refDimensionRole?: string;

      /** 引用维度角色中文名 */
      refDimensionRoleCn?: string;

      /** 测试状态 */
      status?: number;

      /** 来源表 */
      table?: string;

      /** 租户ID */
      tenantId?: number;

      /** 维度表属性类型，@see DimensionAttributeTypeEnum */
      type?: number;
    }
    
      

        export class AttributeBatchDeleteResultBO {
      
      /** 字段Id */
      attributeId?: number;

      /** deleteSuccess */
      deleteSuccess?: boolean;

      /** 错误信息 */
      errorInfo?: string;
    }
    
      

        export class AuthBaseBO {
      
    }
    
      

        export class BaseBO {
      
      /** 业务板块 */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 事实逻辑表表类型df/di */
      factModelType?: number;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 表类型 */
      modelType?: number;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 所属项目 */
      projectId?: number;

      /** 发布状态 */
      status?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 表编辑状态 */
      tableEditStatus?: number;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class BaseDipResult {
      
      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象id */
      id?: string;

      /** 对象标签列表 */
      labels?: Array<string>;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 实体类型 */
      tableEntityType?: '1' | '2' | 1 | 2;

      /** 对象类型 */
      type?: '-1' | '1' | '2' | '3' | '4' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | -1 | 1 | 2 | 3 | 4 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;
    }
    
      

        export class BaseObject {
      
      /** cn */
      cn?: string;

      /** des */
      des?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** name */
      name?: string;

      /** owner */
      owner?: string;

      /** status */
      status?: number;
    }
    
      

        export class BasicScheduleConfigInfoDTO {
      
      /** 调度参数配置, 以';'进行分隔, 格式是 A=abc;B=bcd */
      configParameters?: string;

      /** 描述 */
      description?: string;

      /** 逻辑表名称 */
      logicalTableName?: string;

      /** 任务类型 */
      operatorType?: 'HIVE_SQL' | 'HIVE_SQL_23X' | 'HADOOP_MR' | 'MAX_COMPUTE_SQL' | 'MAX_COMPUTE_MR' | 'SPARK_SQL_ON_MAX_COMPUTE' | 'SPARK_JAR_ON_MAX_COMPUTE' | 'SPARK_SQL_ON_HIVE' | 'SPARK_JAR_ON_HIVE' | 'SHELL' | 'DATAX' | 'PYTHON' | 'PERL' | 'ONE_SERVICE_SQL' | 'ONE_SERVICE_SQL_HIVE_11X' | 'ONE_SERVICE_SQL_HIVE_23X' | 'DRY_RUN' | 'VIRTUAL';

      /** 前端展示的任务类型 */
      operatorTypeAlias?: string;
    }
    
      

        export class BatchProjectMemberDTO {
      
      /** 目标用户 ID */
      userId?: Array<string>;

      /** 赋予用户的角色 */
      userRoleId?: number;
    }
    
      

        export class BizConditionAddBO {
      
      /** bizConditionBO */
      bizConditionBO?: defs.BizConditionBO;

      /** 模型选择路径，用户选择切换模型的顺序，给model name */
      modelSelectedPath?: Array<string>;

      /** projectId */
      projectId?: number;

      /** 是否顺带发布 */
      withPublish?: boolean;
    }
    
      

        export class BizConditionBO {
      
      /** 计算逻辑表达式 */
      adjunctWordLogic?: string;

      /** 业务板块ID */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 数据域 */
      dataDomain?: defs.DataDomainBO;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 来源模型ID */
      modelId?: number;

      /** 模型类型 */
      modelType?: '1' | '2' | '3' | 1 | 2 | 3;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 项目英文名称 */
      projectCn?: string;

      /** 项目ID */
      projectId?: number;

      /** 项目显示称 */
      projectName?: string;

      /** 业务限定来源路径和属性名 */
      sourcePathAttribute?: string;

      /** 状态 */
      status?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 租户ID */
      tenantId?: number;

      /** 计算逻辑中使用的字段名 */
      usedAttributes?: Array<string>;

      /** 计算逻辑中使用到的字段（统计路径+字段） */
      usedFields?: Array<string>;
    }
    
      

        export class BizDataDomainBO {
      
      /** 业务板块 */
      bizUnit?: defs.BizUnitBO;

      /** 该业务板块下面的数据域集合 */
      domainList?: Array<defs.DataDomainBO>;
    }
    
      

        export class BizDateFunctionBO {
      
      /** 描述 */
      description?: string;

      /** 名称 */
      name?: string;

      /** 参数列表 */
      params?: Array<defs.ParamBO>;
    }
    
      

        export class BizGraphBO {
      
      /** 业务过程 */
      bizProcessList?: Array<defs.BizProcessBO>;

      /** 普通维度&&杂项维度 */
      dimList?: Array<defs.DimBO>;

      /** 数据域 */
      domain?: defs.DataDomainBO;

      /** 其他维度 */
      otherDimList?: Array<defs.DimBO>;
    }
    
      

        export class BizProcessBO {
      
      /** 归属业务板块 ID */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 所属数据域 ID */
      dataDomainId?: number;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 业务过程是否被依赖 */
      hasDependcy?: boolean;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 归属项目 ID */
      projectId?: number;

      /** 编辑状态 */
      status?: number;

      /** 租户ID */
      tenantId?: number;

      /** 类型 */
      type?: number;
    }
    
      

        export class BizProcessListBO {
      
      /** 归属业务板块 ID */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 所属数据域 ID */
      dataDomainId?: number;

      /** 数据域名称 */
      dataDomainName?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 业务过程是否被依赖 */
      hasDependcy?: boolean;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 项目显示名 */
      projectCn?: string;

      /** 归属项目 ID */
      projectId?: number;

      /** 项目英文名 */
      projectName?: string;

      /** 编辑状态 */
      status?: number;

      /** 状态名称 */
      statusName?: string;

      /** 租户ID */
      tenantId?: number;

      /** 类型 */
      type?: number;
    }
    
      

        export class BizProcessSimpleInfoBO {
      
      /** 业务过程ID */
      bizProcessId?: number;

      /** 业务过程名称 */
      bizProcessName?: string;

      /** 关联的维度ID列表 */
      refDimIds?: Array<integer>;
    }
    
      

        export class BizProcessStructureBO {
      
      /** 业务过程列表 */
      bizProcessSimpleInfoBOList?: Array<defs.BizProcessSimpleInfoBO>;

      /** 维度列表 */
      dimensionSimpleInfoBOList?: Array<defs.DimensionSimpleInfoBO>;
    }
    
      

        export class BizUnitBO {
      
      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 包含数据域个数 */
      domainNum?: number;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 定制icon */
      icon?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class BizUnitGlobalAssetBO {
      
      /** 业务板块ID */
      bizUnitId?: number;

      /** 业务板块名称 */
      bizUnitName?: string;

      /** 业务板块计算消耗[离线数据] */
      calculationConsumption?: number;

      /** 业务板块下维度逻辑表数量 */
      dimensionTableCnt?: number;

      /** 业务板块下事实逻辑表数量 */
      factTableCnt?: number;

      /** 业务板块下项目总数 */
      projectCnt?: number;

      /** 业务板块存消耗[离线数据] */
      storage?: number;

      /** 业务板块下汇总逻辑表数量 */
      summaryTableCnt?: number;

      /** 业务板块下表数量（包括事实逻辑表，维度逻辑表，汇总逻辑表） */
      tableCnt?: number;
    }
    
      

        export class Character {
      
    }
    
      

        export class CodeBO {
      
      /** 代码所属对象的业务板块名称 */
      catalog?: string;

      /** 代码 */
      code?: string;

      /** 代码所属对象的字段，指标，限定名 */
      field?: string;

      /** 项目ID */
      projectId?: number;

      /** 代码所属对象的来源表catalog，物理表为项目名，逻辑表为业务板块名 */
      sourceCatalog?: string;

      /** 代码所属对象的主来源字段名 */
      sourceField?: string;

      /** 代码所属对象的来源表名 */
      sourceTable?: string;

      /** 代码所属对象的表名 */
      table?: string;

      /** 租户ID */
      tenantId?: number;

      /** 代码类型，默认为SQL */
      type?: 'SQL' | 'PYTHON' | 'PERL';

      /** 用户ID */
      userId?: string;
    }
    
      

        export class CodeValidateBO {
      
      /** 校验错误代码 */
      errorCode?: string;

      /** 校验附加结果信息 */
      extraMessage?: object;

      /** 校验结果信息 */
      message?: string;

      /** 校验是否成功 */
      success?: boolean;
    }
    
      

        export class ColumnBO {
      
      /** 中文名 */
      cn?: string;

      /** 字段ID */
      columnId?: string;

      /** 字段中文名称 */
      comment?: string;

      /** 创建时间 */
      createTime?: string;

      /** 描述 */
      des?: string;

      /** 是否外键字段 */
      fk?: boolean;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** guid */
      guid?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 字段英文名称 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 是否分区字段 */
      partition?: boolean;

      /** partitioned */
      partitioned?: boolean;

      /** 是否主键字段 */
      pk?: boolean;

      /** sequence */
      seqNumber?: number;

      /** 租户ID */
      tenantId?: number;

      /** 字段类型 */
      type?: string;

      /** 示例值 */
      values?: Array<string>;
    }
    
      

        export class ComputeEngineVO {
      
      /** 集群地址，max compute只能配置一个，hadoop可配置多个 */
      clusterUrls?: Array<string>;

      /** hostips */
      hostIps?: string;

      /** 计算引擎类型 */
      type?: string;

      /** 计算引擎版本 */
      version?: string;

      /** versionKeyEnumStringMap */
      versionKeyEnumStringMap?: object;
    }
    
      

        export class ComputingEngineBO {
      
      /** 集群地址，max compute只能配置一个，hadoop可配置多个 */
      clusterUrls?: Array<string>;

      /** displayName */
      displayName?: string;

      /** hostips */
      hostIps?: Array<defs.HostIp>;

      /** 计算引擎类型 */
      type?: 'MAX_COMPUTE' | 'HADOOP' | 'E_MAP_REDUCE';

      /** 计算引擎版本 */
      version?: string;
    }
    
      

        export class ConnectivityResult {
      
      /** failedCode */
      failedCode?: string;

      /** msg */
      msg?: string;

      /** status */
      status?: boolean;
    }
    
      

        export class CreateNodeDTO {
      
      /** 类别，此处写死codeManage */
      category?: string;

      /** 节点描述 */
      description?: string;

      /** 所在目录位置 */
      dirName?: string;

      /** id */
      id?: number;

      /** 节点名称 */
      name?: string;

      /** 节点类型 */
      operatorType?: number;

      /** 所属projectId */
      projectId?: number;

      /** 调度类型 */
      rsType?: number;
    }
    
      

        export class Creator {
      
      /** userId */
      userId?: string;

      /** userName */
      userName?: string;
    }
    
      

        export class CrossPeriodUpstreamDTO {
      
      /** 关联的字段列表 */
      associatedColumns?: Array<string>;

      /** associatedColumnsLowerCase */
      associatedColumnsLowerCase?: Array<string>;

      /** 周期差, 恒为正数, 从1开始 */
      periodDiff?: number;

      /** 跨周期依赖类型, 自依赖[SELF_DEPEND], 自定义[CUSTOMIZED] */
      type?: 'SELF_DEPEND' | 'CUSTOMIZED';

      /** 上游节点id */
      upstreamNodeId?: string;
    }
    
      

        export class DataDomainBO {
      
      /** 英文缩写 */
      abbreviation?: string;

      /** bizUnitId */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class DataDomainDimBO {
      
      /** dims */
      dims?: Array<defs.DimBO>;

      /** domain */
      domain?: defs.DataDomainBO;
    }
    
      

        export class DataSectionBO {
      
      /** 分布的key值 */
      key?: string;

      /** key所对应的value */
      value?: number;
    }
    
      

        export class DataSourceConfigVO {
      
      /** bindProject */
      bindProject?: boolean;

      /** bindProjectName */
      bindProjectName?: string;

      /** clusterHostInfo */
      clusterHostInfo?: string;

      /** cn */
      cn?: string;

      /** computeEngineVO */
      computeEngineVO?: defs.ComputeEngineVO;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** dataSourceTypeEnum */
      dataSourceTypeEnum?: 'MAX_COMPUTE' | 'MYSQL' | 'SQL_SERVER' | 'HIVE' | 'OS' | 'POSTGRE_SQL' | 'EMR_HIVE' | 'ORACLE' | 'FTP' | 'HDFS' | 'VERTICA' | 'HADOOP' | 'DRDS';

      /** dataSourceUseTypeEnum */
      dataSourceUseTypeEnum?: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';

      /** dbName */
      dbName?: string;

      /** defaultFS */
      defaultFS?: string;

      /** defaultNameNodePassword */
      defaultNameNodePassword?: string;

      /** defaultNameNodeUser */
      defaultNameNodeUser?: string;

      /** des */
      des?: string;

      /** endPoint */
      endPoint?: string;

      /** ftpProtocolEnum */
      ftpProtocolEnum?: 'FTP' | 'SFTP';

      /** generalKerberosIsOn */
      generalKerberosIsOn?: boolean;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hadoopNameNodes */
      hadoopNameNodes?: Array<defs.HadoopNameNodeBO>;

      /** hasKerberosConfigFile */
      hasKerberosConfigFile?: boolean;

      /** hdfsHostLoginInfo */
      hdfsHostLoginInfo?: defs.HostLoginInfo;

      /** hdfsKerberosBO */
      hdfsKerberosBO?: defs.KerberosBO;

      /** hdfsUser */
      hdfsUser?: string;

      /** historyLog */
      historyLog?: string;

      /** hiveKerberosBO */
      hiveKerberosBO?: defs.KerberosBO;

      /** hiveMetaDs */
      hiveMetaDs?: defs.DataSourceConfigVO;

      /** host */
      host?: string;

      /** hostMapping */
      hostMapping?: string;

      /** id */
      id?: number;

      /** kdcAddress */
      kdcAddress?: string;

      /** kerberosConfigFileId */
      kerberosConfigFileId?: string;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** maxComputeProject */
      maxComputeProject?: string;

      /** name */
      name?: string;

      /** owner */
      owner?: string;

      /** ownerName */
      ownerName?: string;

      /** password */
      password?: string;

      /** port */
      port?: string;

      /** schema */
      schema?: string;

      /** serviceUrl */
      serviceUrl?: string;

      /** sparkDeployTypeEnum */
      sparkDeployTypeEnum?: 'STANDALONE' | 'MESOS' | 'YARN';

      /** sparkHostLoginInfo */
      sparkHostLoginInfo?: defs.HostLoginInfo;

      /** sparkKerberosBO */
      sparkKerberosBO?: defs.KerberosBO;

      /** sparkMaster */
      sparkMaster?: string;

      /** sparkTaskGenerated */
      sparkTaskGenerated?: boolean;

      /** sparkTaskSupported */
      sparkTaskSupported?: boolean;

      /** tenantId */
      tenantId?: number;

      /** uploadKerberosConfigFileName */
      uploadKerberosConfigFileName?: string;

      /** url */
      url?: string;

      /** user */
      user?: string;

      /** versionMapping */
      versionMapping?: object;

      /** yarnConfDir */
      yarnConfDir?: string;

      /** yarnHostsMapping */
      yarnHostsMapping?: string;

      /** yarnNameNodeIp */
      yarnNameNodeIp?: string;

      /** yarnNameNodePassword */
      yarnNameNodePassword?: string;

      /** yarnNameNodeUser */
      yarnNameNodeUser?: string;
    }
    
      

        export class DataSourceSaveResultVO {
      
      /** akIsOwner */
      akIsOwner?: boolean;

      /** dataSourceTypeEnum */
      dataSourceTypeEnum?: 'MAX_COMPUTE' | 'MYSQL' | 'SQL_SERVER' | 'HIVE' | 'OS' | 'POSTGRE_SQL' | 'EMR_HIVE' | 'ORACLE' | 'FTP' | 'HDFS' | 'VERTICA' | 'HADOOP' | 'DRDS';

      /** dsId */
      dsId?: number;

      /** warningMessage */
      warningMessage?: string;
    }
    
      

        export class DatasourceAccessInfoBO {
      
      /** 数据源接入进度,百分制[0-100][离线数据] */
      accessProcess?: number;

      /** 数据源唯一ID */
      dsGuid?: string;

      /** 数据源名称 */
      name?: string;
    }
    
      

        export class DataxColumnVO {
      
      /** 格式 */
      format?: string;

      /** 字段序号 */
      index?: number;

      /** 字段名 */
      name?: string;

      /** 字段类型 */
      type?: string;

      /** 字段值 */
      value?: string;
    }
    
      

        export class DataxPluginVO {
      
      /** columnList */
      columnList?: Array<defs.DataxColumnVO>;

      /** columns */
      columns?: Array<string>;

      /** compress */
      compress?: string;

      /** dateFormat */
      dateFormat?: string;

      /** dsId */
      dsId?: number;

      /** encoding */
      encoding?: string;

      /** fieldDelimiter */
      fieldDelimiter?: string;

      /** fileFormat */
      fileFormat?: string;

      /** fileName */
      fileName?: string;

      /** fileType */
      fileType?: string;

      /** multiTable */
      multiTable?: boolean;

      /** parquetSchema */
      parquetSchema?: string;

      /** partition */
      partition?: string;

      /** path */
      path?: string;

      /** pkgAuthProject */
      pkgAuthProject?: string;

      /** postSql */
      postSql?: string;

      /** preSql */
      preSql?: string;

      /** project */
      project?: string;

      /** querySql */
      querySql?: string;

      /** session */
      session?: string;

      /** skipHeader */
      skipHeader?: boolean;

      /** sourceConfig */
      sourceConfig?: string;

      /** splitMode */
      splitMode?: string;

      /** splitPk */
      splitPk?: string;

      /** tableName */
      tableName?: string;

      /** truncate */
      truncate?: boolean;

      /** type */
      type?: string;

      /** writeMode */
      writeMode?: string;
    }
    
      

        export class DataxSettingVO {
      
      /** bytes */
      bytes?: number;

      /** channel */
      channel?: number;

      /** jvmOpts */
      jvmOpts?: string;

      /** percentage */
      percentage?: number;

      /** record */
      record?: number;
    }
    
      

        export class DependenceBO {
      
      /** 业务板块ID */
      bizUnitId?: number;

      /** 依赖该对象的子对象列表 */
      childDependencies?: Array<defs.DependenceBO>;

      /** 对象中文名 */
      cn?: string;

      /** 对象描述 */
      des?: string;

      /** hasChildDependence */
      hasChildDependence?: boolean;

      /** 对象id */
      id?: number;

      /** 对象英文名 */
      name?: string;

      /** 项目ID */
      projectId?: number;

      /** 对象类型 */
      type?: '-1' | '1' | '2' | '3' | '4' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | -1 | 1 | 2 | 3 | 4 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;
    }
    
      

        export class DerivedIndexAddBO {
      
      /** derivedIndexes */
      derivedIndexes?: Array<defs.DerivedIndexBO>;

      /** projectId */
      projectId?: number;

      /** 是否顺带发布 */
      withPublish?: boolean;
    }
    
      

        export class DerivedIndexBO {
      
      /** 中文名 */
      cn?: string;

      /** 数据类型 */
      dataType?: string;

      /** 描述 */
      des?: string;

      /** dimIds */
      dimIds?: Array<integer>;

      /** 粒度所包含的维度 */
      dimensions?: Array<defs.DimBO>;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 所属粒度 */
      granularityId?: number;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 派生指标计算逻辑表达式 */
      logic?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** parentAtomicIndex */
      parentAtomicIndex?: defs.DerivedIndexParentBO;

      /** parentAtomicIndexId */
      parentAtomicIndexId?: number;

      /** parentAtomicIndexes */
      parentAtomicIndexes?: Array<defs.DerivedIndexParentBO>;

      /** parentBizConditionId */
      parentBizConditionId?: number;

      /** 所属project */
      project?: defs.BaseBO;

      /** 所属时间周期 */
      statPeriod?: defs.TimePeriodBO;

      /** statPeriodId */
      statPeriodId?: number;

      /** status */
      status?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class DerivedIndexDimPathBO {
      
      /** 维度中文名 */
      dimCn?: string;

      /** 维度ID */
      dimId?: number;

      /** 维度名称 */
      dimName?: string;

      /** 统计路径，如Fact_itm.DIM_seller.DIM_cate */
      path?: string;
    }
    
      

        export class DerivedIndexDimPathOptionBO {
      
      /** dimCn */
      dimCn?: string;

      /** dimId */
      dimId?: number;

      /** dimName */
      dimName?: string;

      /** paths */
      paths?: Array<string>;
    }
    
      

        export class DerivedIndexParentBO {
      
      /** 所属原子指标 */
      atomicIndex?: defs.AtomicIndexBO;

      /** 业务限定 */
      bizCondition?: defs.BizConditionBO;

      /** 统计路径列表 */
      dimPaths?: Array<defs.DerivedIndexDimPathBO>;
    }
    
      

        export class DerivedIndexParentOptionsBO {
      
      /** 所属原子指标 */
      atomicIndex?: defs.AtomicIndexBO;

      /** 业务限定 */
      bizConditions?: Array<defs.BizConditionBO>;

      /** 统计路径列表 */
      dimPaths?: Array<defs.DerivedIndexDimPathOptionBO>;
    }
    
      

        export class DerivedIndexUpdateBO {
      
      /** derivedIndex */
      derivedIndex?: defs.DerivedIndexBO;

      /** projectId */
      projectId?: number;

      /** 是否顺带发布 */
      withPublish?: boolean;
    }
    
      

        export class DimAddBO {
      
      /** addType */
      addType?: '0' | '1' | '2' | '4' | '5' | '6' | 0 | 1 | 2 | 4 | 5 | 6;

      /** 主维度定义 */
      baseDimension?: defs.DimBO;

      /** bizUnitId */
      bizUnitId?: number;

      /** 父维度ID */
      parentDimensionId?: number;

      /** 项目ID */
      projectId?: number;

      /** 是否顺带发布 */
      withPublish?: boolean;
    }
    
      

        export class DimAttributeBO {
      
      /** attributeList */
      attributeList?: Array<defs.AttributeBO>;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class DimBO {
      
      /** 所属业务板块 */
      bizUnitId?: number;

      /** 维度组List，针对桥接维度设计 */
      bridgeDims?: Array<defs.DimBO>;

      /** 中文名 */
      cn?: string;

      /** compositePk */
      compositePk?: boolean;

      /** 所属数据域 */
      dataDomain?: defs.DataDomainBO;

      /** 描述 */
      des?: string;

      /** 归档逻辑 */
      designArchiveLogic?: string;

      /** 设计阶段创建时间 */
      designGmtCreate?: string;

      /** 设计阶段修改时间 */
      designGmtModified?: string;

      /** 是否归档 */
      designIsArchive?: boolean;

      /** 设计阶段最后一次修改人 */
      designLastModifier?: string;

      /** 生命周期 */
      designLifecycle?: number;

      /** 设计阶段责任人 */
      designOwner?: string;

      /** 状态 */
      designStatus?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 维度主键英文名，对于组合维度，此字段为空 */
      dimensionPk?: string;

      /** 维度主键中文名称 */
      dimensionPkCn?: string;

      /** 维度主键数据类型 */
      dimensionPkDataType?: string;

      /** 维度主键计算逻辑 */
      dimensionPkLogic?: string;

      /** 维度主键源表名 */
      dimensionPkSourceTable?: string;

      /** 维度草稿发布状态 */
      dimensionStatus?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 维度类型 */
      dimensionType?: '1' | '2' | '4' | '5' | '6' | 1 | 2 | 4 | 5 | 6;

      /** 枚举维度值列表，针对小维度设计 */
      enumDimensionValueList?: Array<defs.EnumDimensionValueDO>;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** hasParent */
      hasParent?: boolean;

      /** 对象ID */
      id?: number;

      /** isLevel */
      isLevel?: boolean;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 层级模板ID */
      levelConfig?: defs.DimensionLevelConfigDO;

      /** 层级维度主维度ID */
      mainDimId?: number;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 父维度 */
      parentDimension?: defs.DimBO;

      /** 所属project显示名 */
      projectCn?: string;

      /** 所属project */
      projectId?: number;

      /** 所属project英文名 */
      projectName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class DimGraphBO {
      
      /** 维度节点List */
      dimNodeBOList?: Array<defs.DimNodeBO>;

      /** 维度之间的关联关系边list */
      relationLineBOList?: Array<defs.RelationLineBO>;
    }
    
      

        export class DimLevelBO {
      
      /** 所属业务板块 */
      bizUnitId?: number;

      /** 维度组List，针对桥接维度设计 */
      bridgeDims?: Array<defs.DimBO>;

      /** 中文名 */
      cn?: string;

      /** compositePk */
      compositePk?: boolean;

      /** 所属数据域 */
      dataDomain?: defs.DataDomainBO;

      /** 描述 */
      des?: string;

      /** 归档逻辑 */
      designArchiveLogic?: string;

      /** 设计阶段创建时间 */
      designGmtCreate?: string;

      /** 设计阶段修改时间 */
      designGmtModified?: string;

      /** 是否归档 */
      designIsArchive?: boolean;

      /** 设计阶段最后一次修改人 */
      designLastModifier?: string;

      /** 生命周期 */
      designLifecycle?: number;

      /** 设计阶段责任人 */
      designOwner?: string;

      /** 状态 */
      designStatus?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 维度主键英文名，对于组合维度，此字段为空 */
      dimensionPk?: string;

      /** 维度主键中文名称 */
      dimensionPkCn?: string;

      /** 维度主键数据类型 */
      dimensionPkDataType?: string;

      /** 维度主键计算逻辑 */
      dimensionPkLogic?: string;

      /** 维度主键源表名 */
      dimensionPkSourceTable?: string;

      /** 维度草稿发布状态 */
      dimensionStatus?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** 维度类型 */
      dimensionType?: '1' | '2' | '4' | '5' | '6' | 1 | 2 | 4 | 5 | 6;

      /** 枚举维度值列表，针对小维度设计 */
      enumDimensionValueList?: Array<defs.EnumDimensionValueDO>;

      /** 属性列表 */
      extendAttributes?: Array<defs.AttributeBO>;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** hasParent */
      hasParent?: boolean;

      /** 对象ID */
      id?: number;

      /** "是否叶子节点"属性 */
      isLeafAttribute?: defs.AttributeBO;

      /** isLevel */
      isLevel?: boolean;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 叶子属性命名字段 */
      leafNamingAttribute?: defs.AttributeBO;

      /** 叶子属性主键 */
      leafPkAttribute?: defs.AttributeBO;

      /** level属性 */
      levelAttribute?: defs.AttributeBO;

      /** 层级模板ID */
      levelConfig?: defs.DimensionLevelConfigDO;

      /** 层级维度主维度ID */
      mainDimId?: number;

      /** 英文名 */
      name?: string;

      /** 命名字段属性 */
      namingAttribute?: defs.AttributeBO;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 父维度 */
      parentDimension?: defs.DimBO;

      /** parentId属性 */
      parentIdAttribute?: defs.AttributeBO;

      /** 主键属性 */
      pkAttribute?: defs.AttributeBO;

      /** 所属project显示名 */
      projectCn?: string;

      /** 所属project */
      projectId?: number;

      /** 所属project英文名 */
      projectName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class DimNodeBO {
      
      /** 该维度节点的子维度 */
      childrenList?: Array<defs.DimNodeBO>;

      /** 维度中文名 */
      cn?: string;

      /** 维度id */
      id?: number;

      /** 维度名称 */
      name?: string;
    }
    
      

        export class DimRelationBO {
      
      /** 默认属性值 */
      attributeDefaultValue?: string;

      /** 属性id */
      attributeId?: number;

      /** 维度bo */
      dim?: defs.DimBO;

      /** 维度id */
      dimId?: number;

      /** 是否有依赖 */
      haveDenepency?: boolean;

      /**  关联维度bo */
      refDim?: defs.DimBO;

      /**  引用维度逻辑表ID */
      refDimId?: number;

      /**  引用维度逻辑表角色 */
      refDimRole?: string;

      /**  引用维度逻辑表角色中文名 */
      refDimRoleCn?: string;
    }
    
      

        export class DimensionLevelConfigDO {
      
      /** childFieldName */
      childFieldName?: string;

      /** cn */
      cn?: string;

      /** des */
      des?: string;

      /** dimensionList */
      dimensionList?: Array<integer>;

      /** filterCondition */
      filterCondition?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** hasLeaf */
      hasLeaf?: boolean;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** maxLevel */
      maxLevel?: number;

      /** midTableName */
      midTableName?: string;

      /** name */
      name?: string;

      /** namingFieldCn */
      namingFieldCn?: string;

      /** namingFieldName */
      namingFieldName?: string;

      /** owner */
      owner?: string;

      /** parentFieldName */
      parentFieldName?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** rootCondition */
      rootCondition?: string;

      /** sourcePk */
      sourcePk?: string;

      /** sourcePkCn */
      sourcePkCn?: string;

      /** sourcePkDataType */
      sourcePkDataType?: string;

      /** sourceTableName */
      sourceTableName?: string;

      /** status */
      status?: number;
    }
    
      

        export class DimensionSimpleInfoBO {
      
      /** 维度类型，1为普通维度 */
      dimTypeEnum?: '0' | '1' | '2' | '4' | '5' | '6' | 0 | 1 | 2 | 4 | 5 | 6;

      /** 维度ID */
      dimensionId?: number;

      /** 维度名称 */
      dimensionName?: string;

      /** 关联的维度ID列表 */
      linkDimIds?: Array<integer>;

      /** 父维度ID */
      parentDimId?: number;
    }
    
      

        export class DipBizProcessBO {
      
      /** 业务过程的id */
      id?: number;

      /** 业务过程的名称 */
      name?: string;

      /** 业务过程的子过程列表 */
      subBizProcesses?: Array<defs.DipBizProcessBO>;
    }
    
      

        export class DipInitLogBO {
      
      /** 状态 */
      dipInitStatusEnum?: 'INIT' | 'INIT_PROJECT_DS' | 'INIT_RESOURCE' | 'INIT_NODE' | 'FAILED' | 'SUCCESS';

      /** 是否还有日志产出 */
      hasNextLog?: boolean;

      /** 日志内容 */
      logContent?: string;

      /** 根节点ID */
      nodeId?: string;

      /** 进度 */
      percentage?: string;

      /** 初始化的逻辑项目ID */
      projectId?: number;
    }
    
      

        export class DsCommonBO {
      
      /** bindProject */
      bindProject?: boolean;

      /** bindProjectId */
      bindProjectId?: number;

      /** bindProjectName */
      bindProjectName?: string;

      /** cn */
      cn?: string;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** dataSourceTypeEnum */
      dataSourceTypeEnum?: 'MAX_COMPUTE' | 'MYSQL' | 'SQL_SERVER' | 'HIVE' | 'OS' | 'POSTGRE_SQL' | 'EMR_HIVE' | 'ORACLE' | 'FTP' | 'HDFS' | 'VERTICA' | 'HADOOP' | 'DRDS';

      /** dataSourceUseTypeEnum */
      dataSourceUseTypeEnum?: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';

      /** des */
      des?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** name */
      name?: string;

      /** owner */
      owner?: string;

      /** ownerName */
      ownerName?: string;

      /** password */
      password?: string;

      /** tenantId */
      tenantId?: number;

      /** user */
      user?: string;

      /** versionMapping */
      versionMapping?: object;
    }
    
      

        export class DsConfig {
      
      /** detailConfig */
      detailConfig?: object;

      /** dsId */
      dsId?: string;
    }
    
      

        export class EntityDO {
      
      /** id */
      id?: string;

      /** name */
      name?: string;

      /** nameCn */
      nameCn?: string;

      /** type */
      type?: string;
    }
    
      

        export class EntityTimeInfo {
      
      /** createTime */
      createTime?: string;

      /** entityId */
      entityId?: string;

      /** lastModifiedTime */
      lastModifiedTime?: string;
    }
    
      

        export class EntityUserInfo {
      
      /** creator */
      creator?: defs.Creator;

      /** entityId */
      entityId?: string;

      /** modifier */
      modifier?: defs.Modifier;

      /** owner */
      owner?: defs.Owner;

      /** project */
      project?: defs.ProjectInBrief;

      /** tenant */
      tenant?: defs.TenantInBrief;
    }
    
      

        export class EnumDimensionValueDO {
      
      /** cn */
      cn?: string;

      /** des */
      des?: string;

      /** dimensionId */
      dimensionId?: number;

      /** enumDesc */
      enumDesc?: string;

      /** enumValue */
      enumValue?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** name */
      name?: string;

      /** owner */
      owner?: string;

      /** status */
      status?: number;
    }
    
      

        export class ExecuteTimeEntity {
      
      /** executeEndTime */
      executeEndTime?: string;

      /** executeStartTime */
      executeStartTime?: string;
    }
    
      

        export class FactTableAttributeRefBO {
      
      /** 字段信息 */
      attribute?: defs.AttributeBO;

      /** 维度信息 */
      dimRelation?: defs.DimRelationBO;

      /** 逻辑表名 */
      factTableName?: string;
    }
    
      

        export class FactTableBO {
      
      /** 结束条件。针对累积快照模型，结束时间字段（bizTimeColumn）或结束条件必须定义其一 */
      bizEndCondition?: string;

      /** 业务主表 */
      bizMainTable?: string;

      /** 业务主表限定条件 */
      bizMainTableCondition?: string;

      /** 业务主表类型 */
      bizMainTableType?: number;

      /** 所属业务过程bo */
      bizProcessBO?: defs.BizProcessBO;

      /** 所属业务过程 */
      bizProcessId?: number;

      /** 业务时间字段：业务时间字段（对于事务型，请填写事务时间字段；周期快照型，请填写业务起始时间字段；累积快照，请填写业务结束时间字段；字段可以填写业务日期字段） */
      bizTimeColumn?: string;

      /** 中文名 */
      cn?: string;

      /** 所属数据域bo */
      dataDomain?: defs.DataDomainBO;

      /** dataDomainBO */
      dataDomainBO?: defs.DataDomainBO;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 业务主表-表name，id，type */
      mainTable?: defs.SourceMainTableBO;

      /** 模型对应物理模型配置-生命周期 */
      modelLifecycle?: number;

      /** df -> 2  di->1 模型类型：事务型(transaction) or 周期快照型(snapshot) or 累积快照型(accumulating) */
      modelType?: number;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 事实逻辑表主键字段 */
      pkAttribute?: defs.AttributeBO;

      /** 归属project */
      projectId?: number;

      /** 事实表编辑状态 */
      tableEditStatus?: number;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class FavorParam {
      
      /** 对象id */
      modelId?: string;

      /** 对象类型 */
      modelType?: number;
    }
    
      

        export class FileCreateDTO {
      
      /** category */
      category?: string;

      /** content */
      content?: string;

      /** dirName */
      dirName?: string;

      /** name */
      name?: string;

      /** projectId */
      projectId?: number;

      /** type */
      type?: string;
    }
    
      

        export class FileUpdateDTO {
      
      /** 更新文件内容 */
      content?: string;

      /** 更新文件描述 */
      desc?: string;

      /** 更新文件名 */
      name?: string;
    }
    
      

        export class FilterBO {
      
      /** 描述 */
      des?: string;

      /** 子过滤器 */
      filterChildren?: Array<defs.FilterBO>;

      /** 唯一id */
      id?: string;

      /** 操作 */
      options?: Array<defs.FilterOption>;
    }
    
      

        export class FilterDTO {
      
      /** 筛选对象列表 */
      filter?: string;
    }
    
      

        export class FilterOption {
      
      /** 数量 */
      count?: number;

      /** 描述 */
      des?: string;

      /** 详细信息 */
      detail?: string;

      /** 值 */
      value?: string;
    }
    
      

        export class FixDataRequestDto {
      
      /** childTaskIds */
      childTaskIds?: Array<string>;

      /** excludeTaskIds */
      excludeTaskIds?: Array<string>;
    }
    
      

        export class FlowModifyDto {
      
      /** beginBizDate */
      beginBizDate?: string;

      /** bizDate */
      bizDate?: string;

      /** checkDepBetweenDays */
      checkDepBetweenDays?: boolean;

      /** containsDownstreams */
      containsDownstreams?: boolean;

      /** createTime */
      createTime?: string;

      /** dagrunIds */
      dagrunIds?: Array<string>;

      /** endBizDate */
      endBizDate?: string;

      /** excludedNodeIds */
      excludedNodeIds?: Array<string>;

      /** executeMethod */
      executeMethod?: 'CREATE_FLOW' | 'SEARCH_FLOW' | 'SEARCH_FLOW_BY_ID' | 'KILL_FLOW' | 'CREATE_NODE' | 'UPDATE_NODE' | 'UPDATE_NODE_CONTENT' | 'UPDATE_NODE_OUTPUT_NAME' | 'DELETE_NODE' | 'SEARCH_MANUAL_NODE' | 'SEARCH_PERIODIC_NODE' | 'SEARCH_NODE' | 'SEARCH_NODE_BY_OUTPUT_NAME' | 'FUZZY_SEARCH_NODE_BY_OUTPUT_NAME' | 'SEARCH_NODE_CODE' | 'SEARCH_NODE_BY_ID' | 'SEARCH_NODE_PARENTS_BY_DEPTH' | 'SEARCH_NODE_CHILDREN_BY_DEPTH' | 'RESUME_NODE' | 'PAUSE_NODE' | 'SEARCH_NODE_OPLOG' | 'SEARCH_TASK' | 'SEARCH_TASK_RUNLOG' | 'SEARCH_TASK_BY_ID' | 'RERUN_TASK' | 'SEARCH_TASK_PARENTS_BY_DEPTH' | 'SEARCH_TASK_CHILDREN_BY_DEPTH' | 'SEARCH_TASKHISTORY' | 'SETSUCCESS_TASK' | 'KILL_TASK' | 'FIXDATA' | 'UPDATE_PRIORITY_TASK' | 'REMOVE_RELATION_TASK' | 'CREATE_DAG' | 'CREATE_DAG_IF_NOT_EXISTS' | 'REGISTER_FUNCTION' | 'UPDATE_FUNCTION' | 'UNREGISTER_FUNCTION' | 'REGISTER_RESOURCE' | 'UPDATE_RESOURCE' | 'UNREGISTER_RESOURCE' | 'CREATE_TENANT';

      /** flowId */
      flowId?: string;

      /** includedNodeIds */
      includedNodeIds?: Array<string>;

      /** name */
      name?: string;

      /** parallel */
      parallel?: boolean;

      /** parallelism */
      parallelism?: number;

      /** projectId */
      projectId?: string;

      /** rootNodeId */
      rootNodeId?: string;

      /** tenantId */
      tenantId?: string;

      /** type */
      type?: number;

      /** userId */
      userId?: string;
    }
    
      

        export class Function {
      
      /** 函数列表 */
      function?: object;

      /** 函数的类型 */
      functionType?: 'SYSTEM' | 'UDF';
    }
    
      

        export class GeneratedNodeDTO {
      
      /** 节点输出名称 */
      nodeOutputName?: string;

      /** 简单的节点信息, 包括节点id, 节点名称, 责任人等信息 */
      simpleNodeInfo?: defs.SimpleNodeInfoDTO;
    }
    
      

        export class HadoopNameNodeBO {
      
      /** hadoopNameNodeIp */
      hadoopNameNodeIp?: string;

      /** hadoopNameNodePassword */
      hadoopNameNodePassword?: string;

      /** hadoopNameNodePort */
      hadoopNameNodePort?: string;

      /** hadoopNameNodeUser */
      hadoopNameNodeUser?: string;
    }
    
      

        export class HostIp {
      
      /** host */
      host?: string;

      /** ip */
      ip?: string;
    }
    
      

        export class HostLoginInfo {
      
      /** password */
      password?: string;

      /** user */
      user?: string;
    }
    
      

        export class IdeFileBO {
      
      /** category */
      category?: number;

      /** content */
      content?: string;

      /** contentType */
      contentType?: string;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** description */
      description?: string;

      /** dirName */
      dirName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** name */
      name?: string;

      /** projectId */
      projectId?: number;

      /** size */
      size?: number;
    }
    
      

        export class IdeLogicalTableNodeBO {
      
      /** 逻辑表catalog id */
      catalogId?: number;

      /** 逻辑表catalog名称 */
      catalogName?: string;

      /** 逻辑表catalog类型 */
      catalogType?: 'BIZUNIT' | 'LOGICALDB' | 'PHYSICALDB' | 'OTHER';

      /** 调度物化节点列表 */
      children?: Array<defs.IdeNodeEntity>;

      /** 逻辑表下的物化节点数量 */
      childrenCount?: number;

      /** 逻辑表执行开始结束时间 */
      executeTimeEntity?: defs.ExecuteTimeEntity;

      /** 逻辑表发布时间 */
      gmtModified?: string;

      /** 逻辑表ID */
      id?: number;

      /** 是否是叶子节点，默认false */
      leaf?: boolean;

      /** 逻辑表名字 */
      name?: string;

      /** 逻辑表owner */
      owner?: string;

      /** 逻辑表类型 */
      type?: string;
    }
    
      

        export class IdeLogicalTableTaskBO {
      
      /** 逻辑表对应的业务日期 */
      bizDate?: string;

      /** 逻辑表catalog id */
      catalogId?: number;

      /** 逻辑表catalog名称 */
      catalogName?: string;

      /** 逻辑表catalog类型 */
      catalogType?: 'BIZUNIT' | 'LOGICALDB' | 'PHYSICALDB' | 'OTHER';

      /** 调度任务实例列表 */
      children?: Array<defs.IdeTaskEntity>;

      /** 逻辑表下的物化节点数量 */
      childrenCount?: number;

      /** 逻辑表执行开始结束时间 */
      executeTimeEntity?: defs.ExecuteTimeEntity;

      /** 逻辑表发布时间 */
      gmtModified?: string;

      /** 逻辑表ID */
      id?: string;

      /** 逻辑表实例ID */
      instanceId?: string;

      /** 是否是叶子节点，默认false */
      leaf?: boolean;

      /** 逻辑表名字 */
      name?: string;

      /** 逻辑表owner */
      owner?: string;

      /** 逻辑表类型 */
      type?: string;
    }
    
      

        export class IdeNodeEntity {
      
      /** 逻辑表DAG图搜索使用，物化节点的字段列表 */
      columns?: Array<defs.LogicalColumnVO>;

      /** 节点代码内容 */
      content?: string;

      /** cron表达式 */
      cronExpression?: string;

      /** 节点所属的dagId */
      dagId?: string;

      /** 直接下游逻辑DAG节点 */
      downstreamLogicalNodeRelations?: Array<defs.IdeNodeRelation>;

      /** 直接下游节点 */
      downstreamNodeRelations?: Array<defs.NodeRelation>;

      /** 数据源配置 */
      dsConfig?: defs.DsConfig;

      /** 手工节点使用，最近一次运行实例的执行状况 */
      executeTimeEntity?: defs.ExecuteTimeEntity;

      /** 是否为叶子节点 */
      leaf?: boolean;

      /** 节点描述 */
      nodeDesc?: string;

      /** 标识节点是由某个组织或应用创建的 */
      nodeFrom?: string;

      /** 节点id */
      nodeId?: string;

      /** 节点名称 */
      nodeName?: string;

      /** 节点输出名称列表,可能有多个 */
      nodeOutputNameList?: Array<string>;

      /** 节点的状态, 1表示正常, 2表示暂停调度 */
      nodeStatus?: number;

      /** 节点类型 */
      nodeType?: number;

      /** Operator类型 */
      operatorType?: number;

      /** 节点的参数 */
      params?: string;

      /** 父节点ID，通常为逻辑表ID */
      parentId?: string;

      /** 父节点名称，通常为逻辑表名 */
      parentName?: string;

      /** 优先级, 越小越高 */
      priority?: number;

      /** 手工节点使用，最近一次运行的实例状态 */
      statusCode?: number;

      /** 逻辑表DAG实例图使用，当前节点的node对象 */
      task?: defs.TaskEntity;

      /** 节点的时间相关信息 */
      timeInfo?: defs.EntityTimeInfo;

      /** 直接上游逻辑DAG节点 */
      upstreamLogicalNodeRelations?: Array<defs.IdeNodeRelation>;

      /** 直接上游节点 */
      upstreamNodeRelations?: Array<defs.NodeRelation>;

      /** 节点的User相关信息 */
      userInfo?: defs.EntityUserInfo;
    }
    
      

        export class IdeNodeRelation {
      
      /** 天数差, 默认为空, 如果设置了该值, 则periodDiff无效 */
      dayDiff?: number;

      /** 周期差,非负数, 0表示同周期依赖, 正数表示依赖前N个周期 */
      periodDiff?: number;

      /** 关系类型 */
      relationType?: string;

      /** 上游节点id */
      sourceNodeId?: string;

      /** 上游节点的输出名称 */
      sourceNodeOutputName?: string;

      /** 下游节点id */
      targetNodeId?: string;

      /** 下游节点的输出名称 */
      targetNodeOutputName?: string;
    }
    
      

        export class IdeOperationEntity {
      
      /** createTime */
      createTime?: string;

      /** modifiedTime */
      modifiedTime?: string;

      /** nodeId */
      nodeId?: string;

      /** objectIds */
      objectIds?: string;

      /** objectType */
      objectType?: number;

      /** 操作名称 */
      operationName?: string;

      /** operationStatus */
      operationStatus?: number;

      /** operationType */
      operationType?: number;

      /** operator */
      operator?: string;
    }
    
      

        export class IdeResourceBO {
      
      /** category */
      category?: number;

      /** content */
      content?: string;

      /** contentType */
      contentType?: string;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** description */
      description?: string;

      /** dirName */
      dirName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** name */
      name?: string;

      /** projectId */
      projectId?: number;

      /** size */
      size?: number;
    }
    
      

        export class IdeSearchResultBO {
      
      /** functions */
      functions?: Array<defs.BaseBO>;

      /** logicTables */
      logicTables?: Array<defs.BaseBO>;

      /** physicalTables */
      physicalTables?: Array<defs.BaseBO>;

      /** resources */
      resources?: Array<defs.BaseBO>;

      /** standardDefinitions */
      standardDefinitions?: Array<defs.BaseBO>;
    }
    
      

        export class IdeTaskEntity {
      
      /** 业务日期 */
      bizDate?: string;

      /** 所属的dagrunId */
      dagrunId?: string;

      /** 任务所属dagrun的类型,可能是[正常1],[补数据2],[手工3] */
      dagrunType?: 2 | 2;

      /** 任务的下游任务 */
      downstreamTaskRelations?: Array<defs.TaskRelation>;

      /** 应该运行的时间点 */
      dueTime?: string;

      /** executeTimeEntity */
      executeTimeEntity?: defs.ExecuteTimeEntity;

      /** 所属的flowId,只有在dagrunType不是normal的情况才会有值 */
      flowId?: string;

      /** 在当天运行的所有任务中的顺序 */
      index?: number;

      /** 是否为叶子节点 */
      leaf?: boolean;

      /** nodeFrom */
      nodeFrom?: string;

      /** 节点id */
      nodeId?: string;

      /** Operator类型, 如SQL, DataX等 */
      operatorType?: number;

      /** 任务的参数 */
      params?: string;

      /** 父节点ID，通常为逻辑表ID */
      parentId?: string;

      /** 父节点名称，通常为逻辑表名 */
      parentName?: string;

      /** 优先级, 越小越高 */
      priority?: number;

      /** 任务的状态,[未运行1],[等待调度2],[等待提交3],[等待资源4],[执行中5],[执行失败6],[被终止6],[执行成功0] */
      status?: number;

      /** 任务描述 */
      taskDesc?: string;

      /** taskId */
      taskId?: string;

      /** 任务名称, 一般与节点名称相同 */
      taskName?: string;

      /** 任务类型,可能是[正常1],[虚拟2] */
      taskType?: number;

      /** timeInfo */
      timeInfo?: defs.EntityTimeInfo;

      /** 任务的上游任务 */
      upstreamTaskRelations?: Array<defs.TaskRelation>;

      /** userInfo */
      userInfo?: defs.EntityUserInfo;
    }
    
      

        export class IdeUdfBO {
      
      /** category */
      category?: number;

      /** className */
      className?: string;

      /** commandHelp */
      commandHelp?: string;

      /** content */
      content?: string;

      /** contentType */
      contentType?: string;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** description */
      description?: string;

      /** dirName */
      dirName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** name */
      name?: string;

      /** projectId */
      projectId?: number;

      /** refResources */
      refResources?: Array<defs.IdeResourceBO>;

      /** size */
      size?: number;

      /** udfCategory */
      udfCategory?: number;
    }
    
      

        export class Iterator {
      
    }
    
      

        export class KerberosBO {
      
      /** kerberosFileId */
      kerberosFileId?: string;

      /** kerberosIsOn */
      kerberosIsOn?: boolean;

      /** kerberosPrincipal */
      kerberosPrincipal?: string;

      /** uploadKeytabFileName */
      uploadKeytabFileName?: string;
    }
    
      

        export class LinkedHashMap {
      
    }
    
      

        export class LogicBO {
      
      /** 逻辑关联字段 */
      attributes?: Array<defs.AttributeBO>;

      /** 批量计算逻辑 */
      logic?: string;
    }
    
      

        export class LogicTableBO {
      
      /** dimTables */
      dimTables?: Array<defs.DimBO>;

      /** factTables */
      factTables?: Array<defs.BaseBO>;
    }
    
      

        export class LogicTableConfigBO {
      
      /** 归档逻辑 */
      designArchiveLogic?: string;

      /** 是否归档 */
      designIsArchive?: boolean;

      /** 生命周期 */
      designLifecycle?: number;

      /** 无需物理化字段 */
      noLogicAttributeList?: Array<defs.BaseObject>;

      /** 无需物理化字段 */
      noLogicAttributes?: string;

      /** 分区字段/字段id逗号分隔 */
      partAttributeList?: Array<defs.BaseObject>;

      /** 分区字段/字段id逗号分隔 */
      partAttributes?: string;
    }
    
      

        export class LogicalColumnProbeResultBO {
      
      /** 字段值为空字符串的比例 */
      blankRecordRatio?: number;

      /** 字段的名称 */
      columnName?: string;

      /** 字段是正常值的比例 */
      commonRecordRatio?: number;

      /** 数据分布列表 */
      dataSectionBOList?: Array<defs.DataSectionBO>;

      /** 字段类型 */
      dataType?: string;

      /** 最大长度的值 */
      maxLength?: string;

      /** 最大值 */
      maxValue?: string;

      /** 平均数 */
      meanValue?: string;

      /** 最小长度的值 */
      minLength?: string;

      /** 最小值 */
      minValue?: string;

      /** 字段值为null的比例 */
      nullRecordRatio?: number;

      /** 标准差 */
      standardDeviation?: string;

      /** 逻辑表的名称 */
      tableName?: string;

      /** 总记录数 */
      totalRecordsCount?: number;

      /** 唯一值的个数 */
      uniqueKeyCount?: string;

      /** 数值型值为0的比例 */
      zeroRecordRatio?: number;
    }
    
      

        export class LogicalColumnVO {
      
      /** 字段中文名 */
      columnCnName?: string;

      /** 字段ID */
      columnId?: string;

      /** 字段名称 */
      columnName?: string;

      /** 字段数据类型 */
      dataType?: 'INT' | 'TINYINT' | 'SMALLINT' | 'BIGINT' | 'VARCHAR' | 'CHAR' | 'STRING' | 'BINARY' | 'FLOAT' | 'DOUBLE' | 'DECIMAL' | 'BOOLEAN' | 'DATETIME' | 'DATE' | 'TIMESTAMP' | 'ARRAY' | 'MAP' | 'STRUCT' | 'UNION';

      /** 物化节点ID */
      nodeId?: string;

      /** 字段发布时间 */
      produceDate?: string;

      /** 逻辑表ID */
      tableId?: string;
    }
    
      

        export class LogicalTableColumnsAndTablesDTO {
      
      /** columnTableMap */
      columnTableMap?: object;

      /** columns */
      columns?: Array<string>;

      /** tables */
      tables?: Array<defs.TableDTO>;
    }
    
      

        export class LogicalTableInputOutputDTO {
      
      /** samePeriodUpstreams */
      samePeriodUpstreams?: Array<defs.SamePeriodUpstreamDTO>;
    }
    
      

        export class LogicalTableParseIssueDTO {
      
      /** 无效的字段名称, 即跨周期依赖填写依赖字段不属于该逻辑表时候报错 */
      invalidColumnNames?: Array<string>;

      /** 没有挂上依赖的上游表 */
      missingTables?: Array<defs.TableDTO>;

      /** 逻辑表模型id */
      modelId?: number;

      /** 是否成功, 如果为true, 则说明解析通过, 否则说明有解析出的问题 */
      success?: boolean;

      /** 没有对应节点信息的上游表列表 */
      tablesWithoutNodeInfo?: Array<defs.TableDTO>;
    }
    
      

        export class LogicalTableScheduleConfigDTO {
      
      /** 基本调度配置信息, 包括名称, 类型, 描述, 调度参数等 */
      basicInfo?: defs.BasicScheduleConfigInfoDTO;

      /** 逻辑表的字段和相关表以及字段和表之间的关系信息 */
      columnsAndTables?: defs.LogicalTableColumnsAndTablesDTO;

      /** 跨周期依赖, 目前是上周期依赖 */
      crossPeriodUpstream?: Array<defs.CrossPeriodUpstreamDTO>;

      /** 本逻辑表已经生成的节点信息, 包括输出名称, 节点id, 名称, 责任人等 */
      generatedNodes?: Array<defs.GeneratedNodeDTO>;

      /** 是否有跨周期的依赖, True/False */
      hasCrossPeriodUpstream?: boolean;

      /** 模型id */
      modelId?: number;

      /** 本周期依赖 */
      samePeriodUpstreams?: Array<defs.SamePeriodUpstreamDTO>;
    }
    
      

        export class ModelBO {
      
      /** 业务过程ID */
      bizProcessId?: number;

      /**  子区域 */
      childs?: Array<defs.RelationBaseBO>;

      /** 模型中文名称 */
      cn?: string;

      /** 维度类型 */
      dimType?: number;

      /** 模型id */
      id?: number;

      /** 杂项维度区 */
      junk?: defs.RelationBaseBO;

      /** 主键区 */
      key?: defs.AttributeBO;

      /** 度量区 */
      measures?: Array<defs.AttributeBO>;

      /** 模型英文名称 */
      name?: string;

      /** 普通字段区 */
      normals?: Array<defs.AttributeBO>;

      /** 父区域 */
      parent?: defs.SingleModelBO;

      /** 关联区 */
      relations?: Array<defs.RelationBaseBO>;

      /** 系统区 */
      sys?: defs.AttributeBO;
    }
    
      

        export class ModelBizDetailAttributeDO {
      
      /** attributeDataType */
      attributeDataType?: string;

      /** attributeDefaultValue */
      attributeDefaultValue?: string;

      /** attributeIsPartition */
      attributeIsPartition?: boolean;

      /** attributeLogic */
      attributeLogic?: string;

      /** attributeScope */
      attributeScope?: string;

      /** attributeSeq */
      attributeSeq?: number;

      /** attributeType */
      attributeType?: number;

      /** cn */
      cn?: string;

      /** des */
      des?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** modelId */
      modelId?: number;

      /** name */
      name?: string;

      /** notNull */
      notNull?: boolean;

      /** owner */
      owner?: string;

      /** physical */
      physical?: boolean;

      /** pk */
      pk?: boolean;

      /** refDimensionId */
      refDimensionId?: number;

      /** refDimensionMaxPt */
      refDimensionMaxPt?: boolean;

      /** refDimensionRole */
      refDimensionRole?: string;

      /** refDimensionRoleCn */
      refDimensionRoleCn?: string;

      /** status */
      status?: number;

      /** unique */
      unique?: boolean;
    }
    
      

        export class ModelDimensionAttributeDO {
      
      /** attributeDataType */
      attributeDataType?: string;

      /** attributeDefaultValue */
      attributeDefaultValue?: string;

      /** attributeIsPartition */
      attributeIsPartition?: boolean;

      /** attributeLogic */
      attributeLogic?: string;

      /** attributeScope */
      attributeScope?: string;

      /** attributeSeq */
      attributeSeq?: number;

      /** cn */
      cn?: string;

      /** des */
      des?: string;

      /** description */
      description?: string;

      /** dimensionId */
      dimensionId?: number;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** name */
      name?: string;

      /** notNull */
      notNull?: boolean;

      /** owner */
      owner?: string;

      /** physical */
      physical?: boolean;

      /** pk */
      pk?: boolean;

      /** refDimensionId */
      refDimensionId?: number;

      /** refDimensionIsMaxPt */
      refDimensionIsMaxPt?: boolean;

      /** refDimensionRole */
      refDimensionRole?: string;

      /** refDimensionRoleCn */
      refDimensionRoleCn?: string;

      /** status */
      status?: number;

      /** type */
      type?: number;

      /** unique */
      unique?: boolean;
    }
    
      

        export class Modifier {
      
      /** userId */
      userId?: string;

      /** userName */
      userName?: string;
    }
    
      

        export class NodeContentEntity {
      
      /** 代码内容 */
      content?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改者 */
      modifier?: string;

      /** 节点id */
      nodeId?: string;

      /** 备注 */
      remark?: string;

      /** 版本ID */
      version?: number;
    }
    
      

        export class NodeDTO {
      
      /** 调度表达式 */
      cronExpression?: string;

      /** 所属的dagId */
      dagId?: string;

      /** 同步配置 */
      dataxSettingVO?: defs.DataxSettingVO;

      /** 数据源配置 */
      dsConfig?: defs.DsConfig;

      /** executeMethod */
      executeMethod?: 'CREATE_FLOW' | 'SEARCH_FLOW' | 'SEARCH_FLOW_BY_ID' | 'KILL_FLOW' | 'CREATE_NODE' | 'UPDATE_NODE' | 'UPDATE_NODE_CONTENT' | 'UPDATE_NODE_OUTPUT_NAME' | 'DELETE_NODE' | 'SEARCH_MANUAL_NODE' | 'SEARCH_PERIODIC_NODE' | 'SEARCH_NODE' | 'SEARCH_NODE_BY_OUTPUT_NAME' | 'FUZZY_SEARCH_NODE_BY_OUTPUT_NAME' | 'SEARCH_NODE_CODE' | 'SEARCH_NODE_BY_ID' | 'SEARCH_NODE_PARENTS_BY_DEPTH' | 'SEARCH_NODE_CHILDREN_BY_DEPTH' | 'RESUME_NODE' | 'PAUSE_NODE' | 'SEARCH_NODE_OPLOG' | 'SEARCH_TASK' | 'SEARCH_TASK_RUNLOG' | 'SEARCH_TASK_BY_ID' | 'RERUN_TASK' | 'SEARCH_TASK_PARENTS_BY_DEPTH' | 'SEARCH_TASK_CHILDREN_BY_DEPTH' | 'SEARCH_TASKHISTORY' | 'SETSUCCESS_TASK' | 'KILL_TASK' | 'FIXDATA' | 'UPDATE_PRIORITY_TASK' | 'REMOVE_RELATION_TASK' | 'CREATE_DAG' | 'CREATE_DAG_IF_NOT_EXISTS' | 'REGISTER_FUNCTION' | 'UPDATE_FUNCTION' | 'UNREGISTER_FUNCTION' | 'REGISTER_RESOURCE' | 'UPDATE_RESOURCE' | 'UNREGISTER_RESOURCE' | 'CREATE_TENANT';

      /** 对应于菜单树id */
      fileId?: number;

      /** 文件名 */
      fileName?: string;

      /** 操作状态id */
      id?: number;

      /** 节点代码 */
      nodeContent?: string;

      /** 节点描述 */
      nodeDesc?: string;

      /** 标识节点是由某个组织或应用创建的 */
      nodeFrom?: string;

      /** 节点id */
      nodeId?: string;

      /** 节点名称 */
      nodeName?: string;

      /** 节点输出名称 */
      nodeOutputNameList?: Array<string>;

      /** 节点owner */
      nodeOwner?: string;

      /** 节点状态 */
      nodeStatus?: number;

      /** 节点类型 */
      nodeType?: number;

      /** Operator类型 */
      operatorType?: number;

      /** 节点负责人id */
      owner?: string;

      /** 这个给界面显示的字段 */
      ownerName?: string;

      /** 节点参数 */
      params?: string;

      /** 标识节点是否被暂停 */
      paused?: boolean;

      /** 优先级 */
      priority?: number;

      /** projectId */
      projectId?: string;

      /** 来源配置 */
      reader?: defs.DataxPluginVO;

      /** 发布状态 */
      released?: boolean;

      /** 备注信息 */
      remark?: string;

      /** 是否可以重跑 */
      rerunable?: boolean;

      /** 发布状态 */
      status?: 'DRAFT' | 'ONLINE' | 'DEVELOPING';

      /** tenantId */
      tenantId?: string;

      /** 上游依赖 */
      upstreams?: Array<defs.NodeRelation>;

      /** userId */
      userId?: string;

      /** 有效时间区间 */
      validPeriod?: defs.Period;

      /** target配置 */
      writer?: defs.DataxPluginVO;
    }
    
      

        export class NodeRelation {
      
      /** 天数差, 默认为空, 如果设置了该值, 则periodDiff无效 */
      dayDiff?: number;

      /** 周期差,非负数, 0表示同周期依赖, 正数表示依赖前N个周期 */
      periodDiff?: number;

      /** 上游节点id */
      sourceNodeId?: string;

      /** 上游节点的输出名称 */
      sourceNodeOutputName?: string;

      /** 下游节点id */
      targetNodeId?: string;

      /** 下游节点的输出名称 */
      targetNodeOutputName?: string;
    }
    
      

        export class ObjectLockBO {
      
      /** 加锁时间 */
      gmtModified?: string;

      /** objectId */
      objectId?: number;

      /** objectType */
      objectType?: string;

      /** 加锁用户ID */
      userId?: string;

      /** 加锁用户名 */
      userName?: string;
    }
    
      

        export class OssResourceTypeVO {
      
      /** 描述名称 */
      desc?: string;

      /** 文件默认扩展名[可能为空] */
      extension?: string;
    }
    
      

        export class OutputCheckVO {
      
      /** code */
      code?: string;

      /** outputNames */
      outputNames?: Array<string>;
    }
    
      

        export class OutputInfoBO {
      
      /** 产出时间 */
      bizDate?: string;

      /** 调度代码 */
      content?: string;

      /** 结束时间 */
      executeEndTime?: string;

      /** 执行时长 */
      executeSec?: number;

      /** 起始时间 */
      executeStartTime?: string;

      /** 任务节点id */
      nodeId?: string;

      /** 任务实例id */
      taskId?: string;

      /** 等待时长 */
      waitingSec?: number;
    }
    
      

        export class OutputVO {
      
      /** 节点ID */
      nodeId?: string;

      /** 节点名字 */
      nodeName?: string;

      /** 节点输出名字 */
      outputName?: string;

      /** 节点owner */
      owner?: string;

      /** 节点owner名字 */
      ownerName?: string;
    }
    
      

        export class Owner {
      
      /** userId */
      userId?: string;

      /** userName */
      userName?: string;
    }
    
      

        export class PagedData {
      
      /** 分页数据 */
      data?: Array<defs.RecommendTableBO>;

      /** empty */
      empty?: boolean;

      /** 总条数 */
      totalCount?: number;
    }
    
      

        export class PaginatedResult {
      
      /** count */
      count?: number;

      /** resultData */
      resultData?: Array<defs.IdeNodeEntity>;
    }
    
      

        export class ParamBO {
      
      /** 数据类型 */
      dataType?: string;

      /** 描述 */
      description?: string;

      /** 参数名 */
      name?: string;
    }
    
      

        export class PartitionBO {
      
      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 分区的列名和值 */
      keyValues?: Array<defs.LinkedHashMap<string, string>>;

      /** 记录数 */
      records?: number;
    }
    
      

        export class Period {
      
      /** beginDate */
      beginDate?: string;

      /** beginTimeMillis */
      beginTimeMillis?: number;

      /** endDate */
      endDate?: string;

      /** endTimeMillis */
      endTimeMillis?: number;

      /** excludeBeginTime */
      excludeBeginTime?: boolean;

      /** excludeEndTime */
      excludeEndTime?: boolean;
    }
    
      

        export class PermissionDetailBO {
      
      /** accountType */
      accountType?: number;

      /** desc */
      desc?: string;

      /** name */
      name?: string;

      /** operationType */
      operationType?: number;

      /** permissionEnd */
      permissionEnd?: string;

      /** permissionStart */
      permissionStart?: string;
    }
    
      

        export class PermissionItemBO {
      
      /** accountType */
      accountType?: number;

      /** approveId */
      approveId?: number;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** isOwner */
      isOwner?: boolean;

      /** owner */
      owner?: boolean;

      /** permissionEnd */
      permissionEnd?: string;

      /** permissionStart */
      permissionStart?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** resourceId */
      resourceId?: string;

      /** resourceName */
      resourceName?: string;

      /** resourceType */
      resourceType?: number;

      /** tableType */
      tableType?: number;

      /** tenantId */
      tenantId?: number;

      /** userId */
      userId?: string;
    }
    
      

        export class PhysicalTableBO {
      
      /** columns */
      columns?: Array<defs.ColumnBO>;

      /** createTime */
      createTime?: string;

      /** dataGmtModified */
      dataGmtModified?: string;

      /** desc */
      desc?: string;

      /** fileType */
      fileType?: string;

      /** guid */
      guid?: string;

      /** location */
      location?: string;

      /** ownerName */
      ownerName?: string;

      /** partitionColumns */
      partitionColumns?: Array<defs.ColumnBO>;

      /** partitioned */
      partitioned?: boolean;

      /** physicalName */
      physicalName?: string;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** recordTotal */
      recordTotal?: number;

      /** storageVolumn */
      storageVolumn?: number;

      /** subareaNum */
      subareaNum?: number;

      /** tableGmtModified */
      tableGmtModified?: string;
    }
    
      

        export class PhysicalTableSummaryBO {
      
      /** 表注释 */
      comment?: string;

      /** DDL创建时间 */
      gmtDDLCreate?: string;

      /** DDL修改时间 */
      gmtDDLModified?: string;

      /** 数据更新时间 */
      gmtDataModified?: string;

      /** 最新时间分区 */
      latestDatePartition?: string;

      /** 负责人工号 */
      ownerId?: string;

      /** 负责人名称 */
      ownerName?: string;

      /** 物理表名 */
      tableName?: string;
    }
    
      

        export class PreCompileBO {
      
      /** 预编译状态 */
      status?: string;

      /** 预编译任务，单条SQL一个编译任务 */
      tasks?: Array<defs.PreCompileTaskBO>;
    }
    
      

        export class PreCompileTaskBO {
      
      /** 预编译结果信息 */
      message?: string;

      /** 预编译产出物理SQL */
      physicalSql?: string;

      /** 预编译错误开始列 */
      startCol?: number;

      /** 预编译错误开始行 */
      startRow?: number;

      /** 预编译状态 */
      status?: string;
    }
    
      

        export class ProjectCreateBO {
      
      /** bizUnitId */
      bizUnitId?: number;

      /** cn */
      cn?: string;

      /** dataSourceId */
      dataSourceId?: number;

      /** des */
      des?: string;

      /** name */
      name?: string;

      /** nameSpaceTag */
      nameSpaceTag?: string;
    }
    
      

        export class ProjectGrantBO {
      
      /** message */
      message?: string;

      /** sql */
      sql?: string;
    }
    
      

        export class ProjectInBrief {
      
      /** projectId */
      projectId?: string;

      /** projectName */
      projectName?: string;
    }
    
      

        export class ProjectMemberBO {
      
      /** 加入项目时间 */
      gmtCreate?: string;

      /** 变更时间 */
      gmtModified?: string;

      /** 变更操作人 */
      lastModifier?: string;

      /** 变更操作人用户名 */
      lastModifierName?: string;

      /** 项目 ID */
      projectId?: number;

      /** 用户所属租户 ID */
      tenantId?: number;

      /** 用户 ID */
      userId?: string;

      /** 用户名 */
      userName?: string;

      /** 用户角色 ID */
      userRoleId?: number;
    }
    
      

        export class ProjectMemberDTO {
      
      /** 目标用户 ID */
      userId?: string;

      /** 赋予用户的角色 */
      userRoleId?: number;
    }
    
      

        export class ProjectUpdateBO {
      
      /** 业务板块 ID */
      bizUnitId?: number;

      /** 中文名称 */
      cn?: string;

      /** 数据源 ID */
      dataSourceId?: number;

      /** 描述信息 */
      des?: string;

      /** 项目 ID */
      id?: number;

      /** 英文名称 */
      name?: string;

      /** 业务空间类型 */
      nameSpaceTag?: string;
    }
    
      

        export class ProjectVO {
      
      /** bizUnitCn */
      bizUnitCn?: string;

      /** bizUnitId */
      bizUnitId?: number;

      /** bizUnitName */
      bizUnitName?: string;

      /** 中文名 */
      cn?: string;

      /** 计算引擎类型，MaxCompute：1，Hadoop：2，EMR：3 */
      computingEngine?: number;

      /** dataSourceId */
      dataSourceId?: number;

      /** dataSourceName */
      dataSourceName?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 项目成员个数 */
      memberCount?: number;

      /** 项目成员 */
      members?: Array<string>;

      /** 英文名 */
      name?: string;

      /** nameSpaceTag */
      nameSpaceTag?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;

      /** 当前请求用户在此项目的角色 */
      userRoleId?: number;

      /** 警告信息 */
      warningMessages?: Array<string>;
    }
    
      

        export class QsmdAlertRecordBO {
      
      /** alertId */
      alertId?: number;

      /** alertLevel */
      alertLevel?: 'INFORMATION' | 'WARNING' | 'CRITICAL';

      /** alertOwner */
      alertOwner?: defs.QsmdUser;

      /** alertReason */
      alertReason?: 'MONITOR_FINISH' | 'MONITOR_ERROR' | 'MONITOR_SET_TIMEOUT' | 'MONITOR_UN_FINISH';

      /** alertRecipient */
      alertRecipient?: defs.QsmdUser;

      /** alertRecordStatus */
      alertRecordStatus?: 'SUCCESS' | 'SENDING' | 'FAILED' | 'SENT';

      /** alertType */
      alertType?: 'BY_EMAIL' | 'BY_SMS' | 'BY_CELLPHONE';

      /** content */
      content?: string;

      /** dueAlertTime */
      dueAlertTime?: string;

      /** failedReasonMsg */
      failedReasonMsg?: string;

      /** id */
      id?: number;

      /** monitorType */
      monitorType?: 'CUSTOM_TASK_MONITOR';

      /** nodeId */
      nodeId?: string;

      /** nodeName */
      nodeName?: string;

      /** projectId */
      projectId?: string;

      /** projectName */
      projectName?: string;

      /** sendAlertTime */
      sendAlertTime?: string;

      /** setTime */
      setTime?: string;
    }
    
      

        export class QsmdCustomAlert {
      
      /** alertSentToList */
      alertSentToList?: Array<defs.QsmdUser>;

      /** alertType */
      alertType?: Array<string>;

      /** creator */
      creator?: defs.QsmdUser;

      /** customAlertReason */
      customAlertReason?: 'MONITOR_FINISH' | 'MONITOR_ERROR' | 'MONITOR_SET_TIMEOUT' | 'MONITOR_UN_FINISH';

      /** id */
      id?: number;

      /** nodeId */
      nodeId?: string;

      /** nodeName */
      nodeName?: string;

      /** nodePeriod */
      nodePeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'MINUTE' | 'OTHER';

      /** nodeType */
      nodeType?: 'CYCLE' | 'OPERATION';

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** setTime */
      setTime?: string;

      /** status */
      status?: string;

      /** taskOwner */
      taskOwner?: boolean;
    }
    
      

        export class QsmdCustomAlertInfo {
      
      /** alertSentTo */
      alertSentTo?: Array<string>;

      /** alertType */
      alertType?: Array<string>;

      /** creatorId */
      creatorId?: string;

      /** customAlertReason */
      customAlertReason?: 'MONITOR_FINISH' | 'MONITOR_ERROR' | 'MONITOR_SET_TIMEOUT' | 'MONITOR_UN_FINISH';

      /** nodeInfoList */
      nodeInfoList?: Array<defs.QsmdNodeInfo>;

      /** projectId */
      projectId?: number;

      /** projectName */
      projectName?: string;

      /** setTime */
      setTime?: string;

      /** taskOwner */
      taskOwner?: boolean;

      /** tenantId */
      tenantId?: number;
    }
    
      

        export class QsmdNodeInfo {
      
      /** cron */
      cron?: string;

      /** nodeId */
      nodeId?: string;

      /** nodeName */
      nodeName?: string;

      /** nodePeriod */
      nodePeriod?: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'MINUTE' | 'OTHER';

      /** nodeType */
      nodeType?: 'CYCLE' | 'OPERATION';

      /** ownerId */
      ownerId?: string;
    }
    
      

        export class QsmdUser {
      
      /** contact */
      contact?: string;

      /** nameOrNick */
      nameOrNick?: string;

      /** userId */
      userId?: string;

      /** userName */
      userName?: string;
    }
    
      

        export class QueryLogVO {
      
      /** lastSql */
      lastSql?: boolean;

      /** queryId */
      queryId?: string;

      /** sqlIndex */
      sqlIndex?: number;

      /** sqlTotalNum */
      sqlTotalNum?: number;

      /** taskId */
      taskId?: string;

      /** taskStatus */
      taskStatus?: 'INIT' | 'WAIT_SCHEDULE' | 'WAIT_SUBMISSION' | 'WAIT_RESOURCE' | 'RUNNING' | 'FAILED' | 'KILLING' | 'KILLED' | 'PAUSED' | 'SUCCESS';

      /** taskrunLog */
      taskrunLog?: defs.TaskrunLog;
    }
    
      

        export class QueryResultVO {
      
      /** queryId */
      queryId?: string;

      /** result */
      result?: string;

      /** taskId */
      taskId?: string;
    }
    
      

        export class QueryVO {
      
      /** queryId */
      queryId?: string;

      /** sqlTotalNum */
      sqlTotalNum?: number;
    }
    
      

        export class ReapplyDTO {
      
      /** 账号类型 */
      accountType?: number;

      /** 申请内容 */
      content?: string;

      /** 权限实体 */
      entities?: Array<defs.ResourceAttributeBO>;

      /** 资源类型 */
      entityType?: number;

      /** 结束时间 */
      gmtEnd?: string;

      /** 开始时间 */
      gmtStart?: string;

      /** 权限类型 - 查询、开发 */
      operationTypes?: Array<integer>;

      /** 项目id或业务板块id */
      projectId?: number;

      /** 项目名称 */
      projectName?: string;

      /** 申请理由 */
      reason?: string;

      /** 资源中文名 */
      resourceCn?: string;

      /** 资源描述 */
      resourceDes?: string;

      /** 资源id */
      resourceId?: string;

      /** 选中的资源属性列表 */
      selectedEntities?: Array<string>;

      /** 逻辑表类型 */
      tableType?: number;

      /** 资源被删除的告警信息 */
      warningMessage?: string;
    }
    
      

        export class ReasonEntityDTO {
      
      /** reason */
      reason?: string;
    }
    
      

        export class RecommendTableBO {
      
      /** 中文名 */
      cn?: string;

      /** 详情页访问次数 */
      cnt?: number;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象id */
      id?: string;

      /** 对象标签列表 */
      labels?: Array<string>;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 实体类型 */
      tableEntityType?: '1' | '2' | 1 | 2;

      /** 对象类型 */
      type?: '-1' | '1' | '2' | '3' | '4' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | -1 | 1 | 2 | 3 | 4 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;
    }
    
      

        export class RegisterUdfDTO {
      
      /** className */
      className?: string;

      /** commandHelp */
      commandHelp?: string;

      /** description */
      description?: string;

      /** dirName */
      dirName?: string;

      /** functionName */
      functionName?: string;

      /** refResourceIds */
      refResourceIds?: Array<integer>;

      /** udfCategory */
      udfCategory?: number;
    }
    
      

        export class RelatedSearchResultBO {
      
      /** 推荐关键字 */
      recommendKeywords?: Array<string>;

      /** 搜索结果 */
      searchResults?: Array<defs.SearchResultBO>;
    }
    
      

        export class RelationBaseBO {
      
      /** 字段中文名称 */
      cn?: string;

      /** 关联属性是否有下游依赖 */
      hasChildDependence?: boolean;

      /** 字段id */
      id?: number;

      /** 是否主键 */
      isPk?: boolean;

      /** 字段英文名称 */
      name?: string;

      /** 关联维度角色名 */
      refDimensionRole?: string;

      /** 关联维度角色中文名 */
      refDimensionRoleCn?: string;

      /** 关联维度 */
      relationModel?: defs.SingleModelBO;

      /** 维度表属性类型，@see DimensionAttributeTypeEnum */
      type?: number;
    }
    
      

        export class RelationEntity {
      
      /** 列名 */
      columnNameList?: Array<string>;

      /** 表的guid */
      modelId?: string;

      /** 表类型：4是物理表，其他是逻辑表 */
      modelType?: number;

      /** 表名 */
      tableName?: string;

      /** 是否临时表 */
      tempTable?: boolean;
    }
    
      

        export class RelationLineBO {
      
      /** 维度之间关联的业务过程列表 */
      bizProcessList?: Array<defs.DipBizProcessBO>;

      /** 维度Node1 */
      dim?: defs.DimNodeBO;

      /** 维度Node2 */
      refDim?: defs.DimNodeBO;

      /** 边的类型1:业务过程;2:关联 */
      type?: number;
    }
    
      

        export class ResourceAttributeBO {
      
      /** allType */
      allType?: string;

      /** attribute */
      attribute?: string;

      /** attributeCn */
      attributeCn?: string;

      /** attributeDes */
      attributeDes?: string;

      /** attributeId */
      attributeId?: string;

      /** attributeName */
      attributeName?: string;

      /** bizUnitId */
      bizUnitId?: number;

      /** children */
      children?: Array<defs.ResourceAttributeBO>;

      /** createTime */
      createTime?: string;

      /** dataType */
      dataType?: string;

      /** owner */
      owner?: string;

      /** parentAttributeId */
      parentAttributeId?: string;

      /** primaryKey */
      primaryKey?: string;

      /** projectId */
      projectId?: number;

      /** resourceCn */
      resourceCn?: string;

      /** resourceDes */
      resourceDes?: string;

      /** resourceId */
      resourceId?: string;

      /** resourceName */
      resourceName?: string;

      /** resourceType */
      resourceType?: '1' | '2' | '3' | 1 | 2 | 3;

      /** role */
      role?: string;

      /** roleCn */
      roleCn?: string;

      /** tableType */
      tableType?: '1' | '2' | '3' | 1 | 2 | 3;
    }
    
      

        export class ResourceBO {
      
    }
    
      

        export class ResourceMetaBO {
      
      /** category */
      category?: number;

      /** contentType */
      contentType?: string;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** description */
      description?: string;

      /** dirName */
      dirName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** name */
      name?: string;

      /** projectId */
      projectId?: number;
    }
    
      

        export class Result {
      
      /** code */
      code?: string;

      /** data */
      data?: number;

      /** message */
      message?: string;

      /** monitorLog */
      monitorLog?: object;

      /** traceId */
      traceId?: string;
    }
    
      

        export class RoleBO {
      
      /** description */
      description?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;
    }
    
      

        export class SamePeriodUpstreamDTO {
      
      /** 关联的源表 */
      associatedSourceTable?: defs.TableDTO;

      /** 简单的节点信息 */
      simpleNodeInfo?: defs.SimpleNodeInfoDTO;

      /** 上游输出名称 */
      upstreamOutputName?: string;
    }
    
      

        export class SearchResultBO {
      
      /** 归属业务板块id */
      bizUnitId?: number;

      /** 归属业务板块名称 */
      bizUnitName?: string;

      /** 中文名 */
      cn?: string;

      /** 热度 */
      cnt?: number;

      /** 描述 */
      des?: string;

      /** 表字段数 */
      fieldCount?: number;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象id */
      id?: string;

      /** 对象标签列表 */
      labels?: Array<string>;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 归属项目标识 */
      projectId?: number;

      /** 归属项目名称 */
      projectName?: string;

      /** 实体类型 */
      tableEntityType?: '1' | '2' | 1 | 2;

      /** 对象类型 */
      type?: '-1' | '1' | '2' | '3' | '4' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | -1 | 1 | 2 | 3 | 4 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;

      /** 详情页访问次数 */
      views?: number;
    }
    
      

        export class SimpleNodeInfoDTO {
      
      /** 节点id */
      nodeId?: string;

      /** 节点名称 */
      nodeName?: string;

      /** owner的信息, 包括id, name */
      ownerInfo?: defs.SimpleUserInfoDTO;
    }
    
      

        export class SimpleUserInfoDTO {
      
      /** 用户id */
      userId?: string;

      /** 用户名称 */
      userName?: string;
    }
    
      

        export class SingleModelBO {
      
      /** 子字段区 */
      childAttrs?: Array<defs.AttributeBO>;

      /** 子区域 */
      childs?: Array<defs.RelationBaseBO>;

      /** 模型中文名称 */
      cn?: string;

      /** 维度类型 */
      dimType?: number;

      /** 模型id */
      id?: number;

      /** 杂项字段维度区 */
      junk?: defs.AttributeBO;

      /** 主键区 */
      key?: defs.AttributeBO;

      /** 度量字段区 */
      measures?: Array<defs.AttributeBO>;

      /** 模型英文名称 */
      name?: string;

      /** 普通字段区 */
      normals?: Array<defs.AttributeBO>;

      /** 关联字段区 */
      relations?: Array<defs.AttributeBO>;

      /** 系统字段区 */
      sys?: defs.AttributeBO;
    }
    
      

        export class SourceMainTableBO {
      
      /** 描述 */
      desc?: string;

      /** 最近更新时间 */
      lastModifierTime?: number;

      /** 项目id */
      projectId?: number;

      /** 表id，表可能是物理表（string）或者是逻辑表（long）所以统一处理为string */
      tableId?: string;

      /** 表名称 */
      tableName?: string;

      /** 表类型  */
      tableType?: number;
    }
    
      

        export class SummaryDerivativeIndexBO {
      
      /** bizConditionMap */
      bizConditionMap?: object;

      /** 中文名 */
      cn?: string;

      /** 数据类型 */
      dataType?: string;

      /** 描述 */
      des?: string;

      /** dimIds */
      dimIds?: Array<integer>;

      /** 粒度所包含的维度 */
      dimensions?: Array<defs.DimBO>;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 所属粒度 */
      granularityId?: number;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 派生指标计算逻辑表达式 */
      logic?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** parentAtomicIndex */
      parentAtomicIndex?: defs.DerivedIndexParentBO;

      /** parentAtomicIndexId */
      parentAtomicIndexId?: number;

      /** parentAtomicIndexes */
      parentAtomicIndexes?: Array<defs.DerivedIndexParentBO>;

      /** parentBizConditionId */
      parentBizConditionId?: number;

      /** 所属project */
      project?: defs.BaseBO;

      /** 所属时间周期 */
      statPeriod?: defs.TimePeriodBO;

      /** statPeriodId */
      statPeriodId?: number;

      /** status */
      status?: '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;

      /** summaryTableCatalogList */
      summaryTableCatalogList?: Array<defs.SummaryTableCatalogBO>;

      /** summaryTableCatalogMap */
      summaryTableCatalogMap?: object;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class SummaryFilterBO {
      
      /** filterList */
      filterList?: Array<defs.FilterBO>;

      /** summaryTableIndexType */
      summaryTableIndexType?: number;
    }
    
      

        export class SummaryPhysicalIndexBO {
      
      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 关联的维度ID */
      joinDimId?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 关联的分区 */
      partitionName?: string;

      /** 物理指标数据类型 */
      physicalIndexDataType?: string;

      /** 源表字段名 */
      sourceColumnName?: string;

      /** 源项目ID */
      sourceProjectId?: number;

      /** 源表名 */
      sourceTableName?: string;

      /** 物理指标的分类 */
      summaryTableCatalogList?: Array<defs.SummaryTableCatalogBO>;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class SummaryTableBO {
      
      /** 业务板块ID */
      bizUnitId?: number;

      /** 业务板块名字 */
      bizUnitName?: string;

      /** 中文名 */
      cn?: string;

      /** 需要删除的派生指标IDs */
      delDerivedIds?: Array<integer>;

      /** 描述 */
      des?: string;

      /** 来源维度逻辑表 */
      dimAttrList?: Array<defs.DimAttributeBO>;

      /** 维度ID */
      dimIds?: Array<integer>;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 粒度ID */
      granularityId?: number;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 来源派生指标 */
      summaryDerivativeIndexList?: Array<defs.SummaryDerivativeIndexBO>;

      /** 筛选 */
      summaryFilterList?: Array<defs.SummaryFilterBO>;

      /** 来源物理表指标 */
      summaryPhysicalIndexList?: Array<defs.SummaryPhysicalIndexBO>;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class SummaryTableCatalogBO {
      
      /** bizUnitId */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class SummaryTableProfileBO {
      
      /** 业务板块ID */
      bizUnitId?: number;

      /** 业务板块名字 */
      bizUnitName?: string;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 维度ID */
      dimIds?: Array<integer>;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 粒度ID */
      granularityId?: number;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class SupplementNodeBO {
      
      /** aliasName */
      aliasName?: string;

      /** children */
      children?: Array<defs.TreeNodeBO>;

      /** 对象中文名称 */
      cn?: string;

      /** count */
      count?: number;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** 文件内容数据(仅对任务节点/文件节点有效) */
      data?: object;

      /** 描述 */
      des?: string;

      /** 所在目录路径(仅对文件/资源节点有效) */
      dirName?: string;

      /** 实例的执行情况 */
      executeTimeEntity?: defs.ExecuteTimeEntity;

      /** 创建时间(非实体对象节点为空) */
      gmtCreate?: string;

      /** 修改时间(非实体对象节点为空) */
      gmtModified?: string;

      /** 对象 ID */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** leaf */
      leaf?: boolean;

      /** 锁持有人用户ID(非实体对象节点为空) */
      lockOwner?: string;

      /** 锁持有人用户名(非实体对象节点为空) */
      lockOwnerName?: string;

      /** 对象显示名称 */
      name?: string;

      /** 已发布过的节点id */
      nodeId?: string;

      /** 用来说明node的SQL类型，只针对节点生效 */
      nodeType?: number;

      /** 树节点代表的实体对象数据 */
      object?: object;

      /** 用来标志节点是否已发布 */
      online?: number;

      /** 对象所在项目 */
      projectId?: number;

      /** 节点状态：0(草稿), 2(已上线), 100(开发中) */
      status?: string;

      /** 对象类型 */
      type?: string;

      /** url */
      url?: string;
    }
    
      

        export class SupportedTaskTypeBO {
      
      /** dsOwner */
      dsOwner?: string;

      /** supported */
      supported?: boolean;

      /** taskType */
      taskType?: string;
    }
    
      

        export class SysFunctionBO {
      
      /** 适用数据库 */
      availableDb?: string;

      /** 函数所属分类 */
      category?: number;

      /** 命令格式化 */
      commandFormat?: string;

      /** 负责人 */
      creator?: string;

      /** 使用用例 */
      example?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 主键ID */
      id?: number;

      /** 最近修改人 */
      lastModifier?: string;

      /** 函数名 */
      name?: string;

      /** 参数描述 */
      paramDesc?: string;

      /** 项目空间ID */
      projectId?: number;

      /** 用途 */
      purpose?: string;

      /** 函数名 */
      type?: string;
    }
    
      

        export class TableBO {
      
      /** allAttributeList */
      allAttributeList?: Array<defs.AttributeBO>;

      /** 表的关联属性 */
      attributes?: Array<defs.UnionTableAttributeBO>;

      /** 子属性 */
      childAttributes?: Array<defs.TableMetaBO>;

      /** 维度属性 */
      dimAttributes?: Array<defs.TableMetaBO>;
    }
    
      

        export class TableBloodRelationBO {
      
      /** 该表所属的业务板块 */
      bizUnitName?: string;

      /** 直接下游的表个数 */
      directDownStreamTableCount?: number;

      /** 直接上游的表个数 */
      directUpStreamTableCount?: number;

      /** 下游实体列表 */
      downStreamTableList?: Array<defs.RelationEntity>;

      /** 表guid，对逻辑表来说是id */
      modelId?: string;

      /** 表类型 */
      modelType?: number;

      /** 产出物理表的节点id */
      nodeId?: string;

      /** 表的负责人 */
      tableOwner?: string;

      /** 上游实体列表 */
      upStreamTableList?: Array<defs.RelationEntity>;
    }
    
      

        export class TableDTO {
      
      /** catalog名称 */
      catalogName?: string;

      /** 表名, 不包含catalog名称 */
      tableName?: string;

      /** 表类型, 逻辑表[LOGICAL], 物理表[PHYSICAL]等 */
      tableType?: 'LOGICAL' | 'PHYSICAL';
    }
    
      

        export class TableDetailBO {
      
      /** 事实逻辑表业务过程中文名称 */
      bizProcessCn?: string;

      /** 事实逻辑表业务过程Id */
      bizProcessId?: number;

      /** 业务板块中文名称 */
      bizUnitCn?: string;

      /** 业务板块Id */
      bizUnitId?: number;

      /** 业务板块中文名称 */
      bizUnitName?: string;

      /** 表中文名称 */
      cn?: string;

      /** 变更信息-创建时间 */
      createTime?: string;

      /** 数据域空间中文名 */
      dataDomainCn?: string;

      /** 数据域空间Id */
      dataDomainId?: number;

      /** DB类型 */
      dbType?: string;

      /** 描述 */
      des?: string;

      /** 逻辑表-逻辑表表类型 */
      dimType?: number;

      /** 维度逻辑表维度中文名称 */
      dimensionCn?: string;

      /** 是否被收藏 true 是 false 否 */
      favFlag?: boolean;

      /** 收藏次数 */
      favtimes?: number;

      /** 事务发生时间 */
      gmtCreate?: string;

      /** 汇总表统计粒度中文名称 */
      granularityCn?: string;

      /** 表id */
      id?: string;

      /** 变更信息-最近一次数据查看时间 */
      lastQueryTime?: string;

      /** 变更信息-最近一次数据的更新时间 */
      latestFinishTime?: string;

      /** 生命周期 */
      lifecycle?: number;

      /** 主表完整名称 */
      mainTableName?: string;

      /** 表英文名称 */
      name?: string;

      /** 空间tag */
      namespaceTag?: string;

      /** 负责人id */
      owner?: string;

      /** 负责人名称 */
      ownerName?: string;

      /** 主键 */
      primarykey?: string;

      /** 项目id */
      projectId?: number;

      /** 项目名称 */
      projectName?: string;

      /** 读取次数 */
      readTimes?: number;

      /** 存储大小 */
      storage?: number;

      /** 主表筛选条件 */
      tableCondition?: string;

      /** 表实体类型 */
      tableEntityType?: number;

      /** 查询表类型 */
      type?: number;

      /** view */
      view?: boolean;

      /** 浏览次数 */
      views?: number;
    }
    
      

        export class TableMetaBO {
      
      /** attributes */
      attributes?: Array<defs.AttributeBO>;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class TableNameWithProjectIdBO {
      
      /** projectId */
      projectId?: number;

      /** tableNames */
      tableNames?: Array<string>;
    }
    
      

        export class TaskContentEntity {
      
      /** taskContent */
      taskContent?: string;

      /** taskId */
      taskId?: string;

      /** version */
      version?: number;
    }
    
      

        export class TaskEntity {
      
      /** 业务日期 */
      bizDate?: string;

      /** 所属的dagrunId */
      dagrunId?: string;

      /** 任务所属dagrun的类型,可能是[正常1],[补数据2],[手工3] */
      dagrunType?: 2 | 2;

      /** 任务的下游任务 */
      downstreamTaskRelations?: Array<defs.TaskRelation>;

      /** 应该运行的时间点 */
      dueTime?: string;

      /** executeTimeEntity */
      executeTimeEntity?: defs.ExecuteTimeEntity;

      /** 所属的flowId,只有在dagrunType不是normal的情况才会有值 */
      flowId?: string;

      /** 在当天运行的所有任务中的顺序 */
      index?: number;

      /** nodeFrom */
      nodeFrom?: string;

      /** 节点id */
      nodeId?: string;

      /** Operator类型, 如SQL, DataX等 */
      operatorType?: number;

      /** 任务的参数 */
      params?: string;

      /** 优先级, 越小越高 */
      priority?: number;

      /** 任务的状态,[未运行1],[等待调度2],[等待提交3],[等待资源4],[执行中5],[执行失败6],[被终止6],[执行成功0] */
      status?: number;

      /** 任务描述 */
      taskDesc?: string;

      /** taskId */
      taskId?: string;

      /** 任务名称, 一般与节点名称相同 */
      taskName?: string;

      /** 任务类型,可能是[正常1],[虚拟2] */
      taskType?: number;

      /** timeInfo */
      timeInfo?: defs.EntityTimeInfo;

      /** 任务的上游任务 */
      upstreamTaskRelations?: Array<defs.TaskRelation>;

      /** userInfo */
      userInfo?: defs.EntityUserInfo;
    }
    
      

        export class TaskRelation {
      
      /** sourceTaskId */
      sourceTaskId?: string;

      /** status */
      status?: number;

      /** targetTaskId */
      targetTaskId?: string;
    }
    
      

        export class TaskStatisticVO {
      
      /** 租户各个状态的任务个数 */
      countByStatusOfTenant?: object;

      /** 用户各个状态的任务个数 */
      countByStatusOfUser?: object;
    }
    
      

        export class TaskrunEntity {
      
      /** 完成执行时间 */
      finishExecuteTime?: string;

      /** 开始执行时间 */
      startExecuteTime?: string;

      /** taskId */
      taskId?: string;

      /** Task的状态 */
      taskStatus?: number;

      /** taskrunId */
      taskrunId?: string;

      /** Taskrun的状态 */
      taskrunStatus?: number;
    }
    
      

        export class TaskrunLog {
      
      /** content */
      content?: string;

      /** hasNextLog */
      hasNextLog?: boolean;

      /** hasResult */
      hasResult?: boolean;

      /** nextLogOffset */
      nextLogOffset?: number;

      /** status */
      status?: 'INIT' | 'WAIT_SCHEDULE' | 'WAIT_SUBMISSION' | 'WAIT_RESOURCE' | 'RUNNING' | 'FAILED' | 'KILLING' | 'KILLED' | 'PAUSED' | 'SUCCESS';
    }
    
      

        export class TempTaskRequestDTO {
      
      /** 任务类型 */
      operatorTypeCode?: number;

      /** 任务运行参数 */
      params?: string;

      /** 任务运行脚本 */
      sqltext?: string;
    }
    
      

        export class TenantDatasourceAccessInfoBO {
      
      /** 数据源接入进度明细[离线数据] */
      datasourceAccessInfoBOList?: Array<defs.DatasourceAccessInfoBO>;

      /** 租户数据源整体接入进度，百分制[0-100][离线数据] */
      tenantDsAccessProcess?: number;
    }
    
      

        export class TenantGlobalAssetBO {
      
      /** 业务板块的信息，包括id，name projectCnt 和 storage[离线数据] */
      bizUnitInfo?: Array<defs.BizUnitGlobalAssetBO>;

      /** 租户下项目总数量 */
      projectCnt?: number;

      /** 租户的整体存储消耗[离线数据] */
      storage?: number;

      /** 租户下表数量，包括逻辑表和物理表（排除黑盒物理表） */
      tableCnt?: number;

      /** 租户下任务总数量[离线数据] */
      taskCnt?: number;
    }
    
      

        export class TenantInBrief {
      
      /** tenantId */
      tenantId?: string;
    }
    
      

        export class TenantProcessAssetBO {
      
      /** 租户业务限定数量 */
      adjunctWordCnt?: number;

      /** 租户原子指标数量 */
      atomicIndexCnt?: number;

      /** 租户业务过程数量 */
      bizProcessCnt?: number;

      /** 租户派生指标数量 */
      derivedIndexCnt?: number;

      /** 租户维度数量 */
      dimensionCnt?: number;

      /** 租户维度逻辑表数量 */
      dimensionTableCnt?: number;

      /** 租户事实逻辑表数量 */
      factTableCnt?: number;

      /** 租户汇总逻辑表数量 */
      summaryTableCnt?: number;
    }
    
      

        export class TenantVO {
      
      /** displayName */
      displayName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;

      /** ownerAccountName */
      ownerAccountName?: string;

      /** ownerDisplayName */
      ownerDisplayName?: string;

      /** ownerId */
      ownerId?: string;

      /** ownerNick */
      ownerNick?: string;

      /** ownerRealName */
      ownerRealName?: string;
    }
    
      

        export class TimePartitionBO {
      
      /** 业务板块id */
      bizUnitId?: number;

      /** 中文名 */
      cn?: string;

      /** 创建人id */
      creator?: string;

      /** 创建人名称 */
      creatorName?: string;

      /** 数据类型 */
      dataType?: string;

      /** 默认值 */
      defaultValue?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改日期 */
      gmtModified?: string;

      /** 修改人id */
      lastModifier?: string;

      /** 修改人名称 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;
    }
    
      

        export class TimePeriodBO {
      
      /** 英文缩写 */
      abbreviation?: string;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象ID */
      id?: number;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 结束时间 */
      periodEnd?: string;

      /** 开始时间 */
      periodStart?: string;

      /** 租户ID */
      tenantId?: number;
    }
    
      

        export class TimeZoneAdapter {
      
      /** displayName */
      displayName?: string;

      /** dstsavings */
      dstsavings?: number;

      /** id */
      id?: string;

      /** rawOffset */
      rawOffset?: number;
    }
    
      

        export class TreeNodeBO {
      
      /** aliasName */
      aliasName?: string;

      /** children */
      children?: Array<defs.TreeNodeBO>;

      /** 对象中文名称 */
      cn?: string;

      /** count */
      count?: number;

      /** creator */
      creator?: string;

      /** creatorName */
      creatorName?: string;

      /** 文件内容数据(仅对任务节点/文件节点有效) */
      data?: object;

      /** 描述 */
      des?: string;

      /** 所在目录路径(仅对文件/资源节点有效) */
      dirName?: string;

      /** 创建时间(非实体对象节点为空) */
      gmtCreate?: string;

      /** 修改时间(非实体对象节点为空) */
      gmtModified?: string;

      /** 对象 ID */
      id?: number;

      /** lastModifier */
      lastModifier?: string;

      /** lastModifierName */
      lastModifierName?: string;

      /** leaf */
      leaf?: boolean;

      /** 锁持有人用户ID(非实体对象节点为空) */
      lockOwner?: string;

      /** 锁持有人用户名(非实体对象节点为空) */
      lockOwnerName?: string;

      /** 对象显示名称 */
      name?: string;

      /** 已发布过的节点id */
      nodeId?: string;

      /** 用来说明node的SQL类型，只针对节点生效 */
      nodeType?: number;

      /** 树节点代表的实体对象数据 */
      object?: object;

      /** 用来标志节点是否已发布 */
      online?: number;

      /** 对象所在项目 */
      projectId?: number;

      /** 节点状态：0(草稿), 2(已上线), 100(开发中) */
      status?: string;

      /** 对象类型 */
      type?: string;

      /** url */
      url?: string;
    }
    
      

        export class ULocale {
      
      /** baseName */
      baseName?: string;

      /** characterOrientation */
      characterOrientation?: string;

      /** country */
      country?: string;

      /** displayCountry */
      displayCountry?: string;

      /** displayLanguage */
      displayLanguage?: string;

      /** displayLanguageWithDialect */
      displayLanguageWithDialect?: string;

      /** displayName */
      displayName?: string;

      /** displayNameWithDialect */
      displayNameWithDialect?: string;

      /** displayScript */
      displayScript?: string;

      /** displayScriptInContext */
      displayScriptInContext?: string;

      /** displayVariant */
      displayVariant?: string;

      /** extensionKeys */
      extensionKeys?: Array<defs.Character>;

      /** fallback */
      fallback?: defs.ULocale;

      /** iso3Country */
      iso3Country?: string;

      /** iso3Language */
      iso3Language?: string;

      /** keywords */
      keywords?: defs.Iterator<string>;

      /** language */
      language?: string;

      /** lineOrientation */
      lineOrientation?: string;

      /** name */
      name?: string;

      /** rightToLeft */
      rightToLeft?: boolean;

      /** script */
      script?: string;

      /** unicodeLocaleAttributes */
      unicodeLocaleAttributes?: Array<string>;

      /** unicodeLocaleKeys */
      unicodeLocaleKeys?: Array<string>;

      /** variant */
      variant?: string;
    }
    
      

        export class UdfCategoryDTO {
      
      /** code */
      code?: string;

      /** id */
      id?: number;

      /** name */
      name?: string;
    }
    
      

        export class UnionTableAttributeBO {
      
      /** 属性数据类型 */
      attributeDataType?: string;

      /** 默认值 */
      attributeDefaultValue?: string;

      /** id */
      attributeId?: string;

      /** 属性是否分区 */
      attributeIsPartition?: boolean;

      /** 计算逻辑 */
      attributeLogic?: string;

      /** 作用域 */
      attributeScope?: string;

      /** 属性序列 */
      attributeSeq?: number;

      /** attributeSqlFromPart */
      attributeSqlFromPart?: string;

      /** 事实表属性类型，维度（dimension）或度量（measure），@see BizAttributeTypeEnum */
      attributeType?: number;

      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 维度id */
      dimensionId?: number;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 是否有下游依赖 */
      hasChildDependence?: boolean;

      /** 是否有线上版本 */
      hasOnline?: boolean;

      /** 热度值 */
      hotVal?: number;

      /** 对象ID */
      id?: number;

      /** 是否外键 */
      isFk?: boolean;

      /** isNotNull */
      isNotNull?: boolean;

      /** 是否物理化 */
      isPhysical?: boolean;

      /** 是否主键 */
      isPk?: boolean;

      /** isRepeat */
      isRepeat?: boolean;

      /** isUnique */
      isUnique?: boolean;

      /** 修改人ID */
      lastModifier?: string;

      /** 修改人 */
      lastModifierName?: string;

      /** logicTableId */
      logicTableId?: number;

      /** 模型id */
      modelId?: number;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 是否推荐字段 */
      recommend?: boolean;

      /** 引用维度逻辑表中文名称 */
      refDimCn?: string;

      /** 引用维度逻辑表英文名称 */
      refDimName?: string;

      /** 引用维度逻辑表ID */
      refDimensionId?: number;

      /** 引用维度 */
      refDimensionIsMaxPt?: boolean;

      /** 引用维度角色名 */
      refDimensionRole?: string;

      /** 引用维度角色中文名 */
      refDimensionRoleCn?: string;

      /** 测试状态 */
      status?: number;

      /** 来源表 */
      table?: string;

      /** 表实体类型 */
      tableEntityTypeEnum?: '1' | '2' | 1 | 2;

      /** 表id */
      tableId?: string;

      /** 租户ID */
      tenantId?: number;

      /** 维度表属性类型，@see DimensionAttributeTypeEnum */
      type?: number;
    }
    
      

        export class UpdateResourceDTO {
      
      /** content */
      content?: string;

      /** description */
      description?: string;

      /** name */
      name?: string;

      /** size */
      size?: number;
    }
    
      

        export class UpdateUdfDTO {
      
      /** className */
      className?: string;

      /** commandHelp */
      commandHelp?: string;

      /** description */
      description?: string;

      /** functionName */
      functionName?: string;

      /** refResourceIds */
      refResourceIds?: Array<integer>;

      /** udfCategory */
      udfCategory?: number;
    }
    
      

        export class UserDetailInfoVO {
      
      /** mineProjects */
      mineProjects?: Array<defs.ProjectVO>;

      /** tenantProjects */
      tenantProjects?: Array<defs.ProjectVO>;

      /** userInfo */
      userInfo?: defs.UserInfoVO;
    }
    
      

        export class UserInfoVO {
      
      /** 账号类型，与权限无关 */
      accountTypes?: Array<string>;

      /** 显示名 */
      displayName?: string;

      /** 区域ID */
      locale?: string;

      /** 实际登录账号 */
      loginId?: string;

      /** 昵称(可能为空) */
      nickName?: string;

      /** 是否为某个项目的管理员 */
      projectAdmin?: boolean;

      /** 真实姓名(可能为空) */
      realName?: string;

      /** roleList */
      roleList?: Array<defs.RoleBO>;

      /** 是否是该产品产品的超级管理员 */
      superAdmin?: boolean;

      /** 当前租户 */
      tenantId?: number;

      /** 当前租户owner */
      tenantOwner?: string;

      /** 时区 */
      timeZone?: string;

      /** 用户 ID */
      userId?: string;
    }
    
      

        export class UserRoleInfoVO {
      
      /** 实际登录账号 */
      loginId?: string;

      /** 项目-角色 */
      projectRoles?: object;

      /** 所属租户 */
      tenantId?: number;

      /** 用户ID */
      userId?: string;
    }
    
      

        export class UserVO {
      
      /** accountName */
      accountName?: string;

      /** currentTenant */
      currentTenant?: defs.TenantVO;

      /** displayName */
      displayName?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** id */
      id?: string;

      /** joinedTenants */
      joinedTenants?: Array<defs.TenantVO>;

      /** locale */
      locale?: defs.ULocale;

      /** nick */
      nick?: string;

      /** realName */
      realName?: string;

      /** timeZone */
      timeZone?: defs.TimeZoneAdapter;

      /** userId */
      userId?: string;
    }
    
      

        export class VisitHistoryBO {
      
      /** 中文名 */
      cn?: string;

      /** 描述 */
      des?: string;

      /** 访问表是否被收藏1：收藏 ，0：未收藏 */
      favorFlag?: number;

      /** 创建时间 */
      gmtCreate?: string;

      /** 修改时间 */
      gmtModified?: string;

      /** 对象id */
      id?: string;

      /** 对象标签列表 */
      labels?: Array<string>;

      /** 英文名 */
      name?: string;

      /** 创建人ID */
      owner?: string;

      /** 创建人名字 */
      ownerName?: string;

      /** 实体类型 */
      tableEntityType?: '1' | '2' | 1 | 2;

      /** 对象类型 */
      type?: '-1' | '1' | '2' | '3' | '4' | '8' | '9' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | -1 | 1 | 2 | 3 | 4 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;
    }
    
      

        export class VisitParam {
      
      /** 对象id */
      objectId?: string;

      /** 访问类型 */
      objectType?: number;

      /** 项目id */
      projectId?: number;

      /** 访问路径 */
      url?: string;
    }
    
      
    }
    
      };
      

      
      declare namespace API {
        export namespace ide {
        
          /**
           * [后端:白路;前端:北渔]资源权限相关API
           */
          export namespace applyPermission {
            
      /**
        * 提交权限申请
        * /api/dip/permission
        */
      export namespace postPermission {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<integer>;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ApplyDTO): Promise<Array<integer>>;
    
      }
    

      /**
        * 重新提交权限申请
        * /api/dip/permission/reapply
        */
      export namespace getPermissionReapply {
        
      export 
      class Params {
        
      /** 申请内容 */
      content: string;
      /** approveId */
      approveId: number;
      }
    

      export type Response = defs.ReapplyDTO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ReapplyDTO>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:北渔]审批权限相关API
           */
          export namespace approvePermission {
            
      /**
        * 获取权限审批单详情
        * /api/dip/permission/applied/{approveId}
        */
      export namespace getAppliedByApproveId {
        
      export 
      class Params {
        
      /** approveId */
      approveId: number;
      }
    

      export type Response = defs.ApproveDetailBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ApproveDetailBO>;
    
      }
    

      /**
        * 我申请的权限申请单列表
        * /api/dip/permission/list/applied
        */
      export namespace getListApplied {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      /** page */
      page: number;
      /** pageSize */
      pageSize: number;
      }
    

      export type Response = defs.PagedData<defs.ApproveBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.ApproveBO>>;
    
      }
    

      /**
        * 待我审批的权限申请单列表
        * /api/dip/permission/list/waitApproving
        */
      export namespace getListWaitApproving {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      /** page */
      page: number;
      /** pageSize */
      pageSize: number;
      }
    

      export type Response = defs.PagedData<defs.ApproveBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.ApproveBO>>;
    
      }
    

      /**
        * 审批通过
        * /api/dip/permission/{id}/accept
        */
      export namespace putByIdAccept {
        
      export 
      class Params {
        
      /** id */
      id: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ReasonEntityDTO): Promise<boolean>;
    
      }
    

      /**
        * 撤销审批单
        * /api/dip/permission/{id}/cancel
        */
      export namespace putByIdCancel {
        
      export 
      class Params {
        
      /** id */
      id: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 拒绝申请
        * /api/dip/permission/{id}/reject
        */
      export namespace putByIdReject {
        
      export 
      class Params {
        
      /** id */
      id: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ReasonEntityDTO): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:天大，年诚;前端:载天] 资产全景相关API
           */
          export namespace assetOverview {
            
      /**
        * 业务板块下业务处理过程的数据结构信息（业务过程，维度之间的关系）
        * /api/assetOverview/bizUnit/{bizUnitId}/bizProcessStructure
        */
      export namespace getBizUnitByBizUnitIdBizProcessStructure {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = defs.BizProcessStructureBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BizProcessStructureBO>;
    
      }
    

      /**
        * 获取业务板块的全局资产数据
        * /api/assetOverview/bizUnit/{bizUnitId}/globalAsset
        */
      export namespace getBizUnitByBizUnitIdGlobalAsset {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = defs.BizUnitGlobalAssetBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BizUnitGlobalAssetBO>;
    
      }
    

      /**
        * 获取租户的全局资产数据
        * /api/assetOverview/tenant/globalAsset
        */
      export namespace getTenantGlobalAsset {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.TenantGlobalAssetBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TenantGlobalAssetBO>;
    
      }
    

      /**
        * 获取租户的数据源接入信息
        * /api/assetOverview/tenant/tenantDatasourceAccessInfo
        */
      export namespace getTenantTenantDatasourceAccessInfo {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.TenantDatasourceAccessInfoBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TenantDatasourceAccessInfoBO>;
    
      }
    

      /**
        * 获取租户业务过程相关的资产数据
        * /api/assetOverview/tenant/tenantProcessAsset
        */
      export namespace getTenantTenantProcessAsset {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.TenantProcessAssetBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TenantProcessAssetBO>;
    
      }
    
          }
        


          /**
           * [后端:驯致;前端:载天]原子指标API
           */
          export namespace atomicIndex {
            
      /**
        * 添加原子指标
        * /api/index/atomic
        */
      export namespace postAtomic {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AtomicIndexAddBO): Promise<number>;
    
      }
    

      /**
        * 根据id获取原子指标
        * /api/index/atomic/atomic/{id}
        */
      export namespace getAtomicAtomicById {
        
      export 
      class Params {
        
      /** status */
      status?: string;
      /** projectId */
      projectId?: number;
      /** id */
      id?: number;
      }
    

      export type Response = defs.AtomicIndexBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.AtomicIndexBO>;
    
      }
    

      /**
        * 根据选中的模型获取原子指标详情,模型相关
        * /api/index/atomic/detail
        */
      export namespace getAtomicDetail {
        
      export 
      class Params {
        
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = defs.AtomicIndexDetailBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.AtomicIndexDetailBO>;
    
      }
    

      /**
        * 根据id获取原子指标详情
        * /api/index/atomic/detail/{id}
        */
      export namespace getAtomicDetailById {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** status */
      status?: string;
      }
    

      export type Response = defs.AtomicIndexDetailBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.AtomicIndexDetailBO>;
    
      }
    

      /**
        * 原子指标列表
        * /api/index/atomic/list
        */
      export namespace getAtomicList {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      }
    

      export type Response = Array<defs.AtomicIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AtomicIndexBO>>;
    
      }
    

      /**
        * 输入事实表或者逻辑表表名，获取雪花模型下的所有字段
        * /api/index/atomic/list/attrs
        */
      export namespace getAtomicListAttrs {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 获取字段的原子指标及所有衍生原子指标
        * /api/index/atomic/list/derived
        */
      export namespace getAtomicListDerived {
        
      export 
      class Params {
        
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = Array<defs.AtomicIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AtomicIndexBO>>;
    
      }
    

      /**
        * 获取业务板块下的原子指标筛选器
        * /api/index/atomic/list/filter
        */
      export namespace getAtomicListFilter {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId?: number;
      /** projectId */
      projectId?: number;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 模糊搜索数据域下的原子指标
        * /api/index/atomic/list/fuzzyOnDomain
        */
      export namespace getAtomicListFuzzyOnDomain {
        
      export 
      class Params {
        
      /** domainId */
      domainId?: number;
      /** projectId */
      projectId?: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      }
    

      export type Response = Array<defs.AtomicIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AtomicIndexBO>>;
    
      }
    

      /**
        * 更新原子指标
        * /api/index/atomic/{id}
        */
      export namespace putAtomicById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AtomicIndexAddBO): Promise<boolean>;
    
      }
    

      /**
        * 删除原子指标
        * /api/index/atomic/{id}
        */
      export namespace deleteAtomicById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      /** deleteOnline */
      deleteOnline?: boolean;
      /** 原子指标名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 下线
        * /api/index/atomic/{id}/offline
        */
      export namespace putAtomicByIdOffline {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** 原子指标名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 发布上线
        * /api/index/atomic/{id}/online
        */
      export namespace putAtomicByIdOnline {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId?: number;
      /** 原子指标名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除线上和线下原子指标
        * /api/index/atomic/{id}/onlineAndDraft
        */
      export namespace deleteAtomicByIdOnlineAndDraft {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** 原子指标名 */
      name: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:北渔]
           */
          export namespace auth {
            
      /**
        * 验证权限
        * /api/dip/auth/hasPermission
        */
      export namespace getHasPermission {
        
      export 
      class Params {
        
      /** tenantId */
      tenantId: number;
      /** userId */
      userId: string;
      /** projectId */
      projectId: number;
      /** resourceKey */
      resourceKey: string;
      /** operateType */
      operateType: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:驯致;前端:载天]业务限定API
           */
          export namespace bizCondition {
            
      /**
        * 添加业务限定
        * /api/bizCondition
        */
      export namespace postBizCondition {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BizConditionAddBO): Promise<number>;
    
      }
    

      /**
        * 根据id获取业务限定
        * /api/bizCondition/biz/detail/{id}
        */
      export namespace getBizConditionBizDetailById {
        
      export 
      class Params {
        
      /** status */
      status?: string;
      /** projectId */
      projectId?: number;
      /** id */
      id?: number;
      }
    

      export type Response = defs.BizConditionBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BizConditionBO>;
    
      }
    

      /**
        * 根据选中的模型获取业务限定详情
        * /api/bizCondition/detail
        */
      export namespace getBizConditionDetail {
        
      export 
      class Params {
        
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = defs.BaseBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseBO>;
    
      }
    

      /**
        * 根据id获取业务限定详情
        * /api/bizCondition/detail/{id}
        */
      export namespace getBizConditionDetailById {
        
      export 
      class Params {
        
      /** status */
      status?: string;
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = defs.BaseBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseBO>;
    
      }
    

      /**
        * 获取业务限定列表
        * /api/bizCondition/list
        */
      export namespace getBizConditionList {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.BizConditionBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BizConditionBO>>;
    
      }
    

      /**
        * 输入事实表或者逻辑表表名，获取雪花模型下的所有字段
        * /api/bizCondition/list/attrs
        */
      export namespace getBizConditionListAttrs {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 获取指定字段的业务限定
        * /api/bizCondition/list/derived
        */
      export namespace getBizConditionListDerived {
        
      export 
      class Params {
        
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = Array<defs.BizConditionBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BizConditionBO>>;
    
      }
    

      /**
        * 获取业务板块下的筛选器
        * /api/bizCondition/list/filter
        */
      export namespace getBizConditionListFilter {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId?: number;
      /** 项目Id */
      projectId: number;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 更新业务限定
        * /api/bizCondition/{id}
        */
      export namespace putBizConditionById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BizConditionAddBO): Promise<boolean>;
    
      }
    

      /**
        * 删除业务限定
        * /api/bizCondition/{id}
        */
      export namespace deleteBizConditionById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      /** 业务限定名 */
      name: string;
      /** deleteOnline */
      deleteOnline?: boolean;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 下线
        * /api/bizCondition/{id}/offline
        */
      export namespace putBizConditionByIdOffline {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** 业务限定名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 发布业务限定
        * /api/bizCondition/{id}/online
        */
      export namespace putBizConditionByIdOnline {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId?: number;
      /** 业务限定名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除线上和线下业务限定
        * /api/bizCondition/{id}/onlineAndDraft
        */
      export namespace deleteBizConditionByIdOnlineAndDraft {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** 业务限定名 */
      name: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:翠翠;前端:载天]DIP业务图谱相关API
           */
          export namespace bizGraph {
            
      /**
        * 获取某个数据域下面的业务图谱
        * /api/dip/map/biz/
        */
      export namespace get {
        
      export 
      class Params {
        
      /** 数据域的id */
      domainId: number;
      }
    

      export type Response = defs.BizGraphBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BizGraphBO>;
    
      }
    

      /**
        * 获取业务过程相关的维度
        * /api/dip/map/biz/dim
        */
      export namespace getDim {
        
      export 
      class Params {
        
      /** 业务过程的id */
      bizProcessId: number;
      }
    

      export type Response = Array<integer>;
      export const init: Response;
      export function request(params: Params): Promise<Array<integer>>;
    
      }
    

      /**
        * 获取租户对应的业务板块及数据域
        * /api/dip/map/biz/getBizAndDomain
        */
      export namespace getGetBizAndDomain {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.BizDataDomainBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BizDataDomainBO>>;
    
      }
    

      /**
        * 获取业务过程关联的所有表
        * /api/dip/map/biz/getTablesByBizProcess
        */
      export namespace getGetTablesByBizProcess {
        
      export 
      class Params {
        
      /** 业务过程的id */
      bizProcessId: number;
      }
    

      export type Response = defs.LogicTableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicTableBO>;
    
      }
    

      /**
        * 获取维度关联的所有表
        * /api/dip/map/biz/getTablesByDim
        */
      export namespace getGetTablesByDim {
        
      export 
      class Params {
        
      /** 维度id */
      dimId: number;
      }
    

      export type Response = defs.LogicTableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicTableBO>;
    
      }
    

      /**
        * 获取数据域关联的所有表
        * /api/dip/map/biz/getTablesByDomain
        */
      export namespace getGetTablesByDomain {
        
      export 
      class Params {
        
      /** 数据域id */
      domainId: number;
      }
    

      export type Response = defs.LogicTableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicTableBO>;
    
      }
    
          }
        


          /**
           * [后端:驯致,见行;前端:晟朗]业务过程API
           */
          export namespace bizProcess {
            
      /**
        * 新建业务过程
        * /api/bizProcess
        */
      export namespace postBizProcess {
        
      export 
      class Params {
        
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BizProcessBO): Promise<number>;
    
      }
    

      /**
        * 获取数据域下业务过程关联的逻辑表个数
        * /api/bizProcess/countRelatedLogicTable
        */
      export namespace getBizProcessCountRelatedLogicTable {
        
      export 
      class Params {
        
      /** 数据域id */
      domainId?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 当前业务板块下的所有业务过程列表
        * /api/bizProcess/list
        */
      export namespace getBizProcessList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.BizProcessListBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BizProcessListBO>>;
    
      }
    

      /**
        * 获取业务板块下的业务过程筛选器
        * /api/bizProcess/list/filter
        */
      export namespace getBizProcessListFilter {
        
      export 
      class Params {
        
      /** 业务板块id */
      bizUnitId?: number;
      /** projectId */
      projectId?: number;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 根据 id 获取业务过程信息
        * /api/bizProcess/{id}
        */
      export namespace getBizProcessById {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 业务过程ID */
      id?: number;
      }
    

      export type Response = defs.BizProcessBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BizProcessBO>;
    
      }
    

      /**
        * 更新业务过程
        * /api/bizProcess/{id}
        */
      export namespace putBizProcessById {
        
      export 
      class Params {
        
      /** 业务过程ID */
      id?: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BizProcessBO): Promise<number>;
    
      }
    

      /**
        * 删除业务过程
        * /api/bizProcess/{id}
        */
      export namespace deleteBizProcessById {
        
      export 
      class Params {
        
      /** 业务过程ID */
      id?: number;
      /** name */
      name?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:北渔]业务板块相关API
           */
          export namespace bizUnit {
            
      /**
        * 新建一个业务板块
        * /api/bizUnit
        */
      export namespace postBizUnit {
        
      export 
      class Params {
        
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BizUnitBO): Promise<number>;
    
      }
    

      /**
        * 获取租户下所有业务板块
        * /api/bizUnit/allList
        */
      export namespace getBizUnitAllList {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.BizUnitBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BizUnitBO>>;
    
      }
    

      /**
        * 检查英文名是否可以修改
        * /api/bizUnit/checkNameChange
        */
      export namespace getBizUnitCheckNameChange {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取一个业务板块
        * /api/bizUnit/{bizUnitId}
        */
      export namespace getBizUnitByBizUnitId {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = defs.BizUnitBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.BizUnitBO>;
    
      }
    

      /**
        * 更新一个业务板块
        * /api/bizUnit/{bizUnitId}
        */
      export namespace putBizUnitByBizUnitId {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BizUnitBO): Promise<>;
    
      }
    

      /**
        * 删除一个业务板块
        * /api/bizUnit/{bizUnitId}
        */
      export namespace deleteBizUnitByBizUnitId {
        
      export 
      class Params {
        
      /** 业务板块名称 */
      bizUnitName: string;
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:奇阳] 业务板块配置
           */
          export namespace bizUnitConfig {
            
      /**
        * GET接口
        * /api/bizUnitConfig/{bizUnitId}/timePartition
        */
      export namespace getTimePartition {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = defs.TimePartitionBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TimePartitionBO>;
    
      }
    

      /**
        * POST接口
        * /api/bizUnitConfig/{bizUnitId}/timePartition
        */
      export namespace postTimePartition {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.TimePartitionBO): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:晟朗]数据源相关API
           */
          export namespace dataSource {
            
      /**
        * 新建数据源
        * /api/dsConfig
        */
      export namespace postDsConfig {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.DataSourceSaveResultVO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<defs.DataSourceSaveResultVO>;
    
      }
    

      /**
        * 获取租户下所有数据源
        * /api/dsConfig/allList
        */
      export namespace getDsConfigAllList {
        
      export 
      class Params {
        
      /** useType */
      useType: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';
      }
    

      export type Response = Array<defs.DataSourceConfigVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataSourceConfigVO>>;
    
      }
    

      /**
        * 检查所有数据源重复
        * /api/dsConfig/allRepeat
        */
      export namespace getDsConfigAllRepeat {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<array>;
      export const init: Response;
      export function request(params: Params): Promise<Array<array>>;
    
      }
    

      /**
        * 批量删除数据源
        * /api/dsConfig/batchDelete
        */
      export namespace postDsConfigBatchDelete {
        
      export 
      class Params {
        
      /** 数据源Id列表 */
      dsIds: Array<integer>;
      /** 数据源名称列表 */
      dsNames: Array<integer>;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 测试连通性
        * /api/dsConfig/checkConnectivity
        */
      export namespace postDsConfigCheckConnectivity {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.ConnectivityResult;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<defs.ConnectivityResult>;
    
      }
    

      /**
        * 检查当前数据源和哪些数据源重复
        * /api/dsConfig/checkRepeat
        */
      export namespace postDsConfigCheckRepeat {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.DataSourceConfigVO>;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<Array<defs.DataSourceConfigVO>>;
    
      }
    

      /**
        * 获取数据源类型
        * /api/dsConfig/listDsType
        */
      export namespace getDsConfigListDsType {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 获取租户下有读权限的数据源列表
        * /api/dsConfig/listHaveReadPermissionDsConfig
        */
      export namespace getDsConfigListHaveReadPermissionDsConfig {
        
      export 
      class Params {
        
      /** 数据源使用类型 */
      useType?: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';
      /** 数据源类型 */
      dsType?: 'MAX_COMPUTE' | 'MYSQL' | 'SQL_SERVER' | 'HIVE' | 'OS' | 'POSTGRE_SQL' | 'EMR_HIVE' | 'ORACLE' | 'FTP' | 'HDFS' | 'VERTICA' | 'HADOOP' | 'DRDS';
      }
    

      export type Response = Array<defs.DsCommonBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DsCommonBO>>;
    
      }
    

      /**
        * 获取租户下有写权限的数据源列表
        * /api/dsConfig/listHaveWritePermissionDsConfig
        */
      export namespace getDsConfigListHaveWritePermissionDsConfig {
        
      export 
      class Params {
        
      /** 数据源使用类型 */
      useType?: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';
      /** 数据源类型 */
      dsType?: 'MAX_COMPUTE' | 'MYSQL' | 'SQL_SERVER' | 'HIVE' | 'OS' | 'POSTGRE_SQL' | 'EMR_HIVE' | 'ORACLE' | 'FTP' | 'HDFS' | 'VERTICA' | 'HADOOP' | 'DRDS';
      }
    

      export type Response = Array<defs.DsCommonBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DsCommonBO>>;
    
      }
    

      /**
        * ODPS数据源的owner权限校验
        * /api/dsConfig/owner/verify
        */
      export namespace postDsConfigOwnerVerify {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<boolean>;
    
      }
    

      /**
        * 搜索数据源
        * /api/dsConfig/search
        */
      export namespace getDsConfigSearch {
        
      export 
      class Params {
        
      /** 数据源使用类型 */
      useType?: 'COMPUTE_ENGINE' | 'PHYSICAL' | 'META_COMPUTE_ENGINE' | 'META_PHYSICAL';
      /** 数据源类型 */
      dsType?: 'MAX_COMPUTE' | 'MYSQL' | 'SQL_SERVER' | 'HIVE' | 'OS' | 'POSTGRE_SQL' | 'EMR_HIVE' | 'ORACLE' | 'FTP' | 'HDFS' | 'VERTICA' | 'HADOOP' | 'DRDS';
      /** 是否绑定项目 */
      isBindProject?: boolean;
      /** 数据源名称或者描述 */
      keyWord?: string;
      }
    

      export type Response = Array<defs.DataSourceConfigVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataSourceConfigVO>>;
    
      }
    

      /**
        * 同步数据源到元数据中心
        * /api/dsConfig/syncDataSourceToMetaCenter
        */
      export namespace getDsConfigSyncDataSourceToMetaCenter {
        
      export 
      class Params {
        
      /** 数据源id */
      dataSourceid: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 同步数据源到元数据中心
        * /api/dsConfig/syncTenantDataSourceToMetaCenter
        */
      export namespace getDsConfigSyncTenantDataSourceToMetaCenter {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取没有绑定的数据源
        * /api/dsConfig/unbindDsList
        */
      export namespace getDsConfigUnbindDsList {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.DsCommonBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DsCommonBO>>;
    
      }
    

      /**
        * 上传文件
        * /api/dsConfig/upload
        */
      export namespace postDsConfigUpload {
        
      export 
      class Params {
        
      /** keytab文件 */
      keytabFile?: File;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    

      /**
        * 获取一个数据源配置
        * /api/dsConfig/{dsId}
        */
      export namespace getDsConfigByDsId {
        
      export 
      class Params {
        
      /** dsId */
      dsId: number;
      }
    

      export type Response = defs.DataSourceConfigVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DataSourceConfigVO>;
    
      }
    

      /**
        * 更新一个数据源
        * /api/dsConfig/{dsId}
        */
      export namespace putDsConfigByDsId {
        
      export 
      class Params {
        
      /** dsId */
      dsId: number;
      }
    

      export type Response = defs.DataSourceSaveResultVO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<defs.DataSourceSaveResultVO>;
    
      }
    

      /**
        * 删除一个数据源
        * /api/dsConfig/{dsId}
        */
      export namespace deleteDsConfigByDsId {
        
      export 
      class Params {
        
      /** dsId */
      dsId: number;
      /** datasourceName */
      datasourceName: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 数据源owner转交
        * /api/dsConfig/{dsId}/owner
        */
      export namespace putDsConfigByDsIdOwner {
        
      export 
      class Params {
        
      /** dsId */
      dsId: number;
      /** 转交owner */
      ownerId?: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:莫萱,靖方;前端:北渔]数据同步相关API
           */
          export namespace dataSync {
            
      /**
        * 获取租户下数据源列表
        * /api/dataSync/dsList
        */
      export namespace getDsList {
        
      export 
      class Params {
        
      /** 数据源用途 */
      useType?: string;
      }
    

      export type Response = Array<defs.DataSourceConfigVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataSourceConfigVO>>;
    
      }
    

      /**
        * 获取物理表的列表(含分区、文件类型等属性)
        * /api/dataSync/project/{projectId}/physicalTable
        */
      export namespace getProjectByProjectIdPhysicalTable {
        
      export 
      class Params {
        
      /** 项目projectId */
      projectId?: number;
      /** 数据源Id */
      dsId: number;
      /** 表名前缀 */
      prefix?: string;
      /** 表名(多表) */
      tableName?: string;
      }
    

      export type Response = Array<defs.PhysicalTableBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.PhysicalTableBO>>;
    
      }
    

      /**
        * 获取物理表下所有字段
        * /api/dataSync/tableColList
        */
      export namespace getTableColList {
        
      export 
      class Params {
        
      /** 数据源Id */
      dsId: number;
      /** 物理表表名 */
      tableName: string;
      /** 项目id */
      projectId: number;
      /** 已被使用字段集合 */
      columnUsedList?: Array<string>;
      }
    

      export type Response = Array<defs.ColumnBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ColumnBO>>;
    
      }
    
          }
        


          /**
           * [驯致]依赖检查API
           */
          export namespace dependence {
            
      /**
        * 批量获取依赖
        * /api/dependence/list/{objectType}/
        */
      export namespace get {
        
      export 
      class Params {
        
      /** 被依赖的对象类型 */
      objectType?: number;
      /** 被依赖对象的id列表 */
      ids?: Array<integer>;
      /** 是否线上 */
      usingOnline?: boolean;
      }
    

      export type Response = Array<defs.DependenceBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DependenceBO>>;
    
      }
    

      /**
        * 获取依赖
        * /api/dependence/list/{objectType}/{objectId}
        */
      export namespace getByObjectId {
        
      export 
      class Params {
        
      /** 被依赖的对象类型 */
      objectType?: number;
      /** 被依赖的对象ID */
      objectId?: number;
      /** 是否线上 */
      usingOnline?: boolean;
      }
    

      export type Response = defs.DependenceBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DependenceBO>;
    
      }
    
          }
        


          /**
           * [后端:驯致;前端:琳峰]派生指标API
           */
          export namespace derivedIndex {
            
      /**
        * 批量添加派生指标
        * /api/index/derived
        */
      export namespace postDerived {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      }
    

      export type Response = defs.Result<List<defs.Result<number>>>;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DerivedIndexAddBO): Promise<defs.Result<List<defs.Result<number>>>>;
    
      }
    

      /**
        * 获取选中粒度、时间周期、业务限定创建过的相关派生指标
        * /api/index/derived/created
        */
      export namespace getDerivedCreated {
        
      export 
      class Params {
        
      /** 参数列表，json<pre><code>[
  {
    atomicIndexId: id,
    dimIds: [id1, id2],
    bizConditionIds: [id1, id2],
    statPeriodId: id1
    dimPaths:{id1:path1,id2:path2}
  }
]</code></pre> */
      options?: string;
      /** bizUnitId */
      bizUnitId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.DerivedIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DerivedIndexBO>>;
    
      }
    

      /**
        * 检查派生指标是否被创建，按传入顺序依次返回
        * /api/index/derived/isCreated
        */
      export namespace getDerivedIsCreated {
        
      export 
      class Params {
        
      /** 参数列表，json<pre><code>[
  {
    atomicIndexId: id,
    dimIds: [id1, id2],
    bizConditionIds: [id1, id2],
    statPeriodId: id1
    dimPaths:{id1:path1,id2:path2}
  }
]</code></pre> */
      options?: string;
      /** bizUnitId */
      bizUnitId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<boolean>;
      export const init: Response;
      export function request(params: Params): Promise<Array<boolean>>;
    
      }
    

      /**
        * 派生指标列表
        * /api/index/derived/list
        */
      export namespace getDerivedList {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      }
    

      export type Response = defs.PagedData<defs.DerivedIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.DerivedIndexBO>>;
    
      }
    

      /**
        * 获取业务板块下的派生指标筛选器
        * /api/index/derived/list/filter
        */
      export namespace getDerivedListFilter {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId?: number;
      /** projectId */
      projectId?: number;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 获取原子指标及其衍生指标创建过的派生指标列表
        * /api/index/derived/parent/atomicIndex/{atomicIndexId}/effected
        */
      export namespace getDerivedParentAtomicIndexByAtomicIndexIdEffected {
        
      export 
      class Params {
        
      /** atomicIndexId */
      atomicIndexId?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = Array<defs.DerivedIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DerivedIndexBO>>;
    
      }
    

      /**
        * 获取业务限定创建过的派生指标列表
        * /api/index/derived/parent/bizCondition/{bizConditionId}/effected
        */
      export namespace getDerivedParentBizConditionByBizConditionIdEffected {
        
      export 
      class Params {
        
      /** bizConditionId */
      bizConditionId?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = Array<defs.DerivedIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DerivedIndexBO>>;
    
      }
    

      /**
        * 输入事实表或者逻辑表表名，获取雪花模型下的所有字段
        * /api/index/derived/parent/model/attrs
        */
      export namespace getDerivedParentModelAttrs {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 来源模型ID */
      modelId?: number;
      /** 模型选中表ID */
      selectedModelId?: number;
      /** 模型选中表类型 */
      selectedModelType?: number;
      /** modelType */
      modelType?: number;
      /** 选中的属性 */
      selectedAttributeName?: string;
      /** 所选中的path */
      selectedPath?: string;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 输入原子指标，获取衍生出该原子指标的所有原生原子指标的统计路径和业务限定
        * /api/index/derived/parent/{atomicIndexId}/detail
        */
      export namespace getDerivedParentByAtomicIndexIdDetail {
        
      export 
      class Params {
        
      /** atomicIndexId */
      atomicIndexId: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = Array<defs.DerivedIndexParentOptionsBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DerivedIndexParentOptionsBO>>;
    
      }
    

      /**
        * 获取详情
        * /api/index/derived/{id}
        */
      export namespace getDerivedById {
        
      export 
      class Params {
        
      /** status */
      status?: string;
      /** id */
      id?: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.DerivedIndexBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DerivedIndexBO>;
    
      }
    

      /**
        * 更新派生指标
        * /api/index/derived/{id}
        */
      export namespace putDerivedById {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DerivedIndexUpdateBO): Promise<boolean>;
    
      }
    

      /**
        * 删除派生指标
        * /api/index/derived/{id}
        */
      export namespace deleteDerivedById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      /** 派生指标名 */
      name: string;
      /** deleteOnline */
      deleteOnline?: boolean;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 下线
        * /api/index/derived/{id}/offline
        */
      export namespace putDerivedByIdOffline {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** 派生指标名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 发布上线
        * /api/index/derived/{id}/online
        */
      export namespace putDerivedByIdOnline {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** lock */
      lock?: number;
      /** 派生指标名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除线上和线下派生指标
        * /api/index/derived/{id}/onlineAndDraft
        */
      export namespace deleteDerivedByIdOnlineAndDraft {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** 派生指标名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取相关派生指标
        * /api/index/derived/{id}/similar
        */
      export namespace getDerivedByIdSimilar {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** status */
      status?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = Array<defs.DerivedIndexBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DerivedIndexBO>>;
    
      }
    
          }
        


          /**
           * [后端:驯致;前端:会影]维度API
           */
          export namespace dim {
            
      /**
        * 添加维度
        * /api/dim
        */
      export namespace postDim {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DimAddBO): Promise<number>;
    
      }
    

      /**
        * 获取数据域下维度个数
        * /api/dim/countRelatedLogicTableByDomain
        */
      export namespace getDimCountRelatedLogicTableByDomain {
        
      export 
      class Params {
        
      /** 数据域id */
      domainId?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 获取层级维度模板预览列表
        * /api/dim/level/preview/list
        */
      export namespace getDimLevelPreviewList {
        
      export 
      class Params {
        
      /** 主维度名，用户填写 */
      dimName?: string;
      /** 主维度中文名，用户填写 */
      dimCn?: string;
      /** projectId */
      projectId?: number;
      /** dimensionList */
      dimensionList?: Array<integer>;
      /** id */
      id?: number;
      /** name */
      name?: string;
      /** cn */
      cn?: string;
      /** des */
      des?: string;
      /** gmtCreate */
      gmtCreate?: string;
      /** gmtModified */
      gmtModified?: string;
      /** lastModifier */
      lastModifier?: string;
      /** owner */
      owner?: string;
      /** status */
      status?: number;
      /** projectName */
      projectName?: string;
      /** sourceTableName */
      sourceTableName?: string;
      /** sourcePk */
      sourcePk?: string;
      /** sourcePkCn */
      sourcePkCn?: string;
      /** sourcePkDataType */
      sourcePkDataType?: string;
      /** midTableName */
      midTableName?: string;
      /** parentFieldName */
      parentFieldName?: string;
      /** childFieldName */
      childFieldName?: string;
      /** namingFieldName */
      namingFieldName?: string;
      /** namingFieldCn */
      namingFieldCn?: string;
      /** maxLevel */
      maxLevel?: number;
      /** rootCondition */
      rootCondition?: string;
      /** filterCondition */
      filterCondition?: string;
      /** hasLeaf */
      hasLeaf?: boolean;
      }
    

      export type Response = Array<defs.DimLevelBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DimLevelBO>>;
    
      }
    

      /**
        * 获取层级维度主维度详情
        * /api/dim/level/{levelConfigId}
        */
      export namespace getDimLevelByLevelConfigId {
        
      export 
      class Params {
        
      /** status */
      status?: string;
      /** projectId */
      projectId?: number;
      /** 层级维度配置ID */
      levelConfigId?: number;
      }
    

      export type Response = defs.DimBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DimBO>;
    
      }
    

      /**
        * 删除层级维度
        * /api/dim/level/{levelConfigId}
        */
      export namespace deleteDimLevelByLevelConfigId {
        
      export 
      class Params {
        
      /** levelConfigId */
      levelConfigId?: number;
      /** projectId */
      projectId: number;
      /** deleteOnline */
      deleteOnline?: boolean;
      /** 主表维度ID */
      mainTableId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 下线层级维度
        * /api/dim/level/{levelConfigId}/offline
        */
      export namespace putDimLevelByLevelConfigIdOffline {
        
      export 
      class Params {
        
      /** levelConfigId */
      levelConfigId?: number;
      /** projectId */
      projectId?: number;
      /** 主表维度ID */
      mainTableId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除线上和线下层级维度
        * /api/dim/level/{levelConfigId}/onlineAndDraft
        */
      export namespace deleteDimLevelByLevelConfigIdOnlineAndDraft {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** levelConfigId */
      levelConfigId?: number;
      /** 主表维度ID */
      mainTableId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 维度列表
        * /api/dim/list
        */
      export namespace getDimList {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.DimBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DimBO>>;
    
      }
    

      /**
        * 获取业务板块下的数据域以及所属的维度中英文名称 以及维度的主键 主键计算逻辑
        * /api/dim/list/byDataDomain
        */
      export namespace getDimListByDataDomain {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** 维度Id */
      dimId?: number;
      /** 业务板块id */
      bizUnitId?: number;
      /** 是否过滤未发布维度逻辑表的维度 */
      excludeTableUnpublished?: boolean;
      }
    

      export type Response = Array<defs.DataDomainDimBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataDomainDimBO>>;
    
      }
    

      /**
        * 获取业务板块下的维度筛选器
        * /api/dim/list/filter
        */
      export namespace getDimListFilter {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId?: number;
      /** 项目Id */
      projectId: number;
      /** 筛选项列表，json格式<pre><code>[
  {
    id: "id1",
    options: [
      { value: "val1" }
    ]
  }
]</code></pre> */
      filter?: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 模糊搜索有维度逻辑表的维度
        * /api/dim/list/fuzzy
        */
      export namespace getDimListFuzzy {
        
      export 
      class Params {
        
      /** 业务板块ID */
      bizUnitId: number;
      /** 项目Id */
      projectId: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      }
    

      export type Response = Array<defs.DimBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DimBO>>;
    
      }
    

      /**
        * 模糊搜索可继承的维度
        * /api/dim/list/inheritable/fuzzy
        */
      export namespace getDimListInheritableFuzzy {
        
      export 
      class Params {
        
      /** 业务板块id */
      bizUnitId?: number;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      }
    

      export type Response = Array<defs.DimBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DimBO>>;
    
      }
    

      /**
        * 主键逻辑语法是否正确
        * /api/dim/pk/isValid
        */
      export namespace getDimPkIsValid {
        
      export 
      class Params {
        
      /** pkLogic */
      pkLogic?: string;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取维度的子维度信息
        * /api/dim/{dimId}/children
        */
      export namespace getDimByDimIdChildren {
        
      export 
      class Params {
        
      /** dimId */
      dimId: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = Array<defs.DimBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DimBO>>;
    
      }
    

      /**
        * 获取维度
        * /api/dim/{id}
        */
      export namespace getDimById {
        
      export 
      class Params {
        
      /** status */
      status?: string;
      /** projectId */
      projectId?: number;
      /** id */
      id?: number;
      }
    

      export type Response = defs.DimBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DimBO>;
    
      }
    

      /**
        * 编辑维度
        * /api/dim/{id}
        */
      export namespace putDimById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DimAddBO): Promise<boolean>;
    
      }
    

      /**
        * 删除维度
        * /api/dim/{id}
        */
      export namespace deleteDimById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      /** 维度名 */
      name: string;
      /** deleteOnline */
      deleteOnline?: boolean;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 下线
        * /api/dim/{id}/offline
        */
      export namespace putDimByIdOffline {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** 维度名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 发布上线
        * /api/dim/{id}/online
        */
      export namespace putDimByIdOnline {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId: number;
      /** lock */
      lock: number;
      /** 维度名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除线上和线下维度
        * /api/dim/{id}/onlineAndDraft
        */
      export namespace deleteDimByIdOnlineAndDraft {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      /** 维度名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 同步获取维度发布状态
        * /api/dim/{id}/status/sync
        */
      export namespace getDimByIdStatusSync {
        
      export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = '0' | '1' | '2' | '3' | 0 | 1 | 2 | 3;
      export const init: Response;
      export function request(params: Params): Promise<'0' | '1' | '2' | '3' | 0 | 1 | 2 | 3>;
    
      }
    
          }
        


          /**
           * [后端:莫萱;前端:五灵]-DIP实体图谱相关API
           */
          export namespace dimGraph {
            
      /**
        * 获取维度相关的表单浮层
        * /api/dip/graph/dimGraph/formLayer/{dimId}
        */
      export namespace getFormLayerByDimId {
        
      export 
      class Params {
        
      /** 点击的维度id */
      dimId: number;
      /** 业务板块id */
      bizUnitId: number;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 获取某个业务板块下的维度图谱
        * /api/dip/graph/dimGraph/{bizUnitId}
        */
      export namespace getByBizUnitId {
        
      export 
      class Params {
        
      /** 业务板块的id */
      bizUnitId: number;
      }
    

      export type Response = defs.DimGraphBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DimGraphBO>;
    
      }
    
          }
        


          /**
           * [后端:翠翠;前端:双扬]维度逻辑表相关API
           */
          export namespace dimTable {
            
      /**
        * 维度表详情-主维度信息等
        * /api/model/dimTable/{dimId}
        */
      export namespace getByDimId {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = defs.DimBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DimBO>;
    
      }
    

      /**
        * 维度表-获取配置信息
        * /api/model/dimTable/{dimId}/config
        */
      export namespace getByDimIdConfig {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = defs.LogicTableConfigBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicTableConfigBO>;
    
      }
    

      /**
        * 维度表-配置信息
        * /api/model/dimTable/{dimId}/config
        */
      export namespace putByDimIdConfig {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicTableConfigBO): Promise<>;
    
      }
    

      /**
        * 维度表-所有字段详情
        * /api/model/dimTable/{dimId}/field
        */
      export namespace getByDimIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** 关键词 */
      keyword?: string;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 维度表-新增
        * /api/model/dimTable/{dimId}/field
        */
      export namespace postByDimIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AttributeAddBO): Promise<>;
    
      }
    

      /**
        * 维度表-编辑
        * /api/model/dimTable/{dimId}/field
        */
      export namespace putByDimIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AttributeBO): Promise<>;
    
      }
    

      /**
        * 维度表-删除-【已废弃】
        * /api/model/dimTable/{dimId}/field
        */
      export namespace deleteByDimIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock?: number;
      /** 字段英文名 */
      attributeId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 维度表编辑-批量删除
        * /api/model/dimTable/{dimId}/field/batch
        */
      export namespace deleteByDimIdFieldBatch {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      /** 字段id列表 */
      attributeIds: string;
      }
    

      export type Response = Array<defs.AttributeBatchDeleteResultBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBatchDeleteResultBO>>;
    
      }
    

      /**
        * 维度表所有字段
        * /api/model/dimTable/{dimId}/field/list
        */
      export namespace getByDimIdFieldList {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 维度逻辑表-获取有权限的物理表
        * /api/model/dimTable/{dimId}/getTable
        */
      export namespace getByDimIdGetTable {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 搜索词 */
      keyword: string;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 维度表-获取物理表字段
        * /api/model/dimTable/{dimId}/getTableAttribute
        */
      export namespace getByDimIdGetTableAttribute {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 物理表名称 */
      logicTableName: string;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 维度表-查看是否有线上版本
        * /api/model/dimTable/{dimId}/hasOnline
        */
      export namespace getByDimIdHasOnline {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除线上和线下层级维度表
        * /api/model/dimTable/{dimId}/level/onlineAndDraft
        */
      export namespace deleteByDimIdLevelOnlineAndDraft {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** levelConfigId */
      levelConfigId?: number;
      /** dimId */
      dimId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 维度表编辑-获取批量修改逻辑
        * /api/model/dimTable/{dimId}/logic
        */
      export namespace getByDimIdLogic {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** 计算逻辑 */
      logic: string;
      }
    

      export type Response = defs.LogicBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicBO>;
    
      }
    

      /**
        * 维度表编辑-批量修改逻辑
        * /api/model/dimTable/{dimId}/logic
        */
      export namespace putByDimIdLogic {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicBO): Promise<boolean>;
    
      }
    

      /**
        * 维度表编辑-获取批量修改逻辑
        * /api/model/dimTable/{dimId}/logic/group
        */
      export namespace getByDimIdLogicGroup {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = Array<defs.LogicBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.LogicBO>>;
    
      }
    

      /**
        * 维度表-提交计算逻辑
        * /api/model/dimTable/{dimId}/logic/submit
        */
      export namespace putByDimIdLogicSubmit {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** 字段id */
      attributeId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 维度表-获取星型模型
        * /api/model/dimTable/{dimId}/model
        */
      export namespace getByDimIdModel {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = defs.ModelBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ModelBO>;
    
      }
    

      /**
        * 维度表-获取单个模型
        * /api/model/dimTable/{dimId}/model/single
        */
      export namespace getByDimIdModelSingle {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = defs.SingleModelBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.SingleModelBO>;
    
      }
    

      /**
        * 删除线上和线下维度表
        * /api/model/dimTable/{dimId}/onlineAndDraft
        */
      export namespace deleteByDimIdOnlineAndDraft {
        
      export 
      class Params {
        
      /** dimId */
      dimId?: number;
      /** projectId */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 维度逻辑表-推荐分区字段
        * /api/model/dimTable/{dimId}/part/fields
        */
      export namespace getByDimIdPartFields {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 维度逻辑表-获取已选分区字段
        * /api/model/dimTable/{dimId}/part/selected/fields
        */
      export namespace getByDimIdPartSelectedFields {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 维度表-获取该引用维度已有的关联关系角色名称
        * /api/model/dimTable/{dimId}/refRelation
        */
      export namespace getByDimIdRefRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** 关联维度id */
      refDimId: number;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 维度表-获取关联关系
        * /api/model/dimTable/{dimId}/relation
        */
      export namespace getByDimIdRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** 字段id */
      attributeId: number;
      /** 关联维度id */
      refDimId?: number;
      }
    

      export type Response = defs.DimRelationBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DimRelationBO>;
    
      }
    

      /**
        * 维度表-新增关联关系
        * /api/model/dimTable/{dimId}/relation
        */
      export namespace postByDimIdRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DimRelationBO): Promise<>;
    
      }
    

      /**
        * 维度表-编辑关联关系
        * /api/model/dimTable/{dimId}/relation
        */
      export namespace putByDimIdRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DimRelationBO): Promise<>;
    
      }
    

      /**
        * 维度表-获取维度关联的字段信息
        * /api/model/dimTable/{dimId}/relation/refAttribute
        */
      export namespace getByDimIdRelationRefAttribute {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** 关联维度id */
      refDimId?: number;
      }
    

      export type Response = Array<defs.ModelDimensionAttributeDO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ModelDimensionAttributeDO>>;
    
      }
    

      /**
        * 维度表-提交模型
        * /api/model/dimTable/{dimId}/submit
        */
      export namespace postByDimIdSubmit {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 维度表-获取模型提交执行状态
        * /api/model/dimTable/{dimId}/submit/status
        */
      export namespace getByDimIdSubmitStatus {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** dimId */
      dimId: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 关联维度设为属性字段
        * /api/model/dimTable/{dimId}/toAttrs
        */
      export namespace putByDimIdToAttrs {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** dimId */
      dimId: number;
      /** 属性id */
      attributeId?: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:载天] DIP资源初始化相关API
           */
          export namespace dipInit {
            
      /**
        * 初始化资源文件和任务
        * /api/dip/init
        */
      export namespace postInit {
        
      export 
      class Params {
        
      /** 项目名称 */
      projectName: string;
      /** 数据源类型 */
      tenantComputeTypeEnum: 'MAX_COMPUTE' | 'HADOOP' | 'E_MAP_REDUCE';
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<>;
    
      }
    

      /**
        * 检查数据源是否已初始化
        * /api/dip/init/datasource
        */
      export namespace postInitDatasource {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataSourceConfigVO): Promise<boolean>;
    
      }
    

      /**
        * 获取初始化过程和日志
        * /api/dip/init/log
        */
      export namespace getInitLog {
        
      export 
      class Params {
        
      /** 项目名称 */
      projectName: string;
      }
    

      export type Response = defs.DipInitLogBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DipInitLogBO>;
    
      }
    

      /**
        * 检查项目是否已初始化
        * /api/dip/init/project
        */
      export namespace getInitProject {
        
      export 
      class Params {
        
      /** 项目名称 */
      projectName: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除某个项目的所有资源
        * /api/dip/init/projectName
        */
      export namespace deleteInitProjectName {
        
      export 
      class Params {
        
      /** 项目名称 */
      projectName: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:程素、莫萱;前端:北渔] DIP数据地图搜索相关API
           */
          export namespace dipSearch {
            
      /**
        * 资产地图-全部筛选列表
        * /api/dip/filter/filter/list
        */
      export namespace getFilterFilterList {
        
      export 
      class Params {
        
      /** 筛选对象 */
      filter: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 资产地图筛选结果
        * /api/dip/filter/list
        */
      export namespace getFilterList {
        
      export 
      class Params {
        
      /** 筛选对象 */
      filter: string;
      }
    

      export type Response = Array<defs.SearchResultBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.SearchResultBO>>;
    
      }
    

      /**
        * 首页-全部筛选列表
        * /api/dip/index/filter/list
        */
      export namespace getIndexFilterList {
        
      export 
      class Params {
        
      /** 筛选对象 */
      filter: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 搜索结果页-全部筛选列表
        * /api/dip/search/filter/list
        */
      export namespace getSearchFilterList {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 筛选对象 */
      filter: string;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 获取全局搜索历史列表TOP
        * /api/dip/search/global/history/list
        */
      export namespace getSearchGlobalHistoryList {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 搜索结果
        * /api/dip/search/list
        */
      export namespace getSearchList {
        
      export 
      class Params {
        
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 排序字段，不传则为综合排序，创建时间排序则传gmtCreate，热度则传hot */
      orderBy?: string;
      /** 筛选对象 */
      filter: string;
      }
    

      export type Response = defs.PagedData<defs.SearchResultBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.SearchResultBO>>;
    
      }
    

      /**
        * 搜索结果
        * /api/dip/search/list
        */
      export namespace postSearchList {
        
      export 
      class Params {
        
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 排序字段，不传则为综合排序，创建时间排序则传gmtCreate，热度则传hot */
      orderBy?: string;
      }
    

      export type Response = defs.PagedData<defs.SearchResultBO>;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FilterDTO): Promise<defs.PagedData<defs.SearchResultBO>>;
    
      }
    

      /**
        * 获取关联搜索结果
        * /api/dip/search/related/list
        */
      export namespace getSearchRelatedList {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 业务板块Id */
      bizUnitId?: number;
      }
    

      export type Response = defs.RelatedSearchResultBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.RelatedSearchResultBO>;
    
      }
    

      /**
        * 删除用户搜索历史
        * /api/dip/search/user/history
        */
      export namespace deleteSearchUserHistory {
        
      export 
      class Params {
        
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 获取用户搜索历史列表TOP
        * /api/dip/search/user/history/list
        */
      export namespace getSearchUserHistoryList {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    
          }
        


          /**
           * [后端:见行,码兵;前端:五灵,载天]-导航栏目录树API
           */
          export namespace directoryTree {
            
      /**
        * 代码管理目录树
        * /api/tree/codeManage
        */
      export namespace getCodeManage {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 同步任务目录树
        * /api/tree/dataX
        */
      export namespace getDataX {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 数据管理/规范定义
        * /api/tree/dm/definition
        */
      export namespace getDmDefinition {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 数据管理/规范定义 - 子目录
        * /api/tree/dm/definition/{type}
        */
      export namespace getDmDefinitionByType {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** type */
      type: string;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 数据管理/逻辑表
        * /api/tree/dm/logical
        */
      export namespace getDmLogical {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 数据管理/逻辑表 - 子目录
        * /api/tree/dm/logical/{type}
        */
      export namespace getDmLogicalByType {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** type */
      type: string;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 数据管理/物理表
        * /api/tree/dm/physical
        */
      export namespace getDmPhysical {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 个人菜单目录树
        * /api/tree/personalMenu
        */
      export namespace getPersonalMenu {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 资源管理目录树
        * /api/tree/resources
        */
      export namespace getResources {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 搜索
        * /api/tree/search
        */
      export namespace getSearch {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** typeCodes */
      typeCodes: string;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = Array<defs.TreeNodeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TreeNodeBO>>;
    
      }
    

      /**
        * 搜索菜单树
        * /api/tree/searchTree
        */
      export namespace getSearchTree {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** typeCodes */
      typeCodes: string;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = Array<defs.TreeNodeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TreeNodeBO>>;
    
      }
    

      /**
        * 临时代码目录树
        * /api/tree/tempCode
        */
      export namespace getTempCode {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:琳峰,北渔]数据域相关API
           */
          export namespace domain {
            
      /**
        * 新建一个数据域
        * /api/bizUnit/{bizUnitId}/domain
        */
      export namespace postDomain {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataDomainBO): Promise<>;
    
      }
    

      /**
        * 获取一个业务板块下的所有数据域
        * /api/bizUnit/{bizUnitId}/domain/allBizUnitsDataDomains
        */
      export namespace getDomainAllBizUnitsDataDomains {
        
      export 
      class Params {
        
      /** 业务板块Id */
      bizUnitId: number;
      }
    

      export type Response = Array<defs.DataDomainBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataDomainBO>>;
    
      }
    

      /**
        * 获取一个业务板块下的所有数据域
        * /api/bizUnit/{bizUnitId}/domain/allList
        */
      export namespace getDomainAllList {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      }
    

      export type Response = Array<defs.DataDomainBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataDomainBO>>;
    
      }
    

      /**
        * 搜索一个业务板块下的数据域
        * /api/bizUnit/{bizUnitId}/domain/search
        */
      export namespace getDomainSearch {
        
      export 
      class Params {
        
      /** 业务板块Id */
      bizUnitId: number;
      /** 关键词 */
      keyword?: string;
      }
    

      export type Response = Array<defs.DataDomainBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.DataDomainBO>>;
    
      }
    

      /**
        * 更新一个数据域
        * /api/bizUnit/{bizUnitId}/domain/{dataDomainId}
        */
      export namespace putDomainByDataDomainId {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      /** dataDomainId */
      dataDomainId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DataDomainBO): Promise<>;
    
      }
    

      /**
        * 删除一个数据域
        * /api/bizUnit/{bizUnitId}/domain/{dataDomainId}
        */
      export namespace deleteDomainByDataDomainId {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      /** dataDomainId */
      dataDomainId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:翠翠;前端:双扬]事实逻辑表相关API
           */
          export namespace factTable {
            
      /**
        * 事实逻辑表-新增
        * /api/model/factTable/
        */
      export namespace post {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 业务板块id */
      bizUnitId: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FactTableBO): Promise<number>;
    
      }
    

      /**
        * 事实逻辑表-校验主表筛选条件
        * /api/model/factTable/checkTableCondition
        */
      export namespace getCheckTableCondition {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 表id，表可能是物理表（string）或者是逻辑表（long）所以统一处理为string */
      tableId?: string;
      /** 表类型  */
      tableType?: number;
      /** 表名称 */
      tableName?: string;
      /** 最近更新时间 */
      lastModifierTime?: number;
      /** 描述 */
      desc?: string;
      /** 主表业务限定 */
      bizMainTableCondition: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 事实逻辑表-校验数据源ak权限
        * /api/model/factTable/ds
        */
      export namespace getDs {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** 表id，表可能是物理表（string）或者是逻辑表（long）所以统一处理为string */
      tableId?: string;
      /** 表类型  */
      tableType?: number;
      /** 表名称 */
      tableName?: string;
      /** 最近更新时间 */
      lastModifierTime?: number;
      /** 描述 */
      desc?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 事实逻辑表-获取物理表字段
        * /api/model/factTable/getTableAttribute
        */
      export namespace getGetTableAttribute {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 物理表项目id */
      physicalTableProjectId: number;
      /** 物理表名称 */
      logicTableName: string;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表-来源主表
        * /api/model/factTable/sourceTables
        */
      export namespace getSourceTables {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** 业务板块id */
      bizUnitId?: number;
      /** keyword */
      检索字段?: string;
      }
    

      export type Response = Array<defs.SourceMainTableBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.SourceMainTableBO>>;
    
      }
    

      /**
        * 事实逻辑表-获取来源主表字段
        * /api/model/factTable/sourceTables/attrs
        */
      export namespace getSourceTablesAttrs {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** 业务板块id */
      bizUnitId?: number;
      /** 表类型 */
      tableType?: number;
      /** 表名 */
      tableName?: string;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表-有无来源主表权限
        * /api/model/factTable/table/permssion
        */
      export namespace getTablePermssion {
        
      export 
      class Params {
        
      /** 表id，表可能是物理表（string）或者是逻辑表（long）所以统一处理为string */
      tableId?: string;
      /** 表类型  */
      tableType?: number;
      /** 表名称 */
      tableName?: string;
      /** 最近更新时间 */
      lastModifierTime?: number;
      /** 项目id */
      projectId?: number;
      /** 描述 */
      desc?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 事实逻辑表-详情
        * /api/model/factTable/{modelId}
        */
      export namespace getByModelId {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = defs.FactTableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.FactTableBO>;
    
      }
    

      /**
        * 事实逻辑表-编辑
        * /api/model/factTable/{modelId}
        */
      export namespace putByModelId {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 业务板块id */
      bizUnitId?: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FactTableBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-删除
        * /api/model/factTable/{modelId}
        */
      export namespace deleteByModelId {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** lock */
      lock?: number;
      /** 事实表名字 */
      name: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-修改主表
        * /api/model/factTable/{modelId}/bizMainTable
        */
      export namespace putByModelIdBizMainTable {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** bizMainTable */
      bizMainTable: string;
      /** 事实表名字 */
      name: string;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-获取配置信息
        * /api/model/factTable/{modelId}/config
        */
      export namespace getByModelIdConfig {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = defs.LogicTableConfigBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicTableConfigBO>;
    
      }
    

      /**
        * 事实逻辑表-配置信息
        * /api/model/factTable/{modelId}/config
        */
      export namespace putByModelIdConfig {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 事实表名字 */
      name: string;
      /** modelId */
      modelId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicTableConfigBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-获取所有的字段
        * /api/model/factTable/{modelId}/field
        */
      export namespace getByModelIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 关键词 */
      keyword?: string;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表-编辑字段
        * /api/model/factTable/{modelId}/field
        */
      export namespace putByModelIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 事实表名字 */
      name: string;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AttributeBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-删除字段
        * /api/model/factTable/{modelId}/field
        */
      export namespace deleteByModelIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 事实表名字 */
      name: string;
      /** 字段id */
      attributeId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 事实逻辑表新增-度量或者事实属性
        * /api/model/factTable/{modelId}/field/
        */
      export namespace postByModelIdField {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AttributeAddBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-一键清空没有依赖的属性
        * /api/model/factTable/{modelId}/field/attribute/
        */
      export namespace deleteByModelIdFieldAttribute {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** modelId */
      modelId: number;
      /** 事实表名字 */
      name: string;
      /** lock */
      lock: number;
      }
    

      export type Response = Array<integer>;
      export const init: Response;
      export function request(params: Params): Promise<Array<integer>>;
    
      }
    

      /**
        * 事实逻辑表-批量删除字段
        * /api/model/factTable/{modelId}/field/batch
        */
      export namespace deleteByModelIdFieldBatch {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** modelId */
      modelId: number;
      /** 字段id列表 */
      attributeIds?: string;
      /** 事实表名字 */
      name: string;
      /** lock */
      lock: number;
      }
    

      export type Response = Array<defs.AttributeBatchDeleteResultBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBatchDeleteResultBO>>;
    
      }
    

      /**
        * 事实逻辑表-获取所有的字段
        * /api/model/factTable/{modelId}/field/list
        */
      export namespace getByModelIdFieldList {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表新增-引入维度
        * /api/model/factTable/{modelId}/field/ref
        */
      export namespace postByModelIdFieldRef {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FactTableAttributeRefBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-获取模型提交状态
        * /api/model/factTable/{modelId}/getSubmitStatus
        */
      export namespace getByModelIdGetSubmitStatus {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 事实逻辑表-查看是否有线上版本
        * /api/model/factTable/{modelId}/hasOnline
        */
      export namespace getByModelIdHasOnline {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 事实逻辑表编辑-获取批量修改逻辑
        * /api/model/factTable/{modelId}/logic
        */
      export namespace getByModelIdLogic {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 来源表名称 */
      logic: string;
      }
    

      export type Response = defs.LogicBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicBO>;
    
      }
    

      /**
        * 事实逻辑表编辑-批量修改逻辑
        * /api/model/factTable/{modelId}/logic
        */
      export namespace putByModelIdLogic {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicBO): Promise<boolean>;
    
      }
    

      /**
        * 事实逻辑表编辑-获取批量修改逻辑
        * /api/model/factTable/{modelId}/logic/group
        */
      export namespace getByModelIdLogicGroup {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = Array<defs.LogicBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.LogicBO>>;
    
      }
    

      /**
        * 事实表-提交计算逻辑
        * /api/model/factTable/{modelId}/logic/submit
        */
      export namespace putByModelIdLogicSubmit {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 字段id */
      attributeId: number;
      /** 事实表名字 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 事实逻辑表-雪花模型
        * /api/model/factTable/{modelId}/model
        */
      export namespace getByModelIdModel {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = defs.ModelBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ModelBO>;
    
      }
    

      /**
        * 事实逻辑表-获取单个模型
        * /api/model/factTable/{modelId}/model/single
        */
      export namespace getByModelIdModelSingle {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = defs.SingleModelBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.SingleModelBO>;
    
      }
    

      /**
        * 事实逻辑表-下线
        * /api/model/factTable/{modelId}/offline
        */
      export namespace deleteByModelIdOffline {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 事实逻辑表名 */
      name: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-获取表已发布字段
        * /api/model/factTable/{modelId}/online/attrs
        */
      export namespace getByModelIdOnlineAttrs {
        
      export 
      class Params {
        
      /** modelId */
      modelId?: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表-推荐分区字段
        * /api/model/factTable/{modelId}/part/fields
        */
      export namespace getByModelIdPartFields {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表-获取已选分区字段
        * /api/model/factTable/{modelId}/part/selected/fields
        */
      export namespace getByModelIdPartSelectedFields {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** modelId */
      modelId: number;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 事实逻辑表-获取该引用维度已有的关联关系角色名称
        * /api/model/factTable/{modelId}/refRelation
        */
      export namespace getByModelIdRefRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 关联维度id */
      refDimId: number;
      /** 事实表名字 */
      name: string;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 事实逻辑表-获取关联关系
        * /api/model/factTable/{modelId}/relation
        */
      export namespace getByModelIdRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** modelId */
      modelId: number;
      /** attributeId */
      attributeId: number;
      }
    

      export type Response = defs.DimRelationBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.DimRelationBO>;
    
      }
    

      /**
        * 事实逻辑表-新增关联关系
        * /api/model/factTable/{modelId}/relation
        */
      export namespace postByModelIdRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** modelId */
      modelId: number;
      /** 事实表名字 */
      name: string;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DimRelationBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-编辑关联关系
        * /api/model/factTable/{modelId}/relation
        */
      export namespace putByModelIdRelation {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 事实表名字 */
      name: string;
      /** modelId */
      modelId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.DimRelationBO): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-获取维度关联的字段信息
        * /api/model/factTable/{modelId}/relation/refAttribute
        */
      export namespace getByModelIdRelationRefAttribute {
        
      export 
      class Params {
        
      /** 项目id */
      projectId?: number;
      /** modelId */
      modelId: number;
      /** 关联维度id */
      refDimId?: number;
      }
    

      export type Response = Array<defs.ModelBizDetailAttributeDO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ModelBizDetailAttributeDO>>;
    
      }
    

      /**
        * 事实逻辑表-提交模型
        * /api/model/factTable/{modelId}/submit
        */
      export namespace postByModelIdSubmit {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** lock */
      lock: number;
      /** 事实逻辑表名 */
      name: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-设为事实属性
        * /api/model/factTable/{modelId}/toFactAttrs
        */
      export namespace putByModelIdToFactAttrs {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 字段id */
      attributeId: number;
      /** 事实表名字 */
      name: string;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 事实逻辑表-设为度量
        * /api/model/factTable/{modelId}/toMeasure
        */
      export namespace putByModelIdToMeasure {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** modelId */
      modelId: number;
      /** 事实表名字 */
      name: string;
      /** 字段id */
      attributeId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [莫萱、程素、白路] 收藏逻辑表／物理表相关API
           */
          export namespace favorModelTable {
            
      /**
        * 收藏逻辑表／物理表的接口
        * /api/dip/favor
        */
      export namespace postFavor {
        
      export 
      class Params {
        
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FavorParam): Promise<string>;
    
      }
    

      /**
        * 取消表的接口
        * /api/dip/favor
        */
      export namespace deleteFavor {
        
      export 
      class Params {
        
      /** 表id */
      modelId: string;
      /** 表的类型 */
      modelType?: number;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * [程素] 获取用户收藏列表
        * /api/dip/favor/list
        */
      export namespace getFavorList {
        
      export 
      class Params {
        
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      }
    

      export type Response = defs.PagedData<defs.BaseDipResult>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.BaseDipResult>>;
    
      }
    
          }
        


          /**
           * [后端:莫萱,天大;前端:淡苍]调度运维—工作流相关API
           */
          export namespace flow {
            
      /**
        * 创建新的Flow（创建补数据）
        * /api/smc/{projectId}/flows
        */
      export namespace postFlows {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FlowModifyDto): Promise<string>;
    
      }
    

      /**
        * 根据dagrunId获取task列表
        * /api/smc/{projectId}/flows/dagrun/{dagrunId}/taskList
        */
      export namespace getFlowsDagrunByDagrunIdTaskList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** dagrunId */
      dagrunId?: string;
      /** 状态集合，code逗号隔开 */
      statusCodes?: string;
      }
    

      export type Response = Array<object>;
      export const init: Response;
      export function request(params: Params): Promise<Array<object>>;
    
      }
    

      /**
        * 补数据实例列表及筛选
        * /api/smc/{projectId}/flows/supplementFlow/list
        */
      export namespace getFlowsSupplementFlowList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 搜索文本 */
      searchText?: string;
      /** 运行日期 */
      runDate?: string;
      /** 每页大小 */
      pageSize?: number;
      /** 页数 */
      pageNum?: number;
      /** 归属范围，逗号隔开userId */
      userIds?: string;
      /** 业务日期 */
      bizDates?: string;
      /** 状态集合，code逗号隔开 */
      statusCodes?: string;
      /** 任务owner */
      taskOwnerId?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 中止某个dagrun
        * /api/smc/{projectId}/flows/{dagrunId}/kill
        */
      export namespace postFlowsByDagrunIdKill {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 要中止的dagrunId */
      dagrunId?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 根据flowId获取多个dagrun
        * /api/smc/{projectId}/flows/{flowId}/dagrunList
        */
      export namespace getFlowsByFlowIdDagrunList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** flowId */
      flowId?: string;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 中止某个flow
        * /api/smc/{projectId}/flows/{flowId}/kill
        */
      export namespace postFlowsByFlowIdKill {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** 要中止的flowId */
      flowId?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * Health Check Config
           */
          export namespace healthCheckConfig {
            
      /**
        * health
        * /health
        */
      export namespace getHealth {
        
      export 
      class Params {
        
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    
          }
        


          /**
           * [后端:见行;前端:淡苍]-文件管理接口API
           */
          export namespace ideFile {
            
      /**
        * 新增文件
        * /api/file/
        */
      export namespace post {
        
      export 
      class Params {
        
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FileCreateDTO): Promise<number>;
    
      }
    

      /**
        * 目录、文件删除
        * /api/file/delete/{fileId}
        */
      export namespace deleteDeleteByFileId {
        
      export 
      class Params {
        
      /** fileId */
      fileId: number;
      /** projectId */
      projectId: number;
      /** 文件名 */
      name: string;
      /** 文件类型 */
      type?: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 获取指定分类文件夹
        * /api/file/getFolderTree
        */
      export namespace getGetFolderTree {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** category */
      category: string;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 移动文件或目录
        * /api/file/move/{sourceFileId}/to/{destFileId}
        */
      export namespace putMoveBySourceFileIdToByDestFileId {
        
      export 
      class Params {
        
      /** sourceFileId */
      sourceFileId: number;
      /** destFileId */
      destFileId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    

      /**
        * 目录、文件重命名
        * /api/file/rename/{fileId}
        */
      export namespace putRenameByFileId {
        
      export 
      class Params {
        
      /** fileId */
      fileId: number;
      /** projectId */
      projectId: number;
      /** newName */
      newName: string;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    

      /**
        * 新增文件夹
        * /api/file/saveFolder
        */
      export namespace postSaveFolder {
        
      export 
      class Params {
        
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FileCreateDTO): Promise<number>;
    
      }
    

      /**
        * 读取文件
        * /api/file/{fileId}
        */
      export namespace getByFileId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** fileId */
      fileId: number;
      }
    

      export type Response = defs.IdeFileBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.IdeFileBO>;
    
      }
    

      /**
        * 更新文件(目录)
        * /api/file/{fileId}
        */
      export namespace putByFileId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** lock */
      lock: number;
      /** fileId */
      fileId: number;
      /** 文件类型 */
      type?: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FileUpdateDTO): Promise<>;
    
      }
    

      /**
        * 删除文件(目录)
        * /api/file/{fileId}
        */
      export namespace deleteByFileId {
        
      export 
      class Params {
        
      /** fileId */
      fileId: number;
      /** 文件名 */
      name: string;
      /** 文件类型 */
      type?: string;
      /** projectId */
      projectId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:见行;前端:淡苍]-函数管理API
           */
          export namespace ideFunction {
            
      /**
        * 获取函数列表,包含系统函数和UDF函数
        * /api/function
        */
      export namespace getFunction {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = Array<defs.Function>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.Function>>;
    
      }
    

      /**
        * 获取函数详细信息
        * /api/function/detail/{id}
        */
      export namespace getFunctionDetailById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.SysFunctionBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.SysFunctionBO>;
    
      }
    

      /**
        * 函数管理目录树
        * /api/function/tree/sys
        */
      export namespace getFunctionTreeSys {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 用户定义函数目录树
        * /api/function/tree/udf
        */
      export namespace getFunctionTreeUdf {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword?: string;
      }
    

      export type Response = defs.TreeNodeBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TreeNodeBO>;
    
      }
    

      /**
        * 注册 UDF
        * /api/function/udf
        */
      export namespace postFunctionUdf {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.RegisterUdfDTO): Promise<number>;
    
      }
    

      /**
        * UDF 类目菜单列表项
        * /api/function/udf/category
        */
      export namespace getFunctionUdfCategory {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.UdfCategoryDTO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.UdfCategoryDTO>>;
    
      }
    

      /**
        * 获取 UDF 详情
        * /api/function/udf/{udfId}
        */
      export namespace getFunctionUdfByUdfId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** udfId */
      udfId: number;
      }
    

      export type Response = defs.IdeUdfBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.IdeUdfBO>;
    
      }
    

      /**
        * 更新 UDF 信息
        * /api/function/udf/{udfId}
        */
      export namespace putFunctionUdfByUdfId {
        
      export 
      class Params {
        
      /** udfId */
      udfId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.UpdateUdfDTO): Promise<boolean>;
    
      }
    

      /**
        * 删除 UDF
        * /api/function/udf/{udfId}
        */
      export namespace deleteFunctionUdfByUdfId {
        
      export 
      class Params {
        
      /** udfId */
      udfId: number;
      /** projectId */
      projectId: number;
      /** 函数名 */
      name: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [见行, 松纹] 资源管理 API
           */
          export namespace ideResource {
            
      /**
        * 关键词搜索当前项目中的资源
        * /api/resource
        */
      export namespace getResource {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** keyword */
      keyword: string;
      /** 搜索资源类型: oss/udf , 默认搜索对象资源文件(oss) */
      type?: string;
      /** 返回记录数限制, 最大30 */
      limit?: number;
      }
    

      export type Response = Array<defs.ResourceMetaBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ResourceMetaBO>>;
    
      }
    

      /**
        * 新建资源文件
        * /api/resource
        */
      export namespace postResource {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.AddResourceDTO): Promise<number>;
    
      }
    

      /**
        * 资源类型列表
        * /api/resource/type/oss
        */
      export namespace getResourceTypeOss {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.OssResourceTypeVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.OssResourceTypeVO>>;
    
      }
    

      /**
        * 请求上传资源文件, 返回资源Uri
        * /api/resource/upload
        */
      export namespace postResourceUpload {
        
      export 
      class Params {
        
      /** 项目ID */
      projectId?: number;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 更新资源文件
        * /api/resource/{resourceId}
        */
      export namespace putResourceByResourceId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** resourceId */
      resourceId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.UpdateResourceDTO): Promise<>;
    
      }
    

      /**
        * 删除资源文件
        * /api/resource/{resourceId}
        */
      export namespace deleteResourceByResourceId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** resourceId */
      resourceId: number;
      /** name */
      name?: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 获取资源元数据
        * /api/resource/{resourceId}/meta
        */
      export namespace getResourceByResourceIdMeta {
        
      export 
      class Params {
        
      /** resourceId */
      resourceId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.ResourceMetaBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ResourceMetaBO>;
    
      }
    
          }
        


          /**
           * [后端:程素;前端:五灵] IDE搜索相关API
           */
          export namespace ideSearch {
            
      /**
        * 获取研发搜索结果
        * /api/ide/search/list
        */
      export namespace getList {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 业务板块Id */
      bizUnitId?: number;
      /** 项目Id */
      projectId?: number;
      }
    

      export type Response = defs.IdeSearchResultBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.IdeSearchResultBO>;
    
      }
    

      /**
        * 获取研发搜索结果
        * /api/ide/search/listDevelop
        */
      export namespace getListDevelop {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 业务板块Id */
      bizUnitId?: number;
      /** 项目Id */
      projectId?: number;
      }
    

      export type Response = defs.IdeSearchResultBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.IdeSearchResultBO>;
    
      }
    

      /**
        * 获取资产搜索结果
        * /api/ide/search/listResource
        */
      export namespace getListResource {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 业务板块Id */
      bizUnitId?: number;
      /** 项目Id */
      projectId?: number;
      }
    

      export type Response = defs.IdeSearchResultBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.IdeSearchResultBO>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:北渔]获取用户权限相关API
           */
          export namespace listPermission {
            
      /**
        * 我的权限
        * /api/dip/permission/list/mine
        */
      export namespace getListMine {
        
      export 
      class Params {
        
      /** 资源类型 */
      resourceType?: number;
      /** 搜索关键词 */
      keyword?: string;
      /** 是否owner */
      isOwner?: boolean;
      /** 账号类型 */
      accountType?: number;
      }
    

      export type Response = Array<defs.PermissionItemBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.PermissionItemBO>>;
    
      }
    

      /**
        * 获取我的权限详情
        * /api/dip/permission/mine/{itemId}
        */
      export namespace getMineByItemId {
        
      export 
      class Params {
        
      /** itemId */
      itemId: number;
      /** resourceType */
      resourceType: number;
      /** resourceId */
      resourceId: string;
      /** projectId */
      projectId?: number;
      /** isOwner */
      isOwner: boolean;
      }
    

      export type Response = Array<defs.PermissionDetailBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.PermissionDetailBO>>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:北渔]获取待申请权限的资源信息相关API
           */
          export namespace listResource {
            
      /**
        * 查询可申请的资源
        * /api/dip/permission/list/resource
        */
      export namespace getResource {
        
      export 
      class Params {
        
      /** 责任人 ID */
      ownerIdList?: Array<string>;
      /** 搜索关键词 */
      keyword?: string;
      /** 项目ID */
      projectId?: number;
      /** 资源类型 */
      entityType?: number;
      }
    

      export type Response = Array<defs.ResourceBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ResourceBO>>;
    
      }
    

      /**
        * 查询可申请的资源属性
        * /api/dip/permission/list/resource/attribute
        */
      export namespace getResourceAttribute {
        
      export 
      class Params {
        
      /** 资源id */
      id?: string;
      /** 资源名称 */
      name?: string;
      /** 资源类型 */
      entityType?: number;
      /** 逻辑表类型 */
      tableType?: number;
      /** 项目id */
      projectId?: number;
      /** 资源描述 */
      des?: string;
      /** 资源中文名 */
      cn?: string;
      }
    

      export type Response = Array<defs.ResourceAttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ResourceAttributeBO>>;
    
      }
    
          }
        


          /**
           * [后端:扶犁;前端:晟朗]运维中心—逻辑表调度相关API
           */
          export namespace logical {
            
      /**
        * 逻辑表调度DAG图节点实例状态接口
        * /api/smc/project/{projectId}/logical/batch
        */
      export namespace getBatch {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id列表 */
      taskIds: Array<string>;
      }
    

      export type Response = Array<defs.TaskEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TaskEntity>>;
    
      }
    

      /**
        * 逻辑表调度DAG节点图
        * /api/smc/project/{projectId}/logical/dag/{tableName}
        */
      export namespace getDagByTableName {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** tableName */
      tableName: string;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 列出项目下的逻辑表列表
        * /api/smc/project/{projectId}/logical/nodes/list
        */
      export namespace getNodesList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表，4：物理表节点，逗号分隔 */
      types?: string;
      }
    

      export type Response = Array<defs.IdeLogicalTableNodeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeLogicalTableNodeBO>>;
    
      }
    

      /**
        * 搜索项目下的逻辑表节点和物理表节点
        * /api/smc/project/{projectId}/logical/nodes/search
        */
      export namespace getNodesSearch {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 搜素文本 */
      searchText?: string;
      /** 逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表，4：物理表节点，逗号分隔 */
      types?: string;
      }
    

      export type Response = Array<defs.IdeLogicalTableNodeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeLogicalTableNodeBO>>;
    
      }
    

      /**
        * 逻辑表调度任务DAG节点图
        * /api/smc/project/{projectId}/logical/tasks/dag/{tableName}
        */
      export namespace getTasksDagByTableName {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** tableName */
      tableName: string;
      /** 业务日期 */
      bizDate?: string;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 逻辑表调度任务实例列表
        * /api/smc/project/{projectId}/logical/tasks/list
        */
      export namespace getTasksList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 业务日期 */
      bizDate?: string;
      /** 参考OneDataTypeEnum，逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表，4：物理表节点，逗号分隔 */
      types?: string;
      }
    

      export type Response = Array<defs.IdeLogicalTableTaskBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeLogicalTableTaskBO>>;
    
      }
    

      /**
        * 搜索逻辑表调度实例
        * /api/smc/project/{projectId}/logical/tasks/search
        */
      export namespace getTasksSearch {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 搜素文本 */
      searchText?: string;
      /** 业务日期 */
      bizDate?: string;
      /** 参考OneDataTypeEnum，逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表，4：物理表节点，逗号分隔 */
      types?: string;
      }
    

      export type Response = Array<defs.IdeLogicalTableTaskBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeLogicalTableTaskBO>>;
    
      }
    

      /**
        * 逻辑表物化节点查看字段列表
        * /api/smc/project/{projectId}/logical/{tableName}/nodes/{nodeId}/columns/list
        */
      export namespace getByTableNameNodesByNodeIdColumnsList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** tableName */
      tableName: string;
      /** nodeId */
      nodeId: string;
      /** 参考OneDataTypeEnum，逻辑表类型,1：维度逻辑表，2：事实逻辑表，3：汇总逻辑表 */
      logicalType: string;
      }
    

      export type Response = Array<defs.LogicalColumnVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.LogicalColumnVO>>;
    
      }
    

      /**
        * 展开逻辑表调度节点，列出物理调度节点列表
        * /api/smc/project/{projectId}/logical/{tableName}/physical/nodes/list
        */
      export namespace getByTableNamePhysicalNodesList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** tableName */
      tableName: string;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 展开逻辑表调度实例，列出逻辑表物化节点实例列表
        * /api/smc/project/{projectId}/logical/{tableName}/physical/tasks/list
        */
      export namespace getByTableNamePhysicalTasksList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** tableName */
      tableName: string;
      /** 业务日期 */
      bizDate?: string;
      }
    

      export type Response = Array<defs.IdeTaskEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeTaskEntity>>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:北渔]管理权限相关API
           */
          export namespace managePermission {
            
      /**
        * 交还权限
        * /api/dip/permission/{id}/back
        */
      export namespace putBack {
        
      export 
      class Params {
        
      /** id */
      id: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 转移owner
        * /api/dip/permission/{id}/handover/{newOwner}
        */
      export namespace putHandoverByNewOwner {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** newOwner */
      newOwner: string;
      /** projectId */
      projectId?: number;
      /** resourceType */
      resourceType: number;
      /** resourceId */
      resourceId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:翠翠、莫萱,天大;前端:琳峰]DIP元数据详情相关API
           */
          export namespace metaDetail {
            
      /**
        * 表结构-获取表或者逻辑字段的血缘关系
        * /api/dip/meta/table/bloodRelation
        */
      export namespace getBloodRelation {
        
      export 
      class Params {
        
      /** 表的guid */
      modelId: string;
      /** 表类型 */
      modelType: number;
      /** 字段Id */
      columnName?: string;
      }
    

      export type Response = defs.TableBloodRelationBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TableBloodRelationBO>;
    
      }
    

      /**
        * 表结构 - 导出逻辑表字段信息为 CSV
        * /api/dip/meta/table/columns/export
        */
      export namespace getColumnsExport {
        
      export 
      class Params {
        
      /** 导出文件名 */
      fileName: string;
      /** 表Id */
      modelId: string;
      /** 表类型 */
      modelType: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 表结构
        * /api/dip/meta/table/field
        */
      export namespace getField {
        
      export 
      class Params {
        
      /** 表id */
      modelId: string;
      /** 表的类型 */
      modelType?: number;
      }
    

      export type Response = defs.TableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TableBO>;
    
      }
    

      /**
        * 表结构-关联维度详情
        * /api/dip/meta/table/field/ref
        */
      export namespace getFieldRef {
        
      export 
      class Params {
        
      /** 逻辑表id */
      modelId: string;
      }
    

      export type Response = defs.TableMetaBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TableMetaBO>;
    
      }
    

      /**
        * 逻辑字段的数据预览
        * /api/dip/meta/table/logicalColumn/view
        */
      export namespace getLogicalColumnView {
        
      export 
      class Params {
        
      /** 表id */
      modelId: string;
      /** 字段名称 */
      columnName: string;
      /** 表的类型 */
      modelType: number;
      }
    

      export type Response = Array<array>;
      export const init: Response;
      export function request(params: Params): Promise<Array<array>>;
    
      }
    

      /**
        * 调起解析任务
        * /api/dip/meta/table/modelId/{modelId}/parseRelation
        */
      export namespace postModelIdByModelIdParseRelation {
        
      export 
      class Params {
        
      /** 表id */
      modelId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 表结构-获取表的产出信息
        * /api/dip/meta/table/outputInfo
        */
      export namespace getOutputInfo {
        
      export 
      class Params {
        
      /** 表guid */
      modelId: string;
      /** 逻辑表的id,物理表不用给值 */
      logicalTableId?: number;
      /** 表类型 */
      modelType: number;
      }
    

      export type Response = Array<defs.OutputInfoBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.OutputInfoBO>>;
    
      }
    

      /**
        * 调起解析任务
        * /api/dip/meta/table/parseJob
        */
      export namespace getParseJob {
        
      export 
      class Params {
        
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 表结构-获取物理表和逻辑字段的分区列表
        * /api/dip/meta/table/partitionInfo
        */
      export namespace getPartitionInfo {
        
      export 
      class Params {
        
      /** 表guid */
      modelId: string;
      /** 逻辑表的id，物理表不用给 */
      logicalTableId?: number;
      /** 结束日期 */
      endDate?: string;
      /** 表字段 */
      modelColumnList?: Array<string>;
      /** 表类型 */
      modelType: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 表结构-获取物理表分区列表
        * /api/dip/meta/table/physicalTablePartition
        */
      export namespace getPhysicalTablePartition {
        
      export 
      class Params {
        
      /** 表guid */
      tableGuid: string;
      /** 页数 */
      pageIndex: number;
      /** 页大小 */
      pageSize: number;
      }
    

      export type Response = defs.PagedData<defs.PartitionBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.PartitionBO>>;
    
      }
    

      /**
        * 逻辑表字段数据探查
        * /api/dip/meta/table/probe
        */
      export namespace getProbe {
        
      export 
      class Params {
        
      /** 逻辑表的guid */
      modelId: string;
      /** 字段名称 */
      columnName: string;
      /** 表的类型 */
      modelType: number;
      }
    

      export type Response = defs.LogicalColumnProbeResultBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicalColumnProbeResultBO>;
    
      }
    

      /**
        * 表结构-获取表的Select语句
        * /api/dip/meta/table/select
        */
      export namespace getSelect {
        
      export 
      class Params {
        
      /** 表Id */
      modelId: string;
      /** 表类型 */
      modelType: number;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 物理表数据预览
        * /api/dip/meta/table/view
        */
      export namespace getView {
        
      export 
      class Params {
        
      /** 表id */
      modelId: string;
      /** 表的类型 */
      modelType?: number;
      }
    

      export type Response = Array<defs.ColumnBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ColumnBO>>;
    
      }
    
          }
        


          /**
           * [后端:天大,莫萱,松纹;前端:晟朗]运维中心—节点相关API
           */
          export namespace node {
            
      /**
        * 配置节点的时候搜索可选节点[可跨项目]
        * /api/smc/project/nodeList
        */
      export namespace getNodeList {
        
      export 
      class Params {
        
      /** 搜素文本 */
      searchText?: string;
      /** 页数 */
      pageNum?: number;
      /** 节点类型1：周期，3是手动 */
      nodeType?: number;
      /** 实例来源(黑盒:onedata3-server|IDE:onedata-ide) */
      nodeFroms?: Array<string>;
      /** 每页大小 */
      pageSize?: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = defs.PaginatedResult<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PaginatedResult<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 新增节点文件
        * /api/smc/project/saveNode
        */
      export namespace postSaveNode {
        
      export 
      class Params {
        
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.CreateNodeDTO): Promise<number>;
    
      }
    

      /**
        * 根据文件Id获取节点配置
        * /api/smc/project/{projectId}/files/{fileId}/nodes/
        */
      export namespace getByProjectIdFilesByFileIdNodes {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      }
    

      export type Response = defs.NodeDTO;
      export const init: Response;
      export function request(params: Params): Promise<defs.NodeDTO>;
    
      }
    

      /**
        * 下线节点
        * /api/smc/project/{projectId}/files/{fileId}/offline
        */
      export namespace postByProjectIdFilesByFileIdOffline {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      /** 类型 */
      operatorType?: number;
      /** 文件名 */
      fileName?: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 手工节点列表及筛选
        * /api/smc/project/{projectId}/manualNodes/list
        */
      export namespace getByProjectIdManualNodesList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 搜索文本 */
      searchText?: string;
      /** 页数 */
      pageNum?: number;
      /** 每页大小 */
      pageSize?: number;
      /** 归属范围,用户id逗号隔开 */
      userIds?: string;
      /** 状态,状态码逗号隔开 */
      statusCodes?: string;
      /** 发布日期 */
      publishDate?: string;
      /** 任务类型【operator类型】 */
      operatorTypes?: string;
      }
    

      export type Response = defs.PaginatedResult<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PaginatedResult<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * [公共]获取节点类型的列表
        * /api/smc/project/{projectId}/nodeTypeList
        */
      export namespace getByProjectIdNodeTypeList {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 根据节点id查询节点详情
        * /api/smc/project/{projectId}/nodes/batch
        */
      export namespace getByProjectIdNodesBatch {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id列表 */
      nodeIds: Array<string>;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 根据节点输出名字批量查询节点详情
        * /api/smc/project/{projectId}/nodes/batchGetByOutputNames
        */
      export namespace getByProjectIdNodesBatchGetByOutputNames {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 输出名字列表 */
      outputNames: Array<string>;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 校验节点输出
        * /api/smc/project/{projectId}/nodes/checkOutput
        */
      export namespace postByProjectIdNodesCheckOutput {
        
      export 
      class Params {
        
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.OutputCheckVO): Promise<boolean>;
    
      }
    

      /**
        * 检查输出名字是否重复
        * /api/smc/project/{projectId}/nodes/checkOutputNameExist
        */
      export namespace postByProjectIdNodesCheckOutputNameExist {
        
      export 
      class Params {
        
      /** 节点Id */
      nodeId?: string;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 周期节点列表及筛选
        * /api/smc/project/{projectId}/nodes/list
        */
      export namespace getByProjectIdNodesList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 搜素文本 */
      searchText?: string;
      /** 页数 */
      pageNum?: number;
      /** 每页大小 */
      pageSize?: number;
      /** 归属范围,用户id逗号隔开 */
      userIds?: string;
      /** 实例来源(黑盒:onedata3-server|IDE:onedata-ide) */
      nodeFroms?: Array<string>;
      /** 发布日期 */
      publishDate?: string;
      /** 任务类型【operator类型】 */
      operatorTypes?: string;
      }
    

      export type Response = defs.PaginatedResult<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PaginatedResult<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 解析代码输入输出
        * /api/smc/project/{projectId}/nodes/parseCode
        */
      export namespace postByProjectIdNodesParseCode {
        
      export 
      class Params {
        
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 提交调度节点
        * /api/smc/project/{projectId}/nodes/release
        */
      export namespace postByProjectIdNodesRelease {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.NodeDTO): Promise<string>;
    
      }
    

      /**
        * 删除文件，ide的配置和调度的节点
        * /api/smc/project/{projectId}/nodes/{fileId}
        */
      export namespace deleteByProjectIdNodesByFileId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      /** 类型 */
      operatorType?: number;
      /** 文件名 */
      fileName?: string;
      /** 是否包含下游节点,默认不包含 */
      withDownstream?: boolean;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * check节点的权限信息
        * /api/smc/project/{projectId}/nodes/{fileId}/auth
        */
      export namespace postByProjectIdNodesByFileIdAuth {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      }
    

      export type Response = defs.AuthBaseBO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.NodeDTO): Promise<defs.AuthBaseBO>;
    
      }
    

      /**
        * 新增和修改节点配置
        * /api/smc/project/{projectId}/nodes/{fileId}/config
        */
      export namespace postByProjectIdNodesByFileIdConfig {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 目录树的id */
      fileId: number;
      /** lock */
      lock: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.NodeDTO): Promise<number>;
    
      }
    

      /**
        * 移动节点位置
        * /api/smc/project/{projectId}/nodes/{fileId}/move
        */
      export namespace postByProjectIdNodesByFileIdMove {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      /** 新的父节点id */
      newParentId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 节点重命名
        * /api/smc/project/{projectId}/nodes/{fileId}/rename
        */
      export namespace postByProjectIdNodesByFileIdRename {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 文件id */
      fileId: number;
      /** 节点新名称 */
      newName: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 根据节点id查询节点详情
        * /api/smc/project/{projectId}/nodes/{nodeId}
        */
      export namespace getByProjectIdNodesByNodeId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      }
    

      export type Response = defs.IdeNodeEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.IdeNodeEntity>;
    
      }
    

      /**
        * 查找节点特定版本的代码
        * /api/smc/project/{projectId}/nodes/{nodeId}/codeContent
        */
      export namespace getByProjectIdNodesByNodeIdCodeContent {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** nodeId */
      nodeId?: string;
      /** 版本 */
      version?: number;
      }
    

      export type Response = defs.NodeContentEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.NodeContentEntity>;
    
      }
    

      /**
        * 删除节点(清除脏数据使用)
        * /api/smc/project/{projectId}/nodes/{nodeId}/delete
        */
      export namespace deleteByProjectIdNodesByNodeIdDelete {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 查询节点的下游节点
        * /api/smc/project/{projectId}/nodes/{nodeId}/downstream
        */
      export namespace getByProjectIdNodesByNodeIdDownstream {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      /** 深度, 最大30 */
      depth: number;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 根据节点Id获取其fileId
        * /api/smc/project/{projectId}/nodes/{nodeId}/fileId
        */
      export namespace getByProjectIdNodesByNodeIdFileId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点Id */
      nodeId: string;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    

      /**
        * 自动生成手工节点flow名称
        * /api/smc/project/{projectId}/nodes/{nodeId}/flowName
        */
      export namespace getByProjectIdNodesByNodeIdFlowName {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 查找节点的所有发布版本
        * /api/smc/project/{projectId}/nodes/{nodeId}/historyRealse
        */
      export namespace getByProjectIdNodesByNodeIdHistoryRealse {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** nodeId */
      nodeId?: string;
      }
    

      export type Response = Array<defs.NodeContentEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.NodeContentEntity>>;
    
      }
    

      /**
        * 查询节点的操作记录
        * /api/smc/project/{projectId}/nodes/{nodeId}/operationLog
        */
      export namespace getByProjectIdNodesByNodeIdOperationLog {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      }
    

      export type Response = Array<defs.IdeOperationEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeOperationEntity>>;
    
      }
    

      /**
        * 查询依赖某节点输出的直接下游节点
        * /api/smc/project/{projectId}/nodes/{nodeId}/outputNames/{outputName}/downstream
        */
      export namespace getByProjectIdNodesByNodeIdOutputNamesByOutputNameDownstream {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      /** 输出名称 */
      outputName: string;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * 修改node的责任人
        * /api/smc/project/{projectId}/nodes/{nodeId}/owner
        */
      export namespace postByProjectIdNodesByNodeIdOwner {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** nodeId */
      nodeId?: string;
      /** ownerId */
      ownerId?: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 触发手工节点执行
        * /api/smc/project/{projectId}/nodes/{nodeId}/triggerManual
        */
      export namespace postByProjectIdNodesByNodeIdTriggerManual {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      /** 业务日期 */
      bizDate: string;
      /** 实例名称 */
      flowName: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 查询节点的上游节点
        * /api/smc/project/{projectId}/nodes/{nodeId}/upstream
        */
      export namespace getByProjectIdNodesByNodeIdUpstream {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 节点id */
      nodeId: string;
      /** 深度, 最大30 */
      depth: number;
      }
    

      export type Response = Array<defs.IdeNodeEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.IdeNodeEntity>>;
    
      }
    

      /**
        * [公共]获取OperatorType的列表
        * /api/smc/project/{projectId}/operatorTypeList
        */
      export namespace getByProjectIdOperatorTypeList {
        
      export 
      class Params {
        
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    
          }
        


          /**
           * [后端:婼晨;前端:晟朗]-对象API
           */
          export namespace object {
            
      /**
        * 获取对象所在的项目
        * /api/object/{objectId}
        */
      export namespace getByObjectId {
        
      export 
      class Params {
        
      /** 对象ID */
      objectId?: string;
      /** 对象类型 */
      objectType?: string;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    
          }
        


          /**
           * [后端:见行;前端:双扬]-对象加解锁API
           */
          export namespace objectLock {
            
      /**
        * 查询对象的加锁信息
        * /api/lock
        */
      export namespace getLock {
        
      export 
      class Params {
        
      /** 对象ID */
      objectId?: number;
      /** 对象类型 */
      objectType?: string;
      }
    

      export type Response = defs.ObjectLockBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ObjectLockBO>;
    
      }
    

      /**
        * 对象加锁(如果当前操作人已有锁, 无副作用)
        * /api/lock
        */
      export namespace postLock {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 对象ID */
      objectId?: number;
      /** 对象类型 */
      objectType?: string;
      }
    

      export type Response = defs.ObjectLockBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ObjectLockBO>;
    
      }
    
          }
        


          /**
           * [后端:白路;前端:白路]odps元数据回调相关API
           */
          export namespace odpsMetaEvent {
            
      /**
        * 创建事件
        * /meta-event-callback/createEvent
        */
      export namespace postCreateEvent {
        
      export 
      class Params {
        
      /** dsId */
      dsId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除事件
        * /meta-event-callback/removeEvent
        */
      export namespace deleteRemoveEvent {
        
      export 
      class Params {
        
      /** dsId */
      dsId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * handleOdpsMetaEvent
        * /meta-event-callback/{guid}
        */
      export namespace postByGuid {
        
      export 
      class Params {
        
      /** guid */
      guid: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:晟朗]物理表相关API
           */
          export namespace physicalTable {
            
      /**
        * /获取物理表字段
        * /api/physicaltable/getTableAttribute
        */
      export namespace getGetTableAttribute {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 物理表项目id */
      physicalTableProjectId: number;
      /** 物理表名称 */
      logicTableName: string;
      }
    

      export type Response = Array<defs.AttributeBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.AttributeBO>>;
    
      }
    

      /**
        * 搜索同租户同集群的所有物理表
        * /api/physicaltable/physical/incluster/tableList
        */
      export namespace getPhysicalInclusterTableList {
        
      export 
      class Params {
        
      /** prefix */
      prefix?: string;
      }
    

      export type Response = Array<defs.SourceMainTableBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.SourceMainTableBO>>;
    
      }
    

      /**
        * 物理表来源主表权限校验
        * /api/physicaltable/physical/permission
        */
      export namespace getPhysicalPermission {
        
      export 
      class Params {
        
      /** 物理表表名 */
      tableName?: string;
      /** 物理表项目id */
      physicalTableNameProjectId?: number;
      /** 项目Id */
      projectId?: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * getColumnsByTableName
        * /api/physicaltable/project/physicalTable
        */
      export namespace getProjectPhysicalTable {
        
      export 
      class Params {
        
      /** tenantId */
      tenantId: number;
      /** dsId */
      dsId: number;
      /** 表名称 */
      tableName: string;
      }
    

      export type Response = defs.PhysicalTableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.PhysicalTableBO>;
    
      }
    

      /**
        * 获取物理表的列信息
        * /api/physicaltable/project/{projectId}/columns
        */
      export namespace getProjectByProjectIdColumns {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 表名称 */
      tableName: string;
      }
    

      export type Response = Array<defs.ColumnBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ColumnBO>>;
    
      }
    

      /**
        * 前缀搜索项目下的物理表
        * /api/physicaltable/{bizUnitId}/tableList
        */
      export namespace getByBizUnitIdTableList {
        
      export 
      class Params {
        
      /** bizUnitId */
      bizUnitId: number;
      /** 项目Id */
      projectId?: number;
      /** 是否只查自己own的 */
      是否只查自己own的?: boolean;
      /** 表名前缀 */
      tableName: string;
      }
    

      export type Response = defs.TableNameWithProjectIdBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TableNameWithProjectIdBO>;
    
      }
    

      /**
        * 获取物理表预览数据
        * /api/physicaltable/{tableName}/preview
        */
      export namespace getByTableNamePreview {
        
      export 
      class Params {
        
      /** tableName */
      tableName: string;
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.ColumnBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ColumnBO>>;
    
      }
    

      /**
        * 获取物理表概要信息
        * /api/physicaltable/{tableName}/summary
        */
      export namespace getByTableNameSummary {
        
      export 
      class Params {
        
      /** tableName */
      tableName: string;
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.PhysicalTableSummaryBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.PhysicalTableSummaryBO>;
    
      }
    
          }
        


          /**
           * [后端:见行;前端:晟朗] 偏好设置(系统/租户/用户偏好)
           */
          export namespace preference {
            
      /**
        * 获取当前计算引擎支持的数据类型
        * /api/preference/computeEngine/supportedDataType
        */
      export namespace getComputeEngineSupportedDataType {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 获取计算引擎列表
        * /api/preference/computingEngineList
        */
      export namespace getComputingEngineList {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.ComputingEngineBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ComputingEngineBO>>;
    
      }
    

      /**
        * 获取应用环境变量
        * /api/preference/env/{propertyName}
        */
      export namespace getEnvByPropertyName {
        
      export 
      class Params {
        
      /** propertyName */
      propertyName: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 读取租户计算引擎类型设置
        * /api/preference/tenant/computingEngine
        */
      export namespace getTenantComputingEngine {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.ComputingEngineBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ComputingEngineBO>;
    
      }
    

      /**
        * 设置租户计算引擎
        * /api/preference/tenant/computingEngine
        */
      export namespace postTenantComputingEngine {
        
      export 
      class Params {
        
      /** type */
      type: string;
      /** version */
      version: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 检查计算引擎是否已经初始化元数据部署任务
        * /api/preference/tenant/computingEngine/cluster
        */
      export namespace postTenantComputingEngineCluster {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ComputeEngineVO): Promise<boolean>;
    
      }
    

      /**
        * 检查集群的连通性
        * /api/preference/tenant/computingEngine/cluster/active
        */
      export namespace postTenantComputingEngineClusterActive {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ComputeEngineVO): Promise<boolean>;
    
      }
    

      /**
        * 配置租户计算引擎
        * /api/preference/tenant/computingEngine/config
        */
      export namespace postTenantComputingEngineConfig {
        
      export 
      class Params {
        
      /** type */
      type: string;
      /** version */
      version: string;
      /** hostIps */
      hostIps?: string;
      /** clusterUrls */
      clusterUrls: Array<string>;
      /** isDipInit */
      isDipInit?: boolean;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 配置租户计算引擎[数据订正]
        * /api/preference/tenant/computingEngine/config/fixdata
        */
      export namespace postTenantComputingEngineConfigFixdata {
        
      export 
      class Params {
        
      /** type */
      type: string;
      /** version */
      version: string;
      /** clusterUrls */
      clusterUrls: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 初始化周期函数
        * /api/preference/tenant/periodFunction
        */
      export namespace postTenantPeriodFunction {
        
      export 
      class Params {
        
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 获取用户偏好设置
        * /api/preference/user/{key}
        */
      export namespace getUserByKey {
        
      export 
      class Params {
        
      /** key */
      key: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 设定用户偏好设置
        * /api/preference/user/{key}
        */
      export namespace postUserByKey {
        
      export 
      class Params {
        
      /** key */
      key: string;
      /** value */
      value: string;
      /** desc */
      desc?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:北渔]项目相关API
           */
          export namespace project {
            
      /**
        * 搜索当前租户的项目信息
        * /api/project
        */
      export namespace getProject {
        
      export 
      class Params {
        
      /** 业务板块筛选 */
      bizUnitId?: number;
      /** 是否只搜素未绑定的项目 */
      unbindOnly?: boolean;
      /** 关键词筛选 */
      keyword?: string;
      }
    

      export type Response = Array<defs.ProjectVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ProjectVO>>;
    
      }
    

      /**
        * 新增项目
        * /api/project
        */
      export namespace postProject {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.ProjectVO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ProjectCreateBO): Promise<defs.ProjectVO>;
    
      }
    

      /**
        * GET接口
        * /api/project/bindDataSourceWarning
        */
      export namespace getProjectBindDataSourceWarning {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** dsId */
      dsId: number;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 指定业务板块下已绑定空间的项目
        * /api/project/bindProjects
        */
      export namespace getProjectBindProjects {
        
      export 
      class Params {
        
      /** 业务板块Id */
      bizUnitId: number;
      }
    

      export type Response = Array<defs.ProjectVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ProjectVO>>;
    
      }
    

      /**
        * GET接口
        * /api/project/grantCode
        */
      export namespace getProjectGrantCode {
        
      export 
      class Params {
        
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * GET接口
        * /api/project/grantMessage
        */
      export namespace getProjectGrantMessage {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.ProjectGrantBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ProjectGrantBO>;
    
      }
    

      /**
        * 查询当前用户的项目
        * /api/project/mine
        */
      export namespace getProjectMine {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.ProjectVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ProjectVO>>;
    
      }
    

      /**
        * GET接口
        * /api/project/projectNameWarning
        */
      export namespace getProjectProjectNameWarning {
        
      export 
      class Params {
        
      /** bindDsId */
      bindDsId: number;
      /** projectName */
      projectName: string;
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 获取没有绑定到业务空间的项目
        * /api/project/unBindProjects
        */
      export namespace getProjectUnBindProjects {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.ProjectVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ProjectVO>>;
    
      }
    

      /**
        * 根据项目ID获取该项目所属业务板块下已绑定的所有的项目ID
        * /api/project/{projectId}
        */
      export namespace getProjectByProjectId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<integer>;
      export const init: Response;
      export function request(params: Params): Promise<Array<integer>>;
    
      }
    

      /**
        * 更新项目
        * /api/project/{projectId}
        */
      export namespace putProjectByProjectId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ProjectUpdateBO): Promise<>;
    
      }
    

      /**
        * 删除项目
        * /api/project/{projectId}
        */
      export namespace deleteProjectByProjectId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** projectName */
      projectName?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * GET接口
        * /api/project/{projectId}/dependencyCheck
        */
      export namespace getProjectByProjectIdDependencyCheck {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 查询当前用户是否为指定项目的成员
        * /api/project/{projectId}/membership
        */
      export namespace getProjectByProjectIdMembership {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取项目扩展信息
        * /api/project/{projectId}/projectWithExtendInfo
        */
      export namespace getProjectByProjectIdProjectWithExtendInfo {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.ProjectVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ProjectVO>;
    
      }
    

      /**
        * 获取支持的任务类型
        * /api/project/{projectId}/supportedTaskType
        */
      export namespace getProjectByProjectIdSupportedTaskType {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    
          }
        


          /**
           * [后端:见行;前端:北渔] 项目成员管理
           */
          export namespace projectMember {
            
      /**
        * 获取项目成员列表
        * /api/project/{projectId}/member
        */
      export namespace getMember {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 用户名 或 userId关键字筛选 */
      keyword?: string;
      /** 角色筛选: 0(owner), 1(admin), 2(developer), 3(guest) */
      roleId?: number;
      }
    

      export type Response = Array<defs.ProjectMemberBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.ProjectMemberBO>>;
    
      }
    

      /**
        * 批量添加项目成员
        * /api/project/{projectId}/member/
        */
      export namespace postMember {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BatchProjectMemberDTO): Promise<boolean>;
    
      }
    

      /**
        * 批量更新用户角色
        * /api/project/{projectId}/member/
        */
      export namespace putMember {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.BatchProjectMemberDTO): Promise<boolean>;
    
      }
    

      /**
        * 批量移除项目成员
        * /api/project/{projectId}/member/
        */
      export namespace deleteMember {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 需要移除的用户 ID, 逗号分隔 */
      userIds: string;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    

      /**
        * 获取项目成员信息
        * /api/project/{projectId}/member/{userId}
        */
      export namespace getMemberByUserId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** userId */
      userId: string;
      }
    

      export type Response = defs.ProjectMemberBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.ProjectMemberBO>;
    
      }
    

      /**
        * 更新用户角色
        * /api/project/{projectId}/member/{userId}
        */
      export namespace putMemberByUserId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** userId */
      userId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.ProjectMemberDTO): Promise<boolean>;
    
      }
    
          }
        


          /**
           * alert Record [报警记录相关接口]
           */
          export namespace qsmdAlertRecord {
            
      /**
        * 查询报警记录配置项
        * /qsmd/api/alertRecord/filter/list
        */
      export namespace getFilterList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 查询报警记录
        * /qsmd/api/alertRecord/search
        */
      export namespace getSearch {
        
      export 
      class Params {
        
      /** alertReason */
      alertReason?: Array<string>;
      /** alertType */
      alertType?: Array<string>;
      /** alertStatus */
      alertStatus?: Array<string>;
      /** alertSentTo */
      alertSentTo?: Array<string>;
      /** creators */
      creators?: Array<string>;
      /** dateList */
      dateList?: Array<string>;
      /** nodeName */
      nodeName?: string;
      /** projectId */
      projectId?: number;
      /** currPage */
      currPage?: number;
      /** limit */
      limit?: number;
      /** tenantId */
      tenantId?: number;
      }
    

      export type Response = Array<defs.QsmdAlertRecordBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.QsmdAlertRecordBO>>;
    
      }
    
          }
        


          /**
           * Custome alert [自定义报警相关接口]
           */
          export namespace qsmdCustomAlert {
            
      /**
        * 新建自定义报警
        * /qsmd/api/customAlert
        */
      export namespace postCustomAlert {
        
      export 
      class Params {
        
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.QsmdCustomAlertInfo): Promise<>;
    
      }
    

      /**
        * 查询配置了报警的节点
        * /qsmd/api/customAlert/alert/node
        */
      export namespace getCustomAlertAlertNode {
        
      export 
      class Params {
        
      /** nodeId */
      nodeId: string;
      }
    

      export type Response = Array<defs.QsmdCustomAlert>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.QsmdCustomAlert>>;
    
      }
    

      /**
        * 当前环境支持的报警方式
        * /qsmd/api/customAlert/alertTypes
        */
      export namespace getCustomAlertAlertTypes {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<string>;
      export const init: Response;
      export function request(params: Params): Promise<Array<string>>;
    
      }
    

      /**
        * 自定义报警查询配置
        * /qsmd/api/customAlert/filter
        */
      export namespace getCustomAlertFilter {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.FilterBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.FilterBO>>;
    
      }
    

      /**
        * 查询自定义报警
        * /qsmd/api/customAlert/search
        */
      export namespace getCustomAlertSearch {
        
      export 
      class Params {
        
      /** alertReason */
      alertReason?: Array<string>;
      /** alertType */
      alertType?: Array<string>;
      /** alertStatus */
      alertStatus?: Array<string>;
      /** alertSentTo */
      alertSentTo?: Array<string>;
      /** creators */
      creators?: Array<string>;
      /** dateList */
      dateList?: Array<string>;
      /** nodeName */
      nodeName?: string;
      /** projectId */
      projectId?: number;
      /** currPage */
      currPage?: number;
      /** limit */
      limit?: number;
      /** tenantId */
      tenantId?: number;
      }
    

      export type Response = Array<defs.QsmdCustomAlert>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.QsmdCustomAlert>>;
    
      }
    

      /**
        * 修改自定义报警
        * /qsmd/api/customAlert/{id}
        */
      export namespace putCustomAlertById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.QsmdCustomAlertInfo): Promise<>;
    
      }
    

      /**
        * 删除自定义报警
        * /qsmd/api/customAlert/{id}
        */
      export namespace deleteCustomAlertById {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 开关自定义报警
        * /qsmd/api/customAlert/{id}/switch
        */
      export namespace putCustomAlertByIdSwitch {
        
      export 
      class Params {
        
      /** id */
      id: number;
      /** alertSwitch */
      alertSwitch: boolean;
      /** projectId */
      projectId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * task [任务相关接口]
           */
          export namespace qsmdTask {
            
      /**
        * 任务搜索
        * /qsmd/api/task/search
        */
      export namespace getTaskSearch {
        
      export 
      class Params {
        
      /** taskName */
      taskName?: string;
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.QsmdNodeInfo>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.QsmdNodeInfo>>;
    
      }
    

      /**
        * 用户查询
        * /qsmd/api/user/list
        */
      export namespace getUserList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.QsmdUser>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.QsmdUser>>;
    
      }
    
          }
        


          /**
           * [后端:程素、莫萱;前端:北渔] DIP数据地图推荐相关API
           */
          export namespace recommend {
            
      /**
        * 获取推荐列表
        * /api/dip/recommend/list
        */
      export namespace getList {
        
      export 
      class Params {
        
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      }
    

      export type Response = defs.PagedData<defs.RecommendTableBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.RecommendTableBO>>;
    
      }
    
          }
        


          /**
           * [服务端:扶犁;前端:五灵]-SQL编辑器API
           */
          export namespace sqlEditor {
            
      /**
        * SQL自动完成提示
        * /api/editor/assist/entities
        */
      export namespace getAssistEntities {
        
      export 
      class Params {
        
      /** 当前项目 */
      projectId?: number;
      /** 用户输入 */
      keyword?: string;
      /** 实体类型 */
      entityType?: string;
      /** 上一级实体的类型 */
      parentEntityType?: string;
      /** 上一级实体的id */
      parentEntityId?: string;
      /** 编辑器环境，design|online，design环境下提示未发布元数据，默认为online */
      envirenment?: string;
      /** 当前编辑的表名 */
      designtable?: string;
      }
    

      export type Response = Array<defs.EntityDO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.EntityDO>>;
    
      }
    

      /**
        * 预编译SQL脚本
        * /api/editor/precompile
        */
      export namespace postPrecompile {
        
      export 
      class Params {
        
      /** 项目ID */
      projectId: number;
      /** 选中代码的起始行号 */
      selRowStart?: string;
      /** 选中代码的起始列号 */
      selColStart?: string;
      }
    

      export type Response = defs.PreCompileBO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.TempTaskRequestDTO): Promise<defs.PreCompileBO>;
    
      }
    

      /**
        * 校验SQL代码
        * /api/editor/validate
        */
      export namespace postValidate {
        
      export 
      class Params {
        
      /** 项目ID */
      projectId: number;
      /** 校验规则 */
      rule: string;
      }
    

      export type Response = defs.CodeValidateBO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.CodeBO): Promise<defs.CodeValidateBO>;
    
      }
    
          }
        


          /**
           * [后端:天大;前端:琳峰，北渔]统计周期相关API
           */
          export namespace statPeriod {
            
      /**
        * 新建统计周期
        * /api/statPeriod
        */
      export namespace postStatPeriod {
        
      export 
      class Params {
        
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.TimePeriodBO): Promise<>;
    
      }
    

      /**
        * 获取统计周期列表
        * /api/statPeriod/allList
        */
      export namespace getStatPeriodAllList {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.TimePeriodBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TimePeriodBO>>;
    
      }
    

      /**
        * 获取bizdate函数列表
        * /api/statPeriod/bizDateFunction
        */
      export namespace getStatPeriodBizDateFunction {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.BizDateFunctionBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BizDateFunctionBO>>;
    
      }
    

      /**
        * 更新统计周期
        * /api/statPeriod/{statPeriodId}
        */
      export namespace putStatPeriodByStatPeriodId {
        
      export 
      class Params {
        
      /** statPeriodId */
      statPeriodId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.TimePeriodBO): Promise<>;
    
      }
    

      /**
        * 删除统计周期
        * /api/statPeriod/{statPeriodId}
        */
      export namespace deleteStatPeriodByStatPeriodId {
        
      export 
      class Params {
        
      /** statPeriodId */
      statPeriodId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:陈均;前端:双扬] 汇总逻辑表相关API
           */
          export namespace summaryTable {
            
      /**
        * 获取汇总逻辑表List
        * /api/model/sumTable
        */
      export namespace getSumTable {
        
      export 
      class Params {
        
      /** 业务板块ID */
      bizUnitId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = Array<defs.SummaryTableProfileBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.SummaryTableProfileBO>>;
    
      }
    

      /**
        * 保存(增加或者修改)汇总逻辑表
        * /api/model/sumTable
        */
      export namespace postSumTable {
        
      export 
      class Params {
        
      /** 项目Id */
      projectId: number;
      /** lock */
      lock?: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.SummaryTableBO): Promise<number>;
    
      }
    

      /**
        * 获取业务板块下汇总逻辑表的分类
        * /api/model/sumTable/catalog
        */
      export namespace getSumTableCatalog {
        
      export 
      class Params {
        
      /** 业务板块ID */
      bizUnitId: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = Array<defs.SummaryTableCatalogBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.SummaryTableCatalogBO>>;
    
      }
    

      /**
        * 添加汇总逻辑表的分类
        * /api/model/sumTable/catalog
        */
      export namespace postSumTableCatalog {
        
      export 
      class Params {
        
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.SummaryTableCatalogBO): Promise<boolean>;
    
      }
    

      /**
        * 删除分类
        * /api/model/sumTable/catalog
        */
      export namespace deleteSumTableCatalog {
        
      export 
      class Params {
        
      /** 分类id */
      catalogId?: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 获取汇总逻辑表ID
        * /api/model/sumTable/sumTableId
        */
      export namespace getSumTableSumTableId {
        
      export 
      class Params {
        
      /** 业务板块ID */
      bizUnitId: number;
      /** 维度ID列表 */
      dimId?: Array<integer>;
      /** projectId */
      projectId: number;
      }
    

      export type Response = number;
      export const init: Response;
      export function request(params: Params): Promise<number>;
    
      }
    

      /**
        * 获取汇总逻辑表
        * /api/model/sumTable/{summaryTableId}
        */
      export namespace getSumTableBySummaryTableId {
        
      export 
      class Params {
        
      /** 汇总逻辑表ID */
      summaryTableId: number;
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.SummaryTableBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.SummaryTableBO>;
    
      }
    

      /**
        * 删除汇总逻辑表
        * /api/model/sumTable/{summaryTableId}
        */
      export namespace deleteSumTableBySummaryTableId {
        
      export 
      class Params {
        
      /** 汇总逻辑表ID */
      summaryTableId?: number;
      /** 汇总逻辑表名 */
      name: string;
      /** projectId */
      projectId: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:翠翠/成至(逻辑表调度配置);前端:双扬/齐阳(逻辑表调度配置)]逻辑表相关API
           */
          export namespace table {
            
      /**
        * 根据逻辑表名称 搜索对应的逻辑表
        * /api/model/table
        */
      export namespace getTable {
        
      export 
      class Params {
        
      /** 数据域id */
      dataDomain: number;
      /** 关键词 */
      keyword: string;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = Array<defs.BaseBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.BaseBO>>;
    
      }
    

      /**
        * 根据逻辑表type和id获取逻辑表表名
        * /api/model/table/model/name
        */
      export namespace getTableModelName {
        
      export 
      class Params {
        
      /** 表类型 */
      tableType: number;
      /** 表id */
      tableId: number;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 获取逻辑表相关的详情
        * /api/model/table/queryTableDetail
        */
      export namespace getTableQueryTableDetail {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 表ID */
      tableId: number;
      /** 表类型type */
      tableTypeId: number;
      }
    

      export type Response = defs.SingleModelBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.SingleModelBO>;
    
      }
    

      /**
        * 解析逻辑表的调度配置, 并给出调度配置有问题的提示
        * /api/model/table/{modelId}/checkParseIssue
        */
      export namespace postTableByModelIdCheckParseIssue {
        
      export 
      class Params {
        
      /** 逻辑表模型id */
      modelId: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = defs.LogicalTableParseIssueDTO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicalTableScheduleConfigDTO): Promise<defs.LogicalTableParseIssueDTO>;
    
      }
    

      /**
        * 解析逻辑表的调度配置参数, 就是basicInfo中的参数
        * /api/model/table/{modelId}/checkScheduleConfigParams
        */
      export namespace postTableByModelIdCheckScheduleConfigParams {
        
      export 
      class Params {
        
      /** 逻辑表模型id */
      modelId: number;
      /** 项目Id */
      projectId: number;
      /** 逻辑表调度配置的参数 */
      configParams: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 解析逻辑表的输入输出
        * /api/model/table/{modelId}/parseInputOutput
        */
      export namespace postTableByModelIdParseInputOutput {
        
      export 
      class Params {
        
      /** 逻辑表模型id */
      modelId: number;
      /** 项目Id */
      projectId: number;
      }
    

      export type Response = defs.LogicalTableInputOutputDTO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicalTableInputOutputDTO>;
    
      }
    

      /**
        * 获取逻辑表的调度配置
        * /api/model/table/{modelId}/scheduleConfig
        */
      export namespace getTableByModelIdScheduleConfig {
        
      export 
      class Params {
        
      /** 逻辑表模型id */
      modelId: number;
      /** 项目Id */
      projectId: number;
      /** 逻辑表类型:TableTypeEnum */
      tableType: number;
      }
    

      export type Response = defs.LogicalTableScheduleConfigDTO;
      export const init: Response;
      export function request(params: Params): Promise<defs.LogicalTableScheduleConfigDTO>;
    
      }
    

      /**
        * 保存逻辑表的调度配置, 会先检测调度配置的正确性, 如果不正确会抛出异常提示错误原因
        * /api/model/table/{modelId}/scheduleConfig
        */
      export namespace postTableByModelIdScheduleConfig {
        
      export 
      class Params {
        
      /** 逻辑表模型id */
      modelId: number;
      /** 项目Id */
      projectId: number;
      /** 逻辑表类型:TableTypeEnum */
      tableType: number;
      }
    

      export type Response = defs.LogicalTableParseIssueDTO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicalTableScheduleConfigDTO): Promise<defs.LogicalTableParseIssueDTO>;
    
      }
    

      /**
        * 强制保存逻辑表的调度配置, 不检测调度配置直接保存
        * /api/model/table/{modelId}/scheduleConfig/force
        */
      export namespace postTableByModelIdScheduleConfigForce {
        
      export 
      class Params {
        
      /** 逻辑表模型id */
      modelId: number;
      /** 项目Id */
      projectId: number;
      /** 逻辑表类型:TableTypeEnum */
      tableType: number;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.LogicalTableScheduleConfigDTO): Promise<>;
    
      }
    
          }
        


          /**
           * [后端:莫萱;前端:琳峰]表详情页相关API
           */
          export namespace tableDetail {
            
      /**
        * 获取表描述详情信息
        * /api/dip/detail/getDetail
        */
      export namespace getGetDetail {
        
      export 
      class Params {
        
      /** 表id */
      id: string;
      /** 查询表类型 */
      tableType: number;
      }
    

      export type Response = defs.TableDetailBO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TableDetailBO>;
    
      }
    
          }
        


          /**
           * [后端:天大，莫萱;前端:晟朗]运维中心—任务相关API
           */
          export namespace task {
            
      /**
        * [公共]获取节点状态的列表
        * /api/smc/project/task/statusCode/list
        */
      export namespace getTaskStatusCodeList {
        
      export 
      class Params {
        
      }
    

      export type Response = object;
      export const init: Response;
      export function request(params: Params): Promise<object>;
    
      }
    

      /**
        * 获取任务统计信息
        * /api/smc/project/tasks/statistic
        */
      export namespace getTasksStatistic {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.TaskStatisticVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.TaskStatisticVO>;
    
      }
    

      /**
        * 根据手工节点id获取其所有task列表
        * /api/smc/project/{projectId}/node/{nodeId}/taskList
        */
      export namespace getByProjectIdNodeByNodeIdTaskList {
        
      export 
      class Params {
        
      /** 项目id */
      projectId: number;
      /** 手工节点id */
      nodeId: string;
      }
    

      export type Response = Array<object>;
      export const init: Response;
      export function request(params: Params): Promise<Array<object>>;
    
      }
    

      /**
        * 获取临时查询的日志
        * /api/smc/project/{projectId}/query/{queryId}/index/{index}/log
        */
      export namespace getByProjectIdQueryByQueryIdIndexByIndexLog {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** queryId */
      queryId: string;
      /** index */
      index: number;
      /** 偏移量 */
      offset: number;
      }
    

      export type Response = defs.QueryLogVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.QueryLogVO>;
    
      }
    

      /**
        * 获取临时查询的结果
        * /api/smc/project/{projectId}/query/{queryId}/index/{index}/result
        */
      export namespace getByProjectIdQueryByQueryIdIndexByIndexResult {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** queryId */
      queryId: string;
      /** index */
      index: number;
      }
    

      export type Response = defs.QueryResultVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.QueryResultVO>;
    
      }
    

      /**
        * 中止临时查询
        * /api/smc/project/{projectId}/query/{queryId}/kill
        */
      export namespace postByProjectIdQueryByQueryIdKill {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** queryId */
      queryId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 根据任务id列表查询任务详情
        * /api/smc/project/{projectId}/tasks/batch
        */
      export namespace getByProjectIdTasksBatch {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id列表 */
      taskIds: Array<string>;
      }
    

      export type Response = Array<defs.TaskEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TaskEntity>>;
    
      }
    

      /**
        * 周期实例列表及搜索
        * /api/smc/project/{projectId}/tasks/list
        */
      export namespace getByProjectIdTasksList {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 搜索文本 */
      searchText?: string;
      /** 业务日期 */
      bizDate?: string;
      /** 每页大小 */
      pageSize?: number;
      /** 页数 */
      pageNum?: number;
      /** 归属范围,逗号隔开userId */
      userIds?: string;
      /** 状态集合，code逗号隔开 */
      statusCodes?: string;
      /** 实例类型(1:正常，2：补数据，3：手动) */
      dagrunType?: number;
      /** 实例来源(黑盒:onedata3-server|IDE:onedata-ide) */
      nodeFroms?: Array<string>;
      /** dagrunId(搜索补数据实例需要) */
      dagrunId?: string;
      /** 运行日期 */
      runDate?: string;
      /** 任务类型【operator类型】 */
      operatorTypes?: string;
      }
    

      export type Response = defs.PaginatedResult<defs.TaskEntity>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PaginatedResult<defs.TaskEntity>>;
    
      }
    

      /**
        * 提交一个临时任务
        * /api/smc/project/{projectId}/tasks/submit
        */
      export namespace postByProjectIdTasksSubmit {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      }
    

      export type Response = defs.QueryVO;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.TempTaskRequestDTO): Promise<defs.QueryVO>;
    
      }
    

      /**
        * 根据任务id查询任务详情
        * /api/smc/project/{projectId}/tasks/{taskId}
        */
      export namespace getByProjectIdTasksByTaskId {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = defs.TaskEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.TaskEntity>;
    
      }
    

      /**
        * 查找任务特定版本的代码
        * /api/smc/project/{projectId}/tasks/{taskId}/codeContent
        */
      export namespace getByProjectIdTasksByTaskIdCodeContent {
        
      export 
      class Params {
        
      /** projectId */
      projectId?: number;
      /** taskId */
      taskId?: string;
      /** 版本 */
      version?: number;
      }
    

      export type Response = defs.NodeContentEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.NodeContentEntity>;
    
      }
    

      /**
        * 获取任务代码
        * /api/smc/project/{projectId}/tasks/{taskId}/content
        */
      export namespace getByProjectIdTasksByTaskIdContent {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = defs.TaskContentEntity;
      export const init: Response;
      export function request(params: Params): Promise<defs.TaskContentEntity>;
    
      }
    

      /**
        * 下载任务结果
        * /api/smc/project/{projectId}/tasks/{taskId}/data
        */
      export namespace getByProjectIdTasksByTaskIdData {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params): Promise<>;
    
      }
    

      /**
        * 根据任务id查询其下游任务
        * /api/smc/project/{projectId}/tasks/{taskId}/downstream
        */
      export namespace getByProjectIdTasksByTaskIdDownstream {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 层数, 最大30 */
      depth: number;
      }
    

      export type Response = Array<defs.TaskEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TaskEntity>>;
    
      }
    

      /**
        * 重跑下游任务
        * /api/smc/project/{projectId}/tasks/{taskId}/fixData
        */
      export namespace postByProjectIdTasksByTaskIdFixData {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId: string;
      /** 是否包含根节点 */
      withRootTask: boolean;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.FixDataRequestDto): Promise<boolean>;
    
      }
    

      /**
        * 中止任务
        * /api/smc/project/{projectId}/tasks/{taskId}/kill
        */
      export namespace postByProjectIdTasksByTaskIdKill {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId?: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取任务运行日志
        * /api/smc/project/{projectId}/tasks/{taskId}/log
        */
      export namespace getByProjectIdTasksByTaskIdLog {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 偏移量 */
      offset: number;
      }
    

      export type Response = defs.TaskrunLog;
      export const init: Response;
      export function request(params: Params): Promise<defs.TaskrunLog>;
    
      }
    

      /**
        * 暂停任务调度
        * /api/smc/project/{projectId}/tasks/{taskId}/pause
        */
      export namespace postByProjectIdTasksByTaskIdPause {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点名 */
      nodeName: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 去除上游依赖
        * /api/smc/project/{projectId}/tasks/{taskId}/removeUpstreamLinks
        */
      export namespace postByProjectIdTasksByTaskIdRemoveUpstreamLinks {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId: string;
      /** 节点名 */
      nodeName: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 重跑任务
        * /api/smc/project/{projectId}/tasks/{taskId}/rerun
        */
      export namespace postByProjectIdTasksByTaskIdRerun {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId: string;
      /** 节点名 */
      nodeName: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 强制重跑
        * /api/smc/project/{projectId}/tasks/{taskId}/rerunForcibly
        */
      export namespace postByProjectIdTasksByTaskIdRerunForcibly {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取任务执行结果
        * /api/smc/project/{projectId}/tasks/{taskId}/result
        */
      export namespace getByProjectIdTasksByTaskIdResult {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 恢复任务调度
        * /api/smc/project/{projectId}/tasks/{taskId}/resume
        */
      export namespace postByProjectIdTasksByTaskIdResume {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 手动置成功
        * /api/smc/project/{projectId}/tasks/{taskId}/setSuccess
        */
      export namespace postByProjectIdTasksByTaskIdSetSuccess {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取任务执行日志
        * /api/smc/project/{projectId}/tasks/{taskId}/taskrun/{taskrunId}/taskrunLog
        */
      export namespace getByProjectIdTasksByTaskIdTaskrunByTaskrunIdTaskrunLog {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** taskrunId */
      taskrunId: string;
      }
    

      export type Response = string;
      export const init: Response;
      export function request(params: Params): Promise<string>;
    
      }
    

      /**
        * 获取任务执行实例
        * /api/smc/project/{projectId}/tasks/{taskId}/taskruns
        */
      export namespace getByProjectIdTasksByTaskIdTaskruns {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = Array<object>;
      export const init: Response;
      export function request(params: Params): Promise<Array<object>>;
    
      }
    

      /**
        * 行列转换
        * /api/smc/project/{projectId}/tasks/{taskId}/transposedData
        */
      export namespace getByProjectIdTasksByTaskIdTransposedData {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      }
    

      export type Response = Array<object>;
      export const init: Response;
      export function request(params: Params): Promise<Array<object>>;
    
      }
    

      /**
        * 修改任务优先级
        * /api/smc/project/{projectId}/tasks/{taskId}/updatePriority
        */
      export namespace postByProjectIdTasksByTaskIdUpdatePriority {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 节点id */
      nodeId: string;
      /** 任务优先级 */
      taskPriority: number;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 根据任务id查询其上游任务
        * /api/smc/project/{projectId}/tasks/{taskId}/upstream
        */
      export namespace getByProjectIdTasksByTaskIdUpstream {
        
      export 
      class Params {
        
      /** projectId */
      projectId: number;
      /** 任务id */
      taskId: string;
      /** 层数, 最大30 */
      depth: number;
      }
    

      export type Response = Array<defs.TaskEntity>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.TaskEntity>>;
    
      }
    
          }
        


          /**
           * [驯致, 九宫]-租户管理接口API
           */
          export namespace tenant {
            
      /**
        * 获取当前租户底层的账号源信息
        * /api/tenant/accountSource
        */
      export namespace getAccountSource {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.AccountSourceId;
      export const init: Response;
      export function request(params: Params): Promise<defs.AccountSourceId>;
    
      }
    

      /**
        * 手工同步当前租户底层的账号源
        * /api/tenant/accountSource/syncing
        */
      export namespace putAccountSourceSyncing {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 删除成员
        * /api/tenant/member
        */
      export namespace deleteMember {
        
      export 
      class Params {
        
      /** userId */
      userId: string;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取已加入租户的用户列表
        * /api/tenant/members
        */
      export namespace getMembers {
        
      export 
      class Params {
        
      /** fuzzyName */
      fuzzyName?: string;
      /** page */
      page: number;
      /** pageSize */
      pageSize: number;
      /** 排序的列，不为空时只能为account_name->账号名，gmt_create->创建的时间 */
      orderColumn?: string;
      /** 排序的方向，不为空时只能为desc->降序，asc->升序 */
      orderDirection?: string;
      }
    

      export type Response = defs.PagedData<defs.UserVO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.UserVO>>;
    
      }
    

      /**
        * 批量添加成员
        * /api/tenant/members
        */
      export namespace postMembers {
        
      export 
      class Params {
        
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 批量删除成员
        * /api/tenant/members
        */
      export namespace deleteMembers {
        
      export 
      class Params {
        
      /** userIds */
      userIds: Array<string>;
      }
    

      export type Response = boolean;
      export const init: Response;
      export function request(params: Params): Promise<boolean>;
    
      }
    

      /**
        * 获取租户的用户列表
        * /api/tenant/user/list
        */
      export namespace getUserList {
        
      export 
      class Params {
        
      /** 租户id,已废弃 */
      tenantId?: number;
      /** 排除项目成员 */
      excludeProject?: number;
      /** 关键字 */
      keyword?: string;
      }
    

      export type Response = Array<defs.UserVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.UserVO>>;
    
      }
    

      /**
        * 获取可加入租户的用户列表
        * /api/tenant/users
        */
      export namespace getUsers {
        
      export 
      class Params {
        
      }
    

      export type Response = Array<defs.UserVO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.UserVO>>;
    
      }
    
          }
        


          /**
           * [驯致, 九宫]-租户下用户管理接口API
           */
          export namespace user {
            
      /**
        * 获取某个用户的所属角色列表
        * /api/role/list
        */
      export namespace getRoleList {
        
      export 
      class Params {
        
      /** 用户id */
      userId?: string;
      /** 用户所属租户id */
      tenantId?: number;
      }
    

      export type Response = Array<defs.RoleBO>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.RoleBO>>;
    
      }
    

      /**
        * 获取当前用户信息
        * /api/userInfo
        */
      export namespace getUserInfo {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.UserInfoVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.UserInfoVO>;
    
      }
    

      /**
        * 获取当前用户初始化信息
        * /api/userInfo/all
        */
      export namespace getUserInfoAll {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.UserDetailInfoVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.UserDetailInfoVO>;
    
      }
    

      /**
        * 获取当前用户项目角色信息
        * /api/userRoleInfo
        */
      export namespace getUserRoleInfo {
        
      export 
      class Params {
        
      }
    

      export type Response = defs.UserRoleInfoVO;
      export const init: Response;
      export function request(params: Params): Promise<defs.UserRoleInfoVO>;
    
      }
    
          }
        


          /**
           * [后端:程素、莫萱;前端:北渔] DIP数据地图访问历史相关API
           */
          export namespace visitHistory {
            
      /**
        * 用户访问行为记录
        * /api/dip/visit
        */
      export namespace postVisit {
        
      export 
      class Params {
        
      }
    

      export type Response = ;
      export const init: Response;
      export function request(params: Params, bodyParams: defs.VisitParam): Promise<>;
    
      }
    

      /**
        * 获取用户最近访问列表（数据地图-我的浏览）
        * /api/dip/visit/history/list
        */
      export namespace getVisitHistoryList {
        
      export 
      class Params {
        
      /** page */
      page?: number;
      /** offset */
      offset?: number;
      /** pageSize */
      pageSize?: number;
      /** doNotCount */
      doNotCount?: boolean;
      }
    

      export type Response = defs.PagedData<defs.VisitHistoryBO>;
      export const init: Response;
      export function request(params: Params): Promise<defs.PagedData<defs.VisitHistoryBO>>;
    
      }
    
          }
        
      }
    
      };
      
    