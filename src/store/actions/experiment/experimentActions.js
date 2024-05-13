import { getData, postData } from "../../../api/api";
import * as actionsCreators from "./experimentActionsCreators";

export const fetchExperiments = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getExperiments());
    try {
      const response = await getData(`/virtual_lab/api/v1/experiment`);
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
      const response = await postData(`/virtual_lab/api/v1/experiment`, null);
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
