// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subuser: null,
};

const subuserSlice = createSlice({
  name: "subuser",
  initialState,
  reducers: {
    setSubUser: (state, action) => {
      state.subuser = action.payload;
      localStorage.setItem("subuser", JSON.stringify(action.payload));
    },

    updateSubUser: (state, action) => {
      state.subuser = {
        ...state.subuser,
        ...action.payload,
      };
      localStorage.setItem("subuser", JSON.stringify(state.subuser));
    },

    clearSubUser: (state) => {
      state.subuser = null;
      localStorage.removeItem("subuser");
    },

    loadSubUserFromStorage: (state) => {
      const storedSubUser = localStorage.getItem("subuser");
      if (storedSubUser) {
        state.subuser = JSON.parse(storedSubUser);
      }
    },
  },
});

export const {
  setSubUser,
  updateSubUser,
  clearSubUser,
  loadSubUserFromStorage,
} = subuserSlice.actions;

export default subuserSlice.reducer;
