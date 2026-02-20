// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import subuserReducer from "../features/subuserslice/subuserSlice";
import bagReducer from "../features/bag/bagSlice";
import walletReducer from "../features/wallet/walletSlice";
import kundaliReducer from "../features/kundali/kundaliSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    subuser: subuserReducer,
    bag: bagReducer,
    wallet: walletReducer,
    kundali: kundaliReducer,
  },
});
