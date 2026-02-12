import axios from "axios";

const api = axios.create({
  baseURL: "https://api.kundaliexpert.com/kmAstroapp/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor for API versioning
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // 👇 Auto add v1 if version not provided
  if (config.url && !config.url.startsWith("/v")) {
    config.url = `/v2${config.url.startsWith("/") ? "" : "/"}${config.url}`;
  }

  return config;
});

// ❌ Optional error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
