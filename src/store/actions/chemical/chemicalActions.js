import { deleteData, getData, postData, putData } from "../../../api/api";
import { showToast } from "../../../helpers/toaste_helper";
import * as actionsCreators from "./chemicalActionsCreators";
// =========================================================================================

export const fetchChemicals = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getChemicals());
    try {
      const response = await getData(`/virtual_lab/api/v1/chemicals`);
      if (response.status === "success") {
        dispatch(actionsCreators.getChemicalsSuccess(response.data.docs));
      }
    } catch (error) {
      dispatch(actionsCreators.getChemicalsFail(error));
    }
  };
};
// =========================================================================================

export const deleteChemical = (chemicalId, toast) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteChemical());
    try {
      const response = await deleteData(
        `/virtual_lab/api/v1/chemicals/${chemicalId}`
      );
      console.log(response);
      if (response.status === "deletion success") {
        dispatch(
          actionsCreators.deleteChemicalSuccess(response.deletedObjectId)
        );
        showToast(toast, "chemical deleted successfully", "success");
      }
    } catch (error) {
      dispatch(actionsCreators.deleteChemicalFail(error));
    }
  };
};
// =========================================================================================

export const addChemical = (toast, formData) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addChemical());
    try {
      const response = await postData(
        `/virtual_lab/api/v1/chemicals`,
        formData
      );
      console.log("response==>", response);
      if (response.status === "success") {
        dispatch(actionsCreators.addChemicalSuccess(response.data.data));
        showToast(toast, "chemical added successfully", "success");
      }
    } catch (error) {
      dispatch(actionsCreators.addChemicalFail(error));
    }
  };
};
// =========================================================================================
export const getChemical = (chemicalId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getChemical(chemicalId));
    try {
      const response = await getData(
        `/virtual_lab/api/v1/chemicals/${chemicalId}`
      );

      if (response.status === "success") {
        dispatch(actionsCreators.getChemicalSuccess(response.data.data[0]));
      }
    } catch (error) {
      dispatch(actionsCreators.getChemicalFail(error));
    }
  };
};

// =========================================================================================
export const editChemical = (toast, formData, chemicalId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editChemical());
    try {
      const response = await putData(
        `/virtual_lab/api/v1/chemicals/${chemicalId}`,
        formData
      );
      console.log("response==>", response);
      if (response.status === "success") {
        dispatch(actionsCreators.editChemicalSuccess(response.data.data));
        showToast(toast, "chemical updated successfully", "success");
      }
    } catch (error) {
      dispatch(actionsCreators.editChemicalFail(error));
    }
  };
};
