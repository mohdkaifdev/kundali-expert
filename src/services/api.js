import axios from "axios";

const api = axios.create({
  baseURL: "https://api.kundaliexpert.com/kmAstroapp/api", // Change base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization Token Automatically (Optional)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle Response Errors (Optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
