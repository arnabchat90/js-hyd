import axios from "axios";
const BASE_URL = "http://localhost:8080";
const USER_AUTH_PATH = BASE_URL + "/api/login";

export async function fetchLogin() {
  return axios.get(USER_AUTH_PATH);
}
