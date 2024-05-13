import {
  CHEMICALS_ACTIONS_TYPES,
  CHEMICAL_ACTIONS_TYPES,
} from "../actionTypes";

export const getChemicals = (payLoad) => {
  return {
    type: CHEMICALS_ACTIONS_TYPES.GET_CHEMICALS,
    payLoad,
  };
};
export const getChemicalsSuccess = (payLoad) => {
  return {
    type: CHEMICALS_ACTIONS_TYPES.GET_CHEMICALS_SUCCESS,
    payLoad,
  };
};
export const getChemicalsFail = (payLoad) => {
  return {
    type: CHEMICALS_ACTIONS_TYPES.GET_CHEMICALS_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const getChemical = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.GET_CHEMICAL,
    payLoad,
  };
};
export const getChemicalSuccess = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.GET_CHEMICAL_SUCCESS,
    payLoad,
  };
};
export const getChemicalFail = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.GET_CHEMICAL_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const addChemical = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.POST_CHEMICAL,
    payLoad,
  };
};
export const addChemicalSuccess = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.POST_CHEMICAL_SUCCESS,
    payLoad,
  };
};
export const addChemicalFail = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.POST_CHEMICAL_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const editChemical = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.PUT_CHEMICAL,
    payLoad,
  };
};
export const editChemicalSuccess = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.PUT_CHEMICAL_SUCCESS,
    payLoad,
  };
};
export const editChemicalFail = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.PUT_CHEMICAL_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const deleteChemical = () => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.DELETE_CHEMICAL,
  };
};
export const deleteChemicalSuccess = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.DELETE_CHEMICAL_SUCCESS,
    payLoad,
  };
};
export const deleteChemicalFail = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.DELETE_CHEMICAL_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const clearChemical = () => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.CLEAR_CHEMICAL,
  };
};
export const clearChemicalSuccess = () => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.CLEAR_CHEMICAL_SUCCESS,
  };
};
export const clearChemicalFail = (payLoad) => {
  return {
    type: CHEMICAL_ACTIONS_TYPES.CLEAR_CHEMICAL_FAIL,
    payLoad,
  };
};
