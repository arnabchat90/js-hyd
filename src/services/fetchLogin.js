import axios from "axios";
const USER_AUTH_PATH = "/api/login";

export async function fetchLogin() {
  return axios.get(USER_AUTH_PATH);
}
