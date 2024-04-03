import axios from "axios";

// ----------------------- API CONFIG
export const api = axios.create({
  withCredentials: true,
  //baseURL: "http://localhost:5263",
  baseURL: "http://localhost:3000",
});

// // Response interceptor for API calls
// api.interceptors.request.use(
//   function (config) {
//     // Get the token from local storage
//     const token = localStorage.getItem("authToken");
//     // If token exists, add it to the headers
//     if (token != "undefined" && token != undefined && token != null) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
// );
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry && !originalRequest.url.includes("authentication/refreshtoken")) {
//       originalRequest._retry = true;
//       const refreshSuccess = await UserApi.refreshToken();
//       if (refreshSuccess)
//       {
//         return api(originalRequest); 
//       }
//     }
//     return Promise.reject(error);
//   }
// );