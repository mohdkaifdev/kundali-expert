// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

function safeSetUserStorage(obj) {
  try {
    localStorage.setItem("user", JSON.stringify(obj));
  } catch (err) {
    try {
      const minimal = {
        userId: obj?.userId || obj?.id || obj?.userID,
        name: obj?.name,
        email: obj?.email,
      };
      localStorage.setItem("user", JSON.stringify(minimal));
    } catch (e) {
      try {
        localStorage.removeItem("user");
      } catch (ignore) {}
    }
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      safeSetUserStorage(action.payload);
    },

    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
      safeSetUserStorage(state.user);
    },

    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    loadUserFromStorage: (state) => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    },
  },
});

export const {
  setUser,
  updateUser,
  clearUser,
  loadUserFromStorage,
} = userSlice.actions;

export default userSlice.reducer;
