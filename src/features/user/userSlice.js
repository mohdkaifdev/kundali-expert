// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Async thunk to fetch /v1/user/my
export const fetchMyProfile = createAsyncThunk("user/fetchMyProfile", async (_, { rejectWithValue }) => {
  try {
    const res = await api.get("/v1/user/my");
    return res?.data?.data ?? res?.data ?? null;
  } catch (err) {
    return rejectWithValue(err?.response?.data || err?.message || "Failed to fetch user");
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        safeSetUserStorage(action.payload);
      })
      .addCase(fetchMyProfile.rejected, (state, action) => {
        // leave existing state; error handled by caller
      });
  },
});

export const {
  setUser,
  updateUser,
  clearUser,
  loadUserFromStorage,
} = userSlice.actions;

export default userSlice.reducer;
