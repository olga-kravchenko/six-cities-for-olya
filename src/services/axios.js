import axios from "axios";
import {HttpCode} from "../constants";

const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const createAxios = (onUnauthorized) => {
  const axiosApi = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }
    throw err;
  };

  axiosApi.interceptors.response.use(onSuccess, onFail);
  return axiosApi;
};

export {createAxios};
