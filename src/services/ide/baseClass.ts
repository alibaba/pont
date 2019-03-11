
        
        class AccountSourceId {
          
      /** inheritable */
      inheritable = false
      

      /** name */
      name = ''
      

      /** pushable */
      pushable = false
      

      /** syncable */
      syncable = false
      
        }
      

        class AddResourceDTO {
          
      /** content */
      content = ''
      

      /** contentType */
      contentType = ''
      

      /** description */
      description = ''
      

      /** dirName */
      dirName = ''
      

      /** name */
      name = ''
      

      /** size */
      size = undefined
      
        }
      

        class ApplyDTO {
          
      /** 账号类型 */
      accountType = undefined
      

      /** 申请内容 */
      content = ''
      

      /** 权限实体 */
      entities = []
      

      /** 资源类型 */
      entityType = undefined
      

      /** 结束时间 */
      gmtEnd = ''
      

      /** 开始时间 */
      gmtStart = ''
      

      /** 权限类型 - 查询、开发 */
      operationTypes = []
      

      /** 项目id或业务板块id */
      projectId = undefined
      

      /** 项目名称 */
      projectName = ''
      

      /** 申请理由 */
      reason = ''
      

      /** 资源中文名 */
      resourceCn = ''
      

      /** 资源描述 */
      resourceDes = ''
      

      /** 资源id */
      resourceId = ''
      

      /** 逻辑表类型 */
      tableType = undefined
      
        }
      

        class ApproveBO {
          
      /** accountType */
      accountType = undefined
      

      /** applicant */
      applicant = ''
      

      /** applyId */
      applyId = undefined
      

      /** approveId */
      approveId = undefined
      

      /** approveReason */
      approveReason = ''
      

      /** approver */
      approver = ''
      

      /** content */
      content = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** operationTypes */
      operationTypes = []
      

      /** permissionApproveStatus */
      permissionApproveStatus = ''1''
      

      /** permissionEnd */
      permissionEnd = ''
      

      /** permissionStart */
      permissionStart = ''
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** reason */
      reason = ''
      

      /** resourceId */
      resourceId = undefined
      

      /** resourceName */
      resourceName = ''
      

      /** resourceType */
      resourceType = ''1''
      
        }
      

        class ApproveDetailBO {
          
      /** accountType */
      accountType = undefined
      

      /** applicant */
      applicant = ''
      

      /** applyId */
      applyId = undefined
      

      /** approveId */
      approveId = undefined
      

      /** approveReason */
      approveReason = ''
      

      /** approver */
      approver = ''
      

      /** content */
      content = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** modelAttributes */
      modelAttributes = undefined
      

      /** operationTypes */
      operationTypes = []
      

      /** permissionApproveStatus */
      permissionApproveStatus = ''1''
      

      /** permissionEnd */
      permissionEnd = ''
      

      /** permissionStart */
      permissionStart = ''
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** reason */
      reason = ''
      

      /** resourceId */
      resourceId = undefined
      

      /** resourceName */
      resourceName = ''
      

      /** resourceType */
      resourceType = ''1''
      

      /** tableType */
      tableType = ''-1''
      
        }
      

        class AtomicIndexAddBO {
          
      /** atomicIndex */
      atomicIndex = new defs.AtomicIndexBO()
      

      /** 模型选择路径，用户选择切换模型的顺序，给model name */
      modelSelectedPath = []
      

      /** projectId */
      projectId = undefined
      

      /** 是否顺带发布 */
      withPublish = false
      
        }
      

        class AtomicIndexBO {
          
      /** 计算逻辑表达式 */
      atomIndexLogic = ''
      

      /** 业务板块ID */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 数据域 */
      dataDomain = new defs.DataDomainBO()
      

      /** 衍生原子指标数据域列表 */
      dataDomains = []
      

      /** 数据类型 */
      dataType = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 是否支持累加 */
      isAccSum = false
      

      /** isDerived */
      isDerived = false
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 来源模型ID */
      modelId = undefined
      

      /** 模型类型 */
      modelType = ''1''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 如果该指标为衍生原子指标，此处表示他所依赖的原子指标 */
      parentIds = []
      

      /** 所属项目显示名 */
      projectCn = ''
      

      /** 所属project，针对odps为所属project */
      projectId = undefined
      

      /** 所属项目英文名 */
      projectName = ''
      

      /** 原子指标来源路径和属性名 */
      sourcePathAttribute = ''
      

      /** status */
      status = ''0''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 原子指标对应时间周期字段 */
      timeColAttributeId = undefined
      

      /** 原子指标对应时间周期字段的格式 */
      timeColFormat = ''
      

      /** 计算逻辑中使用到的字段名 */
      usedAttributes = []
      

      /** 计算逻辑中使用到的字段（统计路径+字段） */
      usedFields = []
      
        }
      

        class AtomicIndexDetailBO {
          
      /** 选中的模型属性名 */
      attributeName = ''
      

      /** 数据域 */
      dataDomain = new defs.DataDomainBO()
      

      /** 该属性的衍生和非衍生指标 */
      derivedAtomicIndexes = []
      

      /** model */
      model = new defs.SingleModelBO()
      

      /** modelId */
      modelId = undefined
      

      /** modelType */
      modelType = ''1''
      
        }
      

        class AttributeAddBO {
          
      /** 字段类型 */
      attributeType = undefined
      

      /** 属性列表 */
      attributes = []
      

      /** 逻辑表名 */
      factTableName = ''
      

      /** logics */
      logics = ''
      

      /** 是否主键 */
      needPk = false
      
        }
      

        class AttributeBO {
          
      /** 属性数据类型 */
      attributeDataType = ''
      

      /** 默认值 */
      attributeDefaultValue = ''
      

      /** 属性是否分区 */
      attributeIsPartition = false
      

      /** 计算逻辑 */
      attributeLogic = ''
      

      /** 作用域 */
      attributeScope = ''
      

      /** 属性序列 */
      attributeSeq = undefined
      

      /** attributeSqlFromPart */
      attributeSqlFromPart = ''
      

      /** 事实表属性类型，维度（dimension）或度量（measure），@see BizAttributeTypeEnum */
      attributeType = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 维度id */
      dimensionId = undefined
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 是否有下游依赖 */
      hasChildDependence = false
      

      /** 是否有线上版本 */
      hasOnline = false
      

      /** 热度值 */
      hotVal = undefined
      

      /** 对象ID */
      id = undefined
      

      /** 是否外键 */
      isFk = false
      

      /** isNotNull */
      isNotNull = false
      

      /** 是否物理化 */
      isPhysical = false
      

      /** 是否主键 */
      isPk = false
      

      /** isRepeat */
      isRepeat = false
      

      /** isUnique */
      isUnique = false
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** logicTableId */
      logicTableId = undefined
      

      /** 模型id */
      modelId = undefined
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 是否推荐字段 */
      recommend = false
      

      /** 引用维度逻辑表中文名称 */
      refDimCn = ''
      

      /** 引用维度逻辑表英文名称 */
      refDimName = ''
      

      /** 引用维度逻辑表ID */
      refDimensionId = undefined
      

      /** 引用维度 */
      refDimensionIsMaxPt = false
      

      /** 引用维度角色名 */
      refDimensionRole = ''
      

      /** 引用维度角色中文名 */
      refDimensionRoleCn = ''
      

      /** 测试状态 */
      status = undefined
      

      /** 来源表 */
      table = ''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 维度表属性类型，@see DimensionAttributeTypeEnum */
      type = undefined
      
        }
      

        class AttributeBatchDeleteResultBO {
          
      /** 字段Id */
      attributeId = undefined
      

      /** deleteSuccess */
      deleteSuccess = false
      

      /** 错误信息 */
      errorInfo = ''
      
        }
      

        class AuthBaseBO {
          
        }
      

        class BaseBO {
          
      /** 业务板块 */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 事实逻辑表表类型df/di */
      factModelType = undefined
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 表类型 */
      modelType = undefined
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 所属项目 */
      projectId = undefined
      

      /** 发布状态 */
      status = ''0''
      

      /** 表编辑状态 */
      tableEditStatus = undefined
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class BaseDipResult {
          
      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象id */
      id = ''
      

      /** 对象标签列表 */
      labels = []
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 实体类型 */
      tableEntityType = ''1''
      

      /** 对象类型 */
      type = ''-1''
      
        }
      

        class BaseObject {
          
      /** cn */
      cn = ''
      

      /** des */
      des = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** name */
      name = ''
      

      /** owner */
      owner = ''
      

      /** status */
      status = undefined
      
        }
      

        class BasicScheduleConfigInfoDTO {
          
      /** 调度参数配置, 以';'进行分隔, 格式是 A=abc;B=bcd */
      configParameters = ''
      

      /** 描述 */
      description = ''
      

      /** 逻辑表名称 */
      logicalTableName = ''
      

      /** 任务类型 */
      operatorType = ''HIVE_SQL''
      

      /** 前端展示的任务类型 */
      operatorTypeAlias = ''
      
        }
      

        class BatchProjectMemberDTO {
          
      /** 目标用户 ID */
      userId = []
      

      /** 赋予用户的角色 */
      userRoleId = undefined
      
        }
      

        class BizConditionAddBO {
          
      /** bizConditionBO */
      bizConditionBO = new defs.BizConditionBO()
      

      /** 模型选择路径，用户选择切换模型的顺序，给model name */
      modelSelectedPath = []
      

      /** projectId */
      projectId = undefined
      

      /** 是否顺带发布 */
      withPublish = false
      
        }
      

        class BizConditionBO {
          
      /** 计算逻辑表达式 */
      adjunctWordLogic = ''
      

      /** 业务板块ID */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 数据域 */
      dataDomain = new defs.DataDomainBO()
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 来源模型ID */
      modelId = undefined
      

      /** 模型类型 */
      modelType = ''1''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 项目英文名称 */
      projectCn = ''
      

      /** 项目ID */
      projectId = undefined
      

      /** 项目显示称 */
      projectName = ''
      

      /** 业务限定来源路径和属性名 */
      sourcePathAttribute = ''
      

      /** 状态 */
      status = ''0''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 计算逻辑中使用的字段名 */
      usedAttributes = []
      

      /** 计算逻辑中使用到的字段（统计路径+字段） */
      usedFields = []
      
        }
      

        class BizDataDomainBO {
          
      /** 业务板块 */
      bizUnit = new defs.BizUnitBO()
      

      /** 该业务板块下面的数据域集合 */
      domainList = []
      
        }
      

        class BizDateFunctionBO {
          
      /** 描述 */
      description = ''
      

      /** 名称 */
      name = ''
      

      /** 参数列表 */
      params = []
      
        }
      

        class BizGraphBO {
          
      /** 业务过程 */
      bizProcessList = []
      

      /** 普通维度&&杂项维度 */
      dimList = []
      

      /** 数据域 */
      domain = new defs.DataDomainBO()
      

      /** 其他维度 */
      otherDimList = []
      
        }
      

        class BizProcessBO {
          
      /** 归属业务板块 ID */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 所属数据域 ID */
      dataDomainId = undefined
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 业务过程是否被依赖 */
      hasDependcy = false
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 归属项目 ID */
      projectId = undefined
      

      /** 编辑状态 */
      status = undefined
      

      /** 租户ID */
      tenantId = undefined
      

      /** 类型 */
      type = undefined
      
        }
      

        class BizProcessListBO {
          
      /** 归属业务板块 ID */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 所属数据域 ID */
      dataDomainId = undefined
      

      /** 数据域名称 */
      dataDomainName = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 业务过程是否被依赖 */
      hasDependcy = false
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 项目显示名 */
      projectCn = ''
      

      /** 归属项目 ID */
      projectId = undefined
      

      /** 项目英文名 */
      projectName = ''
      

      /** 编辑状态 */
      status = undefined
      

      /** 状态名称 */
      statusName = ''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 类型 */
      type = undefined
      
        }
      

        class BizProcessSimpleInfoBO {
          
      /** 业务过程ID */
      bizProcessId = undefined
      

      /** 业务过程名称 */
      bizProcessName = ''
      

      /** 关联的维度ID列表 */
      refDimIds = []
      
        }
      

        class BizProcessStructureBO {
          
      /** 业务过程列表 */
      bizProcessSimpleInfoBOList = []
      

      /** 维度列表 */
      dimensionSimpleInfoBOList = []
      
        }
      

        class BizUnitBO {
          
      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 包含数据域个数 */
      domainNum = undefined
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 定制icon */
      icon = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class BizUnitGlobalAssetBO {
          
      /** 业务板块ID */
      bizUnitId = undefined
      

      /** 业务板块名称 */
      bizUnitName = ''
      

      /** 业务板块计算消耗[离线数据] */
      calculationConsumption = undefined
      

      /** 业务板块下维度逻辑表数量 */
      dimensionTableCnt = undefined
      

      /** 业务板块下事实逻辑表数量 */
      factTableCnt = undefined
      

      /** 业务板块下项目总数 */
      projectCnt = undefined
      

      /** 业务板块存消耗[离线数据] */
      storage = undefined
      

      /** 业务板块下汇总逻辑表数量 */
      summaryTableCnt = undefined
      

      /** 业务板块下表数量（包括事实逻辑表，维度逻辑表，汇总逻辑表） */
      tableCnt = undefined
      
        }
      

        class Character {
          
        }
      

        class CodeBO {
          
      /** 代码所属对象的业务板块名称 */
      catalog = ''
      

      /** 代码 */
      code = ''
      

      /** 代码所属对象的字段，指标，限定名 */
      field = ''
      

      /** 项目ID */
      projectId = undefined
      

      /** 代码所属对象的来源表catalog，物理表为项目名，逻辑表为业务板块名 */
      sourceCatalog = ''
      

      /** 代码所属对象的主来源字段名 */
      sourceField = ''
      

      /** 代码所属对象的来源表名 */
      sourceTable = ''
      

      /** 代码所属对象的表名 */
      table = ''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 代码类型，默认为SQL */
      type = ''SQL''
      

      /** 用户ID */
      userId = ''
      
        }
      

        class CodeValidateBO {
          
      /** 校验错误代码 */
      errorCode = ''
      

      /** 校验附加结果信息 */
      extraMessage = undefined
      

      /** 校验结果信息 */
      message = ''
      

      /** 校验是否成功 */
      success = false
      
        }
      

        class ColumnBO {
          
      /** 中文名 */
      cn = ''
      

      /** 字段ID */
      columnId = ''
      

      /** 字段中文名称 */
      comment = ''
      

      /** 创建时间 */
      createTime = ''
      

      /** 描述 */
      des = ''
      

      /** 是否外键字段 */
      fk = false
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** guid */
      guid = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 字段英文名称 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 是否分区字段 */
      partition = false
      

      /** partitioned */
      partitioned = false
      

      /** 是否主键字段 */
      pk = false
      

      /** sequence */
      seqNumber = undefined
      

      /** 租户ID */
      tenantId = undefined
      

      /** 字段类型 */
      type = ''
      

      /** 示例值 */
      values = []
      
        }
      

        class ComputeEngineVO {
          
      /** 集群地址，max compute只能配置一个，hadoop可配置多个 */
      clusterUrls = []
      

      /** hostips */
      hostIps = ''
      

      /** 计算引擎类型 */
      type = ''
      

      /** 计算引擎版本 */
      version = ''
      

      /** versionKeyEnumStringMap */
      versionKeyEnumStringMap = undefined
      
        }
      

        class ComputingEngineBO {
          
      /** 集群地址，max compute只能配置一个，hadoop可配置多个 */
      clusterUrls = []
      

      /** displayName */
      displayName = ''
      

      /** hostips */
      hostIps = []
      

      /** 计算引擎类型 */
      type = ''MAX_COMPUTE''
      

      /** 计算引擎版本 */
      version = ''
      
        }
      

        class ConnectivityResult {
          
      /** failedCode */
      failedCode = ''
      

      /** msg */
      msg = ''
      

      /** status */
      status = false
      
        }
      

        class CreateNodeDTO {
          
      /** 类别，此处写死codeManage */
      category = ''
      

      /** 节点描述 */
      description = ''
      

      /** 所在目录位置 */
      dirName = ''
      

      /** id */
      id = undefined
      

      /** 节点名称 */
      name = ''
      

      /** 节点类型 */
      operatorType = undefined
      

      /** 所属projectId */
      projectId = undefined
      

      /** 调度类型 */
      rsType = undefined
      
        }
      

        class Creator {
          
      /** userId */
      userId = ''
      

      /** userName */
      userName = ''
      
        }
      

        class CrossPeriodUpstreamDTO {
          
      /** 关联的字段列表 */
      associatedColumns = []
      

      /** associatedColumnsLowerCase */
      associatedColumnsLowerCase = []
      

      /** 周期差, 恒为正数, 从1开始 */
      periodDiff = undefined
      

      /** 跨周期依赖类型, 自依赖[SELF_DEPEND], 自定义[CUSTOMIZED] */
      type = ''SELF_DEPEND''
      

      /** 上游节点id */
      upstreamNodeId = ''
      
        }
      

        class DataDomainBO {
          
      /** 英文缩写 */
      abbreviation = ''
      

      /** bizUnitId */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class DataDomainDimBO {
          
      /** dims */
      dims = []
      

      /** domain */
      domain = new defs.DataDomainBO()
      
        }
      

        class DataSectionBO {
          
      /** 分布的key值 */
      key = ''
      

      /** key所对应的value */
      value = undefined
      
        }
      

        class DataSourceConfigVO {
          
      /** bindProject */
      bindProject = false
      

      /** bindProjectName */
      bindProjectName = ''
      

      /** clusterHostInfo */
      clusterHostInfo = ''
      

      /** cn */
      cn = ''
      

      /** computeEngineVO */
      computeEngineVO = new defs.ComputeEngineVO()
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** dataSourceTypeEnum */
      dataSourceTypeEnum = ''MAX_COMPUTE''
      

      /** dataSourceUseTypeEnum */
      dataSourceUseTypeEnum = ''COMPUTE_ENGINE''
      

      /** dbName */
      dbName = ''
      

      /** defaultFS */
      defaultFS = ''
      

      /** defaultNameNodePassword */
      defaultNameNodePassword = ''
      

      /** defaultNameNodeUser */
      defaultNameNodeUser = ''
      

      /** des */
      des = ''
      

      /** endPoint */
      endPoint = ''
      

      /** ftpProtocolEnum */
      ftpProtocolEnum = ''FTP''
      

      /** generalKerberosIsOn */
      generalKerberosIsOn = false
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** hadoopNameNodes */
      hadoopNameNodes = []
      

      /** hasKerberosConfigFile */
      hasKerberosConfigFile = false
      

      /** hdfsHostLoginInfo */
      hdfsHostLoginInfo = new defs.HostLoginInfo()
      

      /** hdfsKerberosBO */
      hdfsKerberosBO = new defs.KerberosBO()
      

      /** hdfsUser */
      hdfsUser = ''
      

      /** historyLog */
      historyLog = ''
      

      /** hiveKerberosBO */
      hiveKerberosBO = new defs.KerberosBO()
      

      /** hiveMetaDs */
      hiveMetaDs = {}
      

      /** host */
      host = ''
      

      /** hostMapping */
      hostMapping = ''
      

      /** id */
      id = undefined
      

      /** kdcAddress */
      kdcAddress = ''
      

      /** kerberosConfigFileId */
      kerberosConfigFileId = ''
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** maxComputeProject */
      maxComputeProject = ''
      

      /** name */
      name = ''
      

      /** owner */
      owner = ''
      

      /** ownerName */
      ownerName = ''
      

      /** password */
      password = ''
      

      /** port */
      port = ''
      

      /** schema */
      schema = ''
      

      /** serviceUrl */
      serviceUrl = ''
      

      /** sparkDeployTypeEnum */
      sparkDeployTypeEnum = ''STANDALONE''
      

      /** sparkHostLoginInfo */
      sparkHostLoginInfo = new defs.HostLoginInfo()
      

      /** sparkKerberosBO */
      sparkKerberosBO = new defs.KerberosBO()
      

      /** sparkMaster */
      sparkMaster = ''
      

      /** sparkTaskGenerated */
      sparkTaskGenerated = false
      

      /** sparkTaskSupported */
      sparkTaskSupported = false
      

      /** tenantId */
      tenantId = undefined
      

      /** uploadKerberosConfigFileName */
      uploadKerberosConfigFileName = ''
      

      /** url */
      url = ''
      

      /** user */
      user = ''
      

      /** versionMapping */
      versionMapping = undefined
      

      /** yarnConfDir */
      yarnConfDir = ''
      

      /** yarnHostsMapping */
      yarnHostsMapping = ''
      

      /** yarnNameNodeIp */
      yarnNameNodeIp = ''
      

      /** yarnNameNodePassword */
      yarnNameNodePassword = ''
      

      /** yarnNameNodeUser */
      yarnNameNodeUser = ''
      
        }
      

        class DataSourceSaveResultVO {
          
      /** akIsOwner */
      akIsOwner = false
      

      /** dataSourceTypeEnum */
      dataSourceTypeEnum = ''MAX_COMPUTE''
      

      /** dsId */
      dsId = undefined
      

      /** warningMessage */
      warningMessage = ''
      
        }
      

        class DatasourceAccessInfoBO {
          
      /** 数据源接入进度,百分制[0-100][离线数据] */
      accessProcess = undefined
      

      /** 数据源唯一ID */
      dsGuid = ''
      

      /** 数据源名称 */
      name = ''
      
        }
      

        class DataxColumnVO {
          
      /** 格式 */
      format = ''
      

      /** 字段序号 */
      index = undefined
      

      /** 字段名 */
      name = ''
      

      /** 字段类型 */
      type = ''
      

      /** 字段值 */
      value = ''
      
        }
      

        class DataxPluginVO {
          
      /** columnList */
      columnList = []
      

      /** columns */
      columns = []
      

      /** compress */
      compress = ''
      

      /** dateFormat */
      dateFormat = ''
      

      /** dsId */
      dsId = undefined
      

      /** encoding */
      encoding = ''
      

      /** fieldDelimiter */
      fieldDelimiter = ''
      

      /** fileFormat */
      fileFormat = ''
      

      /** fileName */
      fileName = ''
      

      /** fileType */
      fileType = ''
      

      /** multiTable */
      multiTable = false
      

      /** parquetSchema */
      parquetSchema = ''
      

      /** partition */
      partition = ''
      

      /** path */
      path = ''
      

      /** pkgAuthProject */
      pkgAuthProject = ''
      

      /** postSql */
      postSql = ''
      

      /** preSql */
      preSql = ''
      

      /** project */
      project = ''
      

      /** querySql */
      querySql = ''
      

      /** session */
      session = ''
      

      /** skipHeader */
      skipHeader = false
      

      /** sourceConfig */
      sourceConfig = ''
      

      /** splitMode */
      splitMode = ''
      

      /** splitPk */
      splitPk = ''
      

      /** tableName */
      tableName = ''
      

      /** truncate */
      truncate = false
      

      /** type */
      type = ''
      

      /** writeMode */
      writeMode = ''
      
        }
      

        class DataxSettingVO {
          
      /** bytes */
      bytes = undefined
      

      /** channel */
      channel = undefined
      

      /** jvmOpts */
      jvmOpts = ''
      

      /** percentage */
      percentage = undefined
      

      /** record */
      record = undefined
      
        }
      

        class DependenceBO {
          
      /** 业务板块ID */
      bizUnitId = undefined
      

      /** 依赖该对象的子对象列表 */
      childDependencies = []
      

      /** 对象中文名 */
      cn = ''
      

      /** 对象描述 */
      des = ''
      

      /** hasChildDependence */
      hasChildDependence = false
      

      /** 对象id */
      id = undefined
      

      /** 对象英文名 */
      name = ''
      

      /** 项目ID */
      projectId = undefined
      

      /** 对象类型 */
      type = ''-1''
      
        }
      

        class DerivedIndexAddBO {
          
      /** derivedIndexes */
      derivedIndexes = []
      

      /** projectId */
      projectId = undefined
      

      /** 是否顺带发布 */
      withPublish = false
      
        }
      

        class DerivedIndexBO {
          
      /** 中文名 */
      cn = ''
      

      /** 数据类型 */
      dataType = ''
      

      /** 描述 */
      des = ''
      

      /** dimIds */
      dimIds = []
      

      /** 粒度所包含的维度 */
      dimensions = []
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 所属粒度 */
      granularityId = undefined
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 派生指标计算逻辑表达式 */
      logic = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** parentAtomicIndex */
      parentAtomicIndex = new defs.DerivedIndexParentBO()
      

      /** parentAtomicIndexId */
      parentAtomicIndexId = undefined
      

      /** parentAtomicIndexes */
      parentAtomicIndexes = []
      

      /** parentBizConditionId */
      parentBizConditionId = undefined
      

      /** 所属project */
      project = new defs.BaseBO()
      

      /** 所属时间周期 */
      statPeriod = new defs.TimePeriodBO()
      

      /** statPeriodId */
      statPeriodId = undefined
      

      /** status */
      status = ''0''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class DerivedIndexDimPathBO {
          
      /** 维度中文名 */
      dimCn = ''
      

      /** 维度ID */
      dimId = undefined
      

      /** 维度名称 */
      dimName = ''
      

      /** 统计路径，如Fact_itm.DIM_seller.DIM_cate */
      path = ''
      
        }
      

        class DerivedIndexDimPathOptionBO {
          
      /** dimCn */
      dimCn = ''
      

      /** dimId */
      dimId = undefined
      

      /** dimName */
      dimName = ''
      

      /** paths */
      paths = []
      
        }
      

        class DerivedIndexParentBO {
          
      /** 所属原子指标 */
      atomicIndex = new defs.AtomicIndexBO()
      

      /** 业务限定 */
      bizCondition = new defs.BizConditionBO()
      

      /** 统计路径列表 */
      dimPaths = []
      
        }
      

        class DerivedIndexParentOptionsBO {
          
      /** 所属原子指标 */
      atomicIndex = new defs.AtomicIndexBO()
      

      /** 业务限定 */
      bizConditions = []
      

      /** 统计路径列表 */
      dimPaths = []
      
        }
      

        class DerivedIndexUpdateBO {
          
      /** derivedIndex */
      derivedIndex = new defs.DerivedIndexBO()
      

      /** projectId */
      projectId = undefined
      

      /** 是否顺带发布 */
      withPublish = false
      
        }
      

        class DimAddBO {
          
      /** addType */
      addType = ''0''
      

      /** 主维度定义 */
      baseDimension = new defs.DimBO()
      

      /** bizUnitId */
      bizUnitId = undefined
      

      /** 父维度ID */
      parentDimensionId = undefined
      

      /** 项目ID */
      projectId = undefined
      

      /** 是否顺带发布 */
      withPublish = false
      
        }
      

        class DimAttributeBO {
          
      /** attributeList */
      attributeList = []
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class DimBO {
          
      /** 所属业务板块 */
      bizUnitId = undefined
      

      /** 维度组List，针对桥接维度设计 */
      bridgeDims = []
      

      /** 中文名 */
      cn = ''
      

      /** compositePk */
      compositePk = false
      

      /** 所属数据域 */
      dataDomain = new defs.DataDomainBO()
      

      /** 描述 */
      des = ''
      

      /** 归档逻辑 */
      designArchiveLogic = ''
      

      /** 设计阶段创建时间 */
      designGmtCreate = ''
      

      /** 设计阶段修改时间 */
      designGmtModified = ''
      

      /** 是否归档 */
      designIsArchive = false
      

      /** 设计阶段最后一次修改人 */
      designLastModifier = ''
      

      /** 生命周期 */
      designLifecycle = undefined
      

      /** 设计阶段责任人 */
      designOwner = ''
      

      /** 状态 */
      designStatus = ''0''
      

      /** 维度主键英文名，对于组合维度，此字段为空 */
      dimensionPk = ''
      

      /** 维度主键中文名称 */
      dimensionPkCn = ''
      

      /** 维度主键数据类型 */
      dimensionPkDataType = ''
      

      /** 维度主键计算逻辑 */
      dimensionPkLogic = ''
      

      /** 维度主键源表名 */
      dimensionPkSourceTable = ''
      

      /** 维度草稿发布状态 */
      dimensionStatus = ''0''
      

      /** 维度类型 */
      dimensionType = ''1''
      

      /** 枚举维度值列表，针对小维度设计 */
      enumDimensionValueList = []
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** hasParent */
      hasParent = false
      

      /** 对象ID */
      id = undefined
      

      /** isLevel */
      isLevel = false
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 层级模板ID */
      levelConfig = new defs.DimensionLevelConfigDO()
      

      /** 层级维度主维度ID */
      mainDimId = undefined
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 父维度 */
      parentDimension = {}
      

      /** 所属project显示名 */
      projectCn = ''
      

      /** 所属project */
      projectId = undefined
      

      /** 所属project英文名 */
      projectName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class DimGraphBO {
          
      /** 维度节点List */
      dimNodeBOList = []
      

      /** 维度之间的关联关系边list */
      relationLineBOList = []
      
        }
      

        class DimLevelBO {
          
      /** 所属业务板块 */
      bizUnitId = undefined
      

      /** 维度组List，针对桥接维度设计 */
      bridgeDims = []
      

      /** 中文名 */
      cn = ''
      

      /** compositePk */
      compositePk = false
      

      /** 所属数据域 */
      dataDomain = new defs.DataDomainBO()
      

      /** 描述 */
      des = ''
      

      /** 归档逻辑 */
      designArchiveLogic = ''
      

      /** 设计阶段创建时间 */
      designGmtCreate = ''
      

      /** 设计阶段修改时间 */
      designGmtModified = ''
      

      /** 是否归档 */
      designIsArchive = false
      

      /** 设计阶段最后一次修改人 */
      designLastModifier = ''
      

      /** 生命周期 */
      designLifecycle = undefined
      

      /** 设计阶段责任人 */
      designOwner = ''
      

      /** 状态 */
      designStatus = ''0''
      

      /** 维度主键英文名，对于组合维度，此字段为空 */
      dimensionPk = ''
      

      /** 维度主键中文名称 */
      dimensionPkCn = ''
      

      /** 维度主键数据类型 */
      dimensionPkDataType = ''
      

      /** 维度主键计算逻辑 */
      dimensionPkLogic = ''
      

      /** 维度主键源表名 */
      dimensionPkSourceTable = ''
      

      /** 维度草稿发布状态 */
      dimensionStatus = ''0''
      

      /** 维度类型 */
      dimensionType = ''1''
      

      /** 枚举维度值列表，针对小维度设计 */
      enumDimensionValueList = []
      

      /** 属性列表 */
      extendAttributes = []
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** hasParent */
      hasParent = false
      

      /** 对象ID */
      id = undefined
      

      /** "是否叶子节点"属性 */
      isLeafAttribute = new defs.AttributeBO()
      

      /** isLevel */
      isLevel = false
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 叶子属性命名字段 */
      leafNamingAttribute = new defs.AttributeBO()
      

      /** 叶子属性主键 */
      leafPkAttribute = new defs.AttributeBO()
      

      /** level属性 */
      levelAttribute = new defs.AttributeBO()
      

      /** 层级模板ID */
      levelConfig = new defs.DimensionLevelConfigDO()
      

      /** 层级维度主维度ID */
      mainDimId = undefined
      

      /** 英文名 */
      name = ''
      

      /** 命名字段属性 */
      namingAttribute = new defs.AttributeBO()
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 父维度 */
      parentDimension = new defs.DimBO()
      

      /** parentId属性 */
      parentIdAttribute = new defs.AttributeBO()
      

      /** 主键属性 */
      pkAttribute = new defs.AttributeBO()
      

      /** 所属project显示名 */
      projectCn = ''
      

      /** 所属project */
      projectId = undefined
      

      /** 所属project英文名 */
      projectName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class DimNodeBO {
          
      /** 该维度节点的子维度 */
      childrenList = []
      

      /** 维度中文名 */
      cn = ''
      

      /** 维度id */
      id = undefined
      

      /** 维度名称 */
      name = ''
      
        }
      

        class DimRelationBO {
          
      /** 默认属性值 */
      attributeDefaultValue = ''
      

      /** 属性id */
      attributeId = undefined
      

      /** 维度bo */
      dim = new defs.DimBO()
      

      /** 维度id */
      dimId = undefined
      

      /** 是否有依赖 */
      haveDenepency = false
      

      /**  关联维度bo */
      refDim = new defs.DimBO()
      

      /**  引用维度逻辑表ID */
      refDimId = undefined
      

      /**  引用维度逻辑表角色 */
      refDimRole = ''
      

      /**  引用维度逻辑表角色中文名 */
      refDimRoleCn = ''
      
        }
      

        class DimensionLevelConfigDO {
          
      /** childFieldName */
      childFieldName = ''
      

      /** cn */
      cn = ''
      

      /** des */
      des = ''
      

      /** dimensionList */
      dimensionList = []
      

      /** filterCondition */
      filterCondition = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** hasLeaf */
      hasLeaf = false
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** maxLevel */
      maxLevel = undefined
      

      /** midTableName */
      midTableName = ''
      

      /** name */
      name = ''
      

      /** namingFieldCn */
      namingFieldCn = ''
      

      /** namingFieldName */
      namingFieldName = ''
      

      /** owner */
      owner = ''
      

      /** parentFieldName */
      parentFieldName = ''
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** rootCondition */
      rootCondition = ''
      

      /** sourcePk */
      sourcePk = ''
      

      /** sourcePkCn */
      sourcePkCn = ''
      

      /** sourcePkDataType */
      sourcePkDataType = ''
      

      /** sourceTableName */
      sourceTableName = ''
      

      /** status */
      status = undefined
      
        }
      

        class DimensionSimpleInfoBO {
          
      /** 维度类型，1为普通维度 */
      dimTypeEnum = ''0''
      

      /** 维度ID */
      dimensionId = undefined
      

      /** 维度名称 */
      dimensionName = ''
      

      /** 关联的维度ID列表 */
      linkDimIds = []
      

      /** 父维度ID */
      parentDimId = undefined
      
        }
      

        class DipBizProcessBO {
          
      /** 业务过程的id */
      id = undefined
      

      /** 业务过程的名称 */
      name = ''
      

      /** 业务过程的子过程列表 */
      subBizProcesses = []
      
        }
      

        class DipInitLogBO {
          
      /** 状态 */
      dipInitStatusEnum = ''INIT''
      

      /** 是否还有日志产出 */
      hasNextLog = false
      

      /** 日志内容 */
      logContent = ''
      

      /** 根节点ID */
      nodeId = ''
      

      /** 进度 */
      percentage = ''
      

      /** 初始化的逻辑项目ID */
      projectId = undefined
      
        }
      

        class DsCommonBO {
          
      /** bindProject */
      bindProject = false
      

      /** bindProjectId */
      bindProjectId = undefined
      

      /** bindProjectName */
      bindProjectName = ''
      

      /** cn */
      cn = ''
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** dataSourceTypeEnum */
      dataSourceTypeEnum = ''MAX_COMPUTE''
      

      /** dataSourceUseTypeEnum */
      dataSourceUseTypeEnum = ''COMPUTE_ENGINE''
      

      /** des */
      des = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** name */
      name = ''
      

      /** owner */
      owner = ''
      

      /** ownerName */
      ownerName = ''
      

      /** password */
      password = ''
      

      /** tenantId */
      tenantId = undefined
      

      /** user */
      user = ''
      

      /** versionMapping */
      versionMapping = undefined
      
        }
      

        class DsConfig {
          
      /** detailConfig */
      detailConfig = undefined
      

      /** dsId */
      dsId = ''
      
        }
      

        class EntityDO {
          
      /** id */
      id = ''
      

      /** name */
      name = ''
      

      /** nameCn */
      nameCn = ''
      

      /** type */
      type = ''
      
        }
      

        class EntityTimeInfo {
          
      /** createTime */
      createTime = ''
      

      /** entityId */
      entityId = ''
      

      /** lastModifiedTime */
      lastModifiedTime = ''
      
        }
      

        class EntityUserInfo {
          
      /** creator */
      creator = new defs.Creator()
      

      /** entityId */
      entityId = ''
      

      /** modifier */
      modifier = new defs.Modifier()
      

      /** owner */
      owner = new defs.Owner()
      

      /** project */
      project = new defs.ProjectInBrief()
      

      /** tenant */
      tenant = new defs.TenantInBrief()
      
        }
      

        class EnumDimensionValueDO {
          
      /** cn */
      cn = ''
      

      /** des */
      des = ''
      

      /** dimensionId */
      dimensionId = undefined
      

      /** enumDesc */
      enumDesc = ''
      

      /** enumValue */
      enumValue = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** name */
      name = ''
      

      /** owner */
      owner = ''
      

      /** status */
      status = undefined
      
        }
      

        class ExecuteTimeEntity {
          
      /** executeEndTime */
      executeEndTime = ''
      

      /** executeStartTime */
      executeStartTime = ''
      
        }
      

        class FactTableAttributeRefBO {
          
      /** 字段信息 */
      attribute = new defs.AttributeBO()
      

      /** 维度信息 */
      dimRelation = new defs.DimRelationBO()
      

      /** 逻辑表名 */
      factTableName = ''
      
        }
      

        class FactTableBO {
          
      /** 结束条件。针对累积快照模型，结束时间字段（bizTimeColumn）或结束条件必须定义其一 */
      bizEndCondition = ''
      

      /** 业务主表 */
      bizMainTable = ''
      

      /** 业务主表限定条件 */
      bizMainTableCondition = ''
      

      /** 业务主表类型 */
      bizMainTableType = undefined
      

      /** 所属业务过程bo */
      bizProcessBO = new defs.BizProcessBO()
      

      /** 所属业务过程 */
      bizProcessId = undefined
      

      /** 业务时间字段：业务时间字段（对于事务型，请填写事务时间字段；周期快照型，请填写业务起始时间字段；累积快照，请填写业务结束时间字段；字段可以填写业务日期字段） */
      bizTimeColumn = ''
      

      /** 中文名 */
      cn = ''
      

      /** 所属数据域bo */
      dataDomain = new defs.DataDomainBO()
      

      /** dataDomainBO */
      dataDomainBO = new defs.DataDomainBO()
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 业务主表-表name，id，type */
      mainTable = new defs.SourceMainTableBO()
      

      /** 模型对应物理模型配置-生命周期 */
      modelLifecycle = undefined
      

      /** df -> 2  di->1 模型类型：事务型(transaction) or 周期快照型(snapshot) or 累积快照型(accumulating) */
      modelType = undefined
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 事实逻辑表主键字段 */
      pkAttribute = new defs.AttributeBO()
      

      /** 归属project */
      projectId = undefined
      

      /** 事实表编辑状态 */
      tableEditStatus = undefined
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class FavorParam {
          
      /** 对象id */
      modelId = ''
      

      /** 对象类型 */
      modelType = undefined
      
        }
      

        class FileCreateDTO {
          
      /** category */
      category = ''
      

      /** content */
      content = ''
      

      /** dirName */
      dirName = ''
      

      /** name */
      name = ''
      

      /** projectId */
      projectId = undefined
      

      /** type */
      type = ''
      
        }
      

        class FileUpdateDTO {
          
      /** 更新文件内容 */
      content = ''
      

      /** 更新文件描述 */
      desc = ''
      

      /** 更新文件名 */
      name = ''
      
        }
      

        class FilterBO {
          
      /** 描述 */
      des = ''
      

      /** 子过滤器 */
      filterChildren = []
      

      /** 唯一id */
      id = ''
      

      /** 操作 */
      options = []
      
        }
      

        class FilterDTO {
          
      /** 筛选对象列表 */
      filter = ''
      
        }
      

        class FilterOption {
          
      /** 数量 */
      count = undefined
      

      /** 描述 */
      des = ''
      

      /** 详细信息 */
      detail = ''
      

      /** 值 */
      value = ''
      
        }
      

        class FixDataRequestDto {
          
      /** childTaskIds */
      childTaskIds = []
      

      /** excludeTaskIds */
      excludeTaskIds = []
      
        }
      

        class FlowModifyDto {
          
      /** beginBizDate */
      beginBizDate = ''
      

      /** bizDate */
      bizDate = ''
      

      /** checkDepBetweenDays */
      checkDepBetweenDays = false
      

      /** containsDownstreams */
      containsDownstreams = false
      

      /** createTime */
      createTime = ''
      

      /** dagrunIds */
      dagrunIds = []
      

      /** endBizDate */
      endBizDate = ''
      

      /** excludedNodeIds */
      excludedNodeIds = []
      

      /** executeMethod */
      executeMethod = ''CREATE_FLOW''
      

      /** flowId */
      flowId = ''
      

      /** includedNodeIds */
      includedNodeIds = []
      

      /** name */
      name = ''
      

      /** parallel */
      parallel = false
      

      /** parallelism */
      parallelism = undefined
      

      /** projectId */
      projectId = ''
      

      /** rootNodeId */
      rootNodeId = ''
      

      /** tenantId */
      tenantId = ''
      

      /** type */
      type = undefined
      

      /** userId */
      userId = ''
      
        }
      

        class Function {
          
      /** 函数列表 */
      function = undefined
      

      /** 函数的类型 */
      functionType = ''SYSTEM''
      
        }
      

        class GeneratedNodeDTO {
          
      /** 节点输出名称 */
      nodeOutputName = ''
      

      /** 简单的节点信息, 包括节点id, 节点名称, 责任人等信息 */
      simpleNodeInfo = new defs.SimpleNodeInfoDTO()
      
        }
      

        class HadoopNameNodeBO {
          
      /** hadoopNameNodeIp */
      hadoopNameNodeIp = ''
      

      /** hadoopNameNodePassword */
      hadoopNameNodePassword = ''
      

      /** hadoopNameNodePort */
      hadoopNameNodePort = ''
      

      /** hadoopNameNodeUser */
      hadoopNameNodeUser = ''
      
        }
      

        class HostIp {
          
      /** host */
      host = ''
      

      /** ip */
      ip = ''
      
        }
      

        class HostLoginInfo {
          
      /** password */
      password = ''
      

      /** user */
      user = ''
      
        }
      

        class IdeFileBO {
          
      /** category */
      category = undefined
      

      /** content */
      content = ''
      

      /** contentType */
      contentType = ''
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** description */
      description = ''
      

      /** dirName */
      dirName = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** name */
      name = ''
      

      /** projectId */
      projectId = undefined
      

      /** size */
      size = undefined
      
        }
      

        class IdeLogicalTableNodeBO {
          
      /** 逻辑表catalog id */
      catalogId = undefined
      

      /** 逻辑表catalog名称 */
      catalogName = ''
      

      /** 逻辑表catalog类型 */
      catalogType = ''BIZUNIT''
      

      /** 调度物化节点列表 */
      children = []
      

      /** 逻辑表下的物化节点数量 */
      childrenCount = undefined
      

      /** 逻辑表执行开始结束时间 */
      executeTimeEntity = new defs.ExecuteTimeEntity()
      

      /** 逻辑表发布时间 */
      gmtModified = ''
      

      /** 逻辑表ID */
      id = undefined
      

      /** 是否是叶子节点，默认false */
      leaf = false
      

      /** 逻辑表名字 */
      name = ''
      

      /** 逻辑表owner */
      owner = ''
      

      /** 逻辑表类型 */
      type = ''
      
        }
      

        class IdeLogicalTableTaskBO {
          
      /** 逻辑表对应的业务日期 */
      bizDate = ''
      

      /** 逻辑表catalog id */
      catalogId = undefined
      

      /** 逻辑表catalog名称 */
      catalogName = ''
      

      /** 逻辑表catalog类型 */
      catalogType = ''BIZUNIT''
      

      /** 调度任务实例列表 */
      children = []
      

      /** 逻辑表下的物化节点数量 */
      childrenCount = undefined
      

      /** 逻辑表执行开始结束时间 */
      executeTimeEntity = new defs.ExecuteTimeEntity()
      

      /** 逻辑表发布时间 */
      gmtModified = ''
      

      /** 逻辑表ID */
      id = ''
      

      /** 逻辑表实例ID */
      instanceId = ''
      

      /** 是否是叶子节点，默认false */
      leaf = false
      

      /** 逻辑表名字 */
      name = ''
      

      /** 逻辑表owner */
      owner = ''
      

      /** 逻辑表类型 */
      type = ''
      
        }
      

        class IdeNodeEntity {
          
      /** 逻辑表DAG图搜索使用，物化节点的字段列表 */
      columns = []
      

      /** 节点代码内容 */
      content = ''
      

      /** cron表达式 */
      cronExpression = ''
      

      /** 节点所属的dagId */
      dagId = ''
      

      /** 直接下游逻辑DAG节点 */
      downstreamLogicalNodeRelations = []
      

      /** 直接下游节点 */
      downstreamNodeRelations = []
      

      /** 数据源配置 */
      dsConfig = new defs.DsConfig()
      

      /** 手工节点使用，最近一次运行实例的执行状况 */
      executeTimeEntity = new defs.ExecuteTimeEntity()
      

      /** 是否为叶子节点 */
      leaf = false
      

      /** 节点描述 */
      nodeDesc = ''
      

      /** 标识节点是由某个组织或应用创建的 */
      nodeFrom = ''
      

      /** 节点id */
      nodeId = ''
      

      /** 节点名称 */
      nodeName = ''
      

      /** 节点输出名称列表,可能有多个 */
      nodeOutputNameList = []
      

      /** 节点的状态, 1表示正常, 2表示暂停调度 */
      nodeStatus = undefined
      

      /** 节点类型 */
      nodeType = undefined
      

      /** Operator类型 */
      operatorType = undefined
      

      /** 节点的参数 */
      params = ''
      

      /** 父节点ID，通常为逻辑表ID */
      parentId = ''
      

      /** 父节点名称，通常为逻辑表名 */
      parentName = ''
      

      /** 优先级, 越小越高 */
      priority = undefined
      

      /** 手工节点使用，最近一次运行的实例状态 */
      statusCode = undefined
      

      /** 逻辑表DAG实例图使用，当前节点的node对象 */
      task = new defs.TaskEntity()
      

      /** 节点的时间相关信息 */
      timeInfo = new defs.EntityTimeInfo()
      

      /** 直接上游逻辑DAG节点 */
      upstreamLogicalNodeRelations = []
      

      /** 直接上游节点 */
      upstreamNodeRelations = []
      

      /** 节点的User相关信息 */
      userInfo = new defs.EntityUserInfo()
      
        }
      

        class IdeNodeRelation {
          
      /** 天数差, 默认为空, 如果设置了该值, 则periodDiff无效 */
      dayDiff = undefined
      

      /** 周期差,非负数, 0表示同周期依赖, 正数表示依赖前N个周期 */
      periodDiff = undefined
      

      /** 关系类型 */
      relationType = ''
      

      /** 上游节点id */
      sourceNodeId = ''
      

      /** 上游节点的输出名称 */
      sourceNodeOutputName = ''
      

      /** 下游节点id */
      targetNodeId = ''
      

      /** 下游节点的输出名称 */
      targetNodeOutputName = ''
      
        }
      

        class IdeOperationEntity {
          
      /** createTime */
      createTime = ''
      

      /** modifiedTime */
      modifiedTime = ''
      

      /** nodeId */
      nodeId = ''
      

      /** objectIds */
      objectIds = ''
      

      /** objectType */
      objectType = undefined
      

      /** 操作名称 */
      operationName = ''
      

      /** operationStatus */
      operationStatus = undefined
      

      /** operationType */
      operationType = undefined
      

      /** operator */
      operator = ''
      
        }
      

        class IdeResourceBO {
          
      /** category */
      category = undefined
      

      /** content */
      content = ''
      

      /** contentType */
      contentType = ''
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** description */
      description = ''
      

      /** dirName */
      dirName = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** name */
      name = ''
      

      /** projectId */
      projectId = undefined
      

      /** size */
      size = undefined
      
        }
      

        class IdeSearchResultBO {
          
      /** functions */
      functions = []
      

      /** logicTables */
      logicTables = []
      

      /** physicalTables */
      physicalTables = []
      

      /** resources */
      resources = []
      

      /** standardDefinitions */
      standardDefinitions = []
      
        }
      

        class IdeTaskEntity {
          
      /** 业务日期 */
      bizDate = ''
      

      /** 所属的dagrunId */
      dagrunId = ''
      

      /** 任务所属dagrun的类型,可能是[正常1],[补数据2],[手工3] */
      dagrunType = 2
      

      /** 任务的下游任务 */
      downstreamTaskRelations = []
      

      /** 应该运行的时间点 */
      dueTime = ''
      

      /** executeTimeEntity */
      executeTimeEntity = new defs.ExecuteTimeEntity()
      

      /** 所属的flowId,只有在dagrunType不是normal的情况才会有值 */
      flowId = ''
      

      /** 在当天运行的所有任务中的顺序 */
      index = undefined
      

      /** 是否为叶子节点 */
      leaf = false
      

      /** nodeFrom */
      nodeFrom = ''
      

      /** 节点id */
      nodeId = ''
      

      /** Operator类型, 如SQL, DataX等 */
      operatorType = undefined
      

      /** 任务的参数 */
      params = ''
      

      /** 父节点ID，通常为逻辑表ID */
      parentId = ''
      

      /** 父节点名称，通常为逻辑表名 */
      parentName = ''
      

      /** 优先级, 越小越高 */
      priority = undefined
      

      /** 任务的状态,[未运行1],[等待调度2],[等待提交3],[等待资源4],[执行中5],[执行失败6],[被终止6],[执行成功0] */
      status = undefined
      

      /** 任务描述 */
      taskDesc = ''
      

      /** taskId */
      taskId = ''
      

      /** 任务名称, 一般与节点名称相同 */
      taskName = ''
      

      /** 任务类型,可能是[正常1],[虚拟2] */
      taskType = undefined
      

      /** timeInfo */
      timeInfo = new defs.EntityTimeInfo()
      

      /** 任务的上游任务 */
      upstreamTaskRelations = []
      

      /** userInfo */
      userInfo = new defs.EntityUserInfo()
      
        }
      

        class IdeUdfBO {
          
      /** category */
      category = undefined
      

      /** className */
      className = ''
      

      /** commandHelp */
      commandHelp = ''
      

      /** content */
      content = ''
      

      /** contentType */
      contentType = ''
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** description */
      description = ''
      

      /** dirName */
      dirName = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** name */
      name = ''
      

      /** projectId */
      projectId = undefined
      

      /** refResources */
      refResources = []
      

      /** size */
      size = undefined
      

      /** udfCategory */
      udfCategory = undefined
      
        }
      

        class Iterator {
          
        }
      

        class KerberosBO {
          
      /** kerberosFileId */
      kerberosFileId = ''
      

      /** kerberosIsOn */
      kerberosIsOn = false
      

      /** kerberosPrincipal */
      kerberosPrincipal = ''
      

      /** uploadKeytabFileName */
      uploadKeytabFileName = ''
      
        }
      

        class LinkedHashMap {
          
        }
      

        class LogicBO {
          
      /** 逻辑关联字段 */
      attributes = []
      

      /** 批量计算逻辑 */
      logic = ''
      
        }
      

        class LogicTableBO {
          
      /** dimTables */
      dimTables = []
      

      /** factTables */
      factTables = []
      
        }
      

        class LogicTableConfigBO {
          
      /** 归档逻辑 */
      designArchiveLogic = ''
      

      /** 是否归档 */
      designIsArchive = false
      

      /** 生命周期 */
      designLifecycle = undefined
      

      /** 无需物理化字段 */
      noLogicAttributeList = []
      

      /** 无需物理化字段 */
      noLogicAttributes = ''
      

      /** 分区字段/字段id逗号分隔 */
      partAttributeList = []
      

      /** 分区字段/字段id逗号分隔 */
      partAttributes = ''
      
        }
      

        class LogicalColumnProbeResultBO {
          
      /** 字段值为空字符串的比例 */
      blankRecordRatio = undefined
      

      /** 字段的名称 */
      columnName = ''
      

      /** 字段是正常值的比例 */
      commonRecordRatio = undefined
      

      /** 数据分布列表 */
      dataSectionBOList = []
      

      /** 字段类型 */
      dataType = ''
      

      /** 最大长度的值 */
      maxLength = ''
      

      /** 最大值 */
      maxValue = ''
      

      /** 平均数 */
      meanValue = ''
      

      /** 最小长度的值 */
      minLength = ''
      

      /** 最小值 */
      minValue = ''
      

      /** 字段值为null的比例 */
      nullRecordRatio = undefined
      

      /** 标准差 */
      standardDeviation = ''
      

      /** 逻辑表的名称 */
      tableName = ''
      

      /** 总记录数 */
      totalRecordsCount = undefined
      

      /** 唯一值的个数 */
      uniqueKeyCount = ''
      

      /** 数值型值为0的比例 */
      zeroRecordRatio = undefined
      
        }
      

        class LogicalColumnVO {
          
      /** 字段中文名 */
      columnCnName = ''
      

      /** 字段ID */
      columnId = ''
      

      /** 字段名称 */
      columnName = ''
      

      /** 字段数据类型 */
      dataType = ''INT''
      

      /** 物化节点ID */
      nodeId = ''
      

      /** 字段发布时间 */
      produceDate = ''
      

      /** 逻辑表ID */
      tableId = ''
      
        }
      

        class LogicalTableColumnsAndTablesDTO {
          
      /** columnTableMap */
      columnTableMap = undefined
      

      /** columns */
      columns = []
      

      /** tables */
      tables = []
      
        }
      

        class LogicalTableInputOutputDTO {
          
      /** samePeriodUpstreams */
      samePeriodUpstreams = []
      
        }
      

        class LogicalTableParseIssueDTO {
          
      /** 无效的字段名称, 即跨周期依赖填写依赖字段不属于该逻辑表时候报错 */
      invalidColumnNames = []
      

      /** 没有挂上依赖的上游表 */
      missingTables = []
      

      /** 逻辑表模型id */
      modelId = undefined
      

      /** 是否成功, 如果为true, 则说明解析通过, 否则说明有解析出的问题 */
      success = false
      

      /** 没有对应节点信息的上游表列表 */
      tablesWithoutNodeInfo = []
      
        }
      

        class LogicalTableScheduleConfigDTO {
          
      /** 基本调度配置信息, 包括名称, 类型, 描述, 调度参数等 */
      basicInfo = new defs.BasicScheduleConfigInfoDTO()
      

      /** 逻辑表的字段和相关表以及字段和表之间的关系信息 */
      columnsAndTables = new defs.LogicalTableColumnsAndTablesDTO()
      

      /** 跨周期依赖, 目前是上周期依赖 */
      crossPeriodUpstream = []
      

      /** 本逻辑表已经生成的节点信息, 包括输出名称, 节点id, 名称, 责任人等 */
      generatedNodes = []
      

      /** 是否有跨周期的依赖, True/False */
      hasCrossPeriodUpstream = false
      

      /** 模型id */
      modelId = undefined
      

      /** 本周期依赖 */
      samePeriodUpstreams = []
      
        }
      

        class ModelBO {
          
      /** 业务过程ID */
      bizProcessId = undefined
      

      /**  子区域 */
      childs = []
      

      /** 模型中文名称 */
      cn = ''
      

      /** 维度类型 */
      dimType = undefined
      

      /** 模型id */
      id = undefined
      

      /** 杂项维度区 */
      junk = new defs.RelationBaseBO()
      

      /** 主键区 */
      key = new defs.AttributeBO()
      

      /** 度量区 */
      measures = []
      

      /** 模型英文名称 */
      name = ''
      

      /** 普通字段区 */
      normals = []
      

      /** 父区域 */
      parent = new defs.SingleModelBO()
      

      /** 关联区 */
      relations = []
      

      /** 系统区 */
      sys = new defs.AttributeBO()
      
        }
      

        class ModelBizDetailAttributeDO {
          
      /** attributeDataType */
      attributeDataType = ''
      

      /** attributeDefaultValue */
      attributeDefaultValue = ''
      

      /** attributeIsPartition */
      attributeIsPartition = false
      

      /** attributeLogic */
      attributeLogic = ''
      

      /** attributeScope */
      attributeScope = ''
      

      /** attributeSeq */
      attributeSeq = undefined
      

      /** attributeType */
      attributeType = undefined
      

      /** cn */
      cn = ''
      

      /** des */
      des = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** modelId */
      modelId = undefined
      

      /** name */
      name = ''
      

      /** notNull */
      notNull = false
      

      /** owner */
      owner = ''
      

      /** physical */
      physical = false
      

      /** pk */
      pk = false
      

      /** refDimensionId */
      refDimensionId = undefined
      

      /** refDimensionMaxPt */
      refDimensionMaxPt = false
      

      /** refDimensionRole */
      refDimensionRole = ''
      

      /** refDimensionRoleCn */
      refDimensionRoleCn = ''
      

      /** status */
      status = undefined
      

      /** unique */
      unique = false
      
        }
      

        class ModelDimensionAttributeDO {
          
      /** attributeDataType */
      attributeDataType = ''
      

      /** attributeDefaultValue */
      attributeDefaultValue = ''
      

      /** attributeIsPartition */
      attributeIsPartition = false
      

      /** attributeLogic */
      attributeLogic = ''
      

      /** attributeScope */
      attributeScope = ''
      

      /** attributeSeq */
      attributeSeq = undefined
      

      /** cn */
      cn = ''
      

      /** des */
      des = ''
      

      /** description */
      description = ''
      

      /** dimensionId */
      dimensionId = undefined
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** name */
      name = ''
      

      /** notNull */
      notNull = false
      

      /** owner */
      owner = ''
      

      /** physical */
      physical = false
      

      /** pk */
      pk = false
      

      /** refDimensionId */
      refDimensionId = undefined
      

      /** refDimensionIsMaxPt */
      refDimensionIsMaxPt = false
      

      /** refDimensionRole */
      refDimensionRole = ''
      

      /** refDimensionRoleCn */
      refDimensionRoleCn = ''
      

      /** status */
      status = undefined
      

      /** type */
      type = undefined
      

      /** unique */
      unique = false
      
        }
      

        class Modifier {
          
      /** userId */
      userId = ''
      

      /** userName */
      userName = ''
      
        }
      

        class NodeContentEntity {
          
      /** 代码内容 */
      content = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改者 */
      modifier = ''
      

      /** 节点id */
      nodeId = ''
      

      /** 备注 */
      remark = ''
      

      /** 版本ID */
      version = undefined
      
        }
      

        class NodeDTO {
          
      /** 调度表达式 */
      cronExpression = ''
      

      /** 所属的dagId */
      dagId = ''
      

      /** 同步配置 */
      dataxSettingVO = new defs.DataxSettingVO()
      

      /** 数据源配置 */
      dsConfig = new defs.DsConfig()
      

      /** executeMethod */
      executeMethod = ''CREATE_FLOW''
      

      /** 对应于菜单树id */
      fileId = undefined
      

      /** 文件名 */
      fileName = ''
      

      /** 操作状态id */
      id = undefined
      

      /** 节点代码 */
      nodeContent = ''
      

      /** 节点描述 */
      nodeDesc = ''
      

      /** 标识节点是由某个组织或应用创建的 */
      nodeFrom = ''
      

      /** 节点id */
      nodeId = ''
      

      /** 节点名称 */
      nodeName = ''
      

      /** 节点输出名称 */
      nodeOutputNameList = []
      

      /** 节点owner */
      nodeOwner = ''
      

      /** 节点状态 */
      nodeStatus = undefined
      

      /** 节点类型 */
      nodeType = undefined
      

      /** Operator类型 */
      operatorType = undefined
      

      /** 节点负责人id */
      owner = ''
      

      /** 这个给界面显示的字段 */
      ownerName = ''
      

      /** 节点参数 */
      params = ''
      

      /** 标识节点是否被暂停 */
      paused = false
      

      /** 优先级 */
      priority = undefined
      

      /** projectId */
      projectId = ''
      

      /** 来源配置 */
      reader = new defs.DataxPluginVO()
      

      /** 发布状态 */
      released = false
      

      /** 备注信息 */
      remark = ''
      

      /** 是否可以重跑 */
      rerunable = false
      

      /** 发布状态 */
      status = ''DRAFT''
      

      /** tenantId */
      tenantId = ''
      

      /** 上游依赖 */
      upstreams = []
      

      /** userId */
      userId = ''
      

      /** 有效时间区间 */
      validPeriod = new defs.Period()
      

      /** target配置 */
      writer = new defs.DataxPluginVO()
      
        }
      

        class NodeRelation {
          
      /** 天数差, 默认为空, 如果设置了该值, 则periodDiff无效 */
      dayDiff = undefined
      

      /** 周期差,非负数, 0表示同周期依赖, 正数表示依赖前N个周期 */
      periodDiff = undefined
      

      /** 上游节点id */
      sourceNodeId = ''
      

      /** 上游节点的输出名称 */
      sourceNodeOutputName = ''
      

      /** 下游节点id */
      targetNodeId = ''
      

      /** 下游节点的输出名称 */
      targetNodeOutputName = ''
      
        }
      

        class ObjectLockBO {
          
      /** 加锁时间 */
      gmtModified = ''
      

      /** objectId */
      objectId = undefined
      

      /** objectType */
      objectType = ''
      

      /** 加锁用户ID */
      userId = ''
      

      /** 加锁用户名 */
      userName = ''
      
        }
      

        class OssResourceTypeVO {
          
      /** 描述名称 */
      desc = ''
      

      /** 文件默认扩展名[可能为空] */
      extension = ''
      
        }
      

        class OutputCheckVO {
          
      /** code */
      code = ''
      

      /** outputNames */
      outputNames = []
      
        }
      

        class OutputInfoBO {
          
      /** 产出时间 */
      bizDate = ''
      

      /** 调度代码 */
      content = ''
      

      /** 结束时间 */
      executeEndTime = ''
      

      /** 执行时长 */
      executeSec = undefined
      

      /** 起始时间 */
      executeStartTime = ''
      

      /** 任务节点id */
      nodeId = ''
      

      /** 任务实例id */
      taskId = ''
      

      /** 等待时长 */
      waitingSec = undefined
      
        }
      

        class OutputVO {
          
      /** 节点ID */
      nodeId = ''
      

      /** 节点名字 */
      nodeName = ''
      

      /** 节点输出名字 */
      outputName = ''
      

      /** 节点owner */
      owner = ''
      

      /** 节点owner名字 */
      ownerName = ''
      
        }
      

        class Owner {
          
      /** userId */
      userId = ''
      

      /** userName */
      userName = ''
      
        }
      

        class PagedData {
          
      /** 分页数据 */
      data = []
      

      /** empty */
      empty = false
      

      /** 总条数 */
      totalCount = undefined
      
        }
      

        class PaginatedResult {
          
      /** count */
      count = undefined
      

      /** resultData */
      resultData = []
      
        }
      

        class ParamBO {
          
      /** 数据类型 */
      dataType = ''
      

      /** 描述 */
      description = ''
      

      /** 参数名 */
      name = ''
      
        }
      

        class PartitionBO {
          
      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 分区的列名和值 */
      keyValues = []
      

      /** 记录数 */
      records = undefined
      
        }
      

        class Period {
          
      /** beginDate */
      beginDate = ''
      

      /** beginTimeMillis */
      beginTimeMillis = undefined
      

      /** endDate */
      endDate = ''
      

      /** endTimeMillis */
      endTimeMillis = undefined
      

      /** excludeBeginTime */
      excludeBeginTime = false
      

      /** excludeEndTime */
      excludeEndTime = false
      
        }
      

        class PermissionDetailBO {
          
      /** accountType */
      accountType = undefined
      

      /** desc */
      desc = ''
      

      /** name */
      name = ''
      

      /** operationType */
      operationType = undefined
      

      /** permissionEnd */
      permissionEnd = ''
      

      /** permissionStart */
      permissionStart = ''
      
        }
      

        class PermissionItemBO {
          
      /** accountType */
      accountType = undefined
      

      /** approveId */
      approveId = undefined
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** isOwner */
      isOwner = false
      

      /** owner */
      owner = false
      

      /** permissionEnd */
      permissionEnd = ''
      

      /** permissionStart */
      permissionStart = ''
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** resourceId */
      resourceId = ''
      

      /** resourceName */
      resourceName = ''
      

      /** resourceType */
      resourceType = undefined
      

      /** tableType */
      tableType = undefined
      

      /** tenantId */
      tenantId = undefined
      

      /** userId */
      userId = ''
      
        }
      

        class PhysicalTableBO {
          
      /** columns */
      columns = []
      

      /** createTime */
      createTime = ''
      

      /** dataGmtModified */
      dataGmtModified = ''
      

      /** desc */
      desc = ''
      

      /** fileType */
      fileType = ''
      

      /** guid */
      guid = ''
      

      /** location */
      location = ''
      

      /** ownerName */
      ownerName = ''
      

      /** partitionColumns */
      partitionColumns = []
      

      /** partitioned */
      partitioned = false
      

      /** physicalName */
      physicalName = ''
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** recordTotal */
      recordTotal = undefined
      

      /** storageVolumn */
      storageVolumn = undefined
      

      /** subareaNum */
      subareaNum = undefined
      

      /** tableGmtModified */
      tableGmtModified = ''
      
        }
      

        class PhysicalTableSummaryBO {
          
      /** 表注释 */
      comment = ''
      

      /** DDL创建时间 */
      gmtDDLCreate = ''
      

      /** DDL修改时间 */
      gmtDDLModified = ''
      

      /** 数据更新时间 */
      gmtDataModified = ''
      

      /** 最新时间分区 */
      latestDatePartition = ''
      

      /** 负责人工号 */
      ownerId = ''
      

      /** 负责人名称 */
      ownerName = ''
      

      /** 物理表名 */
      tableName = ''
      
        }
      

        class PreCompileBO {
          
      /** 预编译状态 */
      status = ''
      

      /** 预编译任务，单条SQL一个编译任务 */
      tasks = []
      
        }
      

        class PreCompileTaskBO {
          
      /** 预编译结果信息 */
      message = ''
      

      /** 预编译产出物理SQL */
      physicalSql = ''
      

      /** 预编译错误开始列 */
      startCol = undefined
      

      /** 预编译错误开始行 */
      startRow = undefined
      

      /** 预编译状态 */
      status = ''
      
        }
      

        class ProjectCreateBO {
          
      /** bizUnitId */
      bizUnitId = undefined
      

      /** cn */
      cn = ''
      

      /** dataSourceId */
      dataSourceId = undefined
      

      /** des */
      des = ''
      

      /** name */
      name = ''
      

      /** nameSpaceTag */
      nameSpaceTag = ''
      
        }
      

        class ProjectGrantBO {
          
      /** message */
      message = ''
      

      /** sql */
      sql = ''
      
        }
      

        class ProjectInBrief {
          
      /** projectId */
      projectId = ''
      

      /** projectName */
      projectName = ''
      
        }
      

        class ProjectMemberBO {
          
      /** 加入项目时间 */
      gmtCreate = ''
      

      /** 变更时间 */
      gmtModified = ''
      

      /** 变更操作人 */
      lastModifier = ''
      

      /** 变更操作人用户名 */
      lastModifierName = ''
      

      /** 项目 ID */
      projectId = undefined
      

      /** 用户所属租户 ID */
      tenantId = undefined
      

      /** 用户 ID */
      userId = ''
      

      /** 用户名 */
      userName = ''
      

      /** 用户角色 ID */
      userRoleId = undefined
      
        }
      

        class ProjectMemberDTO {
          
      /** 目标用户 ID */
      userId = ''
      

      /** 赋予用户的角色 */
      userRoleId = undefined
      
        }
      

        class ProjectUpdateBO {
          
      /** 业务板块 ID */
      bizUnitId = undefined
      

      /** 中文名称 */
      cn = ''
      

      /** 数据源 ID */
      dataSourceId = undefined
      

      /** 描述信息 */
      des = ''
      

      /** 项目 ID */
      id = undefined
      

      /** 英文名称 */
      name = ''
      

      /** 业务空间类型 */
      nameSpaceTag = ''
      
        }
      

        class ProjectVO {
          
      /** bizUnitCn */
      bizUnitCn = ''
      

      /** bizUnitId */
      bizUnitId = undefined
      

      /** bizUnitName */
      bizUnitName = ''
      

      /** 中文名 */
      cn = ''
      

      /** 计算引擎类型，MaxCompute：1，Hadoop：2，EMR：3 */
      computingEngine = undefined
      

      /** dataSourceId */
      dataSourceId = undefined
      

      /** dataSourceName */
      dataSourceName = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 项目成员个数 */
      memberCount = undefined
      

      /** 项目成员 */
      members = []
      

      /** 英文名 */
      name = ''
      

      /** nameSpaceTag */
      nameSpaceTag = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 当前请求用户在此项目的角色 */
      userRoleId = undefined
      

      /** 警告信息 */
      warningMessages = []
      
        }
      

        class QsmdAlertRecordBO {
          
      /** alertId */
      alertId = undefined
      

      /** alertLevel */
      alertLevel = ''INFORMATION''
      

      /** alertOwner */
      alertOwner = new defs.QsmdUser()
      

      /** alertReason */
      alertReason = ''MONITOR_FINISH''
      

      /** alertRecipient */
      alertRecipient = new defs.QsmdUser()
      

      /** alertRecordStatus */
      alertRecordStatus = ''SUCCESS''
      

      /** alertType */
      alertType = ''BY_EMAIL''
      

      /** content */
      content = ''
      

      /** dueAlertTime */
      dueAlertTime = ''
      

      /** failedReasonMsg */
      failedReasonMsg = ''
      

      /** id */
      id = undefined
      

      /** monitorType */
      monitorType = ''CUSTOM_TASK_MONITOR''
      

      /** nodeId */
      nodeId = ''
      

      /** nodeName */
      nodeName = ''
      

      /** projectId */
      projectId = ''
      

      /** projectName */
      projectName = ''
      

      /** sendAlertTime */
      sendAlertTime = ''
      

      /** setTime */
      setTime = ''
      
        }
      

        class QsmdCustomAlert {
          
      /** alertSentToList */
      alertSentToList = []
      

      /** alertType */
      alertType = []
      

      /** creator */
      creator = new defs.QsmdUser()
      

      /** customAlertReason */
      customAlertReason = ''MONITOR_FINISH''
      

      /** id */
      id = undefined
      

      /** nodeId */
      nodeId = ''
      

      /** nodeName */
      nodeName = ''
      

      /** nodePeriod */
      nodePeriod = ''YEAR''
      

      /** nodeType */
      nodeType = ''CYCLE''
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** setTime */
      setTime = ''
      

      /** status */
      status = ''
      

      /** taskOwner */
      taskOwner = false
      
        }
      

        class QsmdCustomAlertInfo {
          
      /** alertSentTo */
      alertSentTo = []
      

      /** alertType */
      alertType = []
      

      /** creatorId */
      creatorId = ''
      

      /** customAlertReason */
      customAlertReason = ''MONITOR_FINISH''
      

      /** nodeInfoList */
      nodeInfoList = []
      

      /** projectId */
      projectId = undefined
      

      /** projectName */
      projectName = ''
      

      /** setTime */
      setTime = ''
      

      /** taskOwner */
      taskOwner = false
      

      /** tenantId */
      tenantId = undefined
      
        }
      

        class QsmdNodeInfo {
          
      /** cron */
      cron = ''
      

      /** nodeId */
      nodeId = ''
      

      /** nodeName */
      nodeName = ''
      

      /** nodePeriod */
      nodePeriod = ''YEAR''
      

      /** nodeType */
      nodeType = ''CYCLE''
      

      /** ownerId */
      ownerId = ''
      
        }
      

        class QsmdUser {
          
      /** contact */
      contact = ''
      

      /** nameOrNick */
      nameOrNick = ''
      

      /** userId */
      userId = ''
      

      /** userName */
      userName = ''
      
        }
      

        class QueryLogVO {
          
      /** lastSql */
      lastSql = false
      

      /** queryId */
      queryId = ''
      

      /** sqlIndex */
      sqlIndex = undefined
      

      /** sqlTotalNum */
      sqlTotalNum = undefined
      

      /** taskId */
      taskId = ''
      

      /** taskStatus */
      taskStatus = ''INIT''
      

      /** taskrunLog */
      taskrunLog = new defs.TaskrunLog()
      
        }
      

        class QueryResultVO {
          
      /** queryId */
      queryId = ''
      

      /** result */
      result = ''
      

      /** taskId */
      taskId = ''
      
        }
      

        class QueryVO {
          
      /** queryId */
      queryId = ''
      

      /** sqlTotalNum */
      sqlTotalNum = undefined
      
        }
      

        class ReapplyDTO {
          
      /** 账号类型 */
      accountType = undefined
      

      /** 申请内容 */
      content = ''
      

      /** 权限实体 */
      entities = []
      

      /** 资源类型 */
      entityType = undefined
      

      /** 结束时间 */
      gmtEnd = ''
      

      /** 开始时间 */
      gmtStart = ''
      

      /** 权限类型 - 查询、开发 */
      operationTypes = []
      

      /** 项目id或业务板块id */
      projectId = undefined
      

      /** 项目名称 */
      projectName = ''
      

      /** 申请理由 */
      reason = ''
      

      /** 资源中文名 */
      resourceCn = ''
      

      /** 资源描述 */
      resourceDes = ''
      

      /** 资源id */
      resourceId = ''
      

      /** 选中的资源属性列表 */
      selectedEntities = []
      

      /** 逻辑表类型 */
      tableType = undefined
      

      /** 资源被删除的告警信息 */
      warningMessage = ''
      
        }
      

        class ReasonEntityDTO {
          
      /** reason */
      reason = ''
      
        }
      

        class RecommendTableBO {
          
      /** 中文名 */
      cn = ''
      

      /** 详情页访问次数 */
      cnt = undefined
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象id */
      id = ''
      

      /** 对象标签列表 */
      labels = []
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 实体类型 */
      tableEntityType = ''1''
      

      /** 对象类型 */
      type = ''-1''
      
        }
      

        class RegisterUdfDTO {
          
      /** className */
      className = ''
      

      /** commandHelp */
      commandHelp = ''
      

      /** description */
      description = ''
      

      /** dirName */
      dirName = ''
      

      /** functionName */
      functionName = ''
      

      /** refResourceIds */
      refResourceIds = []
      

      /** udfCategory */
      udfCategory = undefined
      
        }
      

        class RelatedSearchResultBO {
          
      /** 推荐关键字 */
      recommendKeywords = []
      

      /** 搜索结果 */
      searchResults = []
      
        }
      

        class RelationBaseBO {
          
      /** 字段中文名称 */
      cn = ''
      

      /** 关联属性是否有下游依赖 */
      hasChildDependence = false
      

      /** 字段id */
      id = undefined
      

      /** 是否主键 */
      isPk = false
      

      /** 字段英文名称 */
      name = ''
      

      /** 关联维度角色名 */
      refDimensionRole = ''
      

      /** 关联维度角色中文名 */
      refDimensionRoleCn = ''
      

      /** 关联维度 */
      relationModel = new defs.SingleModelBO()
      

      /** 维度表属性类型，@see DimensionAttributeTypeEnum */
      type = undefined
      
        }
      

        class RelationEntity {
          
      /** 列名 */
      columnNameList = []
      

      /** 表的guid */
      modelId = ''
      

      /** 表类型：4是物理表，其他是逻辑表 */
      modelType = undefined
      

      /** 表名 */
      tableName = ''
      

      /** 是否临时表 */
      tempTable = false
      
        }
      

        class RelationLineBO {
          
      /** 维度之间关联的业务过程列表 */
      bizProcessList = []
      

      /** 维度Node1 */
      dim = new defs.DimNodeBO()
      

      /** 维度Node2 */
      refDim = new defs.DimNodeBO()
      

      /** 边的类型1:业务过程;2:关联 */
      type = undefined
      
        }
      

        class ResourceAttributeBO {
          
      /** allType */
      allType = ''
      

      /** attribute */
      attribute = ''
      

      /** attributeCn */
      attributeCn = ''
      

      /** attributeDes */
      attributeDes = ''
      

      /** attributeId */
      attributeId = ''
      

      /** attributeName */
      attributeName = ''
      

      /** bizUnitId */
      bizUnitId = undefined
      

      /** children */
      children = []
      

      /** createTime */
      createTime = ''
      

      /** dataType */
      dataType = ''
      

      /** owner */
      owner = ''
      

      /** parentAttributeId */
      parentAttributeId = ''
      

      /** primaryKey */
      primaryKey = ''
      

      /** projectId */
      projectId = undefined
      

      /** resourceCn */
      resourceCn = ''
      

      /** resourceDes */
      resourceDes = ''
      

      /** resourceId */
      resourceId = ''
      

      /** resourceName */
      resourceName = ''
      

      /** resourceType */
      resourceType = ''1''
      

      /** role */
      role = ''
      

      /** roleCn */
      roleCn = ''
      

      /** tableType */
      tableType = ''1''
      
        }
      

        class ResourceBO {
          
        }
      

        class ResourceMetaBO {
          
      /** category */
      category = undefined
      

      /** contentType */
      contentType = ''
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** description */
      description = ''
      

      /** dirName */
      dirName = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** name */
      name = ''
      

      /** projectId */
      projectId = undefined
      
        }
      

        class Result {
          
      /** code */
      code = ''
      

      /** data */
      data = undefined
      

      /** message */
      message = ''
      

      /** monitorLog */
      monitorLog = undefined
      

      /** traceId */
      traceId = ''
      
        }
      

        class RoleBO {
          
      /** description */
      description = ''
      

      /** id */
      id = undefined
      

      /** name */
      name = ''
      
        }
      

        class SamePeriodUpstreamDTO {
          
      /** 关联的源表 */
      associatedSourceTable = new defs.TableDTO()
      

      /** 简单的节点信息 */
      simpleNodeInfo = new defs.SimpleNodeInfoDTO()
      

      /** 上游输出名称 */
      upstreamOutputName = ''
      
        }
      

        class SearchResultBO {
          
      /** 归属业务板块id */
      bizUnitId = undefined
      

      /** 归属业务板块名称 */
      bizUnitName = ''
      

      /** 中文名 */
      cn = ''
      

      /** 热度 */
      cnt = undefined
      

      /** 描述 */
      des = ''
      

      /** 表字段数 */
      fieldCount = undefined
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象id */
      id = ''
      

      /** 对象标签列表 */
      labels = []
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 归属项目标识 */
      projectId = undefined
      

      /** 归属项目名称 */
      projectName = ''
      

      /** 实体类型 */
      tableEntityType = ''1''
      

      /** 对象类型 */
      type = ''-1''
      

      /** 详情页访问次数 */
      views = undefined
      
        }
      

        class SimpleNodeInfoDTO {
          
      /** 节点id */
      nodeId = ''
      

      /** 节点名称 */
      nodeName = ''
      

      /** owner的信息, 包括id, name */
      ownerInfo = new defs.SimpleUserInfoDTO()
      
        }
      

        class SimpleUserInfoDTO {
          
      /** 用户id */
      userId = ''
      

      /** 用户名称 */
      userName = ''
      
        }
      

        class SingleModelBO {
          
      /** 子字段区 */
      childAttrs = []
      

      /** 子区域 */
      childs = []
      

      /** 模型中文名称 */
      cn = ''
      

      /** 维度类型 */
      dimType = undefined
      

      /** 模型id */
      id = undefined
      

      /** 杂项字段维度区 */
      junk = new defs.AttributeBO()
      

      /** 主键区 */
      key = new defs.AttributeBO()
      

      /** 度量字段区 */
      measures = []
      

      /** 模型英文名称 */
      name = ''
      

      /** 普通字段区 */
      normals = []
      

      /** 关联字段区 */
      relations = []
      

      /** 系统字段区 */
      sys = new defs.AttributeBO()
      
        }
      

        class SourceMainTableBO {
          
      /** 描述 */
      desc = ''
      

      /** 最近更新时间 */
      lastModifierTime = undefined
      

      /** 项目id */
      projectId = undefined
      

      /** 表id，表可能是物理表（string）或者是逻辑表（long）所以统一处理为string */
      tableId = ''
      

      /** 表名称 */
      tableName = ''
      

      /** 表类型  */
      tableType = undefined
      
        }
      

        class SummaryDerivativeIndexBO {
          
      /** bizConditionMap */
      bizConditionMap = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 数据类型 */
      dataType = ''
      

      /** 描述 */
      des = ''
      

      /** dimIds */
      dimIds = []
      

      /** 粒度所包含的维度 */
      dimensions = []
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 所属粒度 */
      granularityId = undefined
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 派生指标计算逻辑表达式 */
      logic = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** parentAtomicIndex */
      parentAtomicIndex = new defs.DerivedIndexParentBO()
      

      /** parentAtomicIndexId */
      parentAtomicIndexId = undefined
      

      /** parentAtomicIndexes */
      parentAtomicIndexes = []
      

      /** parentBizConditionId */
      parentBizConditionId = undefined
      

      /** 所属project */
      project = new defs.BaseBO()
      

      /** 所属时间周期 */
      statPeriod = new defs.TimePeriodBO()
      

      /** statPeriodId */
      statPeriodId = undefined
      

      /** status */
      status = ''0''
      

      /** summaryTableCatalogList */
      summaryTableCatalogList = []
      

      /** summaryTableCatalogMap */
      summaryTableCatalogMap = undefined
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class SummaryFilterBO {
          
      /** filterList */
      filterList = []
      

      /** summaryTableIndexType */
      summaryTableIndexType = undefined
      
        }
      

        class SummaryPhysicalIndexBO {
          
      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 关联的维度ID */
      joinDimId = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 关联的分区 */
      partitionName = ''
      

      /** 物理指标数据类型 */
      physicalIndexDataType = ''
      

      /** 源表字段名 */
      sourceColumnName = ''
      

      /** 源项目ID */
      sourceProjectId = undefined
      

      /** 源表名 */
      sourceTableName = ''
      

      /** 物理指标的分类 */
      summaryTableCatalogList = []
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class SummaryTableBO {
          
      /** 业务板块ID */
      bizUnitId = undefined
      

      /** 业务板块名字 */
      bizUnitName = ''
      

      /** 中文名 */
      cn = ''
      

      /** 需要删除的派生指标IDs */
      delDerivedIds = []
      

      /** 描述 */
      des = ''
      

      /** 来源维度逻辑表 */
      dimAttrList = []
      

      /** 维度ID */
      dimIds = []
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 粒度ID */
      granularityId = undefined
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 来源派生指标 */
      summaryDerivativeIndexList = []
      

      /** 筛选 */
      summaryFilterList = []
      

      /** 来源物理表指标 */
      summaryPhysicalIndexList = []
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class SummaryTableCatalogBO {
          
      /** bizUnitId */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class SummaryTableProfileBO {
          
      /** 业务板块ID */
      bizUnitId = undefined
      

      /** 业务板块名字 */
      bizUnitName = ''
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 维度ID */
      dimIds = []
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 粒度ID */
      granularityId = undefined
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class SupplementNodeBO {
          
      /** aliasName */
      aliasName = ''
      

      /** children */
      children = []
      

      /** 对象中文名称 */
      cn = ''
      

      /** count */
      count = undefined
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** 文件内容数据(仅对任务节点/文件节点有效) */
      data = undefined
      

      /** 描述 */
      des = ''
      

      /** 所在目录路径(仅对文件/资源节点有效) */
      dirName = ''
      

      /** 实例的执行情况 */
      executeTimeEntity = new defs.ExecuteTimeEntity()
      

      /** 创建时间(非实体对象节点为空) */
      gmtCreate = ''
      

      /** 修改时间(非实体对象节点为空) */
      gmtModified = ''
      

      /** 对象 ID */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** leaf */
      leaf = false
      

      /** 锁持有人用户ID(非实体对象节点为空) */
      lockOwner = ''
      

      /** 锁持有人用户名(非实体对象节点为空) */
      lockOwnerName = ''
      

      /** 对象显示名称 */
      name = ''
      

      /** 已发布过的节点id */
      nodeId = ''
      

      /** 用来说明node的SQL类型，只针对节点生效 */
      nodeType = undefined
      

      /** 树节点代表的实体对象数据 */
      object = undefined
      

      /** 用来标志节点是否已发布 */
      online = undefined
      

      /** 对象所在项目 */
      projectId = undefined
      

      /** 节点状态：0(草稿), 2(已上线), 100(开发中) */
      status = ''
      

      /** 对象类型 */
      type = ''
      

      /** url */
      url = ''
      
        }
      

        class SupportedTaskTypeBO {
          
      /** dsOwner */
      dsOwner = ''
      

      /** supported */
      supported = false
      

      /** taskType */
      taskType = ''
      
        }
      

        class SysFunctionBO {
          
      /** 适用数据库 */
      availableDb = ''
      

      /** 函数所属分类 */
      category = undefined
      

      /** 命令格式化 */
      commandFormat = ''
      

      /** 负责人 */
      creator = ''
      

      /** 使用用例 */
      example = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 主键ID */
      id = undefined
      

      /** 最近修改人 */
      lastModifier = ''
      

      /** 函数名 */
      name = ''
      

      /** 参数描述 */
      paramDesc = ''
      

      /** 项目空间ID */
      projectId = undefined
      

      /** 用途 */
      purpose = ''
      

      /** 函数名 */
      type = ''
      
        }
      

        class TableBO {
          
      /** allAttributeList */
      allAttributeList = []
      

      /** 表的关联属性 */
      attributes = []
      

      /** 子属性 */
      childAttributes = []
      

      /** 维度属性 */
      dimAttributes = []
      
        }
      

        class TableBloodRelationBO {
          
      /** 该表所属的业务板块 */
      bizUnitName = ''
      

      /** 直接下游的表个数 */
      directDownStreamTableCount = undefined
      

      /** 直接上游的表个数 */
      directUpStreamTableCount = undefined
      

      /** 下游实体列表 */
      downStreamTableList = []
      

      /** 表guid，对逻辑表来说是id */
      modelId = ''
      

      /** 表类型 */
      modelType = undefined
      

      /** 产出物理表的节点id */
      nodeId = ''
      

      /** 表的负责人 */
      tableOwner = ''
      

      /** 上游实体列表 */
      upStreamTableList = []
      
        }
      

        class TableDTO {
          
      /** catalog名称 */
      catalogName = ''
      

      /** 表名, 不包含catalog名称 */
      tableName = ''
      

      /** 表类型, 逻辑表[LOGICAL], 物理表[PHYSICAL]等 */
      tableType = ''LOGICAL''
      
        }
      

        class TableDetailBO {
          
      /** 事实逻辑表业务过程中文名称 */
      bizProcessCn = ''
      

      /** 事实逻辑表业务过程Id */
      bizProcessId = undefined
      

      /** 业务板块中文名称 */
      bizUnitCn = ''
      

      /** 业务板块Id */
      bizUnitId = undefined
      

      /** 业务板块中文名称 */
      bizUnitName = ''
      

      /** 表中文名称 */
      cn = ''
      

      /** 变更信息-创建时间 */
      createTime = ''
      

      /** 数据域空间中文名 */
      dataDomainCn = ''
      

      /** 数据域空间Id */
      dataDomainId = undefined
      

      /** DB类型 */
      dbType = ''
      

      /** 描述 */
      des = ''
      

      /** 逻辑表-逻辑表表类型 */
      dimType = undefined
      

      /** 维度逻辑表维度中文名称 */
      dimensionCn = ''
      

      /** 是否被收藏 true 是 false 否 */
      favFlag = false
      

      /** 收藏次数 */
      favtimes = undefined
      

      /** 事务发生时间 */
      gmtCreate = ''
      

      /** 汇总表统计粒度中文名称 */
      granularityCn = ''
      

      /** 表id */
      id = ''
      

      /** 变更信息-最近一次数据查看时间 */
      lastQueryTime = ''
      

      /** 变更信息-最近一次数据的更新时间 */
      latestFinishTime = ''
      

      /** 生命周期 */
      lifecycle = undefined
      

      /** 主表完整名称 */
      mainTableName = ''
      

      /** 表英文名称 */
      name = ''
      

      /** 空间tag */
      namespaceTag = ''
      

      /** 负责人id */
      owner = ''
      

      /** 负责人名称 */
      ownerName = ''
      

      /** 主键 */
      primarykey = ''
      

      /** 项目id */
      projectId = undefined
      

      /** 项目名称 */
      projectName = ''
      

      /** 读取次数 */
      readTimes = undefined
      

      /** 存储大小 */
      storage = undefined
      

      /** 主表筛选条件 */
      tableCondition = ''
      

      /** 表实体类型 */
      tableEntityType = undefined
      

      /** 查询表类型 */
      type = undefined
      

      /** view */
      view = false
      

      /** 浏览次数 */
      views = undefined
      
        }
      

        class TableMetaBO {
          
      /** attributes */
      attributes = []
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class TableNameWithProjectIdBO {
          
      /** projectId */
      projectId = undefined
      

      /** tableNames */
      tableNames = []
      
        }
      

        class TaskContentEntity {
          
      /** taskContent */
      taskContent = ''
      

      /** taskId */
      taskId = ''
      

      /** version */
      version = undefined
      
        }
      

        class TaskEntity {
          
      /** 业务日期 */
      bizDate = ''
      

      /** 所属的dagrunId */
      dagrunId = ''
      

      /** 任务所属dagrun的类型,可能是[正常1],[补数据2],[手工3] */
      dagrunType = 2
      

      /** 任务的下游任务 */
      downstreamTaskRelations = []
      

      /** 应该运行的时间点 */
      dueTime = ''
      

      /** executeTimeEntity */
      executeTimeEntity = new defs.ExecuteTimeEntity()
      

      /** 所属的flowId,只有在dagrunType不是normal的情况才会有值 */
      flowId = ''
      

      /** 在当天运行的所有任务中的顺序 */
      index = undefined
      

      /** nodeFrom */
      nodeFrom = ''
      

      /** 节点id */
      nodeId = ''
      

      /** Operator类型, 如SQL, DataX等 */
      operatorType = undefined
      

      /** 任务的参数 */
      params = ''
      

      /** 优先级, 越小越高 */
      priority = undefined
      

      /** 任务的状态,[未运行1],[等待调度2],[等待提交3],[等待资源4],[执行中5],[执行失败6],[被终止6],[执行成功0] */
      status = undefined
      

      /** 任务描述 */
      taskDesc = ''
      

      /** taskId */
      taskId = ''
      

      /** 任务名称, 一般与节点名称相同 */
      taskName = ''
      

      /** 任务类型,可能是[正常1],[虚拟2] */
      taskType = undefined
      

      /** timeInfo */
      timeInfo = new defs.EntityTimeInfo()
      

      /** 任务的上游任务 */
      upstreamTaskRelations = []
      

      /** userInfo */
      userInfo = new defs.EntityUserInfo()
      
        }
      

        class TaskRelation {
          
      /** sourceTaskId */
      sourceTaskId = ''
      

      /** status */
      status = undefined
      

      /** targetTaskId */
      targetTaskId = ''
      
        }
      

        class TaskStatisticVO {
          
      /** 租户各个状态的任务个数 */
      countByStatusOfTenant = undefined
      

      /** 用户各个状态的任务个数 */
      countByStatusOfUser = undefined
      
        }
      

        class TaskrunEntity {
          
      /** 完成执行时间 */
      finishExecuteTime = ''
      

      /** 开始执行时间 */
      startExecuteTime = ''
      

      /** taskId */
      taskId = ''
      

      /** Task的状态 */
      taskStatus = undefined
      

      /** taskrunId */
      taskrunId = ''
      

      /** Taskrun的状态 */
      taskrunStatus = undefined
      
        }
      

        class TaskrunLog {
          
      /** content */
      content = ''
      

      /** hasNextLog */
      hasNextLog = false
      

      /** hasResult */
      hasResult = false
      

      /** nextLogOffset */
      nextLogOffset = undefined
      

      /** status */
      status = ''INIT''
      
        }
      

        class TempTaskRequestDTO {
          
      /** 任务类型 */
      operatorTypeCode = undefined
      

      /** 任务运行参数 */
      params = ''
      

      /** 任务运行脚本 */
      sqltext = ''
      
        }
      

        class TenantDatasourceAccessInfoBO {
          
      /** 数据源接入进度明细[离线数据] */
      datasourceAccessInfoBOList = []
      

      /** 租户数据源整体接入进度，百分制[0-100][离线数据] */
      tenantDsAccessProcess = undefined
      
        }
      

        class TenantGlobalAssetBO {
          
      /** 业务板块的信息，包括id，name projectCnt 和 storage[离线数据] */
      bizUnitInfo = []
      

      /** 租户下项目总数量 */
      projectCnt = undefined
      

      /** 租户的整体存储消耗[离线数据] */
      storage = undefined
      

      /** 租户下表数量，包括逻辑表和物理表（排除黑盒物理表） */
      tableCnt = undefined
      

      /** 租户下任务总数量[离线数据] */
      taskCnt = undefined
      
        }
      

        class TenantInBrief {
          
      /** tenantId */
      tenantId = ''
      
        }
      

        class TenantProcessAssetBO {
          
      /** 租户业务限定数量 */
      adjunctWordCnt = undefined
      

      /** 租户原子指标数量 */
      atomicIndexCnt = undefined
      

      /** 租户业务过程数量 */
      bizProcessCnt = undefined
      

      /** 租户派生指标数量 */
      derivedIndexCnt = undefined
      

      /** 租户维度数量 */
      dimensionCnt = undefined
      

      /** 租户维度逻辑表数量 */
      dimensionTableCnt = undefined
      

      /** 租户事实逻辑表数量 */
      factTableCnt = undefined
      

      /** 租户汇总逻辑表数量 */
      summaryTableCnt = undefined
      
        }
      

        class TenantVO {
          
      /** displayName */
      displayName = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = undefined
      

      /** name */
      name = ''
      

      /** ownerAccountName */
      ownerAccountName = ''
      

      /** ownerDisplayName */
      ownerDisplayName = ''
      

      /** ownerId */
      ownerId = ''
      

      /** ownerNick */
      ownerNick = ''
      

      /** ownerRealName */
      ownerRealName = ''
      
        }
      

        class TimePartitionBO {
          
      /** 业务板块id */
      bizUnitId = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 创建人id */
      creator = ''
      

      /** 创建人名称 */
      creatorName = ''
      

      /** 数据类型 */
      dataType = ''
      

      /** 默认值 */
      defaultValue = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改日期 */
      gmtModified = ''
      

      /** 修改人id */
      lastModifier = ''
      

      /** 修改人名称 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      
        }
      

        class TimePeriodBO {
          
      /** 英文缩写 */
      abbreviation = ''
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象ID */
      id = undefined
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 结束时间 */
      periodEnd = ''
      

      /** 开始时间 */
      periodStart = ''
      

      /** 租户ID */
      tenantId = undefined
      
        }
      

        class TimeZoneAdapter {
          
      /** displayName */
      displayName = ''
      

      /** dstsavings */
      dstsavings = undefined
      

      /** id */
      id = ''
      

      /** rawOffset */
      rawOffset = undefined
      
        }
      

        class TreeNodeBO {
          
      /** aliasName */
      aliasName = ''
      

      /** children */
      children = []
      

      /** 对象中文名称 */
      cn = ''
      

      /** count */
      count = undefined
      

      /** creator */
      creator = ''
      

      /** creatorName */
      creatorName = ''
      

      /** 文件内容数据(仅对任务节点/文件节点有效) */
      data = undefined
      

      /** 描述 */
      des = ''
      

      /** 所在目录路径(仅对文件/资源节点有效) */
      dirName = ''
      

      /** 创建时间(非实体对象节点为空) */
      gmtCreate = ''
      

      /** 修改时间(非实体对象节点为空) */
      gmtModified = ''
      

      /** 对象 ID */
      id = undefined
      

      /** lastModifier */
      lastModifier = ''
      

      /** lastModifierName */
      lastModifierName = ''
      

      /** leaf */
      leaf = false
      

      /** 锁持有人用户ID(非实体对象节点为空) */
      lockOwner = ''
      

      /** 锁持有人用户名(非实体对象节点为空) */
      lockOwnerName = ''
      

      /** 对象显示名称 */
      name = ''
      

      /** 已发布过的节点id */
      nodeId = ''
      

      /** 用来说明node的SQL类型，只针对节点生效 */
      nodeType = undefined
      

      /** 树节点代表的实体对象数据 */
      object = undefined
      

      /** 用来标志节点是否已发布 */
      online = undefined
      

      /** 对象所在项目 */
      projectId = undefined
      

      /** 节点状态：0(草稿), 2(已上线), 100(开发中) */
      status = ''
      

      /** 对象类型 */
      type = ''
      

      /** url */
      url = ''
      
        }
      

        class ULocale {
          
      /** baseName */
      baseName = ''
      

      /** characterOrientation */
      characterOrientation = ''
      

      /** country */
      country = ''
      

      /** displayCountry */
      displayCountry = ''
      

      /** displayLanguage */
      displayLanguage = ''
      

      /** displayLanguageWithDialect */
      displayLanguageWithDialect = ''
      

      /** displayName */
      displayName = ''
      

      /** displayNameWithDialect */
      displayNameWithDialect = ''
      

      /** displayScript */
      displayScript = ''
      

      /** displayScriptInContext */
      displayScriptInContext = ''
      

      /** displayVariant */
      displayVariant = ''
      

      /** extensionKeys */
      extensionKeys = []
      

      /** fallback */
      fallback = {}
      

      /** iso3Country */
      iso3Country = ''
      

      /** iso3Language */
      iso3Language = ''
      

      /** keywords */
      keywords = new defs.Iterator()
      

      /** language */
      language = ''
      

      /** lineOrientation */
      lineOrientation = ''
      

      /** name */
      name = ''
      

      /** rightToLeft */
      rightToLeft = false
      

      /** script */
      script = ''
      

      /** unicodeLocaleAttributes */
      unicodeLocaleAttributes = []
      

      /** unicodeLocaleKeys */
      unicodeLocaleKeys = []
      

      /** variant */
      variant = ''
      
        }
      

        class UdfCategoryDTO {
          
      /** code */
      code = ''
      

      /** id */
      id = undefined
      

      /** name */
      name = ''
      
        }
      

        class UnionTableAttributeBO {
          
      /** 属性数据类型 */
      attributeDataType = ''
      

      /** 默认值 */
      attributeDefaultValue = ''
      

      /** id */
      attributeId = ''
      

      /** 属性是否分区 */
      attributeIsPartition = false
      

      /** 计算逻辑 */
      attributeLogic = ''
      

      /** 作用域 */
      attributeScope = ''
      

      /** 属性序列 */
      attributeSeq = undefined
      

      /** attributeSqlFromPart */
      attributeSqlFromPart = ''
      

      /** 事实表属性类型，维度（dimension）或度量（measure），@see BizAttributeTypeEnum */
      attributeType = undefined
      

      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 维度id */
      dimensionId = undefined
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 是否有下游依赖 */
      hasChildDependence = false
      

      /** 是否有线上版本 */
      hasOnline = false
      

      /** 热度值 */
      hotVal = undefined
      

      /** 对象ID */
      id = undefined
      

      /** 是否外键 */
      isFk = false
      

      /** isNotNull */
      isNotNull = false
      

      /** 是否物理化 */
      isPhysical = false
      

      /** 是否主键 */
      isPk = false
      

      /** isRepeat */
      isRepeat = false
      

      /** isUnique */
      isUnique = false
      

      /** 修改人ID */
      lastModifier = ''
      

      /** 修改人 */
      lastModifierName = ''
      

      /** logicTableId */
      logicTableId = undefined
      

      /** 模型id */
      modelId = undefined
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 是否推荐字段 */
      recommend = false
      

      /** 引用维度逻辑表中文名称 */
      refDimCn = ''
      

      /** 引用维度逻辑表英文名称 */
      refDimName = ''
      

      /** 引用维度逻辑表ID */
      refDimensionId = undefined
      

      /** 引用维度 */
      refDimensionIsMaxPt = false
      

      /** 引用维度角色名 */
      refDimensionRole = ''
      

      /** 引用维度角色中文名 */
      refDimensionRoleCn = ''
      

      /** 测试状态 */
      status = undefined
      

      /** 来源表 */
      table = ''
      

      /** 表实体类型 */
      tableEntityTypeEnum = ''1''
      

      /** 表id */
      tableId = ''
      

      /** 租户ID */
      tenantId = undefined
      

      /** 维度表属性类型，@see DimensionAttributeTypeEnum */
      type = undefined
      
        }
      

        class UpdateResourceDTO {
          
      /** content */
      content = ''
      

      /** description */
      description = ''
      

      /** name */
      name = ''
      

      /** size */
      size = undefined
      
        }
      

        class UpdateUdfDTO {
          
      /** className */
      className = ''
      

      /** commandHelp */
      commandHelp = ''
      

      /** description */
      description = ''
      

      /** functionName */
      functionName = ''
      

      /** refResourceIds */
      refResourceIds = []
      

      /** udfCategory */
      udfCategory = undefined
      
        }
      

        class UserDetailInfoVO {
          
      /** mineProjects */
      mineProjects = []
      

      /** tenantProjects */
      tenantProjects = []
      

      /** userInfo */
      userInfo = new defs.UserInfoVO()
      
        }
      

        class UserInfoVO {
          
      /** 账号类型，与权限无关 */
      accountTypes = []
      

      /** 显示名 */
      displayName = ''
      

      /** 区域ID */
      locale = ''
      

      /** 实际登录账号 */
      loginId = ''
      

      /** 昵称(可能为空) */
      nickName = ''
      

      /** 是否为某个项目的管理员 */
      projectAdmin = false
      

      /** 真实姓名(可能为空) */
      realName = ''
      

      /** roleList */
      roleList = []
      

      /** 是否是该产品产品的超级管理员 */
      superAdmin = false
      

      /** 当前租户 */
      tenantId = undefined
      

      /** 当前租户owner */
      tenantOwner = ''
      

      /** 时区 */
      timeZone = ''
      

      /** 用户 ID */
      userId = ''
      
        }
      

        class UserRoleInfoVO {
          
      /** 实际登录账号 */
      loginId = ''
      

      /** 项目-角色 */
      projectRoles = undefined
      

      /** 所属租户 */
      tenantId = undefined
      

      /** 用户ID */
      userId = ''
      
        }
      

        class UserVO {
          
      /** accountName */
      accountName = ''
      

      /** currentTenant */
      currentTenant = new defs.TenantVO()
      

      /** displayName */
      displayName = ''
      

      /** gmtCreate */
      gmtCreate = ''
      

      /** gmtModified */
      gmtModified = ''
      

      /** id */
      id = ''
      

      /** joinedTenants */
      joinedTenants = []
      

      /** locale */
      locale = new defs.ULocale()
      

      /** nick */
      nick = ''
      

      /** realName */
      realName = ''
      

      /** timeZone */
      timeZone = new defs.TimeZoneAdapter()
      

      /** userId */
      userId = ''
      
        }
      

        class VisitHistoryBO {
          
      /** 中文名 */
      cn = ''
      

      /** 描述 */
      des = ''
      

      /** 访问表是否被收藏1：收藏 ，0：未收藏 */
      favorFlag = undefined
      

      /** 创建时间 */
      gmtCreate = ''
      

      /** 修改时间 */
      gmtModified = ''
      

      /** 对象id */
      id = ''
      

      /** 对象标签列表 */
      labels = []
      

      /** 英文名 */
      name = ''
      

      /** 创建人ID */
      owner = ''
      

      /** 创建人名字 */
      ownerName = ''
      

      /** 实体类型 */
      tableEntityType = ''1''
      

      /** 对象类型 */
      type = ''-1''
      
        }
      

        class VisitParam {
          
      /** 对象id */
      objectId = ''
      

      /** 访问类型 */
      objectType = undefined
      

      /** 项目id */
      projectId = undefined
      

      /** 访问路径 */
      url = ''
      
        }
      
        export const ide = {
          AccountSourceId,
AddResourceDTO,
ApplyDTO,
ApproveBO,
ApproveDetailBO,
AtomicIndexAddBO,
AtomicIndexBO,
AtomicIndexDetailBO,
AttributeAddBO,
AttributeBO,
AttributeBatchDeleteResultBO,
AuthBaseBO,
BaseBO,
BaseDipResult,
BaseObject,
BasicScheduleConfigInfoDTO,
BatchProjectMemberDTO,
BizConditionAddBO,
BizConditionBO,
BizDataDomainBO,
BizDateFunctionBO,
BizGraphBO,
BizProcessBO,
BizProcessListBO,
BizProcessSimpleInfoBO,
BizProcessStructureBO,
BizUnitBO,
BizUnitGlobalAssetBO,
Character,
CodeBO,
CodeValidateBO,
ColumnBO,
ComputeEngineVO,
ComputingEngineBO,
ConnectivityResult,
CreateNodeDTO,
Creator,
CrossPeriodUpstreamDTO,
DataDomainBO,
DataDomainDimBO,
DataSectionBO,
DataSourceConfigVO,
DataSourceSaveResultVO,
DatasourceAccessInfoBO,
DataxColumnVO,
DataxPluginVO,
DataxSettingVO,
DependenceBO,
DerivedIndexAddBO,
DerivedIndexBO,
DerivedIndexDimPathBO,
DerivedIndexDimPathOptionBO,
DerivedIndexParentBO,
DerivedIndexParentOptionsBO,
DerivedIndexUpdateBO,
DimAddBO,
DimAttributeBO,
DimBO,
DimGraphBO,
DimLevelBO,
DimNodeBO,
DimRelationBO,
DimensionLevelConfigDO,
DimensionSimpleInfoBO,
DipBizProcessBO,
DipInitLogBO,
DsCommonBO,
DsConfig,
EntityDO,
EntityTimeInfo,
EntityUserInfo,
EnumDimensionValueDO,
ExecuteTimeEntity,
FactTableAttributeRefBO,
FactTableBO,
FavorParam,
FileCreateDTO,
FileUpdateDTO,
FilterBO,
FilterDTO,
FilterOption,
FixDataRequestDto,
FlowModifyDto,
Function,
GeneratedNodeDTO,
HadoopNameNodeBO,
HostIp,
HostLoginInfo,
IdeFileBO,
IdeLogicalTableNodeBO,
IdeLogicalTableTaskBO,
IdeNodeEntity,
IdeNodeRelation,
IdeOperationEntity,
IdeResourceBO,
IdeSearchResultBO,
IdeTaskEntity,
IdeUdfBO,
Iterator,
KerberosBO,
LinkedHashMap,
LogicBO,
LogicTableBO,
LogicTableConfigBO,
LogicalColumnProbeResultBO,
LogicalColumnVO,
LogicalTableColumnsAndTablesDTO,
LogicalTableInputOutputDTO,
LogicalTableParseIssueDTO,
LogicalTableScheduleConfigDTO,
ModelBO,
ModelBizDetailAttributeDO,
ModelDimensionAttributeDO,
Modifier,
NodeContentEntity,
NodeDTO,
NodeRelation,
ObjectLockBO,
OssResourceTypeVO,
OutputCheckVO,
OutputInfoBO,
OutputVO,
Owner,
PagedData,
PaginatedResult,
ParamBO,
PartitionBO,
Period,
PermissionDetailBO,
PermissionItemBO,
PhysicalTableBO,
PhysicalTableSummaryBO,
PreCompileBO,
PreCompileTaskBO,
ProjectCreateBO,
ProjectGrantBO,
ProjectInBrief,
ProjectMemberBO,
ProjectMemberDTO,
ProjectUpdateBO,
ProjectVO,
QsmdAlertRecordBO,
QsmdCustomAlert,
QsmdCustomAlertInfo,
QsmdNodeInfo,
QsmdUser,
QueryLogVO,
QueryResultVO,
QueryVO,
ReapplyDTO,
ReasonEntityDTO,
RecommendTableBO,
RegisterUdfDTO,
RelatedSearchResultBO,
RelationBaseBO,
RelationEntity,
RelationLineBO,
ResourceAttributeBO,
ResourceBO,
ResourceMetaBO,
Result,
RoleBO,
SamePeriodUpstreamDTO,
SearchResultBO,
SimpleNodeInfoDTO,
SimpleUserInfoDTO,
SingleModelBO,
SourceMainTableBO,
SummaryDerivativeIndexBO,
SummaryFilterBO,
SummaryPhysicalIndexBO,
SummaryTableBO,
SummaryTableCatalogBO,
SummaryTableProfileBO,
SupplementNodeBO,
SupportedTaskTypeBO,
SysFunctionBO,
TableBO,
TableBloodRelationBO,
TableDTO,
TableDetailBO,
TableMetaBO,
TableNameWithProjectIdBO,
TaskContentEntity,
TaskEntity,
TaskRelation,
TaskStatisticVO,
TaskrunEntity,
TaskrunLog,
TempTaskRequestDTO,
TenantDatasourceAccessInfoBO,
TenantGlobalAssetBO,
TenantInBrief,
TenantProcessAssetBO,
TenantVO,
TimePartitionBO,
TimePeriodBO,
TimeZoneAdapter,
TreeNodeBO,
ULocale,
UdfCategoryDTO,
UnionTableAttributeBO,
UpdateResourceDTO,
UpdateUdfDTO,
UserDetailInfoVO,
UserInfoVO,
UserRoleInfoVO,
UserVO,
VisitHistoryBO,
VisitParam
        }
      