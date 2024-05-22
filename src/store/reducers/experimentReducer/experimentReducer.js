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
        experiment: action.payLoad,
        chemical: action.payLoad,
        error: null,
      };
    case EXPERIMENT_ACTIONS_TYPES.PUT_EXPERIMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
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
    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.POST_TOOL_IMAGE:
      return {
        ...state,
        isLoading: true,
      };

    case EXPERIMENT_ACTIONS_TYPES.POST_TOOL_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        experiment: {
          ...state.experiment,
          images: {
            ...((state.experiment && state.experiment.images) || {}), // Ensure images is defined
            tools: [
              ...(state.experiment.images.tools || []), // Ensure tools is an array
              {
                image: action.payLoad.url,
                imageId: action.payLoad._id,
                order: state?.experiment?.images?.tools?.length || 0, // ترتيب الصورة الجديدة
              },
            ],
          },
        },
        error: null,
      };

    case EXPERIMENT_ACTIONS_TYPES.POST_TOOL_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.POST_DEVICE_IMAGE:
      return {
        ...state,
        isLoading: true,
      };

    case EXPERIMENT_ACTIONS_TYPES.POST_DEVICE_IMAGE_SUCCESS:
      console.log("actoion .payload", action.payLoad);
      return {
        ...state,
        isLoading: false,
        experiment: {
          ...state.experiment,
          images: {
            ...((state.experiment && state.experiment.images) || {}), // Ensure images is defined
            device: {
              // Ensure device is defined
              image: action.payLoad.url,
              imageId: action.payLoad._id,
            },
          },
        },
        error: null,
      };

    case EXPERIMENT_ACTIONS_TYPES.POST_DEVICE_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.DELETE_DEVICE_IMAGE:
      return {
        ...state,
        isLoading: true,
      };

    case EXPERIMENT_ACTIONS_TYPES.DELETE_DEVICE_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        experiment: {
          ...state.experiment,
          images: {
            ...((state.experiment && state.experiment.images) || {}),
            device: {},
          },
        },
        error: null,
      };

    case EXPERIMENT_ACTIONS_TYPES.DELETE_DEVICE_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.DELETE_TOOL_IMAGE:
      return {
        ...state,
        isLoading: true,
      };

    case EXPERIMENT_ACTIONS_TYPES.DELETE_TOOL_IMAGE_SUCCESS:
      const updatedExperimentTools = state.experiment.images.tools
        .filter((tool) => tool.imageId !== action?.payLoad?.deletedObjectId)
        .map((tool, index) => ({ ...tool, order: index }));

      return {
        ...state,
        isLoading: false,
        experiment: {
          ...state.experiment,
          images: {
            ...state.experiment.images, // Ensure other image properties are preserved
            tools: updatedExperimentTools,
          },
        },
        error: null,
      };

    case EXPERIMENT_ACTIONS_TYPES.DELETE_TOOL_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    // ====================================================================================================

    case EXPERIMENT_ACTIONS_TYPES.SET_DEVICE_DIMENSIONS:
      return {
        ...state,
        experiment: {
          ...state.experiment,
          images: {
            ...((state.experiment && state.experiment.images) || {}),
            device: {
              ...((state.experiment.images && state.experiment.images.device) ||
                {}),
              dimensions: {
                width: action.payload.width + "px",
                height: action.payload.height + "px",
              },
            },
          },
        },
      };

    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.SET_TOOL_DIMENSIONS:
      const { index, width, height } = action.payload;
      return {
        ...state,
        experiment: {
          ...state.experiment,
          images: {
            ...((state.experiment && state.experiment.images) || {}),
            tools: state.experiment.images.tools.map((tool, idx) =>
              idx === index
                ? {
                    ...tool,
                    dimensions: {
                      width: width + "px",
                      height: height + "px",
                    },
                  }
                : tool
            ),
          },
        },
      };

    // ====================================================================================================
    case EXPERIMENT_ACTIONS_TYPES.SET_TOOL_POSITION:
      const { toolIndex, x, y } = action.payload;
      return {
        ...state,
        experiment: {
          ...state.experiment,
          images: {
            ...((state.experiment && state.experiment.images) || {}),
            tools: state.experiment.images.tools.map((tool, idx) =>
              idx === toolIndex
                ? { ...tool, position: { x: x + "px", y: y + "px" } }
                : tool
            ),
          },
        },
      };
    default:
      return state;
  }
};
export { experimentReducer };
