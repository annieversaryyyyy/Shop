import axios from "axios";
import { apiUrl } from "../config/config";

const baseApi = axios.create({
  baseURL: apiUrl,
});

export const setupInterceptors = (store) => {
  baseApi.interceptors.request.use((config) => {
    const token = store.getState().users.user?.token;

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  });
};

export default baseApi;
