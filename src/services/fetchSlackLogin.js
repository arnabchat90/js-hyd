import axios from "axios";
const USER_AUTH_PATH = "/api/slack/auth";

export async function fetchSlackLogin() {
  return axios.get(USER_AUTH_PATH);
}
