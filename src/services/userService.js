import api from "./api";

// GET Request
export const getUsers = () => api.get("/users");

// GET by ID
export const getUserById = (id) => api.get(`/users/${id}`);

// POST (Handles JSON or FormData automatically)
export const createUser = (data) => {
  const isFormData = data instanceof FormData;
  return api.post("/users", data, {
    headers: {
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    },
  });
};

// PUT Request
export const updateUser = (id, data) => api.put(`/users/${id}`, data);

// DELETE Request
export const deleteUser = (id) => api.delete(`/users/${id}`);
