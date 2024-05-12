import { TOOLS_ACTIONS_TYPES, TOOL_ACTIONS_TYPES } from "../actionTypes";

export const getTools = (payLoad) => {
  return {
    type: TOOLS_ACTIONS_TYPES.GET_TOOLS,
    payLoad,
  };
};
export const getToolsSuccess = (payLoad) => {
  return {
    type: TOOLS_ACTIONS_TYPES.GET_TOOLS_SUCCESS,
    payLoad,
  };
};
export const getToolsFail = (payLoad) => {
  return {
    type: TOOLS_ACTIONS_TYPES.GET_TOOLS_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const getTool = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.GET_TOOL,
    payLoad,
  };
};
export const getToolSuccess = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.GET_TOOL_SUCCESS,
    payLoad,
  };
};
export const getToolFail = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.GET_TOOL_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const addTool = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.POST_TOOL,
    payLoad,
  };
};
export const addToolSuccess = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.POST_TOOL_SUCCESS,
    payLoad,
  };
};
export const addToolFail = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.POST_TOOL_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const editTool = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.PUT_TOOL,
    payLoad,
  };
};
export const editToolSuccess = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.PUT_TOOL_SUCCESS,
    payLoad,
  };
};
export const editToolFail = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.PUT_TOOL_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const deleteTool = () => {
  return {
    type: TOOL_ACTIONS_TYPES.DELETE_TOOL,
  };
};
export const deleteToolSuccess = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.DELETE_TOOL_SUCCESS,
    payLoad,
  };
};
export const deleteToolFail = (payLoad) => {
  return {
    type: TOOL_ACTIONS_TYPES.DELETE_TOOL_FAIL,
    payLoad,
  };
};
