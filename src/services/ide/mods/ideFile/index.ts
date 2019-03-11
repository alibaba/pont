/**
 * @description [后端:见行;前端:淡苍]-文件管理接口API
 */
import * as post from './post';
import * as deleteDeleteByFileId from './deleteDeleteByFileId';
import * as getGetFolderTree from './getGetFolderTree';
import * as putMoveBySourceFileIdToByDestFileId from './putMoveBySourceFileIdToByDestFileId';
import * as putRenameByFileId from './putRenameByFileId';
import * as postSaveFolder from './postSaveFolder';
import * as getByFileId from './getByFileId';
import * as putByFileId from './putByFileId';
import * as deleteByFileId from './deleteByFileId';

export {
  post,
  deleteDeleteByFileId,
  getGetFolderTree,
  putMoveBySourceFileIdToByDestFileId,
  putRenameByFileId,
  postSaveFolder,
  getByFileId,
  putByFileId,
  deleteByFileId
};
