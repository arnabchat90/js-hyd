import { LOGIN, LOGIN_ERROR } from "../actions/authentication";
export const defaultState = {
  get isLoggedin() {
    return false;
  },
  get authToken() {
    return "";
  },
  get user() {
    return {};
  }
};

export function authentication(state = defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        authToken: action.authToken,
        user: action.user
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        error: action.error
      };
    default:
      return state;
  }
}
