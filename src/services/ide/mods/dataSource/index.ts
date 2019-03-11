/**
 * @description [后端:天大;前端:晟朗]数据源相关API
 */
import * as postDsConfig from './postDsConfig';
import * as getDsConfigAllList from './getDsConfigAllList';
import * as getDsConfigAllRepeat from './getDsConfigAllRepeat';
import * as postDsConfigBatchDelete from './postDsConfigBatchDelete';
import * as postDsConfigCheckConnectivity from './postDsConfigCheckConnectivity';
import * as postDsConfigCheckRepeat from './postDsConfigCheckRepeat';
import * as getDsConfigListDsType from './getDsConfigListDsType';
import * as getDsConfigListHaveReadPermissionDsConfig from './getDsConfigListHaveReadPermissionDsConfig';
import * as getDsConfigListHaveWritePermissionDsConfig from './getDsConfigListHaveWritePermissionDsConfig';
import * as postDsConfigOwnerVerify from './postDsConfigOwnerVerify';
import * as getDsConfigSearch from './getDsConfigSearch';
import * as getDsConfigSyncDataSourceToMetaCenter from './getDsConfigSyncDataSourceToMetaCenter';
import * as getDsConfigSyncTenantDataSourceToMetaCenter from './getDsConfigSyncTenantDataSourceToMetaCenter';
import * as getDsConfigUnbindDsList from './getDsConfigUnbindDsList';
import * as postDsConfigUpload from './postDsConfigUpload';
import * as getDsConfigByDsId from './getDsConfigByDsId';
import * as putDsConfigByDsId from './putDsConfigByDsId';
import * as deleteDsConfigByDsId from './deleteDsConfigByDsId';
import * as putDsConfigByDsIdOwner from './putDsConfigByDsIdOwner';

export {
  postDsConfig,
  getDsConfigAllList,
  getDsConfigAllRepeat,
  postDsConfigBatchDelete,
  postDsConfigCheckConnectivity,
  postDsConfigCheckRepeat,
  getDsConfigListDsType,
  getDsConfigListHaveReadPermissionDsConfig,
  getDsConfigListHaveWritePermissionDsConfig,
  postDsConfigOwnerVerify,
  getDsConfigSearch,
  getDsConfigSyncDataSourceToMetaCenter,
  getDsConfigSyncTenantDataSourceToMetaCenter,
  getDsConfigUnbindDsList,
  postDsConfigUpload,
  getDsConfigByDsId,
  putDsConfigByDsId,
  deleteDsConfigByDsId,
  putDsConfigByDsIdOwner
};
