import {
  EXPERIMENTS_ACTIONS_TYPES,
  EXPERIMENT_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  experiment: {},
  experiments: [],
  error: null,
};

const experimentReducer = (state = initialState, action) => {
  switch (action.type) {
    // ====================================================================================================
    case EXPERIMENTS_ACTIONS_TYPES.GET_EXPERIMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIMENTS_ACTIONS_TYPES.GET_EXPERIMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        experiments: action.payLoad,
        error: null,
      };

    case EXPERIMENTS_ACTIONS_TYPES.GET_EXPERIMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT_SUCCESS:
      const updatedExperiments = state.experiments.filter(
        (experiment) => experiment?._id !== action?.payLoad
      );
      return {
        ...state,
        isLoading: false,
        experiments: updatedExperiments,
        error: null,
      };
    case EXPERIMENT_ACTIONS_TYPES.DELETE_EXPERIMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.POST_EXPERIMENT:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIMENT_ACTIONS_TYPES.POST_EXPERIMENT_SUCCESS:
      console.log("actiooon ==>", action.payLoad);
      return {
        ...state,
        isLoading: false,
        experiments: [...state.experiments, action.payLoad],
        error: null,
      };
    case EXPERIMENT_ACTIONS_TYPES.POST_EXPERIMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.GET_EXPERIMENT:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIMENT_ACTIONS_TYPES.GET_EXPERIMENT_SUCCESS:
      console.log("action.payLoad===>", action.payLoad);
      return {
        ...state,
        isLoading: false,
        experiment: action.payLoad,
        error: null,
      };
    case EXPERIMENT_ACTIONS_TYPES.GET_EXPERIMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT_SUCCESS:
      const filteredExperiments = state.experiments?.filter(
        (experiment) => experiment?._id !== action?.payLoad?._id
      );
      return {
        ...state,
        isLoading: false,
        experiments: [...filteredExperiments, action.payLoad],
        chemical: action.payLoad,
        error: null,
      };
    case EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    case EXPERIMENT_ACTIONS_TYPES.CLEAR_EXPERIMENT:
      return {
        ...state,
        isLoading: true,
      };
    case EXPERIMENT_ACTIONS_TYPES.CLEAR_EXPERIMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        experiment: {},
        error: null,
      };
    case EXPERIMENT_ACTIONS_TYPES.CLEAR_EXPERIMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    default:
      return state;
  }
};
export { experimentReducer };
