import {
  TOOLS_ACTIONS_TYPES,
  TOOL_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  tool: {},
  tools: [],
  error: null,
};

const toolReducer = (state = initialState, action) => {
  switch (action.type) {
    // ====================================================================================================
    case TOOLS_ACTIONS_TYPES.GET_TOOLS:
      return {
        ...state,
        isLoading: true,
      };
    case TOOLS_ACTIONS_TYPES.GET_TOOLS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tools: action.payLoad,
        error: null,
      };

    case TOOLS_ACTIONS_TYPES.GET_TOOLS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================
    case TOOL_ACTIONS_TYPES.DELETE_TOOL:
      return {
        ...state,
        isLoading: true,
      };
    case TOOL_ACTIONS_TYPES.DELETE_TOOL_SUCCESS:
      const updatedTools = state.tools.filter(
        (tool) => tool?._id !== action?.payLoad
      );
      return {
        ...state,
        isLoading: false,
        tools: updatedTools,
        error: null,
      };
    case TOOL_ACTIONS_TYPES.DELETE_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case TOOL_ACTIONS_TYPES.POST_TOOL:
      return {
        ...state,
        isLoading: true,
      };
    case TOOL_ACTIONS_TYPES.POST_TOOL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tools: [...state.tools, action.payLoad],
        error: null,
      };
    case TOOL_ACTIONS_TYPES.POST_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case TOOL_ACTIONS_TYPES.GET_TOOL:
      return {
        ...state,
        isLoading: true,
      };
    case TOOL_ACTIONS_TYPES.GET_TOOL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tool: action.payLoad,
        error: null,
      };
    case TOOL_ACTIONS_TYPES.GET_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case TOOL_ACTIONS_TYPES.PUT_TOOL:
      return {
        ...state,
        isLoading: true,
      };
    case TOOL_ACTIONS_TYPES.PUT_TOOL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tool: action.payLoad,
        error: null,
      };
    case TOOL_ACTIONS_TYPES.PUT_TOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    default:
      return state;
  }
};
export { toolReducer };
