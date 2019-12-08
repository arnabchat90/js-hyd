import { fetchLogin } from "../services/fetchLogin";

export const LOGIN = "LOGIN";

export function doLogin() {
  return async function doLoginThunk(dispatch) {
    try {
      const res = await fetchLogin();
      dispatch(loginSuccess(res.data));
    } catch (error) {
      //TODO Handle error later
      dispatch(loginFailure(error));
    }
  };
}

export function loginSuccess(details) {
  return {
    type: LOGIN,
    isLoggedIn: details.isLoggedIn,
    authToken: details.authToken,
    user: details.user
  };
}

export const LOGIN_ERROR = "LOGIN_ERROR";

export function loginFailure(error) {
  return {
    type: LOGIN_ERROR,
    isLoggedIn: false,
    error: error
  };
}
