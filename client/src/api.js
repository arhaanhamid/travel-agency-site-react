// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Optional: Add interceptors for request/response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    return Promise.reject(error);
  }
);
// api.interceptors.request.use((config) => {
//   console.log("Request URL:", config.baseURL + config.url);
//   return config;
// });

export default api;
