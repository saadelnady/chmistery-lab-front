import { deleteData, getData, patchData, postData } from "../../../api/api";
import { showToast } from "../../../helpers/toaste_helper";
import * as actionsCreators from "./toolActionsCreators";
// =========================================================================================

export const fetchTools = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getTools());
    try {
      const response = await getData(`/virtual_lab/api/v1/tools`);
      if (response.status === "success") {
        dispatch(actionsCreators.getToolsSuccess(response.data.docs));
      }
    } catch (error) {
      dispatch(actionsCreators.getToolsFail(error));
    }
  };
};
// =========================================================================================

export const deleteTool = (toolId, toast) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteTool());
    try {
      const response = await deleteData(`/virtual_lab/api/v1/tools/${toolId}`);
      if (response.status === "deletion success") {
        dispatch(actionsCreators.deleteToolSuccess(response.deletedObjectId));
        showToast(toast, "tool deleted successfully", "success");
      }
    } catch (error) {
      dispatch(actionsCreators.deleteToolFail(error));
    }
  };
};
// =========================================================================================

export const addTool = (toast, formData) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addTool());
    try {
      const response = await postData(`/virtual_lab/api/v1/tools`, formData);
      if (response.status === "success") {
        dispatch(actionsCreators.addToolSuccess(response.data.data));
        showToast(toast, "tool added successfully", "success");
      }
    } catch (error) {
      dispatch(actionsCreators.addToolFail(error));
    }
  };
};
// =========================================================================================
export const fetchTool = (toolId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getTool(toolId));
    try {
      const response = await getData(`/virtual_lab/api/v1/tools/${toolId}`);

      if (response.status === "success") {
        dispatch(actionsCreators.getToolSuccess(response.data.data[0]));
      }
    } catch (error) {
      dispatch(actionsCreators.getToolFail(error));
    }
  };
};

// =========================================================================================
export const editTool = (toast, formData, toolId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editTool());

    try {
      const response = await patchData(
        `/virtual_lab/api/v1/tools/${toolId}`,
        formData
      );
      console.log("response------------->", response);

      if (response.status === "sucess") {
        dispatch(actionsCreators.editToolSuccess(response.data.data));
        showToast(toast, "tool updated successfully", "success");
      }
    } catch (error) {
      console.log("error------------->" + error);

      dispatch(actionsCreators.editToolFail(error));
    }
  };
};
// =========================================================================================

export const clearTool = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.clearTool());
    try {
      dispatch(actionsCreators.clearToolSuccess());
    } catch (error) {
      dispatch(actionsCreators.clearToolFail(error));
    }
  };
};
