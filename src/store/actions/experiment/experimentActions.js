import { deleteData, getData, patchData, postData } from "../../../api/api";
import { showToast } from "../../../helpers/toaste_helper";
import * as actionsCreators from "./experimentActionsCreators";

export const fetchExperiments = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getExperiments());
    try {
      const response = await getData(`/virtual_lab/api/v1/experiment`);
      // console.log("response ===>", response);
      if (response.status === "success") {
        dispatch(actionsCreators.getExperimentsSuccess(response.data.docs));
      }
    } catch (error) {
      dispatch(actionsCreators.getExperimentsFail(error));
    }
  };
};
// =============================================================
export const addExperiment = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.addExperiment());
    try {
      const response = await postData(`/virtual_lab/api/v1/experiment`);
      console.log("response=== >", response);
      //   if (response.status === "success") {
      //     dispatch(actionsCreators.addExperimentSuccess(response.data.docs));
      //   }
    } catch (error) {
      console.log("error ====>", error);
      dispatch(actionsCreators.addExperimentFail(error));
    }
  };
};
// =============================================================
export const fetchExperiment = (experimentId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getExperiment());
    try {
      const response = await getData(
        `/virtual_lab/api/v1/experiment/${experimentId}`,
        null
      );
      console.log("response=== >", response);
      if (response.status === "success") {
        dispatch(actionsCreators.getExperimentSuccess(response.data.data[0]));
      }
    } catch (error) {
      console.log("error ====>", error);
      dispatch(actionsCreators.getExperimentFail(error));
    }
  };
};
// =============================================================
export const editExperiment = (experimentId, data) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editExperiment());
    try {
      const response = await patchData(
        `/virtual_lab/api/v1/experiment/${experimentId}`,
        data
      );
      console.log("response=== >", response);
      // if (response.status === "success") {
      //   dispatch(actionsCreators.getExperimentSuccess(response.data.data[0]));
      // }
    } catch (error) {
      console.log("error ====>", error);
      dispatch(actionsCreators.editExperiment(error));
    }
  };
};
// =============================================================
export const deleteExperiment = (experimentId, toast) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteExperiment());
    try {
      const response = await deleteData(
        `/virtual_lab/api/v1/experiment/${experimentId}`
      );
      console.log("response=== >", response);
      if (response.status === "deletion success") {
        dispatch(
          actionsCreators.deleteExperimentSuccess(response.deletedObjectId)
        );
        showToast(toast, "chemical deleted successfully", "success");
      }
    } catch (error) {
      console.log("error ====>", error);
      dispatch(actionsCreators.deleteExperiment(error));
    }
  };
};
