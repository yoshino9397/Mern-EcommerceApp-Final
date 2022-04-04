import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutFailure,
  logoutSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = async (dispatch, user) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess(user));
  } catch (err) {
    dispatch(logoutFailure());
  }
};
