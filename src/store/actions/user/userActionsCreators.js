import { USER_ACTIONS_TYPES } from "../actionTypes";

export const postUserSignUp = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_SIGNUP,
    payLoad,
  };
};
export const postUserSignUpSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_SIGNUP_SUCCESS,
    payLoad,
  };
};
export const postUserSignUpFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_SIGNUP_FAIL,
    payLoad,
  };
};
// ===========================================================================
export const postUserLogin = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN,
    payLoad,
  };
};
export const postUserLoginSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN_SUCCESS,
    payLoad,
  };
};
export const postUserLoginFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const postUserLogout = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT,
    payLoad,
  };
};
export const postUserLogoutSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT_SUCCESS,
    payLoad,
  };
};
export const postUserLogoutFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const getUser = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER,
    payLoad,
  };
};
export const getUserSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_SUCCESS,
    payLoad,
  };
};
export const getUserFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_FAIL,
    payLoad,
  };
};
