import axios, { type AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export { axiosInstance };
