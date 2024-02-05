import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getProfile } from "./profileReducer";
import { getFollower } from "./navbarReducer";
const SET_AUTH_STATE = "setAuthState";
const SET_ISLOGIN = "setIsLogin";
const post_captcha = "post_captcha";
const initializeAuth = {
  auth: null,
  isLogin: false,
  captcha: null,
};
const headerReducer = (state = initializeAuth, action) => {
  switch (action.type) {
    case SET_AUTH_STATE:
      return { ...state, auth: { ...action.authState } };
    case SET_ISLOGIN:
      return { ...state, isLogin: action.isLogin };
    case post_captcha:
      return { ...state, captcha: action.url };
    default:
      return state;
  }
};
export default headerReducer;
export const setAuthState = (authState) => ({
  type: SET_AUTH_STATE,
  authState,
});
export const setIsLogin = (isLogin) => ({ type: SET_ISLOGIN, isLogin });
export const setCaptcha = (url) => ({ type: post_captcha, url });

export const getAuthMe = () => (dispatch) => {
  return authAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthState(data.data));
      dispatch(setIsLogin(true));
      dispatch(getProfile(data.data.id));
      dispatch(getFollower());
    }
  });
};
export const postLogin = (email, password, captcha) => async (dispatch) => {
  let data = await authAPI.postlogin(email, password, true, captcha);

  if (data.resultCode === 0) {
    dispatch(getAuthMe());
  } else {
    if (data.resultCode === 10) {
      dispatch(postCaptcha());
    }
    let messageError =
      data.messages.length > 0 ? data.messages[0] : "Другие неполадки!";
    let action = stopSubmit("LoginForm", { _error: messageError });
    dispatch(action);
  }
};
export const deleteLogin = () => (dispatch) => {
  authAPI.deleteLogin().then((data) => {
    {
      if (data.resultCode === 0) {
        dispatch(setIsLogin(false));
        setAuthState(null);
        let action = stopSubmit("LoginForm", { _error: null });
        dispatch(action);
      }
    }
  });
};
export const postCaptcha = () => async (dispatch) => {
  let url = await authAPI.getCaptcha();
  dispatch(setCaptcha(url.url));
};
