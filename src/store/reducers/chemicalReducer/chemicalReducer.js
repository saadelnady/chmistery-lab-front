import {
  CHEMICAL_ACTIONS_TYPES,
  CHEMICALS_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  chemical: {},
  chemicals: [],
  error: null,
};

const chemicalReducer = (state = initialState, action) => {
  switch (action.type) {
    // ====================================================================================================
    case CHEMICALS_ACTIONS_TYPES.GET_CHEMICALS:
      return {
        ...state,
        isLoading: true,
      };
    case CHEMICALS_ACTIONS_TYPES.GET_CHEMICALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chemicals: action.payLoad,
        error: null,
      };
    case CHEMICALS_ACTIONS_TYPES.GET_CHEMICALS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================
    case CHEMICAL_ACTIONS_TYPES.DELETE_CHEMICAL:
      return {
        ...state,
        isLoading: true,
      };
    case CHEMICAL_ACTIONS_TYPES.DELETE_CHEMICAL_SUCCESS:
      const updatedChemicals = state.chemicals.filter(
        (chemical) => chemical?._id !== action?.payLoad
      );
      return {
        ...state,
        isLoading: false,
        chemicals: updatedChemicals,
        error: null,
      };
    case CHEMICAL_ACTIONS_TYPES.DELETE_CHEMICAL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case CHEMICAL_ACTIONS_TYPES.POST_CHEMICAL:
      return {
        ...state,
        isLoading: true,
      };
    case CHEMICAL_ACTIONS_TYPES.POST_CHEMICAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chemicals: [...state.chemicals, action.payLoad],
        error: null,
      };
    case CHEMICAL_ACTIONS_TYPES.POST_CHEMICAL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case CHEMICAL_ACTIONS_TYPES.GET_CHEMICAL:
      return {
        ...state,
        isLoading: true,
      };
    case CHEMICAL_ACTIONS_TYPES.GET_CHEMICAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chemical: action.payLoad,
        error: null,
      };
    case CHEMICAL_ACTIONS_TYPES.GET_CHEMICAL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case CHEMICAL_ACTIONS_TYPES.PUT_CHEMICAL:
      return {
        ...state,
        isLoading: true,
      };
    case CHEMICAL_ACTIONS_TYPES.PUT_CHEMICAL_SUCCESS:
      const filterdChemicals = state.chemicals?.filter(
        (chemical) => chemical?._id !== action?.payLoad?._id
      );
      return {
        ...state,
        isLoading: false,
        chemicals: [...filterdChemicals, action.payLoad],
        chemical: action.payLoad,
        error: null,
      };
    case CHEMICAL_ACTIONS_TYPES.PUT_CHEMICAL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case CHEMICAL_ACTIONS_TYPES.CLEAR_CHEMICAL:
      return {
        ...state,
        isLoading: true,
      };
    case CHEMICAL_ACTIONS_TYPES.CLEAR_CHEMICAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chemical: {},
        error: null,
      };
    case CHEMICAL_ACTIONS_TYPES.CLEAR_CHEMICAL_FAIL:
      return {
        ...state,
        isLoading: false,

        error: action?.payLoad,
      };

    default:
      return state;
  }
};
export { chemicalReducer };
