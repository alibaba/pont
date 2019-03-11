/**
 * @description [后端:驯致;前端:会影]维度API
 */
import * as postDim from './postDim';
import * as getDimCountRelatedLogicTableByDomain from './getDimCountRelatedLogicTableByDomain';
import * as getDimLevelPreviewList from './getDimLevelPreviewList';
import * as getDimLevelByLevelConfigId from './getDimLevelByLevelConfigId';
import * as deleteDimLevelByLevelConfigId from './deleteDimLevelByLevelConfigId';
import * as putDimLevelByLevelConfigIdOffline from './putDimLevelByLevelConfigIdOffline';
import * as deleteDimLevelByLevelConfigIdOnlineAndDraft from './deleteDimLevelByLevelConfigIdOnlineAndDraft';
import * as getDimList from './getDimList';
import * as getDimListByDataDomain from './getDimListByDataDomain';
import * as getDimListFilter from './getDimListFilter';
import * as getDimListFuzzy from './getDimListFuzzy';
import * as getDimListInheritableFuzzy from './getDimListInheritableFuzzy';
import * as getDimPkIsValid from './getDimPkIsValid';
import * as getDimByDimIdChildren from './getDimByDimIdChildren';
import * as getDimById from './getDimById';
import * as putDimById from './putDimById';
import * as deleteDimById from './deleteDimById';
import * as putDimByIdOffline from './putDimByIdOffline';
import * as putDimByIdOnline from './putDimByIdOnline';
import * as deleteDimByIdOnlineAndDraft from './deleteDimByIdOnlineAndDraft';
import * as getDimByIdStatusSync from './getDimByIdStatusSync';

export {
  postDim,
  getDimCountRelatedLogicTableByDomain,
  getDimLevelPreviewList,
  getDimLevelByLevelConfigId,
  deleteDimLevelByLevelConfigId,
  putDimLevelByLevelConfigIdOffline,
  deleteDimLevelByLevelConfigIdOnlineAndDraft,
  getDimList,
  getDimListByDataDomain,
  getDimListFilter,
  getDimListFuzzy,
  getDimListInheritableFuzzy,
  getDimPkIsValid,
  getDimByDimIdChildren,
  getDimById,
  putDimById,
  deleteDimById,
  putDimByIdOffline,
  putDimByIdOnline,
  deleteDimByIdOnlineAndDraft,
  getDimByIdStatusSync
};
