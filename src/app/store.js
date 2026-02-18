// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import subuserReducer from "../features/subuserslice/subuserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    subuser: subuserReducer,
  },
});
