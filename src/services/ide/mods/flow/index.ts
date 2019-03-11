/**
 * @description [后端:莫萱,天大;前端:淡苍]调度运维—工作流相关API
 */
import * as postFlows from './postFlows';
import * as getFlowsDagrunByDagrunIdTaskList from './getFlowsDagrunByDagrunIdTaskList';
import * as getFlowsSupplementFlowList from './getFlowsSupplementFlowList';
import * as postFlowsByDagrunIdKill from './postFlowsByDagrunIdKill';
import * as getFlowsByFlowIdDagrunList from './getFlowsByFlowIdDagrunList';
import * as postFlowsByFlowIdKill from './postFlowsByFlowIdKill';

export {
  postFlows,
  getFlowsDagrunByDagrunIdTaskList,
  getFlowsSupplementFlowList,
  postFlowsByDagrunIdKill,
  getFlowsByFlowIdDagrunList,
  postFlowsByFlowIdKill
};
