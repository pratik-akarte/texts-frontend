import axios from "axios";

// An Axios instance is a pre-configured Axios client used to set base URLs, headers, and interceptors—so you can reuse the same settings across all HTTP requests.

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",   
  withCredentials: true,
});
