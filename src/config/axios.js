import { default as Axios } from "axios";
import QueryString from "qs";
import { config } from "./config";

const { userName, password, ApiPort, ApiUrl } = config;
const defaultConfig = {
  baseURL: `${ApiUrl}:${ApiPort}`,
  timeout: 2000,
  headers: {
    accept: "application/json",
  },
  paramsSerializer: (params) => {
    return QueryString.stringify(params, { arrayFormat: "brackets" });
  },
};

Axios.defaults = { ...Axios.defaults, ...defaultConfig };

export let axios;

export const createAxios = (configuration) => {
  return Axios.create(configuration);
};
const onRequestFulfilled = (config) => {
  // const { userName, password } = config;
  // const token = Buffer.from(`${userName}:${password}`, "utf8").toString(
  //   "base64"
  // );
  // config.headers.Authorization = `Basic ${token}`;
  // config.headers["Access-Control-Allow-Origin"] = "*";

  config.auth = {
    username: userName,
    password: password,
  };
  return config;
};

export const onRequestRejected = () => {
  return null;
};

export const init = () => {
  axios = createAxios(defaultConfig);
  axios.interceptors.request.use(onRequestFulfilled, onRequestRejected);
};
