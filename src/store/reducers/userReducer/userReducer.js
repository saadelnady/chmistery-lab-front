import { USER_ACTIONS_TYPES } from "../../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_SIGNUP:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payLoad.data.user,
        error: null,
      };

    case USER_ACTIONS_TYPES.POST_USER_SIGNUP_FAIL:
      console.log(" action.payLoad ===>", action.payLoad);
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: {},
        error: action.payLoad,
      };
    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: {},
        error: null,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payLoad,
        error: null,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action?.payLoad,
      };
    default:
      return state;
  }
};
export { userReducer };
