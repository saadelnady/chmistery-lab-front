import {
  EXPERIMENTS_ACTIONS_TYPES,
  EXPERIMENT_ACTIONS_TYPES,
} from "../actionTypes";

export const getExperiments = (payLoad) => {
  return {
    type: EXPERIMENTS_ACTIONS_TYPES.GET_EXPERIMENTS,
    payLoad,
  };
};
export const getExperimentsSuccess = (payLoad) => {
  return {
    type: EXPERIMENTS_ACTIONS_TYPES.GET_EXPERIMENTS_SUCCESS,
    payLoad,
  };
};
export const getExperimentsFail = (payLoad) => {
  return {
    type: EXPERIMENTS_ACTIONS_TYPES.GET_EXPERIMENTS_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const getExperiment = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.GET_EXPERIMENT,
    payLoad,
  };
};
export const getExperimentSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.GET_EXPERIMENT_SUCCESS,
    payLoad,
  };
};
export const getExperimentFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.GET_EXPERIMENT_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const addExperiment = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_EXPERIMENT,
    payLoad,
  };
};
export const addExperimentSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_EXPERIMENT_SUCCESS,
    payLoad,
  };
};
export const addExperimentFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_EXPERIMENT_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const editExperiment = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT,
    payLoad,
  };
};
export const editExperimentSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT_SUCCESS,
    payLoad,
  };
};
export const editExperimentFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const deleteExperiment = () => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT,
  };
};
export const deleteExperimentSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT_SUCCESS,
    payLoad,
  };
};
export const deleteExperimentFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const clearExperiment = () => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.CLEAR_EXPERIMENT,
  };
};
export const clearExperimentSuccess = () => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.CLEAR_EXPERIMENT_SUCCESS,
  };
};
export const clearExperimentFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.CLEAR_EXPERIMENT_FAIL,
    payLoad,
  };
};
