import { getData, postData } from "../../../api/api";
import { showToast } from "../../../helpers/toaste_helper";
import * as actionCreators from "./userActionsCreators";

export const userSignUp = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserSignUp(values));

    try {
      const response = await postData("/virtual_lab/api/v1/signup", values);
      dispatch(actionCreators.postUserSignUpSuccess(response));

      showToast(toast, "Your account created successfully", "success");
      const role = response.data.user.role;
      if (role) {
        if (role === "teacher") {
          navigate("/teacher");
        } else if (role === "student") {
          navigate("/student");
        }
      }

      localStorage.setItem("token", response?.token);
    } catch (error) {
      dispatch(actionCreators.postUserSignUpFail(error));
      showToast(toast, error, "error");

      // showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================

export const userLogin = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogin(values));
    try {
      const response = await postData(`/virtual_lab/api/v1/login`, values);
      if (response.status === "success") {
        localStorage.setItem("token", response?.token);
        dispatch(actionCreators.postUserLoginSuccess(response?.data?.user));
        showToast(toast, "logged in successfully", "success");
        const role = response.data.user.role;
        if (role) {
          if (role === "teacher") {
            navigate("/teacher");
          } else if (role === "student") {
            navigate("/student");
          }
        }
      }
    } catch (error) {
      dispatch(actionCreators.postUserLoginFail(error));
      showToast(
        toast,
        "somthing wrong email or password is not correct",
        "error"
      );
    }
  };
};

// ========================================================================================

export const userLogout = ({ toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogout());

    try {
      dispatch(actionCreators.postUserLogoutSuccess());
      localStorage.removeItem("token");
      showToast(toast, "You have logged out successfully", "success");

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postUserLogoutFail());
      showToast(toast, "Something wrong when logout", "error");
    }
  };
};
// ========================================================================================

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUser());

    try {
      const response = await getData(`/virtual_lab/api/v1/user`);
      dispatch(actionCreators.getUserSuccess(response?.data?.data[0]));
    } catch (error) {
      dispatch(actionCreators.getUserFail());
      // showToast(toast, "Something wrong when logout", "error");
    }
  };
};
