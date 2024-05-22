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

export const deleteExperiment = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT,
    payLoad,
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
// ==================================================================================
export const addToolImage = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_TOOL_IMAGE,
    payLoad,
  };
};
export const addToolImageSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_TOOL_IMAGE_SUCCESS,
    payLoad,
  };
};
export const addToolImageFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_TOOL_IMAGE_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const addDeviceImage = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_DEVICE_IMAGE,
    payLoad,
  };
};
export const addDeviceImageSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_DEVICE_IMAGE_SUCCESS,
    payLoad,
  };
};
export const addDeviceImageFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.POST_DEVICE_IMAGE_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const deleteToolImage = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_TOOL_IMAGE,
    payLoad,
  };
};
export const deleteToolImageSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_TOOL_IMAGE_SUCCESS,
    payLoad,
  };
};
export const deleteToolImageFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_TOOL_IMAGE_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const deleteDeviceImage = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_DEVICE_IMAGE,
    payLoad,
  };
};
export const deleteDeviceImageSuccess = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_DEVICE_IMAGE_SUCCESS,
    payLoad,
  };
};
export const deleteDeviceImageFail = (payLoad) => {
  return {
    type: EXPERIMENT_ACTIONS_TYPES.DELETE_DEVICE_IMAGE_FAIL,
    payLoad,
  };
};
export const setDeviceDimensions = (width, height) => ({
  type: EXPERIMENT_ACTIONS_TYPES.SET_DEVICE_DIMENSIONS,
  payload: { width, height },
});

export const setToolDimensions = (index, width, height) => ({
  type: EXPERIMENT_ACTIONS_TYPES.SET_TOOL_DIMENSIONS,
  payload: { index, width, height },
});
export const setToolPosition = (toolIndex, x, y) => ({
  type: EXPERIMENT_ACTIONS_TYPES.SET_TOOL_POSITION,
  payload: { toolIndex, x, y },
});
