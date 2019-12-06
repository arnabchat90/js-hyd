import { LOGIN, LOGIN_ERROR } from "../actions/authentication";
export const defaultState = {
  get isLoggedin() {
    return false;
  },
  get authToken() {
    return "";
  }
};

export function authentication(state = defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedin: action.isLoggedin,
        authToken: action.authToken
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedin: action.isLoggedin,
        authToken: action.authToken
      };
    default:
      return state;
  }
}
