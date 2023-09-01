import { axiosInstance } from "../utils/axios";

export const getUsers = () => axiosInstance.get("/people");
