import axios from "axios";
const USER_AUTH_PATH = "/api/slack/isLoggedIn";

export async function fetchLogin() {
  return axios.get(USER_AUTH_PATH);
}
