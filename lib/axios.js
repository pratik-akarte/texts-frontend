import axios from "axios";

// An Axios instance is a pre-configured Axios client used to set base URLs, headers, and interceptors—so you can reuse the same settings across all HTTP requests.

export const axiosInstance = axios.create({
  baseURL: "https://texts-backend-476w.onrender.com/api",
  withCredentials: true,
});
