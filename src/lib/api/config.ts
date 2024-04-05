import axios from "axios";

// ----------------------- API CONFIG
export const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Response interceptor for API calls
api.interceptors.request.use(
  function (config) {
    // Get the token from local storage
    const token = localStorage.getItem("authToken");
    // If token exists, add it to the headers
    if (token != "undefined" && token != undefined && token != null) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
);